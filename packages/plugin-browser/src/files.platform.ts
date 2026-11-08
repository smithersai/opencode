// The platform code of files.vibe: local file access, which a .vibe file does not import (EK4402).
// The file system module loads on first use, as the dynamic imports it replaces did.

import { basename, extname, join, resolve } from "node:path"
import { tmpdir } from "node:os"
import type { FileHandle } from "node:fs/promises"

export { basename, extname, join, resolve, tmpdir }

export async function open(path: string, flags: string): Promise<FileHandle> {
  const fs = await import("node:fs/promises")
  return fs.open(path, flags)
}

export async function mkdtemp(prefix: string): Promise<string> {
  const fs = await import("node:fs/promises")
  return fs.mkdtemp(prefix)
}

export async function mkdir(path: string): Promise<void> {
  const fs = await import("node:fs/promises")
  await fs.mkdir(path)
}

export async function writeFile(path: string, data: Uint8Array, options?: { readonly flag?: string }): Promise<void> {
  const fs = await import("node:fs/promises")
  await fs.writeFile(path, data, options)
}

/** @throws {never} */
export function uuid(): string {
  return crypto.randomUUID()
}
