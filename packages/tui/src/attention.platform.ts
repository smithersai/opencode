// The platform code of attention.vibe: console logging, which a .vibe file does not call directly (EK4402).

/** @throws {never} */
export function debug(message: string, detail: Record<string, unknown>): void {
  console.debug(message, detail)
}
