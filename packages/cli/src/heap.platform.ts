// The platform code of heap.vibe: the host platform and process signal listeners (EK4402).

/** @throws {never} */
export function platform() {
  return process.platform
}

export function addSignalListener(signal: NodeJS.Signals, listener: NodeJS.SignalsListener) {
  return process.on(signal, listener)
}

export function removeSignalListener(signal: NodeJS.Signals, listener: NodeJS.SignalsListener) {
  return process.off(signal, listener)
}
