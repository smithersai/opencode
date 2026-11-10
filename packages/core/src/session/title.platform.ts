// The platform code of title.vibe: Node's structural equality, which a .vibe file does not import (EK4402).

import util from "node:util"

/** @throws {never} */
export function isDeepStrictEqual(left: unknown, right: unknown): boolean {
  return util.isDeepStrictEqual(left, right)
}
