// The platform code of web-ui.vibe: the inline script hash and byte decoding (EK4402).
import { createHash } from "node:crypto"

/** @throws {never} */
export function sha256Base64(text: string) {
  return createHash("sha256").update(text).digest("base64")
}

/** @throws {never} */
export function textFrom(bytes: Uint8Array) {
  return Buffer.from(bytes).toString()
}
