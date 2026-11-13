import { expect, test } from "bun:test"
import fc from "fast-check"
import { Schema } from "effect"
import { HttpApi, HttpApiEndpoint, HttpApiGroup, HttpApiSchema } from "effect/http-api"
import { compile, emitPromise } from "../src"
import corpus from "./opencode-sse-opaque-data.corpus.json" with { type: "json" }

function types(field: string, label: string) {
  const source = HttpApi.make("opaque-events").add(
    HttpApiGroup.make("events").add(
      HttpApiEndpoint.get("subscribe", "/events", {
        success: HttpApiSchema.StreamSse({
          data: Schema.Struct({
            metadata: Schema.Record(Schema.String, Schema.Unknown),
            json: Schema.Json,
            transformed: Schema.NumberFromString,
            label: Schema.Literal(label),
            [field]: Schema.Unknown,
          }),
        }),
      }),
    ),
  )
  const emitted = emitPromise(compile(source)).files.find((file) => file.path === "types.ts")
  expect(emitted).toBeDefined()
  return emitted!.content
}

function check(field: string, label: string) {
  const output = types(field, label)
  expect(output).toContain('readonly "metadata": { readonly [x: string]: any }')
  expect(output).toContain('readonly "json": JsonValue')
  expect(output).toContain('readonly "transformed": string')
  expect(output).toContain("readonly " + JSON.stringify(field) + ": any")
  expect(output).toContain('readonly "label": ' + JSON.stringify(label))
}

test("SSE projection preserves opaque, explicit JSON, and transformed fields", () => {
  for (const field of corpus.fields) {
    for (const label of corpus.labels) check(field, label)
  }
})

test("SSE projection keeps field and literal identities through the JSON wrapper", () => {
  const label = fc
    .array(fc.constantFrom("a", "b", "_", " ", '"', "'", "\\", "雪"), { maxLength: 20 })
    .map((characters) => characters.join(""))
  fc.assert(
    fc.property(fc.constantFrom(...corpus.fields), label, (field, value) => {
      check(field, value)
    }),
    { seed: 480701, numRuns: 100 },
  )
})
