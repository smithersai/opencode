import { fileURLToPath } from "node:url"

export function generatedPath(relative: string) {
  return fileURLToPath(new URL(relative, import.meta.url))
}
