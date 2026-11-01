import { Effect, FileSystem, Path } from "effect";
export declare const cleanStages: (binary: string, options?: {
    readonly keep?: ReadonlyArray<string>;
} | undefined) => Effect.Effect<void, import("effect/PlatformError").PlatformError, FileSystem.FileSystem | Path.Path>;
