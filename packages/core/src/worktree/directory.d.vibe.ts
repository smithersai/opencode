export * as WorktreeDirectory from "./directory.vibe";
import { Effect, Schema } from "effect";
import { FSUtil } from "@opencode/util/fs-util";
import { AbsolutePath } from "../schema.js";
declare const DirectoryUnavailableError_base: Schema.Class<DirectoryUnavailableError, Schema.TaggedStruct<"Worktree.DirectoryUnavailableError", {
    readonly directory: Schema.brand<Schema.String, "AbsolutePath">;
}>, import("effect/Cause").YieldableError>;
export declare class DirectoryUnavailableError extends DirectoryUnavailableError_base {
}
export declare const canonical: (fs: FSUtil.Interface, input: AbsolutePath) => Effect.Effect<string & import("effect/Brand").Brand<"AbsolutePath">, DirectoryUnavailableError, never>;
