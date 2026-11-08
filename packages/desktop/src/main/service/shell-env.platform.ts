import { spawnSync } from "node:child_process"
import { userInfo } from "node:os"

export function environmentValue(name: string) {
  return process.env[name]
}

export function loginShell() {
  return userInfo().shell
}
export function spawnShell(shell: string, mode: "-il" | "-l") {
  return spawnSync(shell, [mode, "-c", "env -0"], {
    stdio: ["ignore", "pipe", "ignore"],
    timeout: 5_000,
    windowsHide: true,
  })
}
