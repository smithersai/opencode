import { Schema } from "effect";
import { Ipc } from "@opencode/plugin/gui";
/**
 * Captures memory for debugging leaks. Heap snapshots of the main process and every app window can only be taken
 * from main, and the desktop server's snapshot is moved next to them, so one folder holds the whole app.
 */
export declare const HeapSnapshots: Ipc<{
    readonly id: "debug.heap";
    readonly methods: {
        /**
         * Writes heap snapshots of the desktop's own server, every app window and the main process into a new folder,
         * with a `manifest.json` written last. One capture runs at a time; a second call waits for the first. A snapshot
         * that fails is recorded in the manifest and the others are still written.
         */
        write: {
            output: Schema.Struct<{
                /** The new folder. */
                readonly directory: Schema.String;
                /** Whether every snapshot was written. */
                readonly complete: Schema.Boolean;
            }>;
        };
    };
}>;
/**
 * Memory diagnostics, offered only in debug builds (the dev server and Beta) and off until turned on: a JSONL memory
 * log in the desktop logs, and SIGUSR2 heap snapshots when `OPENCODE_DESKTOP_HEAP_DIRECTORY` names an absolute folder.
 * The debug bar's toggle turns them on and remembers it; `OPENCODE_DESKTOP_MEMORY_LOG=<seconds>` turns them on for one
 * launch, and the toggle cannot turn that off.
 */
export declare const MemoryDiagnostics: Ipc<{
    readonly id: "debug.memory";
    readonly state: Schema.Struct<{
        /** Whether diagnostics are running. */
        readonly on: Schema.Boolean;
        /** Whether the environment turned them on. */
        readonly env: Schema.Boolean;
    }>;
    readonly methods: {
        /** Turns the stored toggle on or off. */
        set: {
            input: Schema.Boolean;
        };
    };
}>;
