// The platform code of blob.vibe: hashing and Buffer encoding, which a .vibe file does not use (EK4402).

import { createHash } from "node:crypto"

/** @throws {never} */
export function sha256Hex(raw: Uint8Array): string {
  return createHash("sha256").update(raw).digest("hex")
}

/** Encodes UTF-8 text as base64. @throws {never} */
export function textBase64(text: string): string {
  return Buffer.from(text).toString("base64")
}

/** A Buffer over the same bytes, without copying them. @throws {never} */
export const view = (data: Uint8Array) =>
  Buffer.isBuffer(data) ? data : Buffer.from(data.buffer, data.byteOffset, data.byteLength)

/** Decodes base64 leniently, as `Buffer.from(data, "base64")` does. @throws {never} */
export function base64Bytes(data: string): Buffer {
  return Buffer.from(data, "base64")
}
