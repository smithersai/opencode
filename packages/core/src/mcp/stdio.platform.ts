// The platform code of stdio.vibe: a host Buffer view of a chunk, which a .vibe file does not create directly
// (EK4402).

/** @throws {never} */
export function bufferFrom(chunk: Uint8Array): Buffer {
  return Buffer.from(chunk.buffer, chunk.byteOffset, chunk.byteLength)
}
