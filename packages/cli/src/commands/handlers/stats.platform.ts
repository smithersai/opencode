export { EOL } from "node:os"

export const currentDirectory = () => process.cwd()

export const outputIsTTY = () => process.stdout.isTTY

export const environmentValue = (key: string) => process.env[key]

export const outputColumns = () => process.stdout.columns

export const writeOutput = (...args: Parameters<typeof process.stdout.write>) => process.stdout.write(...args)

export const writeError = (...args: Parameters<typeof process.stderr.write>) => process.stderr.write(...args)

export const setExitCode = (code: typeof process.exitCode) => (process.exitCode = code)

export const timeoutSignal = (milliseconds: number) => AbortSignal.timeout(milliseconds)
