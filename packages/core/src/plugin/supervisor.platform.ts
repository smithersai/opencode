// The platform code of supervisor.vibe: host path checks and random identifiers, which a .vibe file does not use
// directly (EK4402).

import path from "path"

/** @throws {never} */
export function isAbsolute(target: string): boolean {
  return path.isAbsolute(target)
}

/** @throws {never} */
export function randomUUID(): string {
  return crypto.randomUUID()
}
