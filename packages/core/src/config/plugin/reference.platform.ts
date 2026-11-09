import path from "path"

/** @throws {never} */
export function dirname(filepath: string) {
  return path.dirname(filepath)
}

export function localPath(directory: string, home: string, value: string) {
  if (value.startsWith("~/")) return path.join(home, value.slice(2))
  return path.isAbsolute(value) ? value : path.resolve(directory, value)
}
