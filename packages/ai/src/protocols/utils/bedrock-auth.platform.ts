// The platform code of bedrock-auth.vibe: ambient AWS environment variables a .vibe file does not read (EK4402).

/** @throws {never} */
export function environmentValue(name: string) {
  return process.env[name]
}
