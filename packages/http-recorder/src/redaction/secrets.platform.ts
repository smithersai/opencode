// The platform code of secrets.vibe: the process environment (EK4402).

/** @throws {never} */
export function environmentEntries() {
  return Object.entries(process.env)
}
