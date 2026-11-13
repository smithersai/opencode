// The platform code of parse.vibe: the host home directory, environment, paths and asset URLs, which a .vibe file
// does not read (EK4402).

import { fileURLToPath } from "url"
import os from "os"
import path from "path"

/** @throws {never} */
export function homedir(): string {
  return os.homedir()
}

/** Whether the host is Windows. @throws {never} */
export function isWindows(): boolean {
  return process.platform === "win32"
}

/** @throws {never} */
export function dirname(value: string): string {
  return path.dirname(value)
}

/** @throws {never} */
export function join(...parts: string[]): string {
  return path.join(...parts)
}

/** An environment variable, matched case-insensitively on Windows. @throws {never} */
export function environment(key: string): string | undefined {
  if (process.platform !== "win32") return process.env[key]
  const name = Object.keys(process.env).find((item) => item.toLowerCase() === key.toLowerCase())
  return name ? process.env[name] : undefined
}

/**
 * A parser asset path: a file URL, an absolute path, or a path relative to this module.
 * @throws {TypeError} when the asset is not a valid file URL.
 */
export function resolve(asset: string): string {
  if (asset.startsWith("file://")) return fileURLToPath(asset)
  if (path.isAbsolute(asset)) return asset
  return fileURLToPath(new URL(asset, import.meta.url))
}
