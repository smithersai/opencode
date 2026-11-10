// Host access for state.vibe.

/** @throws {never} */
export function queueMicrotask(callback: () => void) {
  globalThis.queueMicrotask(callback)
}
