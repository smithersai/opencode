import { Effect } from "effect"
import path from "node:path"

export const resolvePath = (directory: string, file: string) => Effect.sync(() => path.resolve(directory, file))
