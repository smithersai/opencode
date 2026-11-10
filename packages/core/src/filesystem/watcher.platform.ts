// The platform code of watcher.vibe: host paths, the host platform and fs.watch, which a .vibe file does not read
// (EK4402).

import fs, { type FSWatcher } from "node:fs"
import path from "path"
import type ParcelWatcher from "@parcel/watcher"

/** @throws {never} */
export function getBackend(): ParcelWatcher.BackendType | undefined {
  if (process.platform === "win32") return "windows"
  if (process.platform === "darwin") return "fs-events"
  if (process.platform === "linux") return "inotify"
}

/** @throws {never} */
export function platform(): NodeJS.Platform {
  return process.platform
}

/** @throws {never} */
export function resolve(...parts: string[]): string {
  return path.resolve(...parts)
}

/** @throws {never} */
export function dirname(value: string): string {
  return path.dirname(value)
}

/** @throws {never} */
export function basename(value: string): string {
  return path.basename(value)
}

/** @throws {never} */
export function join(...parts: string[]): string {
  return path.join(...parts)
}

/**
 * Watches the immediate entries of a directory.
 * @throws {Error} when the directory cannot be watched, such as ENOENT.
 */
export function watch(directory: string, listener: (event: string, file: string | null) => void): FSWatcher {
  return fs.watch(directory, { recursive: false }, listener)
}
