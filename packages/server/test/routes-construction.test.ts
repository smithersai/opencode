import { expect, test } from "bun:test"
import fc from "fast-check"
import { Layer } from "effect"
import { createEmbeddedRoutes, createRoutes } from "../src/routes.ts"
import corpus from "./opencode-route-factory-throws.corpus.json" with { type: "json" }

test("instance factory failures remain synchronous during route construction", () => {
  for (const message of corpus.messages) {
    const failure = new Error(message)
    let calls = 0
    expect(() => createEmbeddedRoutes({}, [], () => {
      calls++
      throw failure
    })).toThrow(failure)
    expect(calls).toBe(1)
  }
})

test("route construction preserves foreign exceptions without acquiring the layer", () => {
  fc.assert(fc.property(fc.jsonValue(), (failure) => {
    let calls = 0
    let caught = false
    try {
      createEmbeddedRoutes({}, [], () => {
        calls++
        throw failure
      })
    } catch (error) {
      caught = true
      expect(error).toBe(failure)
    }
    expect(caught).toBe(true)
    expect(calls).toBe(1)
  }), { seed: 480301, numRuns: 100 })
})

test("ordinary route factories construct unacquired layers", () => {
  fc.assert(fc.property(fc.string({ maxLength: 32 }), (version) => {
    expect(Layer.isLayer(createRoutes({ app: { version } }))).toBe(true)
    expect(Layer.isLayer(createEmbeddedRoutes({ app: { version } }))).toBe(true)
  }), { seed: 480302, numRuns: 40 })
})
