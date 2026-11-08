import { randomUUID } from "node:crypto"

export function currentPlatform() {
  return process.platform
}
export function environmentValue(name: string) {
  return process.env[name]
}

export function createWindowID() {
  return randomUUID()
}
