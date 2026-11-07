import { Schema } from "effect";
export * as ConfigWorktree from "./worktree.vibe";
export declare const Info: Schema.Struct<{
    readonly directory: Schema.Trim;
}>;
export interface Info extends Schema.Schema.Type<typeof Info> {
}
