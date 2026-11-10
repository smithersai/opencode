// The platform code of vcs.vibe: host path rules and byte lengths, which a .vibe file does not read (EK4402).

import nodePath from "path"

/** Host path functions with Node's `path` names. */
export const path = {
  /** @throws {never} */
  basename: (target: string) => nodePath.basename(target),
  /** Resolves segments against the process working directory, which may be unavailable. */
  resolve: (...segments: string[]) => nodePath.resolve(...segments),
  /** @throws {never} */
  join: (...segments: string[]) => nodePath.join(...segments),
}

/** UTF-8 byte length of a string. @throws {never} */
export function byteLength(text: string): number {
  return Buffer.byteLength(text)
}
