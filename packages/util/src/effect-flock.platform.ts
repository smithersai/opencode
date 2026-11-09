import path from "path"
import os from "os"
import { randomUUID as nodeRandomUUID } from "crypto"

/** Joins path segments; string segments never throw. @throws {never} */
export function join(...segments: string[]) {
  return path.join(...segments)
}

export function hostname() {
  return os.hostname()
}

export function randomUUID() {
  return nodeRandomUUID()
}

/** @throws {never} */
export function pid() {
  return process.pid
}

/** Wall-clock milliseconds from the high-resolution timer. @throws {never} */
export function wall() {
  return performance.timeOrigin + performance.now()
}
