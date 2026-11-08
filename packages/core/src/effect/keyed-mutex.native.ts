import type { Effect } from "effect"
import type { KeyedMutex } from "./keyed-mutex.js"

/** Construct the same lazy lock Effect without exposing a new public call contract. */
export function withKeyedLock<Key, A, E, R>(
  mutex: KeyedMutex.KeyedMutex<Key>,
  key: Key,
  effect: Effect.Effect<A, E, R>,
): Effect.Effect<A, E, R> {
  return mutex.withLock(key)(effect)
}
