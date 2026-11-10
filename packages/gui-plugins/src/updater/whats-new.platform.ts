// Browser host access for whats-new.vibex.

/** @throws {never} */
export function fetch(input: string, init?: RequestInit) {
  return globalThis.fetch(input, init)
}

/** @throws {never} */
export function setTimeout(callback: () => void, delay: number) {
  return globalThis.setTimeout(callback, delay)
}

/** @throws {never} */
export function clearTimeout(timer: ReturnType<typeof globalThis.setTimeout>) {
  globalThis.clearTimeout(timer)
}
