// The platform code of app-assets.vibe: the source asset directory, file reads, brotli and byte decoding (EK4402).
import hostPath from "node:path"

export { readFileSync } from "node:fs"
export { brotliDecompressSync } from "node:zlib"

/** @throws {never} */
function join(...paths: string[]) {
  return hostPath.join(...paths)
}

export const path = { join }

/** @throws {never} */
export function appDistDirectory() {
  return hostPath.resolve(import.meta.dirname, "../../app/dist")
}

/** @throws {never} */
export function textFrom(bytes: Uint8Array) {
  return Buffer.from(bytes).toString()
}
