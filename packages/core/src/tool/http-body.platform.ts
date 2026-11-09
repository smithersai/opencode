/** Allocates an uninitialized response buffer; Node rejects sizes beyond its buffer limit. */
export function allocateBody(size: number) {
  return Buffer.allocUnsafe(size)
}
