// The platform code of project.vibe: host path rules, which a .vibe file does not read (EK4402).

import nodePath from "path"

/** Host path functions with Node's `path` names. */
export const path = {
  /** @throws {never} */
  basename: (target: string) => nodePath.basename(target),
  /** @throws {never} */
  dirname: (target: string) => nodePath.dirname(target),
  /** @throws {never} */
  join: (...segments: string[]) => nodePath.join(...segments),
}
