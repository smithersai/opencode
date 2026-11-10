// The platform code of openai.vibe: web Response construction, a host global (EK4402).
export function makeResponse(...args: ConstructorParameters<typeof Response>) {
  return new Response(...args)
}
