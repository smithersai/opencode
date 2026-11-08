export const writeOutput = (...args: Parameters<typeof process.stdout.write>) => process.stdout.write(...args)

export const writeError = (...args: Parameters<typeof process.stderr.write>) => process.stderr.write(...args)

export const inputIsTTY = () => process.stdin.isTTY

export const outputIsTTY = () => process.stdout.isTTY

export const setExitCode = (code: typeof process.exitCode) => (process.exitCode = code)

import { EOL as hostEOL } from "os"

export const EOL = hostEOL
