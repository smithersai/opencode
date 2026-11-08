
/** @throws {never} */
export function cancel(timer: ReturnType<typeof setTimeout> | undefined) { clearTimeout(timer) }

export function later(callback: Parameters<typeof setTimeout>[0], milliseconds: number) { return setTimeout(callback, milliseconds) }

export function concat(chunks: readonly Uint8Array[]) { return Buffer.concat(chunks) }
