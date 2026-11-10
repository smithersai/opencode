import os from "os"
import path from "path"

/** @throws {never} */
export function environmentVariable(name: string) {
  return process.env[name]
}

/** The current user's home directory, which may be unavailable. */
export function homedir() {
  return os.homedir()
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

/** Resolves against the process working directory, which may be unavailable. */
export function resolve(directory: string, target: string) {
  return path.resolve(directory, target)
}
