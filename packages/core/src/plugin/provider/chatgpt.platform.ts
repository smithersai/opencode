// The platform code of chatgpt.vibe: host randomness, digests, Buffer encoding and the lazy node:http import, which
// a .vibe file does not use directly (EK4402).

/** `size` random bytes; sizes stay far below the 65536-byte getRandomValues limit. @throws {never} */
export function randomBytes(size: number): Uint8Array<ArrayBuffer> {
  return crypto.getRandomValues(new Uint8Array(size))
}

/** The SHA-256 digest of `text`. A digest failure rejects. @throws {never} */
export async function sha256(text: string): Promise<ArrayBuffer> {
  return crypto.subtle.digest("SHA-256", new TextEncoder().encode(text))
}

/** @throws {never} */
export function base64UrlEncode(buffer: ArrayBuffer) {
  return Buffer.from(buffer).toString("base64url")
}

/** Loads node:http only when called, so runtimes without a loopback listener never evaluate it. @throws {never} */
export function importHttp(): Promise<typeof import("node:http")> {
  return import("node:http")
}

/** @throws {never} */
export function randomUUID(): string {
  return crypto.randomUUID()
}
