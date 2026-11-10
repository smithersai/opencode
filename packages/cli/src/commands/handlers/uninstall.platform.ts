// The platform code of uninstall.vibe: paths, the running executable, the host platform and environment (EK4402).
import hostPath from "node:path"

/** @throws {never} */
function join(...paths: string[]) {
  return hostPath.join(...paths)
}

/** @throws {never} */
function dirname(value: string) {
  return hostPath.dirname(value)
}

/** @throws {never} */
function basename(value: string, suffix?: string) {
  return hostPath.basename(value, suffix)
}

export const path = { join, dirname, basename }

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
