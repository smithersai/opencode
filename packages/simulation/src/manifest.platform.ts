// The platform code of manifest.vibe: the home directory and paths (EK4402).
import hostPath from "node:path"

export { homedir } from "node:os"

/** @throws {never} */
export function isAbsolute(value: string) {
  return hostPath.isAbsolute(value)
}

/** @throws {never} */
export function join(...paths: string[]) {
  return hostPath.join(...paths)
}
