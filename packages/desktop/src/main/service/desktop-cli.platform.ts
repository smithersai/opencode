import { execFile, spawn } from "node:child_process"
import { existsSync, readFileSync } from "node:fs"
import { promisify } from "node:util"
// Generated platform helpers for this VibeLang module.

export function currentPlatform() {
  return process.platform
}
export function resourcesDirectory() {
  return process.resourcesPath
}
export function processID() {
  return process.pid
}
export function environmentValue(name: string) {
  return process.env[name]
}

export const execFileAsync = promisify(execFile)
export function fileExists(file: string) {
  return existsSync(file)
}
export function readBundledVersion(file: string) {
  try {
    return readFileSync(file, "utf8").trim()
  } catch {
    return ""
  }
}
export function installCliBinary(binary: string, home: string, installer: string) {
  return new Promise<void>((resolve, reject) => {
    const child = spawn("/bin/bash", ["-s", "--", "--binary", binary], {
      env: { ...process.env, HOME: home },
      stdio: ["pipe", "ignore", "pipe"],
    })
    let stderr = ""
    child.stderr.on("data", (chunk) => (stderr += chunk))
    child.on("error", reject)
    child.on("close", (code) =>
      code === 0 ? resolve() : reject(new Error(stderr.trim() || "CLI installer exited with code " + code)),
    )
    child.stdin.end(installer)
  })
}
