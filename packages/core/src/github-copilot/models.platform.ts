// The platform code of models.vibe: the host fetch and its timeout signal, which a .vibe file does not read (EK4402).

/** Fetches a URL with the given headers, aborting after `timeout` milliseconds. @throws {never} */
export function request(url: string, headers: RequestInit["headers"], timeout: number): Promise<Response> {
  return fetch(url, { headers, signal: AbortSignal.timeout(timeout) })
}
