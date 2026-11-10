// The platform code of databricks.vibe: environment variable reads, which a .vibe file does not do (EK4402).

/** @throws {never} */
export function environmentValue(key: string): string | undefined {
  return process.env[key]
}
