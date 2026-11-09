// The platform code of git.vibe: host files, temporary paths and byte lengths, which a .vibe file does not read (EK4402).

import { randomUUID } from "crypto"
import fs from "fs/promises"
import os from "os"
import path from "path"

/**
 * The untracked files a throwaway index can batch: regular files no larger than `maxBytes`.
 * Directories (nested repositories) and symlinks diff differently through an index.
 */
export function batchableFiles(worktree: string, files: readonly string[], maxBytes: number): Promise<string[]> {
  return Promise.all(
    files.map(async (file) => {
      if (file.endsWith("/")) return
      const stat = await fs.lstat(path.join(worktree, file)).catch(() => undefined)
      if (!stat?.isFile()) return
      // A file this large could crowd every other file out of the batch's output budget.
      if (stat.size > maxBytes) return
      return file
    }),
  ).then((list) => list.filter((file) => file !== undefined))
}

/** Writes the NUL-separated pathspec list for a throwaway index and returns the path prefix of its files. */
export async function writeBatchList(files: readonly string[]): Promise<string> {
  const base = path.join(os.tmpdir(), `opencode-untracked-${randomUUID()}`)
  await fs.writeFile(`${base}.list`, files.map((file) => `${file}\0`).join(""))
  return base
}

/** Removes the pathspec list and throwaway index written under `base`. */
export function removeBatchFiles(base: string): Promise<void[]> {
  return Promise.all([`${base}.list`, `${base}.index`, `${base}.index.lock`].map((file) => fs.rm(file, { force: true })))
}

/** The sorted entry names of a directory. */
export function sortedEntries(directory: string): Promise<string[]> {
  return fs.readdir(directory).then((items) => items.toSorted())
}

/** The path of `to` relative to `from`, with `/` separators. @throws {never} */
export function relativePosixPath(from: string, to: string): string {
  return path.relative(from, to).split(path.sep).join("/")
}

/** UTF-8 byte length of a string. @throws {never} */
export function byteLength(text: string): number {
  return Buffer.byteLength(text)
}
