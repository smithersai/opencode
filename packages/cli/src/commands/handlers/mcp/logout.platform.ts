export { EOL } from "node:os"

export const currentDirectory = () => process.cwd()

export const writeOutput = (...args: Parameters<typeof process.stdout.write>) => process.stdout.write(...args)
