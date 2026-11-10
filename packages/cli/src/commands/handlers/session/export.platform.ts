// The platform code of export.vibe: the working directory, standard streams, the line ending and the exit code (EK4402).
export { EOL } from "node:os"

export function currentDirectory() {
  return process.cwd()
}

/** @throws {never} */
export function stdinIsTTY() {
  return process.stdin.isTTY
}

/** @throws {never} */
export function standardError() {
  return process.stderr
}

export function writeOutput(text: string) {
  return process.stdout.write(text)
}

export function writeError(text: string) {
  return process.stderr.write(text)
}

/** @throws {never} */
export function setExitCode(code: number) {
  process.exitCode = code
}
