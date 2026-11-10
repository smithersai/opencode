// The platform code of move.vibe: host path arithmetic, which a .vibe file does not import (EK4402).

import nodePath from "path"

/** @throws {never} */
function join(...paths: string[]): string {
  return nodePath.join(...paths)
}

/** @throws {never} */
function resolve(...paths: string[]): string {
  return nodePath.resolve(...paths)
}

/** @throws {never} */
function relative(from: string, to: string): string {
  return nodePath.relative(from, to)
}

export const path = { join, resolve, relative }
