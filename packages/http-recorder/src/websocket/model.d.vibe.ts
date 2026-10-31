import { Schema } from "effect";
export declare const WebSocketEventSchema: import("effect/Schema").Union<readonly [import("effect/Schema").Struct<{
    readonly direction: import("effect/Schema").Literals<readonly ["client", "server"]>;
    readonly kind: import("effect/Schema").tag<"text">;
    readonly body: import("effect/Schema").String;
}>, import("effect/Schema").Struct<{
    readonly direction: import("effect/Schema").Literals<readonly ["client", "server"]>;
    readonly kind: import("effect/Schema").tag<"binary">;
    readonly body: import("effect/Schema").String;
    readonly bodyEncoding: import("effect/Schema").Literal<"base64">;
}>]>;
export type WebSocketEvent = Schema.Schema.Type<typeof WebSocketEventSchema>;
export declare const WebSocketInteractionSchema: import("effect/Schema").Struct<{
    readonly transport: import("effect/Schema").tag<"websocket">;
    readonly connection: import("effect/Schema").optional<import("effect/Schema").Struct<{
        readonly sequence: import("effect/Schema").Number;
        readonly url: import("effect/Schema").String;
        readonly protocols: import("effect/Schema").$Array<import("effect/Schema").String>;
        readonly close: import("effect/Schema").Struct<{
            readonly code: import("effect/Schema").Number;
            readonly reason: import("effect/Schema").String;
        }>;
    }>>;
    readonly events: import("effect/Schema").$Array<import("effect/Schema").Union<readonly [import("effect/Schema").Struct<{
        readonly direction: import("effect/Schema").Literals<readonly ["client", "server"]>;
        readonly kind: import("effect/Schema").tag<"text">;
        readonly body: import("effect/Schema").String;
    }>, import("effect/Schema").Struct<{
        readonly direction: import("effect/Schema").Literals<readonly ["client", "server"]>;
        readonly kind: import("effect/Schema").tag<"binary">;
        readonly body: import("effect/Schema").String;
        readonly bodyEncoding: import("effect/Schema").Literal<"base64">;
    }>]>>;
}>;
export interface WebSocketInteraction extends Schema.Schema.Type<typeof WebSocketInteractionSchema> {
}
