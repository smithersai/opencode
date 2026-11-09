import path from "path"

/** Joins worktree path segments with the host path rules. @throws {never} */
export function joinPath(...segments: string[]) {
  return path.join(...segments)
}

/** Reports whether start commands run through the Windows shell. @throws {never} */
export function isWindows() {
  return process.platform === "win32"
}
