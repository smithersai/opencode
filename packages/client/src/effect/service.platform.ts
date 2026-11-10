// The platform code of service.vibe: process signals, host access a .vibe file does not use (EK4402).

/**
 * Sends a signal to a process, as `process.kill` does; signal 0 only tests that the process exists.
 * @throws {Error} When the process does not exist or cannot be signalled.
 */
export function kill(pid: number, signal: NodeJS.Signals | 0) {
  return process.kill(pid, signal)
}
