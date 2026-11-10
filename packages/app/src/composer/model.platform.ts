export function requestFrame(callback: FrameRequestCallback) {
  return requestAnimationFrame(callback)
}

export function createObjectURL(blob: Blob) {
  return URL.createObjectURL(blob)
}

export function revokeObjectURL(url: string) {
  URL.revokeObjectURL(url)
}

export function createEvent(type: string) {
  return new Event(type)
}
