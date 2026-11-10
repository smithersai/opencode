// The throwing code of instruction-state.vibe: blob lookups that throw for a missing blob, which synchronous
// VibeLang code does not do (EK0401).

import { Option, type Schema } from "effect"
import type { Instructions } from "../instructions/index.js"

/** @throws {Error} when a hash has no blob. */
export function dereference(
  values: Instructions.Values,
  blobs: ReadonlyMap<Instructions.Hash, Schema.Json>,
): Readonly<Record<string, Schema.Json>> {
  return Object.fromEntries(Object.entries(values).map(([key, hash]) => [key, requireBlob(blobs, hash)]))
}

/** @throws {Error} when a hash has no blob. */
export function dereferenceDelta(
  delta: Instructions.Delta,
  blobs: ReadonlyMap<Instructions.Hash, Schema.Json>,
): Readonly<Record<string, Option.Option<Schema.Json>>> {
  return Object.fromEntries(
    Object.entries(delta).map(([key, hash]) => [
      key,
      hash === "removed" ? Option.none() : Option.some(requireBlob(blobs, hash)),
    ]),
  )
}

/** @throws {Error} when `hash` has no blob. */
export function requireBlob(blobs: ReadonlyMap<Instructions.Hash, Schema.Json>, hash: Instructions.Hash) {
  const value = blobs.get(hash)
  if (value === undefined) throw new Error(`Instruction blob not found: ${hash}`)
  return value
}
