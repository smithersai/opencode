// The platform code of instructions.vibe: host path arithmetic, which a .vibe file does not import (EK4402).

import path from "path"

/** @throws {never} */
export function relative(from: string, to: string): string {
  return path.relative(from, to)
}
