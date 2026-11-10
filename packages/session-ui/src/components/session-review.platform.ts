// Browser host access for session-review.vibex.

/** @throws {never} */
export function requestAnimationFrame(callback: FrameRequestCallback) {
  return globalThis.requestAnimationFrame(callback)
}

/** @throws {never} */
export function cancelAnimationFrame(handle: number) {
  globalThis.cancelAnimationFrame(handle)
}

/** @throws {never} */
export function isHTMLElement(value: Element | null | undefined): value is HTMLElement {
  return value instanceof HTMLElement
}
