// The platform code of anthropic-messages.vibe: Buffer decoding, host access a .vibe file does not use (EK4402).
import { Buffer } from "node:buffer"

/**
 * Decodes base64 text as UTF-8; invalid base64 characters are skipped, as `Buffer.from` does.
 * @throws {never}
 */
export function decodeBase64Utf8(base64: string) {
  return Buffer.from(base64, "base64").toString("utf8")
}
