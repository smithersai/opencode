// The platform code of debug.vibe: path checks and random log references (EK4402).
import path from "node:path"

/** @throws {never} */
export function isAbsolute(value: string) {
  return path.isAbsolute(value)
}

/** @throws {never} */
export function randomUUID() {
  return crypto.randomUUID()
}
