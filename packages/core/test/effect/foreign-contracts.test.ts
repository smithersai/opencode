import { expect, test } from "bun:test"
import { Cause, Effect, Exit } from "effect"
import fc from "fast-check"
import { KeyedMutex } from "../../src/effect/keyed-mutex"

test("keyed lock construction is lazy and preserves failures and defects", async () => {
  await fc.assert(
    fc.asyncProperty(fc.string(), fc.integer(), async (key, value) => {
      const mutex = KeyedMutex.makeUnsafe<string>()
      let calls = 0
      const success = mutex.withLock(key)(
        Effect.sync(() => {
          calls++
          return value
        }),
      )
      expect(calls).toBe(0)
      expect(await Effect.runPromise(mutex.size)).toBe(0)
      expect(await Effect.runPromise(success)).toBe(value)
      expect(calls).toBe(1)

      const failure = await Effect.runPromise(Effect.exit(mutex.withLock(key)(Effect.fail(value))))
      expect(failure).toEqual(Exit.fail(value))
      const defect = await Effect.runPromise(Effect.exit(mutex.withLock(key)(Effect.die(value))))
      expect(Exit.isFailure(defect) && Cause.hasDies(defect.cause)).toBe(true)
      expect(await Effect.runPromise(mutex.size)).toBe(0)
      expect(await Effect.runPromise(mutex.withLock(key)(Effect.succeed(value)))).toBe(value)
    }),
    { numRuns: 100 },
  )
})
