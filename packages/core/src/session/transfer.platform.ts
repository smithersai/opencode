// The platform code of transfer.vibe: host path arithmetic, which a .vibe file does not import (EK4402).

import nodePath from "path"

/** @throws {never} */
function relative(from: string, to: string): string {
  return nodePath.relative(from, to)
}

export const path = { relative }
