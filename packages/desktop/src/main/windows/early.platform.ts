import { randomUUID } from "node:crypto"
import path from "node:path"
import { fileURLToPath } from "node:url"

export function currentPlatform() {
  return process.platform
}
export function resourcesDirectory() {
  return process.resourcesPath
}

export function createWindowID() {
  return randomUUID()
}
export function moduleDirectory(url: string) {
  return path.dirname(fileURLToPath(url))
}
export function joinPath(...parts: string[]) {
  return path.join(...parts)
}
