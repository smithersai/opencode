// The platform code of plugin.vibe: host files and random identifiers, which a .vibe file does not read (EK4402).

import { readFile } from "node:fs/promises"
import { fileURLToPath } from "node:url"

/** Reads the UTF-8 text of the file a `file:` URL names. The URL conversion may throw and the read may reject. */
export function readFileURL(url: string) {
  return readFile(fileURLToPath(url), "utf8")
}

/** A fresh random UUID. @throws {never} */
export function randomUUID() {
  return crypto.randomUUID()
}
