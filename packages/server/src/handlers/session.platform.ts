import { Effect } from "effect"

export const currentDirectory = Effect.sync(() => process.cwd())
