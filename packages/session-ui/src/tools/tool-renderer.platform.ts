// Browser host access for tool-renderer.vibex.

/** @throws {never} */
export function requestAnimationFrame(callback: FrameRequestCallback) {
  return globalThis.requestAnimationFrame(callback)
}

/** @throws {never} */
export function cancelAnimationFrame(handle: number) {
  globalThis.cancelAnimationFrame(handle)
}

/** @throws {never} */
export function setTimeout(callback: () => void, delay: number) {
  return globalThis.setTimeout(callback, delay)
}

/** @throws {never} */
export function setInterval(callback: () => void, delay: number) {
  return globalThis.setInterval(callback, delay)
}

/** @throws {never} */
export function clearInterval(timer: ReturnType<typeof globalThis.setInterval>) {
  globalThis.clearInterval(timer)
}

/** @throws {never} */
export function getComputedStyle(element: Element) {
  return globalThis.getComputedStyle(element)
}

/** @throws {never} */
export function getSelection() {
  return window.getSelection()
}

/** @throws {never} */
export function isHTMLButtonElement(value: EventTarget | null): value is HTMLButtonElement {
  return value instanceof HTMLButtonElement
}
