// The platform code of runtime.vibe, which a .vibe file does not import as a value (EK4402).

import { Effect, Stream } from "effect"
import { HttpClientResponse } from "effect/http"
import { ToolError, toolError } from "../tool-error.vibe"
import type { AppliedAuth, Credential, Plan, SecurityScheme } from "./types.vibe"

const maxResponseBodyBytes = 50 * 1024 * 1024
export const applyCredentials = (
  credentials: ReadonlyArray<readonly [string, SecurityScheme, Credential]>,
): AppliedAuth | ToolError => {
  const headers = new Map<string, string>()
  const query = new Map<string, string>()
  const add = (carrier: "header" | "query", name: string, value: string): ToolError | undefined => {
    const target = carrier === "header" ? headers : query
    if (target.has(name)) return toolError(`Authentication resolves multiple credentials for ${carrier} '${name}'.`)
    target.set(name, value)
  }
  for (const [name, definition, credential] of credentials) {
    if (credential.type === "bearer") {
      const duplicate = add("header", "authorization", `Bearer ${credential.token}`)
      if (duplicate !== undefined) return duplicate
      continue
    }
    if (credential.type === "basic") {
      // Basic auth credentials are UTF-8; btoa rejects non-Latin-1 input.
      const duplicate = add(
        "header",
        "authorization",
        `Basic ${Buffer.from(`${credential.username}:${credential.password}`, "utf8").toString("base64")}`,
      )
      if (duplicate !== undefined) return duplicate
      continue
    }
    if (credential.type === "header") {
      const duplicate = add("header", credential.name.toLowerCase(), credential.value)
      if (duplicate !== undefined) return duplicate
      continue
    }
    if (definition.type !== "apiKey") {
      return toolError(
        `Security scheme '${name}' is not an apiKey scheme; resolve a bearer, basic, or header credential for it.`,
      )
    }
    if (definition.in === "cookie") return toolError(`Cookie authentication '${name}' is not supported.`)
    const parameter = definition.in === "header" ? definition.name.toLowerCase() : definition.name
    const duplicate = add(definition.in, parameter, credential.value)
    if (duplicate !== undefined) return duplicate
  }
  return { headers: Object.fromEntries(headers), query: Object.fromEntries(query) }
}
export const readResponseBody = (
  response: HttpClientResponse.HttpClientResponse,
  plan: Plan,
): Effect.Effect<string, ToolError> =>
  Effect.gen(function* () {
    const contentLength = response.headers["content-length"]
    const parsedSize = contentLength === undefined ? undefined : Number.parseInt(contentLength, 10)
    const declaredSize =
      parsedSize !== undefined && Number.isSafeInteger(parsedSize) && parsedSize >= 0 ? parsedSize : undefined
    if (declaredSize !== undefined && declaredSize > maxResponseBodyBytes) {
      return yield* Effect.fail(toolError(`${plan.operation.method} ${plan.operation.path} response exceeds 50 MiB.`))
    }
    let body = Buffer.allocUnsafe(Math.min(maxResponseBodyBytes, declaredSize ?? 64 * 1024))
    let size = 0
    yield* Stream.runForEach(response.stream, (chunk) => {
      if (size + chunk.byteLength > maxResponseBodyBytes) {
        return Effect.fail(toolError(`${plan.operation.method} ${plan.operation.path} response exceeds 50 MiB.`))
      }
      if (size + chunk.byteLength > body.byteLength) {
        const grown = Buffer.allocUnsafe(
          Math.min(maxResponseBodyBytes, Math.max(size + chunk.byteLength, body.byteLength * 2)),
        )
        body.copy(grown, 0, 0, size)
        body = grown
      }
      body.set(chunk, size)
      size += chunk.byteLength
      return Effect.void
    }).pipe(
      Effect.catch((cause) => {
        if (cause instanceof ToolError) return Effect.fail(cause)
        if (cause.reason._tag === "EmptyBodyError") return Effect.void
        return Effect.fail(
          toolError(`${plan.operation.method} ${plan.operation.path} failed while reading the response body.`, cause),
        )
      }),
    )
    return new TextDecoder().decode(body.subarray(0, size))
  })
