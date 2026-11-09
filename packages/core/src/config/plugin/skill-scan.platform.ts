import path from "path"

/** @throws {never} */
export function joinPath(directory: string, name: string) {
  return path.join(directory, name)
}
