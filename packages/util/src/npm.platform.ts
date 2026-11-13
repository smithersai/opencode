import path from "path"
import crypto, { createHash } from "node:crypto"

/** @throws {never} */
export function platform() {
  return process.platform
}

/** Joins path segments; string segments never throw. @throws {never} */
export function join(...segments: string[]) {
  return path.join(...segments)
}

/** @throws {never} */
export function relative(from: string, to: string) {
  return path.relative(from, to)
}

/** Hex SHA-256 digest of a string. @throws {never} */
export function sha256Hex(input: string) {
  return createHash("sha256").update(input).digest("hex")
}

export function randomUUID() {
  return crypto.randomUUID()
}

/** @throws {never} */
export function filePromises() {
  return import("node:fs/promises")
}

/** Replaces the link at `link` with a junction to `target`. */
export async function relink(files: typeof import("node:fs/promises"), link: string, target: string) {
  await files.unlink(link)
  await files.symlink(target, link, "junction")
}

export const Host = { platform, join, relative, sha256Hex, randomUUID, filePromises, relink }
