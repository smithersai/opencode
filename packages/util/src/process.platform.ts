import type { Effect } from "effect"

/** @throws {never} */
export function emptyBuffer() {
  return Buffer.alloc(0)
}

export function concat(chunks: Uint8Array[]) {
  return Buffer.concat(chunks)
}

export function utf8(buffer: Buffer) {
  return buffer.toString("utf8")
}

/** Decodes `buffer` as UTF-8 now, then builds the Effect from the text; a decoding failure throws here. */
export function withUtf8<A, E>(buffer: Buffer, f: (text: string) => Effect.Effect<A, E>): Effect.Effect<A, E> {
  return f(buffer.toString("utf8"))
}

export const Host = { emptyBuffer, concat, utf8, withUtf8 }
