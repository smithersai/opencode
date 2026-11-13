import { readFile } from "node:fs/promises"
import path from "node:path"

export function legacyCredentialPath(data: string) {
  return path.join(data, "auth.json")
}

export function readLegacyCredentials(filepath: string) {
  return readFile(filepath, "utf8").catch(() => undefined)
}
