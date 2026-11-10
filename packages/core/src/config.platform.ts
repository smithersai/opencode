// The platform code of config.vibe: host path rules and deep equality, which a .vibe file does not use (EK4402).

import path from "path"
import { isDeepStrictEqual } from "node:util"

/** The directory of a path. @throws {never} */
export function dirname(target: string) {
  return path.dirname(target)
}

/** Joins path segments with the host path rules. @throws {never} */
export function joinPath(...segments: string[]) {
  return path.join(...segments)
}

// A getter or proxy inside a compared value may throw; callers keep such a throw a defect.
const platformIsDeepStrictEqual = (left: unknown, right: unknown) => isDeepStrictEqual(left, right)

export { platformIsDeepStrictEqual as isDeepStrictEqual }
