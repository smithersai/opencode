// The platform code of projector.vibe: host path resolution, which a .vibe file does not import (EK4402).

import nodePath from "path"

/** @throws {never} */
function resolve(...paths: string[]): string {
  return nodePath.resolve(...paths)
}

/** @throws {never} */
function relative(from: string, to: string): string {
  return nodePath.relative(from, to)
}

export const path = { resolve, relative }
