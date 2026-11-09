// The platform code of skill.vibe: host paths, which a .vibe file does not import (EK4402).

import path from "path"

/** @throws {never} */
export function resolvePath(...parts: string[]): string {
  return path.resolve(...parts)
}

/** @throws {never} */
export function joinPath(...parts: string[]): string {
  return path.join(...parts)
}

/** @throws {never} */
export function directoryName(target: string): string {
  return path.dirname(target)
}

/** @throws {never} */
export function isAbsolutePath(target: string): boolean {
  return path.isAbsolute(target)
}
