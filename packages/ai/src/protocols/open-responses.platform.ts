// The platform code of open-responses.vibe: random identifiers from the host crypto global a .vibe file does not use (EK4402).

/** @throws {never} */
export function randomUUID() {
  return crypto.randomUUID()
}
