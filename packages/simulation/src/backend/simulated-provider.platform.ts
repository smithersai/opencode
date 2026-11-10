// The platform code of simulated-provider.vibe: content hashes and standard error (EK4402).
import { createHash } from "node:crypto"

/** @throws {never} */
export function sha256Base64Url(text: string) {
  return createHash("sha256").update(text).digest("base64url")
}

export function writeError(text: string) {
  return process.stderr.write(text)
}
