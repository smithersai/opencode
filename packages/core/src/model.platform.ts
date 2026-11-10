// The platform code of model.vibe: the process environment, which a .vibe file does not read (EK4402).

/** The value of a process environment variable. @throws {never} */
export function env(name: string): string | undefined {
  return process.env[name]
}
