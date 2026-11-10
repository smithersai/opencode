// The platform code of snowflake-cortex.vibe: environment variable reads, host randomness, digests, Buffer encoding,
// host Response construction and lazy node imports, which a .vibe file does not use directly (EK4402).

/** `size` random bytes as base64url; sizes stay far below the 65536-byte getRandomValues limit. @throws {never} */
export function randomBase64Url(size: number): string {
  return Buffer.from(crypto.getRandomValues(new Uint8Array(size))).toString("base64url")
}

/** The base64url SHA-256 digest of `text`, the PKCE S256 challenge. A digest failure rejects. @throws {never} */
export async function sha256Base64Url(text: string): Promise<string> {
  return Buffer.from(await crypto.subtle.digest("SHA-256", new TextEncoder().encode(text))).toString("base64url")
}

/** Loads node:http only when called, so runtimes without a loopback listener never evaluate it. @throws {never} */
export function importHttp(): Promise<typeof import("node:http")> {
  return import("node:http")
}

/** Loads node:events only when called. @throws {never} */
export function importEvents() {
  return import("node:events")
}

/** @throws {never} */
export function environmentValue(key: string): string | undefined {
  return process.env[key]
}

/** @throws {never} */
export function encodeBase64(text: string): string {
  return Buffer.from(text).toString("base64")
}

/**
 * Builds a host `Response`.
 * @throws {TypeError} when the init holds an invalid header or status.
 */
export function createResponse(body: ConstructorParameters<typeof Response>[0], init: ResponseInit): Response {
  return new Response(body, init)
}
