// The platform code of editor-zed.vibe: file, home directory, path and process access, which VibeLang code does not
// use directly (EK4402).

import { statSync as nodeStatSync } from "node:fs"
import { readFile } from "node:fs/promises"
import nodeOs from "node:os"
import nodePath from "node:path"

export const cwd = () => process.cwd()

export const zedDbEnv = () => process.env.OPENCODE_ZED_DB

export const readFileAsync = (file: string, encoding: "utf8") => readFile(file, encoding)

export const statSync = (file: string) => nodeStatSync(file)

export const os = { homedir: () => nodeOs.homedir() }

export const path = {
  join: (...paths: string[]) => nodePath.join(...paths),
  resolve: (...paths: string[]) => nodePath.resolve(...paths),
  relative: (from: string, to: string) => nodePath.relative(from, to),
  isAbsolute: (value: string) => nodePath.isAbsolute(value),
}
