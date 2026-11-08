import { execFile } from "node:child_process"
import { promisify } from "node:util"

export function currentPlatform() {
  return process.platform
}
export function environmentValue(name: string) {
  return process.env[name]
}

export const execFilePromise = promisify(execFile)
