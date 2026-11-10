// The platform code of filesystem.vibe: host path rules, which a .vibe file does not use (EK4402).

import path from "path"

/** Resolves `target` against an absolute directory, so the process working directory is never read. @throws {never} */
export function resolvePath(directory: string, target: string) {
  return path.resolve(directory, target)
}

/** Joins path segments with the host path rules. @throws {never} */
export function joinPath(...segments: string[]) {
  return path.join(...segments)
}

/** The path of an absolute `to` relative to an absolute `from`. @throws {never} */
export function relativePath(from: string, to: string) {
  return path.relative(from, to)
}

/** The host path separator. */
export const sep = path.sep
