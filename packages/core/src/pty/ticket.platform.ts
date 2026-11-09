// The platform code of ticket.vibe: host globals a .vibe file does not read (EK4402).

/** A fresh random ticket id. @throws {never} */
export function randomTicket(): string {
  return crypto.randomUUID()
}
