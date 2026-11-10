// The platform code of state.vibe: the process environment (EK4402).

/** @throws {never} */
export function environmentValue(key: string) {
  return process.env[key]
}
