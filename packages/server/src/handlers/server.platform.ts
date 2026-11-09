import { Effect } from "effect"
import os from "node:os"

export const hostname = Effect.sync(() => os.hostname())
export const pid = Effect.sync(() => process.pid)
