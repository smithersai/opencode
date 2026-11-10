// The platform code of git.vibe: host paths, the home directory, the environment, the process and bytes, which a .vibe file does not read (EK4402).

import os from "os"
import nodePath from "path"

/** Host path functions with Node's `path` names. */
export const path = {
  /** @throws {never} */
  dirname: (target: string) => nodePath.dirname(target),
  /** @throws {never} */
  isAbsolute: (target: string) => nodePath.isAbsolute(target),
  /** @throws {never} */
  join: (...segments: string[]) => nodePath.join(...segments),
  /** @throws {never} */
  normalize: (target: string) => nodePath.normalize(target),
  /** Resolves segments against the process working directory, which may be unavailable. */
  resolve: (...segments: string[]) => nodePath.resolve(...segments),
}

/** The home directory of the host user. The lookup may throw. */
export function homedir() {
  return os.homedir()
}

/** The value of a host environment variable. @throws {never} */
export function hostEnv(name: string) {
  return process.env[name]
}

/** Reports whether the host runs Windows. @throws {never} */
export function isWindows() {
  return process.platform === "win32"
}

/** The host process ID. @throws {never} */
export function pid() {
  return process.pid
}

/** UTF-8 byte length of a string. @throws {never} */
export function byteLength(text: string): number {
  return Buffer.byteLength(text)
}

/** Lowercase hexadecimal text of bytes. @throws {never} */
export function hex(bytes: Uint8Array) {
  return Buffer.from(bytes).toString("hex")
}

/** Orders two strings by their UTF-8 bytes. @throws {never} */
export function compareBytes(left: string, right: string) {
  return Buffer.compare(Buffer.from(left), Buffer.from(right))
}
