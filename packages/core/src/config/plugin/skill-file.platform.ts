import path from "path"

/** Derives a skill id from its file path: a top-level `name.md` file or its `SKILL.md` directory. @throws {never} */
export function skillId(directory: string, filepath: string) {
  return path.dirname(filepath) === directory && path.basename(filepath) !== "SKILL.md"
    ? path.basename(filepath, ".md")
    : path.basename(path.dirname(filepath))
}
