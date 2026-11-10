// The platform code of http-body.vibe: host Buffer allocation, which a .vibe file does not use directly (EK4402).

/**
 * Allocates an uninitialized response buffer; Node rejects sizes beyond its buffer limit.
 * @throws {RangeError}
 */
export function allocateBody(size: number) {
  return Buffer.allocUnsafe(size)
}
