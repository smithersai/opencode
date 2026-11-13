// The platform code of client.vibe: host path resolution and file URLs, which a .vibe file does not import (EK4402).

import path from "node:path"
import { pathToFileURL } from "node:url"

/** @throws {never} */
export function resolvePath(directory: string, target: string): string {
  return path.resolve(directory, target)
}

/** The `file:` URL of a host path. @throws {never} */
export function fileURL(target: string): string {
  return pathToFileURL(target).href
}
