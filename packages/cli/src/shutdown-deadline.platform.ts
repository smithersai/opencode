// The platform code of shutdown-deadline.vibe: standard error, process exit and signal listeners (EK4402).

export function writeError(text: string) {
  return process.stderr.write(text)
}

export function exit(code: number) {
  return process.exit(code)
}

export function terminate() {
  return process.kill(process.pid, "SIGTERM")
}

/** @throws {never} */
export function hasTerminal() {
  return process.stdin.isTTY || process.stdout.isTTY
}

export function addSignalListener(signal: NodeJS.Signals, listener: NodeJS.SignalsListener) {
  return process.on(signal, listener)
}

export function removeSignalListener(signal: NodeJS.Signals, listener: NodeJS.SignalsListener) {
  return process.off(signal, listener)
}
