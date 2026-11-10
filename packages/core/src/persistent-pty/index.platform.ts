import path from "node:path"

/** @throws {never} */
export function joinPath(directory: string, name: string) {
  return path.join(directory, name)
}

/** The filesystem root, which needs no working directory. @throws {never} */
export function filesystemRoot() {
  return path.resolve("/")
}

/** @throws {never} */
export function randomUUID() {
  return crypto.randomUUID()
}

/** @throws {never} */
export function encodeBase64(data: string | Uint8Array) {
  return (typeof data === "string" ? Buffer.from(data) : Buffer.from(data)).toString("base64")
}

/** @throws {never} */
export function decodeBase64(data: string) {
  return Buffer.from(data, "base64")
}
