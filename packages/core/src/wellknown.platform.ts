// The platform code of wellknown.vibe: the process environment and deep equality, which a .vibe file does not use (EK4402).

import { isDeepStrictEqual } from "node:util"

/** The value of a process environment variable. @throws {never} */
export function env(name: string): string | undefined {
  return process.env[name]
}

// A getter or proxy inside a compared value may throw; callers keep such a throw a defect.
const platformIsDeepStrictEqual = (left: unknown, right: unknown) => isDeepStrictEqual(left, right)

export { platformIsDeepStrictEqual as isDeepStrictEqual }
