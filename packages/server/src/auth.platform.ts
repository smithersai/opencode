// The platform code of auth.vibe: HMAC signing and constant-time comparison from node:crypto (EK4402).
export { createHmac, timingSafeEqual } from "node:crypto"

/** @throws {never} */
export function bufferFrom(value: string) {
  return Buffer.from(value)
}
