import { execFile, spawn } from "node:child_process"
import { nativeImage } from "electron"
// Generated platform helpers for this VibeLang module.

export function currentPlatform() {
  return process.platform
}

export function openPowerShell(application: string, cwd: string) {
  return new Promise<void>((resolve, reject) => {
    spawn("cmd.exe", ["/d", "/c", "start", "", application, "-NoExit"], { cwd, stdio: "ignore", windowsHide: true })
      .once("error", reject)
      .once("exit", (code) => (code === 0 ? resolve() : reject(new Error("start exited with code " + code))))
  })
}
export function openApplication(target: string, application: string) {
  return new Promise<void>((resolve, reject) => {
    const command =
      process.platform === "darwin"
        ? { file: "open", arguments: ["-a", application, target] }
        : { file: application, arguments: [target] }
    execFile(command.file, command.arguments, (error) => (error ? reject(error) : resolve()))
  })
}
export function isBlob(value: unknown): value is Blob {
  return value instanceof Blob
}
export function imageFromBytes(bytes: ArrayBuffer) {
  return nativeImage.createFromBuffer(Buffer.from(bytes))
}
