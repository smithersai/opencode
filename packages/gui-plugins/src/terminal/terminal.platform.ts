// Browser host access for terminal.vibex.

/**
 * Logs terminal diagnostics in development builds.
 * @throws {never}
 */
export const debugTerminal = (...values: unknown[]) => {
  if (!import.meta.env.DEV) return
  console.debug("[terminal]", ...values)
}

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
export function clearTimeout(timer: ReturnType<typeof globalThis.setTimeout>) {
  globalThis.clearTimeout(timer)
}

/** @throws {never} */
export function getActiveElement() {
  return document.activeElement
}

/** @throws {never} */
export function isHTMLElement(value: Element | null): value is HTMLElement {
  return value instanceof HTMLElement
}

/** @throws {never} */
export function execCommand(command: "copy" | "paste") {
  return document.execCommand(command)
}

/**
 * The document's font set, when the page has one.
 * @throws {never}
 */
export function documentFonts() {
  return typeof document !== "undefined" && document.fonts ? document.fonts : undefined
}

/** @throws {never} */
export function isSocketOpen(socket: WebSocket) {
  return socket.readyState === WebSocket.OPEN
}

/**
 * Whether the socket is closed or closing.
 * @throws {never}
 */
export function isSocketClosed(socket: WebSocket) {
  return socket.readyState === WebSocket.CLOSED || socket.readyState === WebSocket.CLOSING
}

/** @throws {never} */
export function addWindowEventListener(type: "resize", listener: () => void) {
  window.addEventListener(type, listener)
}

/** @throws {never} */
export function removeWindowEventListener(type: "resize", listener: () => void) {
  window.removeEventListener(type, listener)
}
