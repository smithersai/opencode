export function scheduleTimeout(callback: () => void, delay?: number) {
  return setTimeout(callback, delay)
}
export function cancelTimeout(timer: ReturnType<typeof setTimeout> | undefined) {
  clearTimeout(timer)
}
