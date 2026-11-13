// The platform code of bus.vibe: Node's deep equality, which a .vibe file does not use (EK4402).
import util from "node:util"

/**
 * Node's `util.isDeepStrictEqual`.
 *
 * @throws {Error} When reading a compared value throws, such as a throwing getter or a structure nested too deeply.
 */
export function isDeepStrictEqual(left: unknown, right: unknown): boolean {
  return util.isDeepStrictEqual(left, right)
}
