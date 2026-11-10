// The platform code of amazon-bedrock.vibe: environment variable reads and host path joining, which a .vibe file
// does not do (EK4402).

import path from "node:path"

/** @throws {never} */
export function environmentValue(key: string): string | undefined {
  return process.env[key]
}

/** @throws {never} */
export function joinPath(...parts: string[]): string {
  return path.join(...parts)
}
