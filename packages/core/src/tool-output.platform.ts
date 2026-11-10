// The platform code of tool-output.vibe: host path rules and byte lengths, which a .vibe file does not use (EK4402).

import path from "path"

/** Joins path segments with the host path rules. @throws {never} */
export function joinPath(...segments: string[]) {
  return path.join(...segments)
}

/** UTF-8 byte length of a string. @throws {never} */
export function byteLength(text: string) {
  return Buffer.byteLength(text, "utf-8")
}
