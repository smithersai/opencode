// The platform code of integration.vibe: the host environment, which a .vibe file does not read (EK4402).

/** The value of a host environment variable. @throws {never} */
export function hostEnv(name: string) {
  return process.env[name]
}
