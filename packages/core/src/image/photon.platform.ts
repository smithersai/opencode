// The platform code of photon.vibe: worker threads and timers, which a .vibe file does not use (EK4402).

import type { Worker } from "node:worker_threads"

// Resolves once the worker has loaded photon. Anything else (no worker_threads,
// a bundle without the worker entry, photon failing to load) rejects, and a
// worker that never got ready is terminated.
export async function startWorker(url: URL | undefined, signal: AbortSignal): Promise<Worker> {
  const { Worker } = await import("node:worker_threads")
  const worker = new Worker(url ?? new URL("./photon-worker.js", import.meta.url))
  // Only fires on interruption, which discards the worker even if it just got ready.
  const abort = () => void worker.terminate()
  if (signal.aborted) abort()
  signal.addEventListener("abort", abort, { once: true })
  try {
    await new Promise<void>((resolve, reject) => {
      worker.once("message", () => resolve())
      worker.once("error", reject)
      worker.once("exit", (code) => reject(new Error(`photon worker exited with code ${code}`)))
    })
  } catch (cause) {
    void worker.terminate()
    throw cause
  }
  return worker
}

export type IdleTimer = ReturnType<typeof setTimeout>

/** Runs `run` after `millis`; unref'd so an idle worker never holds the process open. @throws {never} */
export function startIdleTimer(run: () => void, millis: number): IdleTimer {
  const timer = setTimeout(run, millis)
  timer.unref()
  return timer
}

/** @throws {never} */
export function cancelIdleTimer(timer: IdleTimer | undefined): void {
  clearTimeout(timer)
}
