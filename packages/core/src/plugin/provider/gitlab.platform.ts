// The platform code of gitlab.vibe: environment variable reads, the host system description, host randomness,
// digests and the lazy node:http import, which a .vibe file does not use directly (EK4402).

import os from "os"

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

/** @throws {never} */
export function environmentValue(key: string): string | undefined {
  return process.env[key]
}

/** The host platform, release and architecture as `platform release; arch`. @throws {never} */
export function systemDescription(): string {
  return `${os.platform()} ${os.release()}; ${os.arch()}`
}
