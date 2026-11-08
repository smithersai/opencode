import { expect, test } from "bun:test"
import fs from "node:fs"
import { Cause, Effect, Exit } from "effect"
import fc from "fast-check"
import ts from "typescript"
import { KeyedMutex } from "../../src/effect/keyed-mutex"
import { withKeyedLock } from "../../src/effect/keyed-mutex.native"
import corpus from "../fixture/opencode-keyed-mutex-api.corpus.json" with { type: "json" }

test("keyed mutex preserves its native public declaration", () => {
  const source = fs.readFileSync(new URL("../../src/effect/keyed-mutex.ts", import.meta.url), "utf8")
  const emitted = ts.transpileDeclaration(source, {
    fileName: "keyed-mutex.ts",
    compilerOptions: { target: ts.ScriptTarget.ESNext, module: ts.ModuleKind.ESNext },
  })
  expect(emitted.diagnostics?.filter((item) => item.category === ts.DiagnosticCategory.Error)).toEqual([])
  expect(emitted.outputText).toBe(corpus.nativeDeclaration)
})

test("private lock adaptation retains laziness, values, failures, defects, and cleanup", async () => {
  await fc.assert(
    fc.asyncProperty(fc.string(), fc.integer(), async (key, value) => {
      const mutex = KeyedMutex.makeUnsafe<string>()
      let calls = 0
      const effect = withKeyedLock(
        mutex,
        key,
        Effect.sync(() => {
          calls++
          return value
        }),
      )
      expect(calls).toBe(0)
      expect(await Effect.runPromise(mutex.size)).toBe(0)
      expect(await Effect.runPromise(effect)).toBe(value)
      expect(calls).toBe(1)
      expect(await Effect.runPromise(Effect.exit(withKeyedLock(mutex, key, Effect.fail(value))))).toEqual(
        Exit.fail(value),
      )
      const defect = await Effect.runPromise(Effect.exit(withKeyedLock(mutex, key, Effect.die(value))))
      expect(Exit.isFailure(defect) && Cause.hasDies(defect.cause)).toBe(true)
      expect(await Effect.runPromise(mutex.size)).toBe(0)
    }),
    { seed: 480401, numRuns: 100 },
  )
})
