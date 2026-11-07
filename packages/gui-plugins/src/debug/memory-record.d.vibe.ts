import type { ProcessMetric } from "electron";
import { Schema } from "effect";
export declare const RendererMemory: Schema.Struct<{
    readonly jsHeap: Schema.NullOr<Schema.Struct<{
        readonly used: Schema.Number;
        readonly total: Schema.Number;
        readonly limit: Schema.Number;
    }>>;
    readonly domElements: Schema.Number;
}>;
export type RendererRecord = {
    id: number;
    pid: number;
    type: string;
    sample?: typeof RendererMemory.Type;
    error?: string;
};
export declare function memoryRecord(metrics: ProcessMetric[], renderers: RendererRecord[], preciseJsHeap: boolean): {
    timestamp: string;
    mainPid: number;
    nativeMemoryUnit: string;
    jsHeapUnit: string;
    preciseJsHeap: boolean;
    processes: {
        type: "Browser" | "GPU" | "Pepper Plugin" | "Pepper Plugin Broker" | "Sandbox helper" | "Tab" | "Unknown" | "Utility" | "Zygote";
        pid: number;
        workingSetSize: number;
        privateBytes: number | null;
    }[];
    renderers: {
        nativeMemory: Electron.MemoryInfo | null;
        id: number;
        pid: number;
        type: string;
        sample?: typeof RendererMemory.Type;
        error?: string;
    }[];
};
