// The platform code of otlp.vibe: the host environment, which a .vibe file does not read (EK4402).

/** @throws {never} */
export function environment(name: string): string | undefined {
  return process.env[name]
}
