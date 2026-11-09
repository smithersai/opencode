import path from "path"

/** @throws {never} */
export function join(directory: string, name: string) {
  return path.join(directory, name)
}

/** Joins a home-relative path with the separator style of `home`. @throws {never} */
export function joinHome(home: string, relative: string) {
  return (path.posix.isAbsolute(home) ? path.posix : path.win32).join(home, relative)
}

/** Relative path between two files; resolving a relative input reads the process working directory. */
export function relative(from: string, to: string) {
  return path.relative(from, to)
}
