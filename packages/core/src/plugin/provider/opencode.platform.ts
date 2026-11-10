// The platform code of opencode.vibe: environment variable reads and host Response construction, which a .vibe file
// does not do (EK4402).

/** @throws {never} */
export function environmentValue(key: string): string | undefined {
  return process.env[key]
}

/**
 * Builds a host JSON `Response`.
 * @throws {TypeError} when the body cannot be serialized as JSON.
 */
export function jsonResponse(body: unknown, init: ResponseInit): Response {
  return Response.json(body, init)
}
