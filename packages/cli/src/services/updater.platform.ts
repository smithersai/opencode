// The platform code of updater.vibe: paths, terminal text, the running executable, the host platform,
// environment and the update request (EK4402).
import hostPath from "node:path"
import hostUtil from "node:util"

/** @throws {never} */
function join(...paths: string[]) {
  return hostPath.join(...paths)
}

/** @throws {never} */
function resolve(...paths: string[]) {
  return hostPath.resolve(...paths)
}

/** @throws {never} */
function dirname(value: string) {
  return hostPath.dirname(value)
}

export const path = { join, resolve, dirname, sep: hostPath.sep }

/** @throws {never} */
export function stripVTControlCharacters(value: string) {
  return hostUtil.stripVTControlCharacters(value)
}

/** @throws {never} */
export function executablePath() {
  return process.execPath
}

/** @throws {never} */
export function platform() {
  return process.platform
}

/** @throws {never} */
export function environmentValue(key: string) {
  return process.env[key]
}

export function fetch(...args: Parameters<typeof globalThis.fetch>) {
  return globalThis.fetch(...args)
}

/** Aborts with the caller's signal or after ten seconds. */
export function updateSignal(signal: AbortSignal) {
  return AbortSignal.any([signal, AbortSignal.timeout(10_000)])
}
