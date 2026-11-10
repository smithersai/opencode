// The platform code of acp.vibe: the process environment, standard streams and process exit (EK4402).
import { Writable } from "node:stream"

/** @throws {never} */
export function setEnvironment(key: string, value: string) {
  process.env[key] = value
}

export function standardStreams() {
  return [Writable.toWeb(process.stdout), Bun.stdin.stream()] as const
}

export function writeError(text: string) {
  return process.stderr.write(text)
}

export function exit(code: number) {
  return process.exit(code)
}
