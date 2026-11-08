export function scheduleTimeout(callback: () => void, delay?: number) {
  return setTimeout(callback, delay)
}
export function cancelTimeout(timer: ReturnType<typeof setTimeout> | undefined) {
  clearTimeout(timer)
}
export function requestFrame(callback: FrameRequestCallback) {
  return requestAnimationFrame(callback)
}
export function cancelFrame(frame: number) {
  cancelAnimationFrame(frame)
}
export function currentSelection() {
  return window.getSelection()
}
export function textNode(text: string) {
  return document.createTextNode(text)
}
export function createRange() {
  return document.createRange()
}
export function querySelector(selector: string) {
  return document.querySelector(selector)
}
export function escapeSelector(value: string) {
  return CSS.escape(value)
}
export function createInputEvent(type: string, init: InputEventInit) {
  return new InputEvent(type, init)
}
export function executeCommand(command: string, showUI: boolean, value: string) {
  return document.execCommand(command, showUI, value)
}
export function canExecuteCommand() {
  return typeof document.execCommand === "function"
}
export function isHTMLElement(value: EventTarget | null): value is HTMLElement {
  return value instanceof HTMLElement
}
export function textWalker(root: Node) {
  return document.createTreeWalker(root, NodeFilter.SHOW_TEXT)
}
