// The platform code of memory.vibe: POSIX path arithmetic from the host path module, which a .vibe file does not
// read (EK4402).

import path from "node:path"

export const posix = {
  /** @throws {never} */
  resolve: (...parts: string[]): string => path.posix.resolve(...parts),
  /** @throws {never} */
  join: (...parts: string[]): string => path.posix.join(...parts),
  /** @throws {never} */
  dirname: (value: string): string => path.posix.dirname(value),
  /** @throws {never} */
  basename: (value: string): string => path.posix.basename(value),
}
