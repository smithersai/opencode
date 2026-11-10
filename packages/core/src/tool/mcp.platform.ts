// The platform code of mcp.vibe: host Buffer decoding, which a .vibe file does not use directly (EK4402).

/** @throws {never} */
export function decodeBase64(data: string): Buffer {
  return Buffer.from(data, "base64")
}
