// Generated platform helpers for this VibeLang module.
export function $platform(arg0: () => void) {
  return setImmediate(arg0)
}
export function $platform$1(arg0: "SIGINT", arg1: () => void) {
  return process.off(arg0, arg1)
}
export function $platform$2(arg0: "SIGTERM", arg1: () => void) {
  return process.off(arg0, arg1)
}

export function currentPlatform() {
  return process.platform
}

export function listenForSignal(signal: "SIGINT" | "SIGTERM", callback: () => void) {
  process.on(signal, callback)
}
