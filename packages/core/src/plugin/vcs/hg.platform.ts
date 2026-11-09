// The platform code of hg.vibe: host paths and byte lengths, which a .vibe file does not read (EK4402).

import path from "path"

/** @throws {never} */
export function relativePath(from: string, to: string): string {
  return path.relative(from, to)
}

/** @throws {never} */
export function joinPath(...parts: string[]): string {
  return path.join(...parts)
}

/** UTF-8 byte length of a string. @throws {never} */
export function byteLength(text: string): number {
  return Buffer.byteLength(text)
}
