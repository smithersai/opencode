import type { Log } from "@opencode/plugin/gui/main";
/** Appends a sample every `interval` ms to a new JSONL file in the desktop logs, which exported debug logs include. */
export declare function startMemoryLog(interval: number, log: Log): () => void;
