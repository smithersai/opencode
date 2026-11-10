// The platform code of sap-ai-core.vibe: environment variable access, which a .vibe file does not do (EK4402).

/** @throws {never} */
export function environmentValue(key: string): string | undefined {
  return process.env[key]
}

/** @throws {never} */
export function setEnvironmentValue(key: string, value: string): void {
  process.env[key] = value
}
