export { EOL } from "node:os"

export const writeOutput = (...args: Parameters<typeof process.stdout.write>) => process.stdout.write(...args)
