// Browser host access for basic-tool.vibex.

/** @throws {never} */
export function requestAnimationFrame(callback: FrameRequestCallback) {
  return globalThis.requestAnimationFrame(callback)
}

/** @throws {never} */
export function cancelAnimationFrame(handle: number) {
  globalThis.cancelAnimationFrame(handle)
}
