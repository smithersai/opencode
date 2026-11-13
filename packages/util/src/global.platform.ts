// The platform code of global.vibe: the host home directory, environment, paths and directory creation, which a
// .vibe file does not read (EK4402).

import path from "path"
import fs from "fs"
import os from "os"

/** OPENCODE_TEST_HOME, else the host home directory. @throws {never} */
export function home(): string {
  return process.env.OPENCODE_TEST_HOME ?? os.homedir()
}

/** OPENCODE_CONFIG_DIR, when set. @throws {never} */
export function configDirectory(): string | undefined {
  return process.env.OPENCODE_CONFIG_DIR
}

/** @throws {never} */
export function join(...parts: string[]): string {
  return path.join(...parts)
}

/** Creates a directory and its parents. @throws {never} */
export async function mkdir(directory: string): Promise<string | undefined> {
  return fs.promises.mkdir(directory, { recursive: true })
}

/** @throws {never} */
export async function realpath(value: string): Promise<string> {
  return fs.promises.realpath(value)
}
