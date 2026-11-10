// The platform code of skill.vibe: host path rules, which a .vibe file does not read (EK4402).

import nodePath from "path"

/** Host path functions with Node's `path` names. */
export const path = {
  /** @throws {never} */
  dirname: (target: string) => nodePath.dirname(target),
  /** @throws {never} */
  basename: (target: string) => nodePath.basename(target),
}
