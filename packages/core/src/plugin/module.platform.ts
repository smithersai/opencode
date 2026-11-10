// The platform code of module.vibe: host paths, file URLs and file system reads, which a .vibe file does not import
// (EK4402).

import fs from "node:fs/promises"
import path from "path"
import url from "url"
import type { Watcher } from "../filesystem/watcher.js"

/** @throws {never} */
export function isAbsolute(target: string): boolean {
  return path.isAbsolute(target)
}

/** The `file:` URL of a host path. @throws {never} */
export function pathToFileURL(target: string): string {
  return url.pathToFileURL(target).href
}

/**
 * The host path of a `file:` URL.
 * @throws {TypeError} when the URL is not a valid `file:` URL.
 */
export function fileURLToPath(target: string): string {
  return url.fileURLToPath(target)
}

/** A failed stat rejects. @throws {never} */
export function stat(target: string) {
  return fs.stat(target)
}

/** A failed read rejects. @throws {never} */
export function readFile(target: string) {
  return fs.readFile(target)
}

// A missing dependency may have missing parents too. Watch the nearest existing
// ancestor recursively so creating the rest of the path can trigger recovery.
/** @throws {never} */
export function watchTarget(file: string): Promise<Watcher.WatchInput> {
  return fs.stat(file).then(
    (info) => ({ path: file, type: info.isDirectory() ? "directory" : "file" }),
    (cause) => {
      if (path.dirname(file) === file) throw cause
      return watchTarget(path.dirname(file))
    },
  )
}
