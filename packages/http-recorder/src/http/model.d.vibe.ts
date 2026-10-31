import { Schema } from "effect";
export declare const RequestSnapshotSchema: import("effect/Schema").Struct<{
    readonly method: import("effect/Schema").String;
    readonly url: import("effect/Schema").String;
    readonly headers: import("effect/Schema").$Record<import("effect/Schema").String, import("effect/Schema").String>;
    readonly body: import("effect/Schema").String;
}>;
export type { RequestSnapshot } from "../api.js";
export declare const ResponseSnapshotSchema: import("effect/Schema").Struct<{
    readonly status: import("effect/Schema").Number;
    readonly headers: import("effect/Schema").$Record<import("effect/Schema").String, import("effect/Schema").String>;
    readonly body: import("effect/Schema").String;
    readonly bodyEncoding: import("effect/Schema").optional<import("effect/Schema").Literals<readonly ["text", "base64"]>>;
}>;
export interface ResponseSnapshot extends Schema.Schema.Type<typeof ResponseSnapshotSchema> {
}
export declare const HttpInteractionSchema: import("effect/Schema").Struct<{
    readonly transport: import("effect/Schema").tag<"http">;
    readonly request: import("effect/Schema").Struct<{
        readonly method: import("effect/Schema").String;
        readonly url: import("effect/Schema").String;
        readonly headers: import("effect/Schema").$Record<import("effect/Schema").String, import("effect/Schema").String>;
        readonly body: import("effect/Schema").String;
    }>;
    readonly response: import("effect/Schema").Struct<{
        readonly status: import("effect/Schema").Number;
        readonly headers: import("effect/Schema").$Record<import("effect/Schema").String, import("effect/Schema").String>;
        readonly body: import("effect/Schema").String;
        readonly bodyEncoding: import("effect/Schema").optional<import("effect/Schema").Literals<readonly ["text", "base64"]>>;
    }>;
}>;
export interface HttpInteraction extends Schema.Schema.Type<typeof HttpInteractionSchema> {
}
export * as HttpModel from "./model.vibe";
