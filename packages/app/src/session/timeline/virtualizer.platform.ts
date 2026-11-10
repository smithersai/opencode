// The platform code of virtualizer.vibex: DOM globals, which a .vibe file does not use directly (EK4402).

export function getComputedStyle(element: Element) {
  return globalThis.getComputedStyle(element)
}

export function queueMicrotask(callback: () => void) {
  globalThis.queueMicrotask(callback)
}

export function requestAnimationFrame(callback: FrameRequestCallback) {
  return globalThis.requestAnimationFrame(callback)
}

export function cancelAnimationFrame(frame: number) {
  globalThis.cancelAnimationFrame(frame)
}

export function escapeSelector(value: string) {
  return CSS.escape(value)
}

export function createMutationObserver(callback: MutationCallback) {
  return new MutationObserver(callback)
}

export function createResizeObserver(callback: ResizeObserverCallback) {
  return new ResizeObserver(callback)
}

export function isElement(value: EventTarget | null): value is Element {
  return value instanceof Element
}

export function isTouchEvent(event: Event): event is TouchEvent {
  return event instanceof TouchEvent
}

export function addWindowListener(type: "pointerup" | "pointercancel", listener: () => void) {
  window.addEventListener(type, listener)
}

export function removeWindowListener(type: "pointerup" | "pointercancel", listener: () => void) {
  window.removeEventListener(type, listener)
}
