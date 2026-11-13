
import { mkdir, open } from "node:fs/promises"
import path from "node:path"
/** @throws {never} */
export function processID() { return process.pid }
/** @throws {never} */
export function snapshotPath(directory: string, time: string) { return path.join(directory, `heap-${process.pid}-${time}.heapsnapshot`) }
export async function reserve(directory: string, file: string) {
  await mkdir(directory, { recursive: true })
  const handle = await open(file, "wx", 0o600)
  await handle.close()
}
