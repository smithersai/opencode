import path from "path"

/** @throws {never} */
export function join(directory: string, name: string) {
  return path.join(directory, name)
}

/** @throws {never} */
export function basename(file: string) {
  return path.basename(file)
}
