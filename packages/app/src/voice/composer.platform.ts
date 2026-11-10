export function releaseChannel() {
  return import.meta.env.VITE_OPENCODE_CHANNEL
}

export function windowWidth() {
  return window.innerWidth
}

export function windowHeight() {
  return window.innerHeight
}

export function isElement(value: EventTarget | null): value is Element {
  return value instanceof Element
}

export function isHTMLElement(value: EventTarget | null): value is HTMLElement {
  return value instanceof HTMLElement
}

export function createResizeObserver(callback: ResizeObserverCallback) {
  return new ResizeObserver(callback)
}

export function addWindowListener(type: "resize", listener: () => void) {
  window.addEventListener(type, listener)
}

export function removeWindowListener(type: "resize", listener: () => void) {
  window.removeEventListener(type, listener)
}
