// The platform code of formatter.vibe: host path rules, which a .vibe file does not use (EK4402).

import path from "path"

/** The extension of a file path, with its leading dot. @throws {never} */
export function extname(filepath: string) {
  return path.extname(filepath)
}
