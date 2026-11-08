import { expect, test } from "bun:test"
import fc from "fast-check"
import { Schema } from "effect"
import { ConfigPolicy } from "../src/config/policy.vibe"
import { RevertV1 } from "../src/session-revert.vibe"
import corpus from "./opencode-readonly-contracts.corpus.json" with { type: "json" }

test("policy codec retains the native field schemas without mutable-key wrappers", () => {
  expect(ConfigPolicy.Info.fields.resource).toBe(Schema.String)
  expect(ConfigPolicy.Info.fields.effect).toBe(ConfigPolicy.Effect)
  expect(corpus.policy).toEqual(Schema.decodeUnknownSync(ConfigPolicy.Info)(corpus.policy))
})

test("readonly policy fields preserve decoding and encoding across valid and invalid values", () => {
  const decode = Schema.decodeUnknownSync(ConfigPolicy.Info)
  const encode = Schema.encodeSync(ConfigPolicy.Info)
  fc.assert(
    fc.property(
      fc.constantFrom("provider.use", "tool.use", "integration.use"),
      fc.string(),
      fc.constantFrom("allow", "deny"),
      fc.jsonValue(),
      (action, resource, effect, extra) => {
        const value = { action, resource, effect }
        expect(decode({ ...value, extra })).toEqual(value)
        expect(JSON.stringify(encode(decode(value)))).toBe(JSON.stringify(value))
        expect(() => decode({ ...value, action: "#" + action })).toThrow()
        expect(() => decode({ ...value, effect: "#" + effect })).toThrow()
      },
    ),
    { seed: 480501, numRuns: 100 },
  )
})

test("legacy revert file shapes preserve their serialized contract", () => {
  const decode = Schema.decodeUnknownSync(RevertV1)
  const encode = Schema.encodeSync(RevertV1)
  const file = fc.record({
    path: fc.string(),
    status: fc.constantFrom("added", "modified", "deleted"),
    additions: fc.nat({ max: 100000 }),
    deletions: fc.nat({ max: 100000 }),
    patch: fc.string(),
  })
  const value = { messageID: "msg_readonly", files: [corpus.legacyFile] }
  expect(JSON.stringify(encode(decode(value)))).toBe(JSON.stringify(value))
  fc.assert(
    fc.property(fc.array(file, { maxLength: 8 }), (files) => {
      const value = { messageID: "msg_readonly", files }
      expect(decode(value).files).toEqual(files)
      expect(JSON.stringify(encode(decode(value)))).toBe(JSON.stringify(value))
    }),
    { seed: 480502, numRuns: 100 },
  )
})
