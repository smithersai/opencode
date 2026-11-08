export { EOL } from "node:os"

export const outputIsTTY = () => process.stdout.isTTY

export const writeError = (...args: Parameters<typeof process.stderr.write>) => process.stderr.write(...args)

export const writeOutput = (...args: Parameters<typeof process.stdout.write>) => process.stdout.write(...args)

export const setExitCode = (code: typeof process.exitCode) => (process.exitCode = code)
