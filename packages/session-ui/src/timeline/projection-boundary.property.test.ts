import { expect, test } from "bun:test"
import FastCheck from "fast-check"
import {
  createReactiveTimelineProjection,
  createTimelineProjection,
  reasoningHeading,
  reuseTimelineRows,
  Timeline,
  TimelineRow,
  unwrapErrorMessage,
} from "./projection"
import corpus from "./opencode-timeline-native-entry.corpus.json"

const words = FastCheck.array(FastCheck.constantFrom(..."abcdefghijklmnopqrstuvwxyz0123456789"), {
  minLength: 1,
  maxLength: 32,
}).map((letters) => letters.join(""))

test("the native timeline entry forwards the actual VibeLang implementation", async () => {
  const implementation = await import("./projection.impl.vibe")
  expect(Timeline).toBe(implementation.Timeline)
  expect(createTimelineProjection).toBe(implementation.createTimelineProjection)
  expect(createReactiveTimelineProjection).toBe(implementation.createReactiveTimelineProjection)
  expect(reasoningHeading).toBe(implementation.reasoningHeading)
  expect(reuseTimelineRows).toBe(implementation.reuseTimelineRows)
  expect(TimelineRow).toBe(implementation.TimelineRow)
  expect(unwrapErrorMessage).toBe(implementation.unwrapErrorMessage)
})

test("timeline headings and provider errors retain the minimized corpus behavior", () => {
  for (const item of corpus.headings) expect(reasoningHeading(item.text) ?? null).toBe(item.expected)
  for (const item of corpus.errors) expect(unwrapErrorMessage(item.text)).toBe(item.expected)
})

test("the native timeline entry preserves heading selection across newlines and heading depths", () => {
  FastCheck.assert(
    FastCheck.property(
      words,
      words,
      FastCheck.integer({ min: 1, max: 6 }),
      FastCheck.boolean(),
      (earlier, title, depth, crlf) => {
        const newline = crlf ? "\r\n" : "\n"
        expect(reasoningHeading("# " + earlier + newline + newline + "#".repeat(depth) + " " + title)).toBe(title)
      },
    ),
    { seed: 741903, numRuns: 128 },
  )
})

test("provider error envelopes preserve their message across one extra JSON encoding", () => {
  FastCheck.assert(
    FastCheck.property(words, words, FastCheck.boolean(), FastCheck.boolean(), (type, message, encoded, prefixed) => {
      const envelope = JSON.stringify({ error: { type, message } })
      const text = (prefixed ? "Error: " : "") + (encoded ? JSON.stringify(envelope) : envelope)
      expect(unwrapErrorMessage(text)).toBe(type + ": " + message)
    }),
    { seed: 741904, numRuns: 128 },
  )
})
