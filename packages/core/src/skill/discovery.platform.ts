// The platform code of discovery.vibe: host paths and random tokens, which a .vibe file does not read (EK4402).

import path from "path"

/** Whether a path is absolute under POSIX or Windows rules. @throws {never} */
export function isAbsoluteOnAnyPlatform(value: string): boolean {
  return path.posix.isAbsolute(value) || path.win32.isAbsolute(value)
}

/** @throws {never} */
export function resolvePath(...parts: string[]): string {
  return path.resolve(...parts)
}

/** @throws {never} */
export function joinPath(...parts: string[]): string {
  return path.join(...parts)
}

/** A fresh random token for staging directory names. @throws {never} */
export function randomToken(): string {
  return crypto.randomUUID()
}
