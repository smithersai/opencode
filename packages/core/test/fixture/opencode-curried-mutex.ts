import type { Effect } from "effect"
import { KeyedMutex } from "../../src/effect/keyed-mutex.ts"

// Both applications construct an Effect without running the protected work.
export function locked<A, E, R>(mutex: KeyedMutex.KeyedMutex<string>, key: string, work: Effect.Effect<A, E, R>): Effect.Effect<A, E, R> {
  return mutex.withLock(key)(work)
}
