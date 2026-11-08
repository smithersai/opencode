import { expect, test } from "bun:test"
import { Cause, Effect, Exit } from "effect"
import fc from "fast-check"
import { Media } from "../src/media.ts"
import { MediaProtocol } from "../src/route/media-protocol.vibe"
import { ProviderShared } from "../src/protocols/shared.ts"
import { MediaInput } from "../src/protocols/utils/media-input.vibe"
import { SpeechStream } from "../src/protocols/utils/speech-stream.vibe"
import { cacheControl } from "../src/protocols/utils/cache.ts"
import corpus from "./fixtures/opencode-protocol-boundaries.json" with { type: "json" }

const route = MediaProtocol.identity({ id: "speech", name: "Speech", provider: "test" })

test("inline media construction defers exceptions and preserves them as defects", () => {
  fc.assert(
    fc.property(fc.string(), (message) => {
      const cause = new Error(message)
      class BrokenAsset extends Media.Asset {
        override inline(): Media.Inline | undefined {
          throw cause
        }
      }
      const asset = new BrokenAsset({ source: { type: "base64", data: "AA==", mediaType: "audio/wav" } })
      const program = MediaInput.inlineBytes("upload", asset)
      expect(Effect.isEffect(program)).toBe(true)
      const result = Effect.runSyncExit(program)
      expect(Exit.isFailure(result)).toBe(true)
      if (Exit.isFailure(result)) {
        expect(Cause.hasDies(result.cause)).toBe(true)
        expect(Cause.squash(result.cause)).toBe(cause)
      }
    }),
    { numRuns: 100 },
  )
})

test("speech assembly defers detached-buffer exceptions into defects", () => {
  const chunk = new Uint8Array([1])
  structuredClone(chunk.buffer, { transfer: [chunk.buffer] })
  const program = SpeechStream.finish(route, { chunks: [chunk, new Uint8Array([2])] }, { mediaType: "audio/wav" })
  expect(Effect.isEffect(program)).toBe(true)
  const result = Effect.runSyncExit(program)
  expect(Exit.isFailure(result)).toBe(true)
  if (Exit.isFailure(result)) {
    expect(Cause.hasDies(result.cause)).toBe(true)
    expect(Cause.squash(result.cause)).toBeInstanceOf(TypeError)
  }
})

test("inline media bridges preserve arbitrary bytes and reject remote sources as typed failures", () => {
  fc.assert(
    fc.property(fc.uint8Array({ maxLength: 256 }), (bytes) => {
      const inline = Media.bytes(bytes, "audio/wav").inline()!
      const asset = Media.base64(inline.base64, inline.mime)
      expect(Effect.runSync(MediaInput.inlineBytes("upload", asset))).toEqual(bytes)
      const remote = Effect.runSyncExit(MediaInput.inlineBytes("upload", Media.url("https://media.test/audio")))
      expect(Exit.isFailure(remote)).toBe(true)
      if (Exit.isFailure(remote)) {
        expect(Cause.hasFails(remote.cause)).toBe(true)
        expect(Cause.hasDies(remote.cause)).toBe(false)
      }
    }),
    { numRuns: 100, examples: corpus.bytes.map((bytes) => [new Uint8Array(bytes)]) },
  )
})

test("speech assembly preserves chunk order and the declared media type", () => {
  fc.assert(
    fc.property(fc.array(fc.uint8Array({ maxLength: 64 }), { minLength: 1, maxLength: 8 }), (chunks) => {
      const events = Effect.runSync(SpeechStream.finish(route, { chunks }, { mediaType: "audio/wav" }))
      expect(events).toHaveLength(1)
      const event = events[0]
      expect(event.type).toBe("finish")
      if (event.type === "finish") {
        expect(event.audio.mediaType).toBe("audio/wav")
        expect(event.audio.source).toEqual({
          type: "bytes",
          data: new Uint8Array(chunks.flatMap((chunk) => [...chunk])),
          mediaType: "audio/wav",
        })
      }
    }),
    { numRuns: 100, examples: corpus.chunks.map((chunks) => [chunks.map((chunk) => new Uint8Array(chunk))]) },
  )
})

test("cache callbacks keep an independent four-marker budget without consuming absent hints", () => {
  fc.assert(
    fc.property(fc.array(fc.boolean(), { maxLength: 64 }), (hints) => {
      const lower = cacheControl()
      const other = cacheControl()
      let marked = 0
      for (const present of hints) {
        const hint = present ? { type: "ephemeral" as const, ttl: "5m" as const } : undefined
        const result = lower(hint)
        if (present && marked < 4) {
          expect(result).toEqual({ type: "ephemeral", ttl: "5m" })
          marked++
        } else {
          expect(result).toBeUndefined()
        }
      }
      expect(other({ type: "ephemeral", ttl: "5m" })).toEqual({ type: "ephemeral", ttl: "5m" })
    }),
    { numRuns: 100, examples: corpus.cacheHints.map((hints) => [hints]) },
  )
})

test("malformed image outputs remain typed provider failures", () => {
  for (const item of corpus.invalidImages) {
    const result = Effect.runSyncExit(MediaInput.imageOutput(ProviderShared.invalidRequest, "Image", item, "image/png"))
    expect(Exit.isFailure(result)).toBe(true)
    if (Exit.isFailure(result)) {
      expect(Cause.hasFails(result.cause)).toBe(true)
      expect(Cause.hasDies(result.cause)).toBe(false)
    }
  }
})
