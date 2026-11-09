import { randomBytes, randomUUID } from "node:crypto"
import { Effect } from "effect"

/** @throws {never} */
export function environmentValue(key: string) {
  return process.env[key]
}

/** @throws {never} */
export function deleteEnvironment(key: string) {
  delete process.env[key]
}

export function assignEnvironment(values: object | undefined) {
  Object.assign(process.env, values)
}

/** @throws {never} */
export function currentPlatform() {
  return process.platform
}

export function changeDirectory(directory: string) {
  process.chdir(directory)
}

export function randomPassword() {
  return randomBytes(32).toString("base64url")
}

export function randomID() {
  return randomUUID()
}

export function waitForStdinClose() {
  return Effect.callback<void>((resume) => {
    const close = () => resume(Effect.void)
    process.stdin.once("end", close)
    process.stdin.once("close", close)
    process.stdin.resume()
    if (process.stdin.readableEnded || process.stdin.destroyed) close()
    return Effect.sync(() => {
      process.stdin.off("end", close)
      process.stdin.off("close", close)
      process.stdin.pause()
    })
  })
}
