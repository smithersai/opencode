import path from "path"

/** Expands a configured worktree directory against the home and project directories. */
export function worktreeDirectory(home: string, project: string, directory: string) {
  return directory.startsWith("~/") ? path.join(home, directory.slice(2)) : path.resolve(project, directory)
}
