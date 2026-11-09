import { Effect } from "effect"
export { EOL } from "node:os"

export const directory = Effect.sync(() => process.cwd())
export const write = (value: string) =>
  Effect.sync(() => {
    process.stdout.write(value)
  })
