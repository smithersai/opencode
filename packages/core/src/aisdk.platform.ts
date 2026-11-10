// The platform code of aisdk.vibe: web fetch, timers, SSE body streams and async context, which a .vibe file does not use (EK4402).
import type { HttpMiddleware } from "@opencode/ai/route"
import type { Context } from "effect"
import { makeParser } from "effect/encoding/Sse"
import { AsyncLocalStorage } from "node:async_hooks"

/**
 * Wraps a server-sent event response so a read that waits longer than `ms` aborts the request.
 *
 * @throws {TypeError} When the response body is already locked to another reader.
 */
export function wrapSSE(res: Response, ms: number, ctl: AbortController) {
  if (typeof ms !== "number" || ms <= 0) return res
  if (!res.body) return res
  if (!res.headers.get("content-type")?.includes("text/event-stream")) return res

  const reader = res.body.getReader()
  const decoder = new TextDecoder()
  let deadline: number | undefined
  const parser = makeParser((event) => {
    if (event._tag === "Event") deadline = Date.now() + ms
  })
  const body = new ReadableStream<Uint8Array>({
    async pull(ctrl) {
      const expires = deadline ?? Date.now() + ms
      deadline = expires
      const part = await new Promise<Awaited<ReturnType<typeof reader.read>>>((resolve, reject) => {
        const remaining = Math.max(0, expires - Date.now())
        const id = setTimeout(() => {
          const err = new Error("SSE read timed out")
          ctl.abort(err)
          void reader.cancel(err)
          reject(err)
        }, remaining)

        reader.read().then(
          (part) => {
            clearTimeout(id)
            resolve(part)
          },
          (err) => {
            clearTimeout(id)
            reject(err)
          },
        )
      })

      if (part.done) {
        ctrl.close()
        return
      }

      parser.feed(decoder.decode(part.value, { stream: true }))
      ctrl.enqueue(part.value)
    },
    async cancel(reason) {
      ctl.abort(reason)
      await reader.cancel(reason)
    },
  })

  return new Response(body, {
    headers: new Headers(res.headers),
    status: res.status,
    statusText: res.statusText,
  })
}

/** Runs `callback` once after `delay` milliseconds. @throws {never} */
export function scheduleTimeout(callback: () => void, delay?: number) {
  return setTimeout(callback, delay)
}

/** Cancels a timer from `scheduleTimeout`; `undefined` is ignored. @throws {never} */
export function cancelTimeout(timer: ReturnType<typeof setTimeout> | undefined) {
  clearTimeout(timer)
}

/**
 * `AbortSignal.timeout`: a signal that aborts after `milliseconds`.
 *
 * @throws {TypeError} When `milliseconds` is negative or not finite.
 */
export function timeoutSignal(milliseconds: number) {
  return AbortSignal.timeout(milliseconds)
}

/** The host `fetch`, looked up when called; its failures reject the returned Promise. @throws {never} */
export async function fetch(input: Parameters<typeof globalThis.fetch>[0], init?: BunFetchRequestInit) {
  return globalThis.fetch(input, init)
}

/** Builds the web Request a middleware hook sees from a fetch call's arguments; an invalid URL or option throws a TypeError. */
export function toRequest(input: Parameters<typeof globalThis.fetch>[0], init: BunFetchRequestInit) {
  return input instanceof Request ? new Request(input, init) : new Request(String(input), init)
}

/**
 * Builds a web Response.
 *
 * @throws {RangeError} When the status is outside 200 to 599.
 * @throws {TypeError} When a body is given for a null-body status.
 */
export function toResponse(body: ReadableStream<Uint8Array> | null, init: ResponseInit) {
  return new Response(body, init)
}

// HTTP hook middleware is scoped to one model request, but the SDK's fetch is baked into the
// cached language model, so the active middleware rides along in async context instead.
export const httpMiddleware = new AsyncLocalStorage<{ http: HttpMiddleware; context: Context.Context<never> }>()
