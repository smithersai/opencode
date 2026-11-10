// The platform code of index.vibe: file access through node:fs/promises, which a .vibe file does not import (EK4402).
// Each function loads node:fs/promises on first use, so importing the package entry does not.

/** Reads a file; rejects with the host error when it cannot. */
export async function readFile(path: string, options: { readonly signal: AbortSignal }) {
  const { readFile } = await import("node:fs/promises")
  return readFile(path, options)
}

/** Writes a file; rejects with the host error when it cannot. */
export async function writeFile(path: string, data: Uint8Array, options: { readonly signal: AbortSignal }) {
  const { writeFile } = await import("node:fs/promises")
  return writeFile(path, data, options)
}
