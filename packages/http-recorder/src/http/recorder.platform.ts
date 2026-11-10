// The platform code of recorder.vibe: base64 byte encoding and web Response construction (EK4402).

/** @throws {never} */
export function base64FromBytes(bytes: ArrayBuffer) {
  return Buffer.from(bytes).toString("base64")
}

/** @throws {never} */
export function bytesFromBase64(text: string) {
  return Buffer.from(text, "base64")
}

export function makeResponse(...args: ConstructorParameters<typeof Response>) {
  return new Response(...args)
}
