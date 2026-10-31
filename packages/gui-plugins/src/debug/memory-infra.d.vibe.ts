/** The trace config that makes Chromium dump every process's memory, broken down by allocator. */
export declare const traceConfig: {
    included_categories: string[];
    excluded_categories: string[];
    memory_dump_config: {
        triggers: {
            mode: string;
            periodic_interval_ms: number;
        }[];
    };
};
/** One Chromium process in the summary. Sizes are MiB. */
export type ProcessMemory = {
    readonly pid: number;
    /** Chromium's name for the process, e.g. `Browser`, `Renderer`, `GPU Process`. */
    readonly name?: string;
    /** What the process shows, as Chromium labels it. */
    readonly labels?: string;
    /** What the OS charges the process: Chromium's private footprint and resident set. */
    readonly totals: {
        readonly privateFootprint?: number;
        readonly resident?: number;
    };
    /**
     * Each allocator's effective size (shared memory counted once, with its owner), largest first: `malloc`, `partition_alloc`, `blink_gc`, `v8`, `skia`, `cc`, `gpu`,
     * `discardable`, `web_cache`, `font_caches`… Some overlap: `cc`, `skia`, `gpu` and `web_cache` report memory that
     * `malloc`, `discardable` or `shared_memory` also count.
     */
    readonly allocators: Readonly<Record<string, number>>;
    /** Every sub-allocator of at least 1 MiB, up to three levels deep, e.g. `partition_alloc/partitions/layout`. */
    readonly detail: Readonly<Record<string, number>>;
};
/**
 * Summarizes a memory-infra trace: for each process, the last detailed dump's totals and allocator sizes.
 *
 * @param json - The trace file's text, as `contentTracing.stopRecording` wrote it.
 * @returns One entry per process that dumped, largest private footprint first.
 */
export declare function summarize(json: string): ProcessMemory[];
