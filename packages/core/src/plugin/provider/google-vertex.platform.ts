// The platform code of google-vertex.vibe: environment variable reads, the host platform, and host path joining,
// which a .vibe file does not do (EK4402).

import path from "node:path"

/** @throws {never} */
export function environmentValue(key: string): string | undefined {
  return process.env[key]
}

/** @throws {never} */
export function platform(): NodeJS.Platform {
  return process.platform
}

/** @throws {never} */
export function joinPath(...parts: string[]): string {
  return path.join(...parts)
}
