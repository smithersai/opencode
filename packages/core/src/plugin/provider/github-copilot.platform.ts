// The platform code of github-copilot.vibe: the host fetch and Headers, which a .vibe file does not use directly
// (EK4402).

/** The host `fetch`, looked up when called. A failed request rejects the returned Promise. @throws {never} */
export function hostFetch(input: Parameters<typeof fetch>[0], init?: RequestInit): Promise<Response> {
  return fetch(input, init)
}

/**
 * Builds host request headers.
 * @throws {TypeError} when the init holds an invalid header name or value.
 */
export function createHeaders(init?: ConstructorParameters<typeof Headers>[0]): Headers {
  return new Headers(init)
}
