import path from "path"
import { fileURLToPath, pathToFileURL } from "url"

/** @throws {never} */
export function joinPath(directory: string, name: string) {
  return path.join(directory, name)
}

/** @throws {never} */
export function dirname(target: string) {
  return path.dirname(target)
}

/** @throws {never} */
export function isAbsolute(target: string) {
  return path.isAbsolute(target)
}

/** Resolves against the process working directory, which may be unavailable. */
export function resolve(directory: string, target: string) {
  return path.resolve(directory, target)
}

/** Converts a `file:` URL to a path. @throws {TypeError} when the URL is not a valid file URL for this platform. */
export function localPath(url: string) {
  return fileURLToPath(url)
}

/** Resolves relative paths against the process working directory, which may be unavailable. */
export function fileURL(target: string) {
  return pathToFileURL(target).href
}
