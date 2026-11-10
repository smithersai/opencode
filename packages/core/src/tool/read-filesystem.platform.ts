// The platform code of read-filesystem.vibe: host paths, file URLs and Buffer encoding, which a .vibe file does not
// use directly (EK4402).

import path from "path"
import { pathToFileURL } from "url"

/** The host path separator. */
export const sep = path.sep

/** @throws {never} */
export function basename(target: string): string {
  return path.basename(target)
}

/** The `file:` URL of a host path. @throws {never} */
export function fileURL(target: string): string {
  return pathToFileURL(target).href
}

/** @throws {never} */
export function encodeBase64(bytes: Uint8Array): string {
  return Buffer.from(bytes).toString("base64")
}

/** @throws {never} */
export function concatBytes(chunks: ReadonlyArray<Uint8Array>): Uint8Array {
  return Buffer.concat(chunks)
}

/** The UTF-8 byte length of `text`. @throws {never} */
export function byteLength(text: string): number {
  return Buffer.byteLength(text, "utf-8")
}
