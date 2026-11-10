// The platform code of retained-image.vibe: random suffixes, paths, the running executable and process probes (EK4402).
import hostPath from "node:path"

export { randomBytes } from "node:crypto"

/** @throws {never} */
function join(...paths: string[]) {
  return hostPath.join(...paths)
}

/** @throws {never} */
function resolve(...paths: string[]) {
  return hostPath.resolve(...paths)
}

/** @throws {never} */
function basename(value: string, suffix?: string) {
  return hostPath.basename(value, suffix)
}

/** @throws {never} */
function extname(value: string) {
  return hostPath.extname(value)
}

export const path = { join, resolve, basename, extname, sep: hostPath.sep }

/** @throws {never} */
export function processID() {
  return process.pid
}

/** @throws {never} */
export function executablePath() {
  return process.execPath
}

export function kill(pid: number, signal: string | number) {
  return process.kill(pid, signal)
}
