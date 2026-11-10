// The platform code of shell.vibe: host paths, files, bytes, the environment and the platform, which a .vibe file does not read (EK4402).

import nodePath from "path"

/** Host path functions with Node's `path` names. */
export const path = {
  /** @throws {never} */
  join: (...segments: string[]) => nodePath.join(...segments),
}

/** Loads Node's promise file API. The import may reject. */
export function fsPromises(): Promise<typeof import("fs/promises")> {
  return import("fs/promises")
}

/** Loads Node's stream file API. The import may reject. */
export function fs(): Promise<typeof import("fs")> {
  return import("fs")
}

/** A zero-filled buffer of `length` bytes. The allocation may throw. */
export function allocBuffer(length: number) {
  return Buffer.alloc(length)
}

/** The bytes of a stream chunk. @throws {never} */
export function bufferFrom(chunk: string | Buffer) {
  return Buffer.from(chunk)
}

/** The environment of the host process. @throws {never} */
export function hostEnv() {
  return process.env
}

/** Reports whether the host runs Windows. @throws {never} */
export function isWindows() {
  return process.platform === "win32"
}
