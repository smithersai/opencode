// The platform code of plan.vibe: host path joining, which a .vibe file does not import (EK4402).

import path from "path"

/** @throws {never} */
export function joinPath(...parts: string[]): string {
  return path.join(...parts)
}
