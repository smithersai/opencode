import path from "path"

/** @throws {never} */
export function joinPath(directory: string, name: string) {
  return path.join(directory, name)
}

/** @throws {never} */
export function dirname(target: string) {
  return path.dirname(target)
}

/** @throws {never} */
export function basename(target: string) {
  return path.basename(target)
}

/** @throws {never} */
export function isAbsolute(target: string) {
  return path.isAbsolute(target)
}

/** Rewrites platform separators as `/` for glob patterns. @throws {never} */
export function toGlobSeparators(target: string) {
  return target.replaceAll(path.sep, "/")
}
