// The platform code of snapshot.vibe: host path rules, which a .vibe file does not read (EK4402).

import nodePath from "path"

/** Host path functions with Node's `path` names. */
export const path = {
  /** @throws {never} */
  join: (...segments: string[]) => nodePath.join(...segments),
  /** @throws {never} */
  relative: (from: string, to: string) => nodePath.relative(from, to),
  /** Resolves segments against the process working directory, which may be unavailable. */
  resolve: (...segments: string[]) => nodePath.resolve(...segments),
}
