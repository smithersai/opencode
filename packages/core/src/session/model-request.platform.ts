// The platform code of model-request.vibe: the global Response, which VibeLang code does not construct (EK4402).

/** @throws {RangeError} for a status outside 200-599. @throws {TypeError} for a body on a null-body status. */
export function makeResponse(
  body: ConstructorParameters<typeof Response>[0],
  init: ConstructorParameters<typeof Response>[1],
): Response {
  return new Response(body, init)
}
