/**
 * Plain-record narrowing. Excludes arrays so JSON object checks do not accept tuples as key/value bags.
 * @throws {never}
 */
export const isRecord = (value: unknown): value is Record<string, unknown> =>
  typeof value === "object" && value !== null && !Array.isArray(value)
