// The platform code of persistent-pty.vibe: attachment IDs and byte buffers (EK4402).
/** @throws {never} */
export function randomUUID() {
  return crypto.randomUUID()
}

/** @throws {never} */
export function textBytes(value: string) {
  return Buffer.from(value)
}

/** @throws {never} */
export function bytesFrom(value: Uint8Array) {
  return Buffer.from(value)
}
