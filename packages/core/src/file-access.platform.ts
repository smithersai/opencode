// The platform code of file-access.vibe: host path rules and the host platform, which a .vibe file does not read (EK4402).

import nodePath from "path"

/** Host path functions with Node's `path` names. */
export const path = {
  /** Resolves segments against the process working directory, which may be unavailable. */
  resolve: (...segments: string[]) => nodePath.resolve(...segments),
  /** @throws {never} */
  join: (...segments: string[]) => nodePath.join(...segments),
  /** @throws {never} */
  relative: (from: string, to: string) => nodePath.relative(from, to),
  /** @throws {never} */
  dirname: (target: string) => nodePath.dirname(target),
  /** @throws {never} */
  parse: (target: string) => nodePath.parse(target),
}

/** Reports whether the host runs Windows. @throws {never} */
export function isWindows() {
  return process.platform === "win32"
}
