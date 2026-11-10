// The platform code of repository-cache.vibe: host path rules, which a .vibe file does not read (EK4402).

import nodePath from "path"

/** Host path functions with Node's `path` names. */
export const path = {
  /** @throws {never} */
  dirname: (target: string) => nodePath.dirname(target),
}
