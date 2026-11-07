// The platform code of memory-record.vibe, which a .vibe file does not import as a value (EK4402).

import type { ProcessMetric } from "electron"
import type { RendererRecord } from "./memory-record.vibe"

export function memoryRecord(metrics: ProcessMetric[], renderers: RendererRecord[], preciseJsHeap: boolean) {
  return {
    timestamp: new Date().toISOString(),
    mainPid: process.pid,
    nativeMemoryUnit: "KiB",
    jsHeapUnit: "bytes",
    preciseJsHeap,
    processes: metrics.map((metric) => ({
      type: metric.type,
      pid: metric.pid,
      workingSetSize: metric.memory.workingSetSize,
      // Electron exposes privateBytes only on Windows. Null means unavailable, not zero.
      privateBytes: metric.memory.privateBytes ?? null,
    })),
    renderers: renderers.map((renderer) => ({
      ...renderer,
      nativeMemory: metrics.find((metric) => metric.pid === renderer.pid)?.memory ?? null,
    })),
  }
}
