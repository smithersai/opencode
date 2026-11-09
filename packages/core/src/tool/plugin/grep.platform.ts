import path from "path"

/** Rebases a search result from `root` onto `directory`; relative inputs read the process working directory. */
export function rebase(directory: string, root: string, entry: string) {
  return path.relative(directory, path.resolve(root, entry))
}

/** Resolves a result path against `directory`; a relative directory reads the process working directory. */
export function resolve(directory: string, entry: string) {
  return path.resolve(directory, entry)
}

/** @throws {never} */
export function dirname(target: string) {
  return path.dirname(target)
}

/** @throws {never} */
export function basename(target: string) {
  return path.basename(target)
}
