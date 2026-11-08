import { isAbsolute, resolve } from "node:path"

// Temporary consumers resolve file dependencies from their source package.
export function isolatedDependency(directory: string, version: string): string {
  if (!version.startsWith("file:") || isAbsolute(version.slice(5))) return version
  return "file:" + resolve(directory, version.slice(5))
}
