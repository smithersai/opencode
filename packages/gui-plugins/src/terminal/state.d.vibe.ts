import { Schema } from "effect";
declare const PTY: Schema.Struct<{
    readonly id: Schema.NonEmptyString;
    readonly tab: Schema.middlewareDecoding<Schema.optional<Schema.NonEmptyString>, never>;
    readonly title: Schema.middlewareDecoding<Schema.withDecodingDefaultType<Schema.String, never>, never>;
    readonly titleNumber: Schema.middlewareDecoding<Schema.withDecodingDefaultType<Schema.Finite, never>, never>;
    readonly rows: Schema.middlewareDecoding<Schema.optional<Schema.Finite>, never>;
    readonly cols: Schema.middlewareDecoding<Schema.optional<Schema.Finite>, never>;
    readonly buffer: Schema.middlewareDecoding<Schema.optional<Schema.String>, never>;
    readonly scrollY: Schema.middlewareDecoding<Schema.optional<Schema.Finite>, never>;
    readonly cursor: Schema.middlewareDecoding<Schema.optional<Schema.Finite>, never>;
}>;
export type LocalPTY = typeof PTY.Type;
export declare const MAX_TERMINAL_SESSIONS = 20;
/** The id of a terminal's side panel tab: its first server id, which a clone after a server restart keeps. */
export declare function terminalTab(pty: Pick<LocalPTY, "id" | "tab">): string;
export declare function numberFromTitle(title: string): number | undefined;
export declare const TerminalState: Schema.decodeTo<Schema.toType<Schema.Struct<{
    readonly active: Schema.middlewareDecoding<Schema.optional<Schema.String>, never>;
    readonly all: Schema.middlewareDecoding<Schema.withDecodingDefaultType<Schema.decodeTo<Schema.$Array<Schema.toType<Schema.Struct<{
        readonly id: Schema.NonEmptyString;
        readonly tab: Schema.middlewareDecoding<Schema.optional<Schema.NonEmptyString>, never>;
        readonly title: Schema.middlewareDecoding<Schema.withDecodingDefaultType<Schema.String, never>, never>;
        readonly titleNumber: Schema.middlewareDecoding<Schema.withDecodingDefaultType<Schema.Finite, never>, never>;
        readonly rows: Schema.middlewareDecoding<Schema.optional<Schema.Finite>, never>;
        readonly cols: Schema.middlewareDecoding<Schema.optional<Schema.Finite>, never>;
        readonly buffer: Schema.middlewareDecoding<Schema.optional<Schema.String>, never>;
        readonly scrollY: Schema.middlewareDecoding<Schema.optional<Schema.Finite>, never>;
        readonly cursor: Schema.middlewareDecoding<Schema.optional<Schema.Finite>, never>;
    }>>>, Schema.$Array<Schema.Unknown>, never, never>, never>, never>;
}>>, Schema.Struct<{
    readonly active: Schema.middlewareDecoding<Schema.optional<Schema.String>, never>;
    readonly all: Schema.middlewareDecoding<Schema.withDecodingDefaultType<Schema.decodeTo<Schema.$Array<Schema.toType<Schema.Struct<{
        readonly id: Schema.NonEmptyString;
        readonly tab: Schema.middlewareDecoding<Schema.optional<Schema.NonEmptyString>, never>;
        readonly title: Schema.middlewareDecoding<Schema.withDecodingDefaultType<Schema.String, never>, never>;
        readonly titleNumber: Schema.middlewareDecoding<Schema.withDecodingDefaultType<Schema.Finite, never>, never>;
        readonly rows: Schema.middlewareDecoding<Schema.optional<Schema.Finite>, never>;
        readonly cols: Schema.middlewareDecoding<Schema.optional<Schema.Finite>, never>;
        readonly buffer: Schema.middlewareDecoding<Schema.optional<Schema.String>, never>;
        readonly scrollY: Schema.middlewareDecoding<Schema.optional<Schema.Finite>, never>;
        readonly cursor: Schema.middlewareDecoding<Schema.optional<Schema.Finite>, never>;
    }>>>, Schema.$Array<Schema.Unknown>, never, never>, never>, never>;
}>, never, never>;
export {};
