// The platform code of import.vibe: standard input and error, the line ending and the exit code (EK4402).
export { EOL } from "node:os"

/** @throws {never} */
export function stdinIsTTY() {
  return process.stdin.isTTY
}

export function writeError(text: string) {
  return process.stderr.write(text)
}

/** @throws {never} */
export function setExitCode(code: number) {
  process.exitCode = code
}
