// The platform code of icon.vibe: host paths and Buffer encodings, which a .vibe file does not read (EK4402).

import path from "path"

/** @throws {never} */
export function join(...parts: string[]): string {
  return path.join(...parts)
}

/** @throws {never} */
export function relative(from: string, to: string): string {
  return path.relative(from, to)
}

/** @throws {never} */
export function extname(value: string): string {
  return path.extname(value)
}

/** Base64 of bytes, or of a string's UTF-8 bytes. @throws {never} */
export function base64(value: Uint8Array | string): string {
  return Buffer.from(value).toString("base64")
}

/** @throws {never} */
export function utf8(bytes: Uint8Array): string {
  return Buffer.from(bytes).toString("utf8")
}
