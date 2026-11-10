// The platform code of instruction-entry.vibe: Buffer byte counting, which a .vibe file does not use (EK4402).

/** The UTF-8 byte length of `text`. @throws {never} */
export function utf8ByteLength(text: string): number {
  return Buffer.byteLength(text, "utf8")
}
