import { Schema } from "effect";
declare const Envelope: Schema.Struct<{
    readonly type: Schema.String;
    readonly event_id: Schema.optional<Schema.String>;
    readonly client_event_id: Schema.optional<Schema.String>;
    readonly delta: Schema.optional<Schema.String>;
    readonly delegation_id: Schema.optional<Schema.NullOr<Schema.String>>;
    readonly delegation: Schema.optional<Schema.Struct<{
        readonly id: Schema.String;
        readonly target: Schema.String;
    }>>;
    readonly event: Schema.optional<Schema.Struct<{
        readonly type: Schema.String;
        readonly item: Schema.optional<Schema.Struct<{
            readonly type: Schema.String;
            readonly call_id: Schema.optional<Schema.String>;
            readonly name: Schema.optional<Schema.String>;
            readonly arguments: Schema.optional<Schema.String>;
        }>>;
        readonly response: Schema.optional<Schema.Struct<{
            readonly id: Schema.String;
            readonly status: Schema.optional<Schema.String>;
        }>>;
    }>>;
}>;
export type VoiceEvent = typeof Envelope.Type;
export declare const decodeEvent: (raw: string) => {
    readonly type: string;
    readonly event_id?: string | undefined;
    readonly client_event_id?: string | undefined;
    readonly delta?: string | undefined;
    readonly delegation_id?: string | null | undefined;
    readonly delegation?: {
        readonly id: string;
        readonly target: string;
    } | undefined;
    readonly event?: {
        readonly type: string;
        readonly item?: {
            readonly type: string;
            readonly call_id?: string | undefined;
            readonly name?: string | undefined;
            readonly arguments?: string | undefined;
        } | undefined;
        readonly response?: {
            readonly id: string;
            readonly status?: string | undefined;
        } | undefined;
    } | undefined;
} | undefined;
export declare const decodeArguments: (input: unknown, options?: import("effect/SchemaAST").ParseOptions) => {
    readonly session_id?: string | undefined;
    readonly query?: string | undefined;
    readonly limit?: number | undefined;
    readonly cursor?: string | undefined;
    readonly directory?: string | undefined;
    readonly title?: string | undefined;
    readonly text?: string | undefined;
    readonly delivery?: "queue" | "steer" | undefined;
    readonly model?: string | undefined;
    readonly variant?: string | undefined;
};
export type ToolCall = {
    call_id: string;
    name: string;
    arguments: string;
};
export {};
