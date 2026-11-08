// The platform code of stores.vibe: console logging, which a .vibe file does not call directly (EK4402).

/** @throws {never} */
export function error(message: string, cause: unknown): void {
  console.error(message, cause)
}
