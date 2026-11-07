/**
 * Model-facing exact-edit leaf. Relative paths resolve within the active
 * Location. Absolute paths inside that Location are accepted, while explicit
 * absolute external paths retain mutation capability through a separate
 * external_directory approval before edit approval.
 */
export * as EditTool from "./edit.vibe";
import type { Context } from "@opencode/plugin/effect/plugin";
import { Effect, Schema } from "effect";
import { Environment } from "../../environment/index.js";
import { FileMutation } from "../../file-mutation.vibe";
import { Formatter } from "../../formatter.js";
import { Location } from "../../location.js";
import { FileAccess } from "../../file-access.js";
import { Permission } from "../../permission.js";
export declare const name = "edit";
export declare const Input: Schema.Struct<{
    readonly path: Schema.String;
    readonly oldString: Schema.String;
    readonly newString: Schema.String;
    readonly replaceAll: Schema.optionalKey<Schema.Boolean>;
}>;
export declare const Output: Schema.Struct<{
    readonly files: Schema.$Array<Schema.Struct<{
        readonly file: Schema.String;
        readonly patch: Schema.String;
        readonly additions: Schema.Int;
        readonly deletions: Schema.Int;
        readonly status: Schema.Literals<readonly ["added", "deleted", "modified"]>;
        readonly more: Schema.decodeTo<Schema.optional<Schema.toType<Schema.Literal<true>>>, Schema.optionalKey<Schema.Literal<true>>, never, never>;
    }>>;
    readonly replacements: Schema.Number;
}>;
export type Output = typeof Output.Type;
/** Deferred edit behavior and UX integrations remain visible at the model-facing seam. */
export declare const Plugin: {
    id: string;
    effect: (ctx: Context) => Effect.Effect<void, never, import("effect/Scope").Scope | Location.Service | Environment.Service | Permission.Service | FileAccess.Service | FileMutation.Service | Formatter.Service>;
};
