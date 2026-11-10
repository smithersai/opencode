// The platform code of instance.vibe: the host high-resolution clock, which a .vibe file does not read (EK4402).

/** Milliseconds on the host high-resolution clock. @throws {never} */
export function now() {
  return performance.now()
}
