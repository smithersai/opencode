// The throwing code of generate.vibe: a JSON round trip, which synchronous VibeLang code does not run (EK0401).

/**
 * Provider metadata may hold undefined fields, which the JSON response schema rejects; the round trip drops them.
 * The input is a plain record of JSON values, so neither call throws.
 * @throws {never}
 */
export function plainJson(value: Record<string, unknown>): Record<string, unknown> {
  return JSON.parse(JSON.stringify(value))
}
