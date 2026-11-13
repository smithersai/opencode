
import { Effect } from "effect"
import { randomUUID } from "node:crypto"

export const randomID = Effect.sync(() => randomUUID())
/** @throws {never} */

export function display() { return process.env.DISPLAY }
