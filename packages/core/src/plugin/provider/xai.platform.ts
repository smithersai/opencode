// The platform code of xai.vibe: host Buffer decoding, which a .vibe file does not use directly (EK4402).

/** @throws {never} */
export function decodeBase64Url(payload: string): string {
  return Buffer.from(payload, "base64url").toString()
}
