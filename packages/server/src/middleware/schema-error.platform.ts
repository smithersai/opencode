import { Effect } from "effect"

export const reference = Effect.sync(() => `err_${crypto.randomUUID().slice(0, 8)}`)
