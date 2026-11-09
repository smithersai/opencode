import path from "path"
import os from "os"
import crypto from "crypto"

/** Joins path segments; string segments never throw. @throws {never} */
export function join(...segments: string[]) {
  return path.join(...segments)
}

export function hostname() {
  return os.hostname()
}

export function randomUUID() {
  return crypto.randomUUID()
}

/** @throws {never} */
export function pid() {
  return process.pid
}

/** Wall-clock milliseconds from the high-resolution timer. @throws {never} */
export function wall() {
  return performance.timeOrigin + performance.now()
}

export const Host = { join, hostname, randomUUID, pid, wall }
