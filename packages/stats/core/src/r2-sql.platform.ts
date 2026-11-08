// The platform code of r2-sql.vibe: request cancellation signals, which reach the host (EK4402).

/** A signal that aborts with `signal` or after `ms` milliseconds, whichever comes first. @throws {never} */
export function boundedSignal(signal: AbortSignal, ms: number): AbortSignal {
  return AbortSignal.any([signal, AbortSignal.timeout(ms)])
}
