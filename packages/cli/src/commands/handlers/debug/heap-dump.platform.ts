export const writeError = (...args: Parameters<typeof process.stderr.write>) => process.stderr.write(...args)

export const writeOutput = (...args: Parameters<typeof process.stdout.write>) => process.stdout.write(...args)

export const setExitCode = (code: typeof process.exitCode) => (process.exitCode = code)

import { EOL } from "node:os"

const lineEnding = EOL

export { lineEnding as EOL }

import hostPath from "node:path"

export const path = {
  isAbsolute: (...args: Parameters<typeof hostPath.isAbsolute>) => hostPath.isAbsolute(...args),
  resolve: (...args: Parameters<typeof hostPath.resolve>) => hostPath.resolve(...args),
  win32: hostPath.win32,
  posix: hostPath.posix,
}
