import path from "path"

/** @throws {never} */
export function basename(target: string) {
  return path.basename(target)
}

/** @throws {never} */
export function dirname(target: string) {
  return path.dirname(target)
}

/** @throws {never} */
export function join(directory: string, name: string) {
  return path.join(directory, name)
}
