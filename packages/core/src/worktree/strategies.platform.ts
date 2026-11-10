// The platform code of strategies.vibe: host path joining, which a .vibe file does not read (EK4402).

import path from "path"

/** @throws {never} */
export function join(...parts: string[]): string {
  return path.join(...parts)
}
