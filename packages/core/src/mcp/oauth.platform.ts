// The platform code of oauth.vibe: the host fetch without Bun's idle deadline, host randomness, Buffer encoding and
// the lazy node:http import, which a .vibe file does not use directly (EK4402).

import { noTimeoutFetch } from "@opencode/util/no-timeout-fetch"

/** The host fetch without Bun's idle deadline; like fetch, it reports every failure by rejecting. @throws {never} */
export function fetchWithoutTimeout(request: Parameters<typeof fetch>[0], init?: RequestInit) {
  return noTimeoutFetch(request, init)
}

/** @throws {never} */
export function randomUUID(): string {
  return crypto.randomUUID()
}

/** `size` random bytes as base64url; sizes stay far below the 65536-byte getRandomValues limit. @throws {never} */
export function randomBase64Url(size: number): string {
  return Buffer.from(crypto.getRandomValues(new Uint8Array(size))).toString("base64url")
}

/** Loads node:http only when called, so runtimes without a loopback listener never evaluate it. @throws {never} */
export function importHttp(): Promise<typeof import("node:http")> {
  return import("node:http")
}
