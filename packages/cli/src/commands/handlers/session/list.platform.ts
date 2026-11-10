// The platform code of list.vibe: the working directory, standard streams, the host platform, the line ending and the exit code (EK4402).
export { EOL } from "node:os"

export function currentDirectory() {
  return process.cwd()
}

export function writeOutput(text: string, callback: (error: Error | null | undefined) => void) {
  return process.stdout.write(text, callback)
}

export function writeError(text: string) {
  return process.stderr.write(text)
}

/** @throws {never} */
export function stdoutIsTTY() {
  return process.stdout.isTTY
}

/** @throws {never} */
export function platform() {
  return process.platform
}

/** @throws {never} */
export function setExitCode(code: number) {
  process.exitCode = code
}
