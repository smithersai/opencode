import { Effect } from "effect"
import { layer, migrate } from "./database.vibe"

await Effect.runPromise(migrate().pipe(Effect.provide(layer)))
