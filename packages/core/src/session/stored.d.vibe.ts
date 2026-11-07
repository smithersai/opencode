import { Schema } from "effect";
export * as SessionStored from "./stored.vibe";
import { FileAttachment, MediaRef } from "@opencode/schema/prompt";
/**
 * Stored rows may reference a `blob` row as `media:` and the lowercase hex SHA-256 of its raw bytes. The blob
 * row holds the bytes and size; the ref names no server route.
 */
export declare const Ref: Schema.String;
export type Ref = MediaRef;
/** The `blob` hash a {@link Ref} names. */
export declare const refHash: (ref: Ref) => string;
/** The {@link Ref} naming a `blob` hash. */
export declare const ref: (hash: string) => Ref;
/** A user file whose bytes live in `blob`. */
export interface FileRef extends Schema.Schema.Type<typeof FileRef> {
}
export declare const FileRef: Schema.Struct<{
    readonly mime: Schema.String;
    readonly source: Schema.Union<readonly [Schema.Struct<{
        readonly type: Schema.Literal<"inline">;
    }>, Schema.Struct<{
        readonly type: Schema.Literal<"uri">;
        readonly uri: Schema.String;
    }>]>;
    readonly name: Schema.decodeTo<Schema.optional<Schema.toType<Schema.String>>, Schema.optionalKey<Schema.String>, never, never>;
    readonly description: Schema.decodeTo<Schema.optional<Schema.toType<Schema.String>>, Schema.optionalKey<Schema.String>, never, never>;
    readonly mention: Schema.decodeTo<Schema.optional<Schema.toType<Schema.Struct<{
        readonly start: Schema.Finite;
        readonly end: Schema.Finite;
        readonly text: Schema.String;
    }>>>, Schema.optionalKey<Schema.Struct<{
        readonly start: Schema.Finite;
        readonly end: Schema.Finite;
        readonly text: Schema.String;
    }>>, never, never>;
    readonly uri: Schema.String;
}>;
export declare const File: Schema.Union<readonly [Schema.Struct<{
    readonly data: Schema.String;
    readonly mime: Schema.String;
    readonly source: Schema.Union<readonly [Schema.Struct<{
        readonly type: Schema.Literal<"inline">;
    }>, Schema.Struct<{
        readonly type: Schema.Literal<"uri">;
        readonly uri: Schema.String;
    }>]>;
    readonly name: Schema.decodeTo<Schema.optional<Schema.toType<Schema.String>>, Schema.optionalKey<Schema.String>, never, never>;
    readonly description: Schema.decodeTo<Schema.optional<Schema.toType<Schema.String>>, Schema.optionalKey<Schema.String>, never, never>;
    readonly mention: Schema.decodeTo<Schema.optional<Schema.toType<Schema.Struct<{
        readonly start: Schema.Finite;
        readonly end: Schema.Finite;
        readonly text: Schema.String;
    }>>>, Schema.optionalKey<Schema.Struct<{
        readonly start: Schema.Finite;
        readonly end: Schema.Finite;
        readonly text: Schema.String;
    }>>, never, never>;
}> & {
    create: (input: FileAttachment) => {
        readonly data: string;
        readonly mime: string;
        readonly source: {
            readonly type: "inline";
        } | {
            readonly type: "uri";
            readonly uri: string;
        };
        readonly name?: string | undefined;
        readonly description?: string | undefined;
        readonly mention?: {
            readonly start: number;
            readonly end: number;
            readonly text: string;
        } | undefined;
    };
}, Schema.Struct<{
    readonly mime: Schema.String;
    readonly source: Schema.Union<readonly [Schema.Struct<{
        readonly type: Schema.Literal<"inline">;
    }>, Schema.Struct<{
        readonly type: Schema.Literal<"uri">;
        readonly uri: Schema.String;
    }>]>;
    readonly name: Schema.decodeTo<Schema.optional<Schema.toType<Schema.String>>, Schema.optionalKey<Schema.String>, never, never>;
    readonly description: Schema.decodeTo<Schema.optional<Schema.toType<Schema.String>>, Schema.optionalKey<Schema.String>, never, never>;
    readonly mention: Schema.decodeTo<Schema.optional<Schema.toType<Schema.Struct<{
        readonly start: Schema.Finite;
        readonly end: Schema.Finite;
        readonly text: Schema.String;
    }>>>, Schema.optionalKey<Schema.Struct<{
        readonly start: Schema.Finite;
        readonly end: Schema.Finite;
        readonly text: Schema.String;
    }>>, never, never>;
    readonly uri: Schema.String;
}>]>;
export type File = typeof File.Type;
/** A tool result file whose bytes live in `blob`. */
export interface ToolFileRef extends Schema.Schema.Type<typeof ToolFileRef> {
}
export declare const ToolFileRef: Schema.Struct<{
    readonly type: Schema.Literal<"file">;
    readonly mime: Schema.String;
    readonly name: Schema.optional<Schema.String>;
    readonly uri: Schema.String;
}>;
/** A `session_inbox` user payload as stored, whose files may be refs. */
export interface UserPayload extends Schema.Schema.Type<typeof UserPayload> {
}
export declare const UserPayload: Schema.Struct<{
    readonly text: Schema.String;
    readonly agents: Schema.decodeTo<Schema.optional<Schema.toType<Schema.$Array<Schema.Struct<{
        readonly name: Schema.String;
        readonly mention: Schema.decodeTo<Schema.optional<Schema.toType<Schema.Struct<{
            readonly start: Schema.Finite;
            readonly end: Schema.Finite;
            readonly text: Schema.String;
        }>>>, Schema.optionalKey<Schema.Struct<{
            readonly start: Schema.Finite;
            readonly end: Schema.Finite;
            readonly text: Schema.String;
        }>>, never, never>;
    }>>>>, Schema.optionalKey<Schema.$Array<Schema.Struct<{
        readonly name: Schema.String;
        readonly mention: Schema.decodeTo<Schema.optional<Schema.toType<Schema.Struct<{
            readonly start: Schema.Finite;
            readonly end: Schema.Finite;
            readonly text: Schema.String;
        }>>>, Schema.optionalKey<Schema.Struct<{
            readonly start: Schema.Finite;
            readonly end: Schema.Finite;
            readonly text: Schema.String;
        }>>, never, never>;
    }>>>, never, never>;
    readonly skills: Schema.decodeTo<Schema.optional<Schema.toType<Schema.$Array<Schema.Struct<{
        readonly id: Schema.brand<Schema.String, "Skill.ID">;
        readonly name: Schema.brand<Schema.String, "Skill.Name">;
        readonly text: Schema.decodeTo<Schema.optional<Schema.toType<Schema.String>>, Schema.optionalKey<Schema.String>, never, never>;
        readonly mention: Schema.decodeTo<Schema.optional<Schema.toType<Schema.Struct<{
            readonly start: Schema.Finite;
            readonly end: Schema.Finite;
            readonly text: Schema.String;
        }>>>, Schema.optionalKey<Schema.Struct<{
            readonly start: Schema.Finite;
            readonly end: Schema.Finite;
            readonly text: Schema.String;
        }>>, never, never>;
    }>>>>, Schema.optionalKey<Schema.$Array<Schema.Struct<{
        readonly id: Schema.brand<Schema.String, "Skill.ID">;
        readonly name: Schema.brand<Schema.String, "Skill.Name">;
        readonly text: Schema.decodeTo<Schema.optional<Schema.toType<Schema.String>>, Schema.optionalKey<Schema.String>, never, never>;
        readonly mention: Schema.decodeTo<Schema.optional<Schema.toType<Schema.Struct<{
            readonly start: Schema.Finite;
            readonly end: Schema.Finite;
            readonly text: Schema.String;
        }>>>, Schema.optionalKey<Schema.Struct<{
            readonly start: Schema.Finite;
            readonly end: Schema.Finite;
            readonly text: Schema.String;
        }>>, never, never>;
    }>>>, never, never>;
    readonly metadata: Schema.decodeTo<Schema.optional<Schema.toType<Schema.$Record<Schema.String, Schema.Unknown>>>, Schema.optionalKey<Schema.$Record<Schema.String, Schema.Unknown>>, never, never>;
    readonly files: Schema.decodeTo<Schema.optional<Schema.toType<Schema.$Array<Schema.Union<readonly [Schema.Struct<{
        readonly data: Schema.String;
        readonly mime: Schema.String;
        readonly source: Schema.Union<readonly [Schema.Struct<{
            readonly type: Schema.Literal<"inline">;
        }>, Schema.Struct<{
            readonly type: Schema.Literal<"uri">;
            readonly uri: Schema.String;
        }>]>;
        readonly name: Schema.decodeTo<Schema.optional<Schema.toType<Schema.String>>, Schema.optionalKey<Schema.String>, never, never>;
        readonly description: Schema.decodeTo<Schema.optional<Schema.toType<Schema.String>>, Schema.optionalKey<Schema.String>, never, never>;
        readonly mention: Schema.decodeTo<Schema.optional<Schema.toType<Schema.Struct<{
            readonly start: Schema.Finite;
            readonly end: Schema.Finite;
            readonly text: Schema.String;
        }>>>, Schema.optionalKey<Schema.Struct<{
            readonly start: Schema.Finite;
            readonly end: Schema.Finite;
            readonly text: Schema.String;
        }>>, never, never>;
    }> & {
        create: (input: FileAttachment) => {
            readonly data: string;
            readonly mime: string;
            readonly source: {
                readonly type: "inline";
            } | {
                readonly type: "uri";
                readonly uri: string;
            };
            readonly name?: string | undefined;
            readonly description?: string | undefined;
            readonly mention?: {
                readonly start: number;
                readonly end: number;
                readonly text: string;
            } | undefined;
        };
    }, Schema.Struct<{
        readonly mime: Schema.String;
        readonly source: Schema.Union<readonly [Schema.Struct<{
            readonly type: Schema.Literal<"inline">;
        }>, Schema.Struct<{
            readonly type: Schema.Literal<"uri">;
            readonly uri: Schema.String;
        }>]>;
        readonly name: Schema.decodeTo<Schema.optional<Schema.toType<Schema.String>>, Schema.optionalKey<Schema.String>, never, never>;
        readonly description: Schema.decodeTo<Schema.optional<Schema.toType<Schema.String>>, Schema.optionalKey<Schema.String>, never, never>;
        readonly mention: Schema.decodeTo<Schema.optional<Schema.toType<Schema.Struct<{
            readonly start: Schema.Finite;
            readonly end: Schema.Finite;
            readonly text: Schema.String;
        }>>>, Schema.optionalKey<Schema.Struct<{
            readonly start: Schema.Finite;
            readonly end: Schema.Finite;
            readonly text: Schema.String;
        }>>, never, never>;
        readonly uri: Schema.String;
    }>]>>>>, Schema.optionalKey<Schema.$Array<Schema.Union<readonly [Schema.Struct<{
        readonly data: Schema.String;
        readonly mime: Schema.String;
        readonly source: Schema.Union<readonly [Schema.Struct<{
            readonly type: Schema.Literal<"inline">;
        }>, Schema.Struct<{
            readonly type: Schema.Literal<"uri">;
            readonly uri: Schema.String;
        }>]>;
        readonly name: Schema.decodeTo<Schema.optional<Schema.toType<Schema.String>>, Schema.optionalKey<Schema.String>, never, never>;
        readonly description: Schema.decodeTo<Schema.optional<Schema.toType<Schema.String>>, Schema.optionalKey<Schema.String>, never, never>;
        readonly mention: Schema.decodeTo<Schema.optional<Schema.toType<Schema.Struct<{
            readonly start: Schema.Finite;
            readonly end: Schema.Finite;
            readonly text: Schema.String;
        }>>>, Schema.optionalKey<Schema.Struct<{
            readonly start: Schema.Finite;
            readonly end: Schema.Finite;
            readonly text: Schema.String;
        }>>, never, never>;
    }> & {
        create: (input: FileAttachment) => {
            readonly data: string;
            readonly mime: string;
            readonly source: {
                readonly type: "inline";
            } | {
                readonly type: "uri";
                readonly uri: string;
            };
            readonly name?: string | undefined;
            readonly description?: string | undefined;
            readonly mention?: {
                readonly start: number;
                readonly end: number;
                readonly text: string;
            } | undefined;
        };
    }, Schema.Struct<{
        readonly mime: Schema.String;
        readonly source: Schema.Union<readonly [Schema.Struct<{
            readonly type: Schema.Literal<"inline">;
        }>, Schema.Struct<{
            readonly type: Schema.Literal<"uri">;
            readonly uri: Schema.String;
        }>]>;
        readonly name: Schema.decodeTo<Schema.optional<Schema.toType<Schema.String>>, Schema.optionalKey<Schema.String>, never, never>;
        readonly description: Schema.decodeTo<Schema.optional<Schema.toType<Schema.String>>, Schema.optionalKey<Schema.String>, never, never>;
        readonly mention: Schema.decodeTo<Schema.optional<Schema.toType<Schema.Struct<{
            readonly start: Schema.Finite;
            readonly end: Schema.Finite;
            readonly text: Schema.String;
        }>>>, Schema.optionalKey<Schema.Struct<{
            readonly start: Schema.Finite;
            readonly end: Schema.Finite;
            readonly text: Schema.String;
        }>>, never, never>;
        readonly uri: Schema.String;
    }>]>>>, never, never>;
}>;
/** A `session_message` user message as stored, whose files may be refs. */
export interface User extends Schema.Schema.Type<typeof User> {
}
export declare const User: Schema.Struct<{
    readonly id: Schema.brand<Schema.String, "Session.Message.ID"> & {
        create: () => string & import("effect/Brand").Brand<"Session.Message.ID">;
        fromEvent: (eventID: string) => string & import("effect/Brand").Brand<"Session.Message.ID">;
    };
    readonly metadata: Schema.decodeTo<Schema.optional<Schema.toType<Schema.$Record<Schema.String, Schema.Unknown>>>, Schema.optionalKey<Schema.$Record<Schema.String, Schema.Unknown>>, never, never>;
    readonly time: Schema.Struct<{
        readonly created: Schema.decodeTo<Schema.DateTimeUtc, Schema.Finite, never, never>;
    }>;
    readonly text: Schema.String;
    readonly agents: Schema.decodeTo<Schema.optional<Schema.toType<Schema.$Array<Schema.Struct<{
        readonly name: Schema.String;
        readonly mention: Schema.decodeTo<Schema.optional<Schema.toType<Schema.Struct<{
            readonly start: Schema.Finite;
            readonly end: Schema.Finite;
            readonly text: Schema.String;
        }>>>, Schema.optionalKey<Schema.Struct<{
            readonly start: Schema.Finite;
            readonly end: Schema.Finite;
            readonly text: Schema.String;
        }>>, never, never>;
    }>>>>, Schema.optionalKey<Schema.$Array<Schema.Struct<{
        readonly name: Schema.String;
        readonly mention: Schema.decodeTo<Schema.optional<Schema.toType<Schema.Struct<{
            readonly start: Schema.Finite;
            readonly end: Schema.Finite;
            readonly text: Schema.String;
        }>>>, Schema.optionalKey<Schema.Struct<{
            readonly start: Schema.Finite;
            readonly end: Schema.Finite;
            readonly text: Schema.String;
        }>>, never, never>;
    }>>>, never, never>;
    readonly skills: Schema.decodeTo<Schema.optional<Schema.toType<Schema.$Array<Schema.Struct<{
        readonly id: Schema.brand<Schema.String, "Skill.ID">;
        readonly name: Schema.brand<Schema.String, "Skill.Name">;
        readonly text: Schema.decodeTo<Schema.optional<Schema.toType<Schema.String>>, Schema.optionalKey<Schema.String>, never, never>;
        readonly mention: Schema.decodeTo<Schema.optional<Schema.toType<Schema.Struct<{
            readonly start: Schema.Finite;
            readonly end: Schema.Finite;
            readonly text: Schema.String;
        }>>>, Schema.optionalKey<Schema.Struct<{
            readonly start: Schema.Finite;
            readonly end: Schema.Finite;
            readonly text: Schema.String;
        }>>, never, never>;
    }>>>>, Schema.optionalKey<Schema.$Array<Schema.Struct<{
        readonly id: Schema.brand<Schema.String, "Skill.ID">;
        readonly name: Schema.brand<Schema.String, "Skill.Name">;
        readonly text: Schema.decodeTo<Schema.optional<Schema.toType<Schema.String>>, Schema.optionalKey<Schema.String>, never, never>;
        readonly mention: Schema.decodeTo<Schema.optional<Schema.toType<Schema.Struct<{
            readonly start: Schema.Finite;
            readonly end: Schema.Finite;
            readonly text: Schema.String;
        }>>>, Schema.optionalKey<Schema.Struct<{
            readonly start: Schema.Finite;
            readonly end: Schema.Finite;
            readonly text: Schema.String;
        }>>, never, never>;
    }>>>, never, never>;
    readonly type: Schema.tag<"user">;
    readonly files: Schema.decodeTo<Schema.optional<Schema.toType<Schema.$Array<Schema.Union<readonly [Schema.Struct<{
        readonly data: Schema.String;
        readonly mime: Schema.String;
        readonly source: Schema.Union<readonly [Schema.Struct<{
            readonly type: Schema.Literal<"inline">;
        }>, Schema.Struct<{
            readonly type: Schema.Literal<"uri">;
            readonly uri: Schema.String;
        }>]>;
        readonly name: Schema.decodeTo<Schema.optional<Schema.toType<Schema.String>>, Schema.optionalKey<Schema.String>, never, never>;
        readonly description: Schema.decodeTo<Schema.optional<Schema.toType<Schema.String>>, Schema.optionalKey<Schema.String>, never, never>;
        readonly mention: Schema.decodeTo<Schema.optional<Schema.toType<Schema.Struct<{
            readonly start: Schema.Finite;
            readonly end: Schema.Finite;
            readonly text: Schema.String;
        }>>>, Schema.optionalKey<Schema.Struct<{
            readonly start: Schema.Finite;
            readonly end: Schema.Finite;
            readonly text: Schema.String;
        }>>, never, never>;
    }> & {
        create: (input: FileAttachment) => {
            readonly data: string;
            readonly mime: string;
            readonly source: {
                readonly type: "inline";
            } | {
                readonly type: "uri";
                readonly uri: string;
            };
            readonly name?: string | undefined;
            readonly description?: string | undefined;
            readonly mention?: {
                readonly start: number;
                readonly end: number;
                readonly text: string;
            } | undefined;
        };
    }, Schema.Struct<{
        readonly mime: Schema.String;
        readonly source: Schema.Union<readonly [Schema.Struct<{
            readonly type: Schema.Literal<"inline">;
        }>, Schema.Struct<{
            readonly type: Schema.Literal<"uri">;
            readonly uri: Schema.String;
        }>]>;
        readonly name: Schema.decodeTo<Schema.optional<Schema.toType<Schema.String>>, Schema.optionalKey<Schema.String>, never, never>;
        readonly description: Schema.decodeTo<Schema.optional<Schema.toType<Schema.String>>, Schema.optionalKey<Schema.String>, never, never>;
        readonly mention: Schema.decodeTo<Schema.optional<Schema.toType<Schema.Struct<{
            readonly start: Schema.Finite;
            readonly end: Schema.Finite;
            readonly text: Schema.String;
        }>>>, Schema.optionalKey<Schema.Struct<{
            readonly start: Schema.Finite;
            readonly end: Schema.Finite;
            readonly text: Schema.String;
        }>>, never, never>;
        readonly uri: Schema.String;
    }>]>>>>, Schema.optionalKey<Schema.$Array<Schema.Union<readonly [Schema.Struct<{
        readonly data: Schema.String;
        readonly mime: Schema.String;
        readonly source: Schema.Union<readonly [Schema.Struct<{
            readonly type: Schema.Literal<"inline">;
        }>, Schema.Struct<{
            readonly type: Schema.Literal<"uri">;
            readonly uri: Schema.String;
        }>]>;
        readonly name: Schema.decodeTo<Schema.optional<Schema.toType<Schema.String>>, Schema.optionalKey<Schema.String>, never, never>;
        readonly description: Schema.decodeTo<Schema.optional<Schema.toType<Schema.String>>, Schema.optionalKey<Schema.String>, never, never>;
        readonly mention: Schema.decodeTo<Schema.optional<Schema.toType<Schema.Struct<{
            readonly start: Schema.Finite;
            readonly end: Schema.Finite;
            readonly text: Schema.String;
        }>>>, Schema.optionalKey<Schema.Struct<{
            readonly start: Schema.Finite;
            readonly end: Schema.Finite;
            readonly text: Schema.String;
        }>>, never, never>;
    }> & {
        create: (input: FileAttachment) => {
            readonly data: string;
            readonly mime: string;
            readonly source: {
                readonly type: "inline";
            } | {
                readonly type: "uri";
                readonly uri: string;
            };
            readonly name?: string | undefined;
            readonly description?: string | undefined;
            readonly mention?: {
                readonly start: number;
                readonly end: number;
                readonly text: string;
            } | undefined;
        };
    }, Schema.Struct<{
        readonly mime: Schema.String;
        readonly source: Schema.Union<readonly [Schema.Struct<{
            readonly type: Schema.Literal<"inline">;
        }>, Schema.Struct<{
            readonly type: Schema.Literal<"uri">;
            readonly uri: Schema.String;
        }>]>;
        readonly name: Schema.decodeTo<Schema.optional<Schema.toType<Schema.String>>, Schema.optionalKey<Schema.String>, never, never>;
        readonly description: Schema.decodeTo<Schema.optional<Schema.toType<Schema.String>>, Schema.optionalKey<Schema.String>, never, never>;
        readonly mention: Schema.decodeTo<Schema.optional<Schema.toType<Schema.Struct<{
            readonly start: Schema.Finite;
            readonly end: Schema.Finite;
            readonly text: Schema.String;
        }>>>, Schema.optionalKey<Schema.Struct<{
            readonly start: Schema.Finite;
            readonly end: Schema.Finite;
            readonly text: Schema.String;
        }>>, never, never>;
        readonly uri: Schema.String;
    }>]>>>, never, never>;
}>;
