import path from "path"

/** Resolves a directory against the process working directory, which may be unavailable. */
export function resolve(directory: string) {
  return path.resolve(directory)
}

/** @throws {never} */
export function dirname(target: string) {
  return path.dirname(target)
}

/** @throws {never} */
export function joinPath(directory: string, name: string) {
  return path.join(directory, name)
}

/** @throws {never} */
export function isAbsolute(target: string) {
  return path.isAbsolute(target)
}
