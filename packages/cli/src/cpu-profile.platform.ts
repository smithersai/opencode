// The platform code of cpu-profile.vibe: the inspector session, paths, signals and the profile write (EK4402).
import hostPath from "node:path"

export { Session } from "node:inspector"

/** @throws {never} */
function join(...paths: string[]) {
  return hostPath.join(...paths)
}

/** @throws {never} */
function resolve(...paths: string[]) {
  return hostPath.resolve(...paths)
}

/** @throws {never} */
function dirname(value: string) {
  return hostPath.dirname(value)
}

export const path = { join, resolve, dirname }

/** @throws {never} */
export function platform() {
  return process.platform
}

/** @throws {never} */
export function pid() {
  return process.pid
}

export function addSignalListener(signal: NodeJS.Signals, listener: NodeJS.SignalsListener) {
  return process.on(signal, listener)
}

export function removeSignalListener(signal: NodeJS.Signals, listener: NodeJS.SignalsListener) {
  return process.off(signal, listener)
}

export function writeProfile(target: string, profile: string) {
  return Bun.write(target, profile)
}
