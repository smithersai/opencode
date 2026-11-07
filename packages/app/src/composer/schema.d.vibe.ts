import { Schema } from "effect";
export declare const TextPart: Schema.Struct<{
    readonly content: Schema.mutableKey<Schema.String>;
    readonly start: Schema.mutableKey<Schema.Number>;
    readonly end: Schema.mutableKey<Schema.Number>;
    readonly type: Schema.mutableKey<Schema.Literal<"text">>;
}>;
export type TextPart = typeof TextPart.Type;
export declare const FileAttachmentPart: Schema.Struct<{
    readonly content: Schema.mutableKey<Schema.String>;
    readonly start: Schema.mutableKey<Schema.Number>;
    readonly end: Schema.mutableKey<Schema.Number>;
    readonly type: Schema.mutableKey<Schema.Literal<"file">>;
    readonly path: Schema.mutableKey<Schema.String>;
    readonly selection: Schema.mutableKey<Schema.middlewareDecoding<Schema.optional<Schema.Struct<{
        readonly startLine: Schema.mutableKey<Schema.Number>;
        readonly startChar: Schema.mutableKey<Schema.Number>;
        readonly endLine: Schema.mutableKey<Schema.Number>;
        readonly endChar: Schema.mutableKey<Schema.Number>;
    }>>, never>>;
    readonly mime: Schema.mutableKey<Schema.middlewareDecoding<Schema.optional<Schema.String>, never>>;
    readonly filename: Schema.mutableKey<Schema.middlewareDecoding<Schema.optional<Schema.String>, never>>;
    readonly description: Schema.mutableKey<Schema.middlewareDecoding<Schema.optional<Schema.String>, never>>;
    readonly url: Schema.mutableKey<Schema.middlewareDecoding<Schema.optional<Schema.String>, never>>;
    readonly source: Schema.mutableKey<Schema.middlewareDecoding<Schema.optional<Schema.Union<readonly [Schema.Struct<{
        readonly type: Schema.Literal<"file">;
        readonly text: Schema.Struct<{
            readonly value: Schema.String;
            readonly start: Schema.Number;
            readonly end: Schema.Number;
        }>;
        readonly path: Schema.String;
    }>, Schema.Struct<{
        readonly type: Schema.Literal<"symbol">;
        readonly text: Schema.Struct<{
            readonly value: Schema.String;
            readonly start: Schema.Number;
            readonly end: Schema.Number;
        }>;
        readonly path: Schema.String;
        readonly range: Schema.Struct<{
            readonly start: Schema.Struct<{
                readonly line: Schema.Number;
                readonly character: Schema.Number;
            }>;
            readonly end: Schema.Struct<{
                readonly line: Schema.Number;
                readonly character: Schema.Number;
            }>;
        }>;
        readonly name: Schema.String;
        readonly kind: Schema.Number;
    }>, Schema.Struct<{
        readonly type: Schema.Literal<"resource">;
        readonly text: Schema.Struct<{
            readonly value: Schema.String;
            readonly start: Schema.Number;
            readonly end: Schema.Number;
        }>;
        readonly clientName: Schema.String;
        readonly uri: Schema.String;
    }>]>>, never>>;
}>;
export type FileAttachmentPart = typeof FileAttachmentPart.Type;
export declare const AgentPart: Schema.Struct<{
    readonly content: Schema.mutableKey<Schema.String>;
    readonly start: Schema.mutableKey<Schema.Number>;
    readonly end: Schema.mutableKey<Schema.Number>;
    readonly type: Schema.mutableKey<Schema.Literal<"agent">>;
    readonly name: Schema.mutableKey<Schema.String>;
}>;
export type AgentPart = typeof AgentPart.Type;
export declare const SkillPart: Schema.Struct<{
    readonly content: Schema.mutableKey<Schema.String>;
    readonly start: Schema.mutableKey<Schema.Number>;
    readonly end: Schema.mutableKey<Schema.Number>;
    readonly type: Schema.mutableKey<Schema.Literal<"skill">>;
    readonly id: Schema.mutableKey<Schema.brand<Schema.String, "Skill.ID">>;
    readonly name: Schema.mutableKey<Schema.brand<Schema.String, "Skill.Name">>;
}>;
export type SkillPart = typeof SkillPart.Type;
export declare const SessionPart: Schema.Struct<{
    readonly content: Schema.mutableKey<Schema.String>;
    readonly start: Schema.mutableKey<Schema.Number>;
    readonly end: Schema.mutableKey<Schema.Number>;
    readonly type: Schema.mutableKey<Schema.Literal<"session">>;
    readonly id: Schema.mutableKey<Schema.brand<Schema.String, "SessionID"> & {
        create: () => string & import("effect/Brand").Brand<"SessionID">;
    }>;
}>;
export type SessionPart = typeof SessionPart.Type;
export declare const ImageAttachmentPart: Schema.decodeTo<Schema.toType<Schema.Struct<{
    readonly type: Schema.mutableKey<Schema.Literal<"image">>;
    readonly id: Schema.mutableKey<Schema.String>;
    readonly filename: Schema.mutableKey<Schema.String>;
    readonly sourcePath: Schema.mutableKey<Schema.middlewareDecoding<Schema.optional<Schema.String>, never>>;
    readonly mime: Schema.mutableKey<Schema.String>;
    readonly blob: Schema.mutableKey<Schema.Struct<{
        readonly id: Schema.NonEmptyString;
        readonly url: Schema.String;
    }>>;
}>>, Schema.Struct<{
    readonly type: Schema.Literal<"image">;
    readonly id: Schema.String;
    readonly filename: Schema.String;
    readonly sourcePath: Schema.middlewareDecoding<Schema.optional<Schema.String>, never>;
    readonly mime: Schema.String;
    readonly blob: Schema.middlewareDecoding<Schema.optional<Schema.Struct<{
        readonly id: Schema.middlewareDecoding<Schema.optional<Schema.String>, never>;
        readonly url: Schema.middlewareDecoding<Schema.optional<Schema.String>, never>;
    }>>, never>;
    readonly dataUrl: Schema.middlewareDecoding<Schema.optional<Schema.String>, never>;
}>, never, never>;
export type ImageAttachmentPart = typeof ImageAttachmentPart.Type;
export declare const PathAttachmentPart: Schema.Struct<{
    readonly type: Schema.mutableKey<Schema.Literal<"path">>;
    readonly id: Schema.mutableKey<Schema.String>;
    readonly filename: Schema.mutableKey<Schema.String>;
    readonly mime: Schema.mutableKey<Schema.String>;
    readonly path: Schema.mutableKey<Schema.String>;
}>;
export type PathAttachmentPart = typeof PathAttachmentPart.Type;
export declare const ContentPart: Schema.Union<readonly [Schema.Struct<{
    readonly content: Schema.mutableKey<Schema.String>;
    readonly start: Schema.mutableKey<Schema.Number>;
    readonly end: Schema.mutableKey<Schema.Number>;
    readonly type: Schema.mutableKey<Schema.Literal<"text">>;
}>, Schema.Struct<{
    readonly content: Schema.mutableKey<Schema.String>;
    readonly start: Schema.mutableKey<Schema.Number>;
    readonly end: Schema.mutableKey<Schema.Number>;
    readonly type: Schema.mutableKey<Schema.Literal<"file">>;
    readonly path: Schema.mutableKey<Schema.String>;
    readonly selection: Schema.mutableKey<Schema.middlewareDecoding<Schema.optional<Schema.Struct<{
        readonly startLine: Schema.mutableKey<Schema.Number>;
        readonly startChar: Schema.mutableKey<Schema.Number>;
        readonly endLine: Schema.mutableKey<Schema.Number>;
        readonly endChar: Schema.mutableKey<Schema.Number>;
    }>>, never>>;
    readonly mime: Schema.mutableKey<Schema.middlewareDecoding<Schema.optional<Schema.String>, never>>;
    readonly filename: Schema.mutableKey<Schema.middlewareDecoding<Schema.optional<Schema.String>, never>>;
    readonly description: Schema.mutableKey<Schema.middlewareDecoding<Schema.optional<Schema.String>, never>>;
    readonly url: Schema.mutableKey<Schema.middlewareDecoding<Schema.optional<Schema.String>, never>>;
    readonly source: Schema.mutableKey<Schema.middlewareDecoding<Schema.optional<Schema.Union<readonly [Schema.Struct<{
        readonly type: Schema.Literal<"file">;
        readonly text: Schema.Struct<{
            readonly value: Schema.String;
            readonly start: Schema.Number;
            readonly end: Schema.Number;
        }>;
        readonly path: Schema.String;
    }>, Schema.Struct<{
        readonly type: Schema.Literal<"symbol">;
        readonly text: Schema.Struct<{
            readonly value: Schema.String;
            readonly start: Schema.Number;
            readonly end: Schema.Number;
        }>;
        readonly path: Schema.String;
        readonly range: Schema.Struct<{
            readonly start: Schema.Struct<{
                readonly line: Schema.Number;
                readonly character: Schema.Number;
            }>;
            readonly end: Schema.Struct<{
                readonly line: Schema.Number;
                readonly character: Schema.Number;
            }>;
        }>;
        readonly name: Schema.String;
        readonly kind: Schema.Number;
    }>, Schema.Struct<{
        readonly type: Schema.Literal<"resource">;
        readonly text: Schema.Struct<{
            readonly value: Schema.String;
            readonly start: Schema.Number;
            readonly end: Schema.Number;
        }>;
        readonly clientName: Schema.String;
        readonly uri: Schema.String;
    }>]>>, never>>;
}>, Schema.Struct<{
    readonly content: Schema.mutableKey<Schema.String>;
    readonly start: Schema.mutableKey<Schema.Number>;
    readonly end: Schema.mutableKey<Schema.Number>;
    readonly type: Schema.mutableKey<Schema.Literal<"agent">>;
    readonly name: Schema.mutableKey<Schema.String>;
}>, Schema.Struct<{
    readonly content: Schema.mutableKey<Schema.String>;
    readonly start: Schema.mutableKey<Schema.Number>;
    readonly end: Schema.mutableKey<Schema.Number>;
    readonly type: Schema.mutableKey<Schema.Literal<"skill">>;
    readonly id: Schema.mutableKey<Schema.brand<Schema.String, "Skill.ID">>;
    readonly name: Schema.mutableKey<Schema.brand<Schema.String, "Skill.Name">>;
}>, Schema.Struct<{
    readonly content: Schema.mutableKey<Schema.String>;
    readonly start: Schema.mutableKey<Schema.Number>;
    readonly end: Schema.mutableKey<Schema.Number>;
    readonly type: Schema.mutableKey<Schema.Literal<"session">>;
    readonly id: Schema.mutableKey<Schema.brand<Schema.String, "SessionID"> & {
        create: () => string & import("effect/Brand").Brand<"SessionID">;
    }>;
}>, Schema.decodeTo<Schema.toType<Schema.Struct<{
    readonly type: Schema.mutableKey<Schema.Literal<"image">>;
    readonly id: Schema.mutableKey<Schema.String>;
    readonly filename: Schema.mutableKey<Schema.String>;
    readonly sourcePath: Schema.mutableKey<Schema.middlewareDecoding<Schema.optional<Schema.String>, never>>;
    readonly mime: Schema.mutableKey<Schema.String>;
    readonly blob: Schema.mutableKey<Schema.Struct<{
        readonly id: Schema.NonEmptyString;
        readonly url: Schema.String;
    }>>;
}>>, Schema.Struct<{
    readonly type: Schema.Literal<"image">;
    readonly id: Schema.String;
    readonly filename: Schema.String;
    readonly sourcePath: Schema.middlewareDecoding<Schema.optional<Schema.String>, never>;
    readonly mime: Schema.String;
    readonly blob: Schema.middlewareDecoding<Schema.optional<Schema.Struct<{
        readonly id: Schema.middlewareDecoding<Schema.optional<Schema.String>, never>;
        readonly url: Schema.middlewareDecoding<Schema.optional<Schema.String>, never>;
    }>>, never>;
    readonly dataUrl: Schema.middlewareDecoding<Schema.optional<Schema.String>, never>;
}>, never, never>, Schema.Struct<{
    readonly type: Schema.mutableKey<Schema.Literal<"path">>;
    readonly id: Schema.mutableKey<Schema.String>;
    readonly filename: Schema.mutableKey<Schema.String>;
    readonly mime: Schema.mutableKey<Schema.String>;
    readonly path: Schema.mutableKey<Schema.String>;
}>]>;
export type ContentPart = typeof ContentPart.Type;
export declare const Prompt: Schema.middlewareDecoding<Schema.withDecodingDefaultType<Schema.decodeTo<Schema.mutable<Schema.$Array<Schema.toType<Schema.Union<readonly [Schema.Struct<{
    readonly content: Schema.mutableKey<Schema.String>;
    readonly start: Schema.mutableKey<Schema.Number>;
    readonly end: Schema.mutableKey<Schema.Number>;
    readonly type: Schema.mutableKey<Schema.Literal<"text">>;
}>, Schema.Struct<{
    readonly content: Schema.mutableKey<Schema.String>;
    readonly start: Schema.mutableKey<Schema.Number>;
    readonly end: Schema.mutableKey<Schema.Number>;
    readonly type: Schema.mutableKey<Schema.Literal<"file">>;
    readonly path: Schema.mutableKey<Schema.String>;
    readonly selection: Schema.mutableKey<Schema.middlewareDecoding<Schema.optional<Schema.Struct<{
        readonly startLine: Schema.mutableKey<Schema.Number>;
        readonly startChar: Schema.mutableKey<Schema.Number>;
        readonly endLine: Schema.mutableKey<Schema.Number>;
        readonly endChar: Schema.mutableKey<Schema.Number>;
    }>>, never>>;
    readonly mime: Schema.mutableKey<Schema.middlewareDecoding<Schema.optional<Schema.String>, never>>;
    readonly filename: Schema.mutableKey<Schema.middlewareDecoding<Schema.optional<Schema.String>, never>>;
    readonly description: Schema.mutableKey<Schema.middlewareDecoding<Schema.optional<Schema.String>, never>>;
    readonly url: Schema.mutableKey<Schema.middlewareDecoding<Schema.optional<Schema.String>, never>>;
    readonly source: Schema.mutableKey<Schema.middlewareDecoding<Schema.optional<Schema.Union<readonly [Schema.Struct<{
        readonly type: Schema.Literal<"file">;
        readonly text: Schema.Struct<{
            readonly value: Schema.String;
            readonly start: Schema.Number;
            readonly end: Schema.Number;
        }>;
        readonly path: Schema.String;
    }>, Schema.Struct<{
        readonly type: Schema.Literal<"symbol">;
        readonly text: Schema.Struct<{
            readonly value: Schema.String;
            readonly start: Schema.Number;
            readonly end: Schema.Number;
        }>;
        readonly path: Schema.String;
        readonly range: Schema.Struct<{
            readonly start: Schema.Struct<{
                readonly line: Schema.Number;
                readonly character: Schema.Number;
            }>;
            readonly end: Schema.Struct<{
                readonly line: Schema.Number;
                readonly character: Schema.Number;
            }>;
        }>;
        readonly name: Schema.String;
        readonly kind: Schema.Number;
    }>, Schema.Struct<{
        readonly type: Schema.Literal<"resource">;
        readonly text: Schema.Struct<{
            readonly value: Schema.String;
            readonly start: Schema.Number;
            readonly end: Schema.Number;
        }>;
        readonly clientName: Schema.String;
        readonly uri: Schema.String;
    }>]>>, never>>;
}>, Schema.Struct<{
    readonly content: Schema.mutableKey<Schema.String>;
    readonly start: Schema.mutableKey<Schema.Number>;
    readonly end: Schema.mutableKey<Schema.Number>;
    readonly type: Schema.mutableKey<Schema.Literal<"agent">>;
    readonly name: Schema.mutableKey<Schema.String>;
}>, Schema.Struct<{
    readonly content: Schema.mutableKey<Schema.String>;
    readonly start: Schema.mutableKey<Schema.Number>;
    readonly end: Schema.mutableKey<Schema.Number>;
    readonly type: Schema.mutableKey<Schema.Literal<"skill">>;
    readonly id: Schema.mutableKey<Schema.brand<Schema.String, "Skill.ID">>;
    readonly name: Schema.mutableKey<Schema.brand<Schema.String, "Skill.Name">>;
}>, Schema.Struct<{
    readonly content: Schema.mutableKey<Schema.String>;
    readonly start: Schema.mutableKey<Schema.Number>;
    readonly end: Schema.mutableKey<Schema.Number>;
    readonly type: Schema.mutableKey<Schema.Literal<"session">>;
    readonly id: Schema.mutableKey<Schema.brand<Schema.String, "SessionID"> & {
        create: () => string & import("effect/Brand").Brand<"SessionID">;
    }>;
}>, Schema.decodeTo<Schema.toType<Schema.Struct<{
    readonly type: Schema.mutableKey<Schema.Literal<"image">>;
    readonly id: Schema.mutableKey<Schema.String>;
    readonly filename: Schema.mutableKey<Schema.String>;
    readonly sourcePath: Schema.mutableKey<Schema.middlewareDecoding<Schema.optional<Schema.String>, never>>;
    readonly mime: Schema.mutableKey<Schema.String>;
    readonly blob: Schema.mutableKey<Schema.Struct<{
        readonly id: Schema.NonEmptyString;
        readonly url: Schema.String;
    }>>;
}>>, Schema.Struct<{
    readonly type: Schema.Literal<"image">;
    readonly id: Schema.String;
    readonly filename: Schema.String;
    readonly sourcePath: Schema.middlewareDecoding<Schema.optional<Schema.String>, never>;
    readonly mime: Schema.String;
    readonly blob: Schema.middlewareDecoding<Schema.optional<Schema.Struct<{
        readonly id: Schema.middlewareDecoding<Schema.optional<Schema.String>, never>;
        readonly url: Schema.middlewareDecoding<Schema.optional<Schema.String>, never>;
    }>>, never>;
    readonly dataUrl: Schema.middlewareDecoding<Schema.optional<Schema.String>, never>;
}>, never, never>, Schema.Struct<{
    readonly type: Schema.mutableKey<Schema.Literal<"path">>;
    readonly id: Schema.mutableKey<Schema.String>;
    readonly filename: Schema.mutableKey<Schema.String>;
    readonly mime: Schema.mutableKey<Schema.String>;
    readonly path: Schema.mutableKey<Schema.String>;
}>]>>>>, Schema.$Array<Schema.Unknown>, never, never>, never>, never>;
export type Prompt = typeof Prompt.Type;
export declare const PromptModel: Schema.Struct<{
    readonly providerID: Schema.mutableKey<Schema.String>;
    readonly modelID: Schema.mutableKey<Schema.String>;
    readonly variant: Schema.mutableKey<Schema.middlewareDecoding<Schema.optional<Schema.NullOr<Schema.String>>, never>>;
}>;
export type PromptModel = typeof PromptModel.Type;
export declare const FileContextItem: Schema.Struct<{
    readonly type: Schema.mutableKey<Schema.Literal<"file">>;
    readonly path: Schema.mutableKey<Schema.String>;
    readonly selection: Schema.mutableKey<Schema.middlewareDecoding<Schema.optional<Schema.Struct<{
        readonly startLine: Schema.mutableKey<Schema.Number>;
        readonly startChar: Schema.mutableKey<Schema.Number>;
        readonly endLine: Schema.mutableKey<Schema.Number>;
        readonly endChar: Schema.mutableKey<Schema.Number>;
    }>>, never>>;
    readonly comment: Schema.mutableKey<Schema.middlewareDecoding<Schema.optional<Schema.String>, never>>;
    readonly commentID: Schema.mutableKey<Schema.middlewareDecoding<Schema.optional<Schema.String>, never>>;
    readonly commentOrigin: Schema.mutableKey<Schema.middlewareDecoding<Schema.optional<Schema.Literals<readonly ["review", "file"]>>, never>>;
    readonly preview: Schema.mutableKey<Schema.middlewareDecoding<Schema.optional<Schema.String>, never>>;
    readonly name: Schema.mutableKey<Schema.middlewareDecoding<Schema.optional<Schema.String>, never>>;
    readonly description: Schema.mutableKey<Schema.middlewareDecoding<Schema.optional<Schema.String>, never>>;
}>;
export type FileContextItem = typeof FileContextItem.Type;
/** A plugin's comment on something other than workspace lines, as sent in message metadata. */
export declare const NoteComment: Schema.Struct<{
    readonly type: Schema.mutableKey<Schema.Literal<"note">>;
    readonly origin: Schema.mutableKey<Schema.String>;
    readonly label: Schema.mutableKey<Schema.String>;
    readonly icon: Schema.mutableKey<Schema.String>;
    readonly subject: Schema.mutableKey<Schema.String>;
    readonly href: Schema.mutableKey<Schema.middlewareDecoding<Schema.optional<Schema.String>, never>>;
    readonly live: Schema.mutableKey<Schema.middlewareDecoding<Schema.optional<Schema.Struct<{
        readonly subject: Schema.mutableKey<Schema.String>;
        readonly href: Schema.mutableKey<Schema.middlewareDecoding<Schema.optional<Schema.String>, never>>;
    }>>, never>>;
    readonly comment: Schema.mutableKey<Schema.String>;
}>;
export type NoteComment = typeof NoteComment.Type;
export declare const NoteContextItem: Schema.Struct<{
    readonly type: Schema.mutableKey<Schema.Literal<"note">>;
    readonly origin: Schema.mutableKey<Schema.String>;
    readonly label: Schema.mutableKey<Schema.String>;
    readonly icon: Schema.mutableKey<Schema.String>;
    readonly subject: Schema.mutableKey<Schema.String>;
    readonly href: Schema.mutableKey<Schema.middlewareDecoding<Schema.optional<Schema.String>, never>>;
    readonly live: Schema.mutableKey<Schema.middlewareDecoding<Schema.optional<Schema.Struct<{
        readonly subject: Schema.mutableKey<Schema.String>;
        readonly href: Schema.mutableKey<Schema.middlewareDecoding<Schema.optional<Schema.String>, never>>;
    }>>, never>>;
    readonly comment: Schema.mutableKey<Schema.String>;
    readonly commentID: Schema.mutableKey<Schema.String>;
}>;
export type NoteContextItem = typeof NoteContextItem.Type;
/** Where text quoted from outside the timeline came from, such as a plugin's terminal. */
export declare const QuoteSource: Schema.Struct<{
    readonly label: Schema.mutableKey<Schema.String>;
    readonly icon: Schema.mutableKey<Schema.String>;
    readonly subject: Schema.mutableKey<Schema.String>;
}>;
export type QuoteSource = typeof QuoteSource.Type;
/**
 * Plain text the user quoted, with an optional comment, as sent in message metadata. Without a source it was quoted
 * from the session timeline.
 */
export declare const QuoteComment: Schema.Struct<{
    readonly type: Schema.mutableKey<Schema.Literal<"quote">>;
    readonly text: Schema.mutableKey<Schema.String>;
    readonly comment: Schema.mutableKey<Schema.middlewareDecoding<Schema.optional<Schema.String>, never>>;
    readonly source: Schema.mutableKey<Schema.middlewareDecoding<Schema.optional<Schema.Struct<{
        readonly label: Schema.mutableKey<Schema.String>;
        readonly icon: Schema.mutableKey<Schema.String>;
        readonly subject: Schema.mutableKey<Schema.String>;
    }>>, never>>;
}>;
export type QuoteComment = typeof QuoteComment.Type;
export declare const QuoteContextItem: Schema.Struct<{
    readonly type: Schema.mutableKey<Schema.Literal<"quote">>;
    readonly text: Schema.mutableKey<Schema.String>;
    readonly comment: Schema.mutableKey<Schema.middlewareDecoding<Schema.optional<Schema.String>, never>>;
    readonly source: Schema.mutableKey<Schema.middlewareDecoding<Schema.optional<Schema.Struct<{
        readonly label: Schema.mutableKey<Schema.String>;
        readonly icon: Schema.mutableKey<Schema.String>;
        readonly subject: Schema.mutableKey<Schema.String>;
    }>>, never>>;
    readonly commentID: Schema.mutableKey<Schema.String>;
}>;
export type QuoteContextItem = typeof QuoteContextItem.Type;
export type ContextItem = FileContextItem | NoteContextItem | QuoteContextItem;
/** A note's live part names state inside the app process that attached it; anything that may outlive it drops it. */
export declare function durableNote<Note extends NoteComment>(note: Note): Omit<Note, "live"> extends infer T ? { [K in keyof T]: T[K]; } : never;
export declare const LegacyBrowserNote: Schema.decodeTo<Schema.toType<Schema.Struct<{
    readonly type: Schema.mutableKey<Schema.Literal<"note">>;
    readonly origin: Schema.mutableKey<Schema.String>;
    readonly label: Schema.mutableKey<Schema.String>;
    readonly icon: Schema.mutableKey<Schema.String>;
    readonly subject: Schema.mutableKey<Schema.String>;
    readonly href: Schema.mutableKey<Schema.middlewareDecoding<Schema.optional<Schema.String>, never>>;
    readonly live: Schema.mutableKey<Schema.middlewareDecoding<Schema.optional<Schema.Struct<{
        readonly subject: Schema.mutableKey<Schema.String>;
        readonly href: Schema.mutableKey<Schema.middlewareDecoding<Schema.optional<Schema.String>, never>>;
    }>>, never>>;
    readonly comment: Schema.mutableKey<Schema.String>;
}>>, Schema.Struct<{
    readonly type: Schema.mutableKey<Schema.Literal<"browser">>;
    readonly tabID: Schema.mutableKey<Schema.String>;
    readonly url: Schema.mutableKey<Schema.String>;
    readonly title: Schema.mutableKey<Schema.middlewareDecoding<Schema.optional<Schema.String>, never>>;
    readonly element: Schema.mutableKey<Schema.Struct<{
        readonly ref: Schema.mutableKey<Schema.middlewareDecoding<Schema.optional<Schema.String>, never>>;
        readonly selector: Schema.mutableKey<Schema.String>;
        readonly label: Schema.mutableKey<Schema.String>;
        readonly role: Schema.mutableKey<Schema.middlewareDecoding<Schema.optional<Schema.String>, never>>;
        readonly name: Schema.mutableKey<Schema.middlewareDecoding<Schema.optional<Schema.String>, never>>;
        readonly text: Schema.mutableKey<Schema.middlewareDecoding<Schema.optional<Schema.String>, never>>;
    }>>;
    readonly comment: Schema.mutableKey<Schema.String>;
}>, never, never>;
export declare function contextItemKey(item: ContextItem): string;
export declare const DEFAULT_PROMPT: Prompt;
export declare const ComposerStore: Schema.Struct<{
    readonly prompt: Schema.mutableKey<Schema.decodeTo<Schema.toType<Schema.middlewareDecoding<Schema.withDecodingDefaultType<Schema.decodeTo<Schema.mutable<Schema.$Array<Schema.toType<Schema.Union<readonly [Schema.Struct<{
        readonly content: Schema.mutableKey<Schema.String>;
        readonly start: Schema.mutableKey<Schema.Number>;
        readonly end: Schema.mutableKey<Schema.Number>;
        readonly type: Schema.mutableKey<Schema.Literal<"text">>;
    }>, Schema.Struct<{
        readonly content: Schema.mutableKey<Schema.String>;
        readonly start: Schema.mutableKey<Schema.Number>;
        readonly end: Schema.mutableKey<Schema.Number>;
        readonly type: Schema.mutableKey<Schema.Literal<"file">>;
        readonly path: Schema.mutableKey<Schema.String>;
        readonly selection: Schema.mutableKey<Schema.middlewareDecoding<Schema.optional<Schema.Struct<{
            readonly startLine: Schema.mutableKey<Schema.Number>;
            readonly startChar: Schema.mutableKey<Schema.Number>;
            readonly endLine: Schema.mutableKey<Schema.Number>;
            readonly endChar: Schema.mutableKey<Schema.Number>;
        }>>, never>>;
        readonly mime: Schema.mutableKey<Schema.middlewareDecoding<Schema.optional<Schema.String>, never>>;
        readonly filename: Schema.mutableKey<Schema.middlewareDecoding<Schema.optional<Schema.String>, never>>;
        readonly description: Schema.mutableKey<Schema.middlewareDecoding<Schema.optional<Schema.String>, never>>;
        readonly url: Schema.mutableKey<Schema.middlewareDecoding<Schema.optional<Schema.String>, never>>;
        readonly source: Schema.mutableKey<Schema.middlewareDecoding<Schema.optional<Schema.Union<readonly [Schema.Struct<{
            readonly type: Schema.Literal<"file">;
            readonly text: Schema.Struct<{
                readonly value: Schema.String;
                readonly start: Schema.Number;
                readonly end: Schema.Number;
            }>;
            readonly path: Schema.String;
        }>, Schema.Struct<{
            readonly type: Schema.Literal<"symbol">;
            readonly text: Schema.Struct<{
                readonly value: Schema.String;
                readonly start: Schema.Number;
                readonly end: Schema.Number;
            }>;
            readonly path: Schema.String;
            readonly range: Schema.Struct<{
                readonly start: Schema.Struct<{
                    readonly line: Schema.Number;
                    readonly character: Schema.Number;
                }>;
                readonly end: Schema.Struct<{
                    readonly line: Schema.Number;
                    readonly character: Schema.Number;
                }>;
            }>;
            readonly name: Schema.String;
            readonly kind: Schema.Number;
        }>, Schema.Struct<{
            readonly type: Schema.Literal<"resource">;
            readonly text: Schema.Struct<{
                readonly value: Schema.String;
                readonly start: Schema.Number;
                readonly end: Schema.Number;
            }>;
            readonly clientName: Schema.String;
            readonly uri: Schema.String;
        }>]>>, never>>;
    }>, Schema.Struct<{
        readonly content: Schema.mutableKey<Schema.String>;
        readonly start: Schema.mutableKey<Schema.Number>;
        readonly end: Schema.mutableKey<Schema.Number>;
        readonly type: Schema.mutableKey<Schema.Literal<"agent">>;
        readonly name: Schema.mutableKey<Schema.String>;
    }>, Schema.Struct<{
        readonly content: Schema.mutableKey<Schema.String>;
        readonly start: Schema.mutableKey<Schema.Number>;
        readonly end: Schema.mutableKey<Schema.Number>;
        readonly type: Schema.mutableKey<Schema.Literal<"skill">>;
        readonly id: Schema.mutableKey<Schema.brand<Schema.String, "Skill.ID">>;
        readonly name: Schema.mutableKey<Schema.brand<Schema.String, "Skill.Name">>;
    }>, Schema.Struct<{
        readonly content: Schema.mutableKey<Schema.String>;
        readonly start: Schema.mutableKey<Schema.Number>;
        readonly end: Schema.mutableKey<Schema.Number>;
        readonly type: Schema.mutableKey<Schema.Literal<"session">>;
        readonly id: Schema.mutableKey<Schema.brand<Schema.String, "SessionID"> & {
            create: () => string & import("effect/Brand").Brand<"SessionID">;
        }>;
    }>, Schema.decodeTo<Schema.toType<Schema.Struct<{
        readonly type: Schema.mutableKey<Schema.Literal<"image">>;
        readonly id: Schema.mutableKey<Schema.String>;
        readonly filename: Schema.mutableKey<Schema.String>;
        readonly sourcePath: Schema.mutableKey<Schema.middlewareDecoding<Schema.optional<Schema.String>, never>>;
        readonly mime: Schema.mutableKey<Schema.String>;
        readonly blob: Schema.mutableKey<Schema.Struct<{
            readonly id: Schema.NonEmptyString;
            readonly url: Schema.String;
        }>>;
    }>>, Schema.Struct<{
        readonly type: Schema.Literal<"image">;
        readonly id: Schema.String;
        readonly filename: Schema.String;
        readonly sourcePath: Schema.middlewareDecoding<Schema.optional<Schema.String>, never>;
        readonly mime: Schema.String;
        readonly blob: Schema.middlewareDecoding<Schema.optional<Schema.Struct<{
            readonly id: Schema.middlewareDecoding<Schema.optional<Schema.String>, never>;
            readonly url: Schema.middlewareDecoding<Schema.optional<Schema.String>, never>;
        }>>, never>;
        readonly dataUrl: Schema.middlewareDecoding<Schema.optional<Schema.String>, never>;
    }>, never, never>, Schema.Struct<{
        readonly type: Schema.mutableKey<Schema.Literal<"path">>;
        readonly id: Schema.mutableKey<Schema.String>;
        readonly filename: Schema.mutableKey<Schema.String>;
        readonly mime: Schema.mutableKey<Schema.String>;
        readonly path: Schema.mutableKey<Schema.String>;
    }>]>>>>, Schema.$Array<Schema.Unknown>, never, never>, never>, never>>, Schema.middlewareDecoding<Schema.withDecodingDefaultType<Schema.decodeTo<Schema.mutable<Schema.$Array<Schema.toType<Schema.Union<readonly [Schema.Struct<{
        readonly content: Schema.mutableKey<Schema.String>;
        readonly start: Schema.mutableKey<Schema.Number>;
        readonly end: Schema.mutableKey<Schema.Number>;
        readonly type: Schema.mutableKey<Schema.Literal<"text">>;
    }>, Schema.Struct<{
        readonly content: Schema.mutableKey<Schema.String>;
        readonly start: Schema.mutableKey<Schema.Number>;
        readonly end: Schema.mutableKey<Schema.Number>;
        readonly type: Schema.mutableKey<Schema.Literal<"file">>;
        readonly path: Schema.mutableKey<Schema.String>;
        readonly selection: Schema.mutableKey<Schema.middlewareDecoding<Schema.optional<Schema.Struct<{
            readonly startLine: Schema.mutableKey<Schema.Number>;
            readonly startChar: Schema.mutableKey<Schema.Number>;
            readonly endLine: Schema.mutableKey<Schema.Number>;
            readonly endChar: Schema.mutableKey<Schema.Number>;
        }>>, never>>;
        readonly mime: Schema.mutableKey<Schema.middlewareDecoding<Schema.optional<Schema.String>, never>>;
        readonly filename: Schema.mutableKey<Schema.middlewareDecoding<Schema.optional<Schema.String>, never>>;
        readonly description: Schema.mutableKey<Schema.middlewareDecoding<Schema.optional<Schema.String>, never>>;
        readonly url: Schema.mutableKey<Schema.middlewareDecoding<Schema.optional<Schema.String>, never>>;
        readonly source: Schema.mutableKey<Schema.middlewareDecoding<Schema.optional<Schema.Union<readonly [Schema.Struct<{
            readonly type: Schema.Literal<"file">;
            readonly text: Schema.Struct<{
                readonly value: Schema.String;
                readonly start: Schema.Number;
                readonly end: Schema.Number;
            }>;
            readonly path: Schema.String;
        }>, Schema.Struct<{
            readonly type: Schema.Literal<"symbol">;
            readonly text: Schema.Struct<{
                readonly value: Schema.String;
                readonly start: Schema.Number;
                readonly end: Schema.Number;
            }>;
            readonly path: Schema.String;
            readonly range: Schema.Struct<{
                readonly start: Schema.Struct<{
                    readonly line: Schema.Number;
                    readonly character: Schema.Number;
                }>;
                readonly end: Schema.Struct<{
                    readonly line: Schema.Number;
                    readonly character: Schema.Number;
                }>;
            }>;
            readonly name: Schema.String;
            readonly kind: Schema.Number;
        }>, Schema.Struct<{
            readonly type: Schema.Literal<"resource">;
            readonly text: Schema.Struct<{
                readonly value: Schema.String;
                readonly start: Schema.Number;
                readonly end: Schema.Number;
            }>;
            readonly clientName: Schema.String;
            readonly uri: Schema.String;
        }>]>>, never>>;
    }>, Schema.Struct<{
        readonly content: Schema.mutableKey<Schema.String>;
        readonly start: Schema.mutableKey<Schema.Number>;
        readonly end: Schema.mutableKey<Schema.Number>;
        readonly type: Schema.mutableKey<Schema.Literal<"agent">>;
        readonly name: Schema.mutableKey<Schema.String>;
    }>, Schema.Struct<{
        readonly content: Schema.mutableKey<Schema.String>;
        readonly start: Schema.mutableKey<Schema.Number>;
        readonly end: Schema.mutableKey<Schema.Number>;
        readonly type: Schema.mutableKey<Schema.Literal<"skill">>;
        readonly id: Schema.mutableKey<Schema.brand<Schema.String, "Skill.ID">>;
        readonly name: Schema.mutableKey<Schema.brand<Schema.String, "Skill.Name">>;
    }>, Schema.Struct<{
        readonly content: Schema.mutableKey<Schema.String>;
        readonly start: Schema.mutableKey<Schema.Number>;
        readonly end: Schema.mutableKey<Schema.Number>;
        readonly type: Schema.mutableKey<Schema.Literal<"session">>;
        readonly id: Schema.mutableKey<Schema.brand<Schema.String, "SessionID"> & {
            create: () => string & import("effect/Brand").Brand<"SessionID">;
        }>;
    }>, Schema.decodeTo<Schema.toType<Schema.Struct<{
        readonly type: Schema.mutableKey<Schema.Literal<"image">>;
        readonly id: Schema.mutableKey<Schema.String>;
        readonly filename: Schema.mutableKey<Schema.String>;
        readonly sourcePath: Schema.mutableKey<Schema.middlewareDecoding<Schema.optional<Schema.String>, never>>;
        readonly mime: Schema.mutableKey<Schema.String>;
        readonly blob: Schema.mutableKey<Schema.Struct<{
            readonly id: Schema.NonEmptyString;
            readonly url: Schema.String;
        }>>;
    }>>, Schema.Struct<{
        readonly type: Schema.Literal<"image">;
        readonly id: Schema.String;
        readonly filename: Schema.String;
        readonly sourcePath: Schema.middlewareDecoding<Schema.optional<Schema.String>, never>;
        readonly mime: Schema.String;
        readonly blob: Schema.middlewareDecoding<Schema.optional<Schema.Struct<{
            readonly id: Schema.middlewareDecoding<Schema.optional<Schema.String>, never>;
            readonly url: Schema.middlewareDecoding<Schema.optional<Schema.String>, never>;
        }>>, never>;
        readonly dataUrl: Schema.middlewareDecoding<Schema.optional<Schema.String>, never>;
    }>, never, never>, Schema.Struct<{
        readonly type: Schema.mutableKey<Schema.Literal<"path">>;
        readonly id: Schema.mutableKey<Schema.String>;
        readonly filename: Schema.mutableKey<Schema.String>;
        readonly mime: Schema.mutableKey<Schema.String>;
        readonly path: Schema.mutableKey<Schema.String>;
    }>]>>>>, Schema.$Array<Schema.Unknown>, never, never>, never>, never>, never, never>>;
    readonly cursor: Schema.mutableKey<Schema.middlewareDecoding<Schema.optional<Schema.decodeTo<Schema.toType<Schema.Finite>, Schema.Finite, never, never>>, never>>;
    readonly model: Schema.mutableKey<Schema.middlewareDecoding<Schema.optional<Schema.Struct<{
        readonly providerID: Schema.mutableKey<Schema.String>;
        readonly modelID: Schema.mutableKey<Schema.String>;
        readonly variant: Schema.mutableKey<Schema.middlewareDecoding<Schema.optional<Schema.NullOr<Schema.String>>, never>>;
    }>>, never>>;
    readonly mode: Schema.mutableKey<Schema.middlewareDecoding<Schema.optional<Schema.Literals<readonly ["normal", "shell"]>>, never>>;
    readonly retry: Schema.mutableKey<Schema.middlewareDecoding<Schema.optional<Schema.Struct<{
        readonly id: Schema.brand<Schema.String, "Session.Message.ID"> & {
            create: () => string & import("effect/Brand").Brand<"Session.Message.ID">;
            fromEvent: (eventID: string) => string & import("effect/Brand").Brand<"Session.Message.ID">;
        };
        readonly agent: Schema.String;
        readonly providerID: Schema.String;
        readonly modelID: Schema.String;
        readonly variant: Schema.middlewareDecoding<Schema.optional<Schema.String>, never>;
    }>>, never>>;
    readonly context: Schema.mutableKey<Schema.Struct<{
        readonly items: Schema.mutableKey<Schema.middlewareDecoding<Schema.withDecodingDefaultType<Schema.decodeTo<Schema.mutable<Schema.$Array<Schema.toType<Schema.Union<readonly [Schema.decodeTo<Schema.toType<Schema.Struct<{
            readonly type: Schema.mutableKey<Schema.mutableKey<Schema.Literal<"file">>>;
            readonly path: Schema.mutableKey<Schema.mutableKey<Schema.String>>;
            readonly selection: Schema.mutableKey<Schema.mutableKey<Schema.middlewareDecoding<Schema.optional<Schema.Struct<{
                readonly startLine: Schema.mutableKey<Schema.Number>;
                readonly startChar: Schema.mutableKey<Schema.Number>;
                readonly endLine: Schema.mutableKey<Schema.Number>;
                readonly endChar: Schema.mutableKey<Schema.Number>;
            }>>, never>>>;
            readonly comment: Schema.mutableKey<Schema.mutableKey<Schema.middlewareDecoding<Schema.optional<Schema.String>, never>>>;
            readonly commentID: Schema.mutableKey<Schema.mutableKey<Schema.middlewareDecoding<Schema.optional<Schema.String>, never>>>;
            readonly commentOrigin: Schema.mutableKey<Schema.mutableKey<Schema.middlewareDecoding<Schema.optional<Schema.Literals<readonly ["review", "file"]>>, never>>>;
            readonly preview: Schema.mutableKey<Schema.mutableKey<Schema.middlewareDecoding<Schema.optional<Schema.String>, never>>>;
            readonly name: Schema.mutableKey<Schema.mutableKey<Schema.middlewareDecoding<Schema.optional<Schema.String>, never>>>;
            readonly description: Schema.mutableKey<Schema.mutableKey<Schema.middlewareDecoding<Schema.optional<Schema.String>, never>>>;
            readonly key: Schema.mutableKey<Schema.String>;
        }>>, Schema.Struct<{
            readonly type: Schema.mutableKey<Schema.Literal<"file">>;
            readonly path: Schema.mutableKey<Schema.String>;
            readonly selection: Schema.mutableKey<Schema.middlewareDecoding<Schema.optional<Schema.Struct<{
                readonly startLine: Schema.mutableKey<Schema.Number>;
                readonly startChar: Schema.mutableKey<Schema.Number>;
                readonly endLine: Schema.mutableKey<Schema.Number>;
                readonly endChar: Schema.mutableKey<Schema.Number>;
            }>>, never>>;
            readonly comment: Schema.mutableKey<Schema.middlewareDecoding<Schema.optional<Schema.String>, never>>;
            readonly commentID: Schema.mutableKey<Schema.middlewareDecoding<Schema.optional<Schema.String>, never>>;
            readonly commentOrigin: Schema.mutableKey<Schema.middlewareDecoding<Schema.optional<Schema.Literals<readonly ["review", "file"]>>, never>>;
            readonly preview: Schema.mutableKey<Schema.middlewareDecoding<Schema.optional<Schema.String>, never>>;
            readonly name: Schema.mutableKey<Schema.middlewareDecoding<Schema.optional<Schema.String>, never>>;
            readonly description: Schema.mutableKey<Schema.middlewareDecoding<Schema.optional<Schema.String>, never>>;
            readonly key: Schema.middlewareDecoding<Schema.optional<Schema.String>, never>;
        }>, never, never>, Schema.decodeTo<Schema.toType<Schema.Struct<{
            readonly type: Schema.mutableKey<Schema.mutableKey<Schema.Literal<"note">>>;
            readonly origin: Schema.mutableKey<Schema.mutableKey<Schema.String>>;
            readonly label: Schema.mutableKey<Schema.mutableKey<Schema.String>>;
            readonly icon: Schema.mutableKey<Schema.mutableKey<Schema.String>>;
            readonly subject: Schema.mutableKey<Schema.mutableKey<Schema.String>>;
            readonly href: Schema.mutableKey<Schema.mutableKey<Schema.middlewareDecoding<Schema.optional<Schema.String>, never>>>;
            readonly live: Schema.mutableKey<Schema.mutableKey<Schema.middlewareDecoding<Schema.optional<Schema.Struct<{
                readonly subject: Schema.mutableKey<Schema.String>;
                readonly href: Schema.mutableKey<Schema.middlewareDecoding<Schema.optional<Schema.String>, never>>;
            }>>, never>>>;
            readonly comment: Schema.mutableKey<Schema.mutableKey<Schema.String>>;
            readonly commentID: Schema.mutableKey<Schema.mutableKey<Schema.String>>;
            readonly key: Schema.mutableKey<Schema.String>;
        }>>, Schema.Struct<{
            readonly type: Schema.mutableKey<Schema.Literal<"note">>;
            readonly origin: Schema.mutableKey<Schema.String>;
            readonly label: Schema.mutableKey<Schema.String>;
            readonly icon: Schema.mutableKey<Schema.String>;
            readonly subject: Schema.mutableKey<Schema.String>;
            readonly href: Schema.mutableKey<Schema.middlewareDecoding<Schema.optional<Schema.String>, never>>;
            readonly live: Schema.mutableKey<Schema.middlewareDecoding<Schema.optional<Schema.Struct<{
                readonly subject: Schema.mutableKey<Schema.String>;
                readonly href: Schema.mutableKey<Schema.middlewareDecoding<Schema.optional<Schema.String>, never>>;
            }>>, never>>;
            readonly comment: Schema.mutableKey<Schema.String>;
            readonly commentID: Schema.mutableKey<Schema.String>;
            readonly key: Schema.middlewareDecoding<Schema.optional<Schema.String>, never>;
        }>, never, never>, Schema.decodeTo<Schema.toType<Schema.Struct<{
            readonly type: Schema.mutableKey<Schema.mutableKey<Schema.Literal<"quote">>>;
            readonly text: Schema.mutableKey<Schema.mutableKey<Schema.String>>;
            readonly comment: Schema.mutableKey<Schema.mutableKey<Schema.middlewareDecoding<Schema.optional<Schema.String>, never>>>;
            readonly source: Schema.mutableKey<Schema.mutableKey<Schema.middlewareDecoding<Schema.optional<Schema.Struct<{
                readonly label: Schema.mutableKey<Schema.String>;
                readonly icon: Schema.mutableKey<Schema.String>;
                readonly subject: Schema.mutableKey<Schema.String>;
            }>>, never>>>;
            readonly commentID: Schema.mutableKey<Schema.mutableKey<Schema.String>>;
            readonly key: Schema.mutableKey<Schema.String>;
        }>>, Schema.Struct<{
            readonly type: Schema.mutableKey<Schema.Literal<"quote">>;
            readonly text: Schema.mutableKey<Schema.String>;
            readonly comment: Schema.mutableKey<Schema.middlewareDecoding<Schema.optional<Schema.String>, never>>;
            readonly source: Schema.mutableKey<Schema.middlewareDecoding<Schema.optional<Schema.Struct<{
                readonly label: Schema.mutableKey<Schema.String>;
                readonly icon: Schema.mutableKey<Schema.String>;
                readonly subject: Schema.mutableKey<Schema.String>;
            }>>, never>>;
            readonly commentID: Schema.mutableKey<Schema.String>;
            readonly key: Schema.middlewareDecoding<Schema.optional<Schema.String>, never>;
        }>, never, never>, Schema.decodeTo<Schema.toType<Schema.Struct<{
            readonly type: Schema.mutableKey<Schema.mutableKey<Schema.Literal<"note">>>;
            readonly origin: Schema.mutableKey<Schema.mutableKey<Schema.String>>;
            readonly label: Schema.mutableKey<Schema.mutableKey<Schema.String>>;
            readonly icon: Schema.mutableKey<Schema.mutableKey<Schema.String>>;
            readonly subject: Schema.mutableKey<Schema.mutableKey<Schema.String>>;
            readonly href: Schema.mutableKey<Schema.mutableKey<Schema.middlewareDecoding<Schema.optional<Schema.String>, never>>>;
            readonly live: Schema.mutableKey<Schema.mutableKey<Schema.middlewareDecoding<Schema.optional<Schema.Struct<{
                readonly subject: Schema.mutableKey<Schema.String>;
                readonly href: Schema.mutableKey<Schema.middlewareDecoding<Schema.optional<Schema.String>, never>>;
            }>>, never>>>;
            readonly comment: Schema.mutableKey<Schema.mutableKey<Schema.String>>;
            readonly commentID: Schema.mutableKey<Schema.mutableKey<Schema.String>>;
            readonly key: Schema.mutableKey<Schema.String>;
        }>>, Schema.Struct<{
            readonly type: Schema.mutableKey<Schema.Literal<"browser">>;
            readonly tabID: Schema.mutableKey<Schema.String>;
            readonly url: Schema.mutableKey<Schema.String>;
            readonly title: Schema.mutableKey<Schema.middlewareDecoding<Schema.optional<Schema.String>, never>>;
            readonly element: Schema.mutableKey<Schema.Struct<{
                readonly ref: Schema.mutableKey<Schema.middlewareDecoding<Schema.optional<Schema.String>, never>>;
                readonly selector: Schema.mutableKey<Schema.String>;
                readonly label: Schema.mutableKey<Schema.String>;
                readonly role: Schema.mutableKey<Schema.middlewareDecoding<Schema.optional<Schema.String>, never>>;
                readonly name: Schema.mutableKey<Schema.middlewareDecoding<Schema.optional<Schema.String>, never>>;
                readonly text: Schema.mutableKey<Schema.middlewareDecoding<Schema.optional<Schema.String>, never>>;
            }>>;
            readonly comment: Schema.mutableKey<Schema.String>;
            readonly commentID: Schema.String;
            readonly key: Schema.middlewareDecoding<Schema.optional<Schema.String>, never>;
        }>, never, never>]>>>>, Schema.$Array<Schema.Unknown>, never, never>, never>, never>>;
    }>>;
}>;
export type ComposerStore = typeof ComposerStore.Type;
export declare const LineComment: Schema.Struct<{
    readonly id: Schema.mutableKey<Schema.String>;
    readonly file: Schema.mutableKey<Schema.String>;
    readonly selection: Schema.mutableKey<Schema.Struct<{
        readonly start: Schema.mutableKey<Schema.Number>;
        readonly end: Schema.mutableKey<Schema.Number>;
        readonly side: Schema.mutableKey<Schema.middlewareDecoding<Schema.optional<Schema.Literals<readonly ["additions", "deletions"]>>, never>>;
        readonly endSide: Schema.mutableKey<Schema.middlewareDecoding<Schema.optional<Schema.Literals<readonly ["additions", "deletions"]>>, never>>;
    }>>;
    readonly comment: Schema.mutableKey<Schema.String>;
    readonly time: Schema.mutableKey<Schema.Number>;
}>;
export type LineComment = typeof LineComment.Type;
export declare const CommentStore: Schema.Struct<{
    readonly comments: Schema.mutableKey<Schema.$Record<Schema.String, Schema.mutableKey<Schema.middlewareDecoding<Schema.withDecodingDefaultType<Schema.decodeTo<Schema.mutable<Schema.$Array<Schema.toType<Schema.Struct<{
        readonly id: Schema.mutableKey<Schema.String>;
        readonly file: Schema.mutableKey<Schema.String>;
        readonly selection: Schema.mutableKey<Schema.Struct<{
            readonly start: Schema.mutableKey<Schema.Number>;
            readonly end: Schema.mutableKey<Schema.Number>;
            readonly side: Schema.mutableKey<Schema.middlewareDecoding<Schema.optional<Schema.Literals<readonly ["additions", "deletions"]>>, never>>;
            readonly endSide: Schema.mutableKey<Schema.middlewareDecoding<Schema.optional<Schema.Literals<readonly ["additions", "deletions"]>>, never>>;
        }>>;
        readonly comment: Schema.mutableKey<Schema.String>;
        readonly time: Schema.mutableKey<Schema.Number>;
    }>>>>, Schema.$Array<Schema.Unknown>, never, never>, never>, never>>>>;
}>;
export type CommentStore = typeof CommentStore.Type;
export declare const PromptHistoryComment: Schema.Struct<{
    readonly id: Schema.mutableKey<Schema.String>;
    readonly path: Schema.mutableKey<Schema.String>;
    readonly selection: Schema.mutableKey<Schema.Struct<{
        readonly start: Schema.mutableKey<Schema.Number>;
        readonly end: Schema.mutableKey<Schema.Number>;
        readonly side: Schema.mutableKey<Schema.middlewareDecoding<Schema.optional<Schema.Literals<readonly ["additions", "deletions"]>>, never>>;
        readonly endSide: Schema.mutableKey<Schema.middlewareDecoding<Schema.optional<Schema.Literals<readonly ["additions", "deletions"]>>, never>>;
    }>>;
    readonly comment: Schema.mutableKey<Schema.String>;
    readonly time: Schema.mutableKey<Schema.Number>;
    readonly origin: Schema.mutableKey<Schema.middlewareDecoding<Schema.optional<Schema.Literals<readonly ["review", "file"]>>, never>>;
    readonly preview: Schema.mutableKey<Schema.middlewareDecoding<Schema.optional<Schema.String>, never>>;
}>;
export type PromptHistoryComment = typeof PromptHistoryComment.Type;
export declare const PromptHistoryEntry: Schema.decodeTo<Schema.toType<Schema.Struct<{
    readonly prompt: Schema.decodeTo<Schema.toType<Schema.middlewareDecoding<Schema.withDecodingDefaultType<Schema.decodeTo<Schema.mutable<Schema.$Array<Schema.toType<Schema.Union<readonly [Schema.Struct<{
        readonly content: Schema.mutableKey<Schema.String>;
        readonly start: Schema.mutableKey<Schema.Number>;
        readonly end: Schema.mutableKey<Schema.Number>;
        readonly type: Schema.mutableKey<Schema.Literal<"text">>;
    }>, Schema.Struct<{
        readonly content: Schema.mutableKey<Schema.String>;
        readonly start: Schema.mutableKey<Schema.Number>;
        readonly end: Schema.mutableKey<Schema.Number>;
        readonly type: Schema.mutableKey<Schema.Literal<"file">>;
        readonly path: Schema.mutableKey<Schema.String>;
        readonly selection: Schema.mutableKey<Schema.middlewareDecoding<Schema.optional<Schema.Struct<{
            readonly startLine: Schema.mutableKey<Schema.Number>;
            readonly startChar: Schema.mutableKey<Schema.Number>;
            readonly endLine: Schema.mutableKey<Schema.Number>;
            readonly endChar: Schema.mutableKey<Schema.Number>;
        }>>, never>>;
        readonly mime: Schema.mutableKey<Schema.middlewareDecoding<Schema.optional<Schema.String>, never>>;
        readonly filename: Schema.mutableKey<Schema.middlewareDecoding<Schema.optional<Schema.String>, never>>;
        readonly description: Schema.mutableKey<Schema.middlewareDecoding<Schema.optional<Schema.String>, never>>;
        readonly url: Schema.mutableKey<Schema.middlewareDecoding<Schema.optional<Schema.String>, never>>;
        readonly source: Schema.mutableKey<Schema.middlewareDecoding<Schema.optional<Schema.Union<readonly [Schema.Struct<{
            readonly type: Schema.Literal<"file">;
            readonly text: Schema.Struct<{
                readonly value: Schema.String;
                readonly start: Schema.Number;
                readonly end: Schema.Number;
            }>;
            readonly path: Schema.String;
        }>, Schema.Struct<{
            readonly type: Schema.Literal<"symbol">;
            readonly text: Schema.Struct<{
                readonly value: Schema.String;
                readonly start: Schema.Number;
                readonly end: Schema.Number;
            }>;
            readonly path: Schema.String;
            readonly range: Schema.Struct<{
                readonly start: Schema.Struct<{
                    readonly line: Schema.Number;
                    readonly character: Schema.Number;
                }>;
                readonly end: Schema.Struct<{
                    readonly line: Schema.Number;
                    readonly character: Schema.Number;
                }>;
            }>;
            readonly name: Schema.String;
            readonly kind: Schema.Number;
        }>, Schema.Struct<{
            readonly type: Schema.Literal<"resource">;
            readonly text: Schema.Struct<{
                readonly value: Schema.String;
                readonly start: Schema.Number;
                readonly end: Schema.Number;
            }>;
            readonly clientName: Schema.String;
            readonly uri: Schema.String;
        }>]>>, never>>;
    }>, Schema.Struct<{
        readonly content: Schema.mutableKey<Schema.String>;
        readonly start: Schema.mutableKey<Schema.Number>;
        readonly end: Schema.mutableKey<Schema.Number>;
        readonly type: Schema.mutableKey<Schema.Literal<"agent">>;
        readonly name: Schema.mutableKey<Schema.String>;
    }>, Schema.Struct<{
        readonly content: Schema.mutableKey<Schema.String>;
        readonly start: Schema.mutableKey<Schema.Number>;
        readonly end: Schema.mutableKey<Schema.Number>;
        readonly type: Schema.mutableKey<Schema.Literal<"skill">>;
        readonly id: Schema.mutableKey<Schema.brand<Schema.String, "Skill.ID">>;
        readonly name: Schema.mutableKey<Schema.brand<Schema.String, "Skill.Name">>;
    }>, Schema.Struct<{
        readonly content: Schema.mutableKey<Schema.String>;
        readonly start: Schema.mutableKey<Schema.Number>;
        readonly end: Schema.mutableKey<Schema.Number>;
        readonly type: Schema.mutableKey<Schema.Literal<"session">>;
        readonly id: Schema.mutableKey<Schema.brand<Schema.String, "SessionID"> & {
            create: () => string & import("effect/Brand").Brand<"SessionID">;
        }>;
    }>, Schema.decodeTo<Schema.toType<Schema.Struct<{
        readonly type: Schema.mutableKey<Schema.Literal<"image">>;
        readonly id: Schema.mutableKey<Schema.String>;
        readonly filename: Schema.mutableKey<Schema.String>;
        readonly sourcePath: Schema.mutableKey<Schema.middlewareDecoding<Schema.optional<Schema.String>, never>>;
        readonly mime: Schema.mutableKey<Schema.String>;
        readonly blob: Schema.mutableKey<Schema.Struct<{
            readonly id: Schema.NonEmptyString;
            readonly url: Schema.String;
        }>>;
    }>>, Schema.Struct<{
        readonly type: Schema.Literal<"image">;
        readonly id: Schema.String;
        readonly filename: Schema.String;
        readonly sourcePath: Schema.middlewareDecoding<Schema.optional<Schema.String>, never>;
        readonly mime: Schema.String;
        readonly blob: Schema.middlewareDecoding<Schema.optional<Schema.Struct<{
            readonly id: Schema.middlewareDecoding<Schema.optional<Schema.String>, never>;
            readonly url: Schema.middlewareDecoding<Schema.optional<Schema.String>, never>;
        }>>, never>;
        readonly dataUrl: Schema.middlewareDecoding<Schema.optional<Schema.String>, never>;
    }>, never, never>, Schema.Struct<{
        readonly type: Schema.mutableKey<Schema.Literal<"path">>;
        readonly id: Schema.mutableKey<Schema.String>;
        readonly filename: Schema.mutableKey<Schema.String>;
        readonly mime: Schema.mutableKey<Schema.String>;
        readonly path: Schema.mutableKey<Schema.String>;
    }>]>>>>, Schema.$Array<Schema.Unknown>, never, never>, never>, never>>, Schema.$Array<Schema.middlewareDecoding<Schema.withDecodingDefaultType<Schema.UndefinedOr<Schema.Union<readonly [Schema.Struct<{
        readonly content: Schema.mutableKey<Schema.String>;
        readonly start: Schema.mutableKey<Schema.Number>;
        readonly end: Schema.mutableKey<Schema.Number>;
        readonly type: Schema.mutableKey<Schema.Literal<"text">>;
    }>, Schema.Struct<{
        readonly content: Schema.mutableKey<Schema.String>;
        readonly start: Schema.mutableKey<Schema.Number>;
        readonly end: Schema.mutableKey<Schema.Number>;
        readonly type: Schema.mutableKey<Schema.Literal<"file">>;
        readonly path: Schema.mutableKey<Schema.String>;
        readonly selection: Schema.mutableKey<Schema.middlewareDecoding<Schema.optional<Schema.Struct<{
            readonly startLine: Schema.mutableKey<Schema.Number>;
            readonly startChar: Schema.mutableKey<Schema.Number>;
            readonly endLine: Schema.mutableKey<Schema.Number>;
            readonly endChar: Schema.mutableKey<Schema.Number>;
        }>>, never>>;
        readonly mime: Schema.mutableKey<Schema.middlewareDecoding<Schema.optional<Schema.String>, never>>;
        readonly filename: Schema.mutableKey<Schema.middlewareDecoding<Schema.optional<Schema.String>, never>>;
        readonly description: Schema.mutableKey<Schema.middlewareDecoding<Schema.optional<Schema.String>, never>>;
        readonly url: Schema.mutableKey<Schema.middlewareDecoding<Schema.optional<Schema.String>, never>>;
        readonly source: Schema.mutableKey<Schema.middlewareDecoding<Schema.optional<Schema.Union<readonly [Schema.Struct<{
            readonly type: Schema.Literal<"file">;
            readonly text: Schema.Struct<{
                readonly value: Schema.String;
                readonly start: Schema.Number;
                readonly end: Schema.Number;
            }>;
            readonly path: Schema.String;
        }>, Schema.Struct<{
            readonly type: Schema.Literal<"symbol">;
            readonly text: Schema.Struct<{
                readonly value: Schema.String;
                readonly start: Schema.Number;
                readonly end: Schema.Number;
            }>;
            readonly path: Schema.String;
            readonly range: Schema.Struct<{
                readonly start: Schema.Struct<{
                    readonly line: Schema.Number;
                    readonly character: Schema.Number;
                }>;
                readonly end: Schema.Struct<{
                    readonly line: Schema.Number;
                    readonly character: Schema.Number;
                }>;
            }>;
            readonly name: Schema.String;
            readonly kind: Schema.Number;
        }>, Schema.Struct<{
            readonly type: Schema.Literal<"resource">;
            readonly text: Schema.Struct<{
                readonly value: Schema.String;
                readonly start: Schema.Number;
                readonly end: Schema.Number;
            }>;
            readonly clientName: Schema.String;
            readonly uri: Schema.String;
        }>]>>, never>>;
    }>, Schema.Struct<{
        readonly content: Schema.mutableKey<Schema.String>;
        readonly start: Schema.mutableKey<Schema.Number>;
        readonly end: Schema.mutableKey<Schema.Number>;
        readonly type: Schema.mutableKey<Schema.Literal<"agent">>;
        readonly name: Schema.mutableKey<Schema.String>;
    }>, Schema.Struct<{
        readonly content: Schema.mutableKey<Schema.String>;
        readonly start: Schema.mutableKey<Schema.Number>;
        readonly end: Schema.mutableKey<Schema.Number>;
        readonly type: Schema.mutableKey<Schema.Literal<"skill">>;
        readonly id: Schema.mutableKey<Schema.brand<Schema.String, "Skill.ID">>;
        readonly name: Schema.mutableKey<Schema.brand<Schema.String, "Skill.Name">>;
    }>, Schema.Struct<{
        readonly content: Schema.mutableKey<Schema.String>;
        readonly start: Schema.mutableKey<Schema.Number>;
        readonly end: Schema.mutableKey<Schema.Number>;
        readonly type: Schema.mutableKey<Schema.Literal<"session">>;
        readonly id: Schema.mutableKey<Schema.brand<Schema.String, "SessionID"> & {
            create: () => string & import("effect/Brand").Brand<"SessionID">;
        }>;
    }>, Schema.decodeTo<Schema.toType<Schema.Struct<{
        readonly type: Schema.mutableKey<Schema.Literal<"image">>;
        readonly id: Schema.mutableKey<Schema.String>;
        readonly filename: Schema.mutableKey<Schema.String>;
        readonly sourcePath: Schema.mutableKey<Schema.middlewareDecoding<Schema.optional<Schema.String>, never>>;
        readonly mime: Schema.mutableKey<Schema.String>;
        readonly blob: Schema.mutableKey<Schema.Struct<{
            readonly id: Schema.NonEmptyString;
            readonly url: Schema.String;
        }>>;
    }>>, Schema.Struct<{
        readonly type: Schema.Literal<"image">;
        readonly id: Schema.String;
        readonly filename: Schema.String;
        readonly sourcePath: Schema.middlewareDecoding<Schema.optional<Schema.String>, never>;
        readonly mime: Schema.String;
        readonly blob: Schema.middlewareDecoding<Schema.optional<Schema.Struct<{
            readonly id: Schema.middlewareDecoding<Schema.optional<Schema.String>, never>;
            readonly url: Schema.middlewareDecoding<Schema.optional<Schema.String>, never>;
        }>>, never>;
        readonly dataUrl: Schema.middlewareDecoding<Schema.optional<Schema.String>, never>;
    }>, never, never>, Schema.Struct<{
        readonly type: Schema.mutableKey<Schema.Literal<"path">>;
        readonly id: Schema.mutableKey<Schema.String>;
        readonly filename: Schema.mutableKey<Schema.String>;
        readonly mime: Schema.mutableKey<Schema.String>;
        readonly path: Schema.mutableKey<Schema.String>;
    }>]>>, never>, never>>, never, never>;
    readonly comments: Schema.middlewareDecoding<Schema.withDecodingDefaultType<Schema.decodeTo<Schema.mutable<Schema.$Array<Schema.toType<Schema.Struct<{
        readonly id: Schema.mutableKey<Schema.String>;
        readonly path: Schema.mutableKey<Schema.String>;
        readonly selection: Schema.mutableKey<Schema.Struct<{
            readonly start: Schema.mutableKey<Schema.Number>;
            readonly end: Schema.mutableKey<Schema.Number>;
            readonly side: Schema.mutableKey<Schema.middlewareDecoding<Schema.optional<Schema.Literals<readonly ["additions", "deletions"]>>, never>>;
            readonly endSide: Schema.mutableKey<Schema.middlewareDecoding<Schema.optional<Schema.Literals<readonly ["additions", "deletions"]>>, never>>;
        }>>;
        readonly comment: Schema.mutableKey<Schema.String>;
        readonly time: Schema.mutableKey<Schema.Number>;
        readonly origin: Schema.mutableKey<Schema.middlewareDecoding<Schema.optional<Schema.Literals<readonly ["review", "file"]>>, never>>;
        readonly preview: Schema.mutableKey<Schema.middlewareDecoding<Schema.optional<Schema.String>, never>>;
    }>>>>, Schema.$Array<Schema.Unknown>, never, never>, never>, never>;
}>>, Schema.Union<readonly [Schema.Struct<{
    readonly prompt: Schema.decodeTo<Schema.toType<Schema.middlewareDecoding<Schema.withDecodingDefaultType<Schema.decodeTo<Schema.mutable<Schema.$Array<Schema.toType<Schema.Union<readonly [Schema.Struct<{
        readonly content: Schema.mutableKey<Schema.String>;
        readonly start: Schema.mutableKey<Schema.Number>;
        readonly end: Schema.mutableKey<Schema.Number>;
        readonly type: Schema.mutableKey<Schema.Literal<"text">>;
    }>, Schema.Struct<{
        readonly content: Schema.mutableKey<Schema.String>;
        readonly start: Schema.mutableKey<Schema.Number>;
        readonly end: Schema.mutableKey<Schema.Number>;
        readonly type: Schema.mutableKey<Schema.Literal<"file">>;
        readonly path: Schema.mutableKey<Schema.String>;
        readonly selection: Schema.mutableKey<Schema.middlewareDecoding<Schema.optional<Schema.Struct<{
            readonly startLine: Schema.mutableKey<Schema.Number>;
            readonly startChar: Schema.mutableKey<Schema.Number>;
            readonly endLine: Schema.mutableKey<Schema.Number>;
            readonly endChar: Schema.mutableKey<Schema.Number>;
        }>>, never>>;
        readonly mime: Schema.mutableKey<Schema.middlewareDecoding<Schema.optional<Schema.String>, never>>;
        readonly filename: Schema.mutableKey<Schema.middlewareDecoding<Schema.optional<Schema.String>, never>>;
        readonly description: Schema.mutableKey<Schema.middlewareDecoding<Schema.optional<Schema.String>, never>>;
        readonly url: Schema.mutableKey<Schema.middlewareDecoding<Schema.optional<Schema.String>, never>>;
        readonly source: Schema.mutableKey<Schema.middlewareDecoding<Schema.optional<Schema.Union<readonly [Schema.Struct<{
            readonly type: Schema.Literal<"file">;
            readonly text: Schema.Struct<{
                readonly value: Schema.String;
                readonly start: Schema.Number;
                readonly end: Schema.Number;
            }>;
            readonly path: Schema.String;
        }>, Schema.Struct<{
            readonly type: Schema.Literal<"symbol">;
            readonly text: Schema.Struct<{
                readonly value: Schema.String;
                readonly start: Schema.Number;
                readonly end: Schema.Number;
            }>;
            readonly path: Schema.String;
            readonly range: Schema.Struct<{
                readonly start: Schema.Struct<{
                    readonly line: Schema.Number;
                    readonly character: Schema.Number;
                }>;
                readonly end: Schema.Struct<{
                    readonly line: Schema.Number;
                    readonly character: Schema.Number;
                }>;
            }>;
            readonly name: Schema.String;
            readonly kind: Schema.Number;
        }>, Schema.Struct<{
            readonly type: Schema.Literal<"resource">;
            readonly text: Schema.Struct<{
                readonly value: Schema.String;
                readonly start: Schema.Number;
                readonly end: Schema.Number;
            }>;
            readonly clientName: Schema.String;
            readonly uri: Schema.String;
        }>]>>, never>>;
    }>, Schema.Struct<{
        readonly content: Schema.mutableKey<Schema.String>;
        readonly start: Schema.mutableKey<Schema.Number>;
        readonly end: Schema.mutableKey<Schema.Number>;
        readonly type: Schema.mutableKey<Schema.Literal<"agent">>;
        readonly name: Schema.mutableKey<Schema.String>;
    }>, Schema.Struct<{
        readonly content: Schema.mutableKey<Schema.String>;
        readonly start: Schema.mutableKey<Schema.Number>;
        readonly end: Schema.mutableKey<Schema.Number>;
        readonly type: Schema.mutableKey<Schema.Literal<"skill">>;
        readonly id: Schema.mutableKey<Schema.brand<Schema.String, "Skill.ID">>;
        readonly name: Schema.mutableKey<Schema.brand<Schema.String, "Skill.Name">>;
    }>, Schema.Struct<{
        readonly content: Schema.mutableKey<Schema.String>;
        readonly start: Schema.mutableKey<Schema.Number>;
        readonly end: Schema.mutableKey<Schema.Number>;
        readonly type: Schema.mutableKey<Schema.Literal<"session">>;
        readonly id: Schema.mutableKey<Schema.brand<Schema.String, "SessionID"> & {
            create: () => string & import("effect/Brand").Brand<"SessionID">;
        }>;
    }>, Schema.decodeTo<Schema.toType<Schema.Struct<{
        readonly type: Schema.mutableKey<Schema.Literal<"image">>;
        readonly id: Schema.mutableKey<Schema.String>;
        readonly filename: Schema.mutableKey<Schema.String>;
        readonly sourcePath: Schema.mutableKey<Schema.middlewareDecoding<Schema.optional<Schema.String>, never>>;
        readonly mime: Schema.mutableKey<Schema.String>;
        readonly blob: Schema.mutableKey<Schema.Struct<{
            readonly id: Schema.NonEmptyString;
            readonly url: Schema.String;
        }>>;
    }>>, Schema.Struct<{
        readonly type: Schema.Literal<"image">;
        readonly id: Schema.String;
        readonly filename: Schema.String;
        readonly sourcePath: Schema.middlewareDecoding<Schema.optional<Schema.String>, never>;
        readonly mime: Schema.String;
        readonly blob: Schema.middlewareDecoding<Schema.optional<Schema.Struct<{
            readonly id: Schema.middlewareDecoding<Schema.optional<Schema.String>, never>;
            readonly url: Schema.middlewareDecoding<Schema.optional<Schema.String>, never>;
        }>>, never>;
        readonly dataUrl: Schema.middlewareDecoding<Schema.optional<Schema.String>, never>;
    }>, never, never>, Schema.Struct<{
        readonly type: Schema.mutableKey<Schema.Literal<"path">>;
        readonly id: Schema.mutableKey<Schema.String>;
        readonly filename: Schema.mutableKey<Schema.String>;
        readonly mime: Schema.mutableKey<Schema.String>;
        readonly path: Schema.mutableKey<Schema.String>;
    }>]>>>>, Schema.$Array<Schema.Unknown>, never, never>, never>, never>>, Schema.$Array<Schema.middlewareDecoding<Schema.withDecodingDefaultType<Schema.UndefinedOr<Schema.Union<readonly [Schema.Struct<{
        readonly content: Schema.mutableKey<Schema.String>;
        readonly start: Schema.mutableKey<Schema.Number>;
        readonly end: Schema.mutableKey<Schema.Number>;
        readonly type: Schema.mutableKey<Schema.Literal<"text">>;
    }>, Schema.Struct<{
        readonly content: Schema.mutableKey<Schema.String>;
        readonly start: Schema.mutableKey<Schema.Number>;
        readonly end: Schema.mutableKey<Schema.Number>;
        readonly type: Schema.mutableKey<Schema.Literal<"file">>;
        readonly path: Schema.mutableKey<Schema.String>;
        readonly selection: Schema.mutableKey<Schema.middlewareDecoding<Schema.optional<Schema.Struct<{
            readonly startLine: Schema.mutableKey<Schema.Number>;
            readonly startChar: Schema.mutableKey<Schema.Number>;
            readonly endLine: Schema.mutableKey<Schema.Number>;
            readonly endChar: Schema.mutableKey<Schema.Number>;
        }>>, never>>;
        readonly mime: Schema.mutableKey<Schema.middlewareDecoding<Schema.optional<Schema.String>, never>>;
        readonly filename: Schema.mutableKey<Schema.middlewareDecoding<Schema.optional<Schema.String>, never>>;
        readonly description: Schema.mutableKey<Schema.middlewareDecoding<Schema.optional<Schema.String>, never>>;
        readonly url: Schema.mutableKey<Schema.middlewareDecoding<Schema.optional<Schema.String>, never>>;
        readonly source: Schema.mutableKey<Schema.middlewareDecoding<Schema.optional<Schema.Union<readonly [Schema.Struct<{
            readonly type: Schema.Literal<"file">;
            readonly text: Schema.Struct<{
                readonly value: Schema.String;
                readonly start: Schema.Number;
                readonly end: Schema.Number;
            }>;
            readonly path: Schema.String;
        }>, Schema.Struct<{
            readonly type: Schema.Literal<"symbol">;
            readonly text: Schema.Struct<{
                readonly value: Schema.String;
                readonly start: Schema.Number;
                readonly end: Schema.Number;
            }>;
            readonly path: Schema.String;
            readonly range: Schema.Struct<{
                readonly start: Schema.Struct<{
                    readonly line: Schema.Number;
                    readonly character: Schema.Number;
                }>;
                readonly end: Schema.Struct<{
                    readonly line: Schema.Number;
                    readonly character: Schema.Number;
                }>;
            }>;
            readonly name: Schema.String;
            readonly kind: Schema.Number;
        }>, Schema.Struct<{
            readonly type: Schema.Literal<"resource">;
            readonly text: Schema.Struct<{
                readonly value: Schema.String;
                readonly start: Schema.Number;
                readonly end: Schema.Number;
            }>;
            readonly clientName: Schema.String;
            readonly uri: Schema.String;
        }>]>>, never>>;
    }>, Schema.Struct<{
        readonly content: Schema.mutableKey<Schema.String>;
        readonly start: Schema.mutableKey<Schema.Number>;
        readonly end: Schema.mutableKey<Schema.Number>;
        readonly type: Schema.mutableKey<Schema.Literal<"agent">>;
        readonly name: Schema.mutableKey<Schema.String>;
    }>, Schema.Struct<{
        readonly content: Schema.mutableKey<Schema.String>;
        readonly start: Schema.mutableKey<Schema.Number>;
        readonly end: Schema.mutableKey<Schema.Number>;
        readonly type: Schema.mutableKey<Schema.Literal<"skill">>;
        readonly id: Schema.mutableKey<Schema.brand<Schema.String, "Skill.ID">>;
        readonly name: Schema.mutableKey<Schema.brand<Schema.String, "Skill.Name">>;
    }>, Schema.Struct<{
        readonly content: Schema.mutableKey<Schema.String>;
        readonly start: Schema.mutableKey<Schema.Number>;
        readonly end: Schema.mutableKey<Schema.Number>;
        readonly type: Schema.mutableKey<Schema.Literal<"session">>;
        readonly id: Schema.mutableKey<Schema.brand<Schema.String, "SessionID"> & {
            create: () => string & import("effect/Brand").Brand<"SessionID">;
        }>;
    }>, Schema.decodeTo<Schema.toType<Schema.Struct<{
        readonly type: Schema.mutableKey<Schema.Literal<"image">>;
        readonly id: Schema.mutableKey<Schema.String>;
        readonly filename: Schema.mutableKey<Schema.String>;
        readonly sourcePath: Schema.mutableKey<Schema.middlewareDecoding<Schema.optional<Schema.String>, never>>;
        readonly mime: Schema.mutableKey<Schema.String>;
        readonly blob: Schema.mutableKey<Schema.Struct<{
            readonly id: Schema.NonEmptyString;
            readonly url: Schema.String;
        }>>;
    }>>, Schema.Struct<{
        readonly type: Schema.Literal<"image">;
        readonly id: Schema.String;
        readonly filename: Schema.String;
        readonly sourcePath: Schema.middlewareDecoding<Schema.optional<Schema.String>, never>;
        readonly mime: Schema.String;
        readonly blob: Schema.middlewareDecoding<Schema.optional<Schema.Struct<{
            readonly id: Schema.middlewareDecoding<Schema.optional<Schema.String>, never>;
            readonly url: Schema.middlewareDecoding<Schema.optional<Schema.String>, never>;
        }>>, never>;
        readonly dataUrl: Schema.middlewareDecoding<Schema.optional<Schema.String>, never>;
    }>, never, never>, Schema.Struct<{
        readonly type: Schema.mutableKey<Schema.Literal<"path">>;
        readonly id: Schema.mutableKey<Schema.String>;
        readonly filename: Schema.mutableKey<Schema.String>;
        readonly mime: Schema.mutableKey<Schema.String>;
        readonly path: Schema.mutableKey<Schema.String>;
    }>]>>, never>, never>>, never, never>;
    readonly comments: Schema.middlewareDecoding<Schema.withDecodingDefaultType<Schema.decodeTo<Schema.mutable<Schema.$Array<Schema.toType<Schema.Struct<{
        readonly id: Schema.mutableKey<Schema.String>;
        readonly path: Schema.mutableKey<Schema.String>;
        readonly selection: Schema.mutableKey<Schema.Struct<{
            readonly start: Schema.mutableKey<Schema.Number>;
            readonly end: Schema.mutableKey<Schema.Number>;
            readonly side: Schema.mutableKey<Schema.middlewareDecoding<Schema.optional<Schema.Literals<readonly ["additions", "deletions"]>>, never>>;
            readonly endSide: Schema.mutableKey<Schema.middlewareDecoding<Schema.optional<Schema.Literals<readonly ["additions", "deletions"]>>, never>>;
        }>>;
        readonly comment: Schema.mutableKey<Schema.String>;
        readonly time: Schema.mutableKey<Schema.Number>;
        readonly origin: Schema.mutableKey<Schema.middlewareDecoding<Schema.optional<Schema.Literals<readonly ["review", "file"]>>, never>>;
        readonly preview: Schema.mutableKey<Schema.middlewareDecoding<Schema.optional<Schema.String>, never>>;
    }>>>>, Schema.$Array<Schema.Unknown>, never, never>, never>, never>;
}>, Schema.decodeTo<Schema.toType<Schema.middlewareDecoding<Schema.withDecodingDefaultType<Schema.decodeTo<Schema.mutable<Schema.$Array<Schema.toType<Schema.Union<readonly [Schema.Struct<{
    readonly content: Schema.mutableKey<Schema.String>;
    readonly start: Schema.mutableKey<Schema.Number>;
    readonly end: Schema.mutableKey<Schema.Number>;
    readonly type: Schema.mutableKey<Schema.Literal<"text">>;
}>, Schema.Struct<{
    readonly content: Schema.mutableKey<Schema.String>;
    readonly start: Schema.mutableKey<Schema.Number>;
    readonly end: Schema.mutableKey<Schema.Number>;
    readonly type: Schema.mutableKey<Schema.Literal<"file">>;
    readonly path: Schema.mutableKey<Schema.String>;
    readonly selection: Schema.mutableKey<Schema.middlewareDecoding<Schema.optional<Schema.Struct<{
        readonly startLine: Schema.mutableKey<Schema.Number>;
        readonly startChar: Schema.mutableKey<Schema.Number>;
        readonly endLine: Schema.mutableKey<Schema.Number>;
        readonly endChar: Schema.mutableKey<Schema.Number>;
    }>>, never>>;
    readonly mime: Schema.mutableKey<Schema.middlewareDecoding<Schema.optional<Schema.String>, never>>;
    readonly filename: Schema.mutableKey<Schema.middlewareDecoding<Schema.optional<Schema.String>, never>>;
    readonly description: Schema.mutableKey<Schema.middlewareDecoding<Schema.optional<Schema.String>, never>>;
    readonly url: Schema.mutableKey<Schema.middlewareDecoding<Schema.optional<Schema.String>, never>>;
    readonly source: Schema.mutableKey<Schema.middlewareDecoding<Schema.optional<Schema.Union<readonly [Schema.Struct<{
        readonly type: Schema.Literal<"file">;
        readonly text: Schema.Struct<{
            readonly value: Schema.String;
            readonly start: Schema.Number;
            readonly end: Schema.Number;
        }>;
        readonly path: Schema.String;
    }>, Schema.Struct<{
        readonly type: Schema.Literal<"symbol">;
        readonly text: Schema.Struct<{
            readonly value: Schema.String;
            readonly start: Schema.Number;
            readonly end: Schema.Number;
        }>;
        readonly path: Schema.String;
        readonly range: Schema.Struct<{
            readonly start: Schema.Struct<{
                readonly line: Schema.Number;
                readonly character: Schema.Number;
            }>;
            readonly end: Schema.Struct<{
                readonly line: Schema.Number;
                readonly character: Schema.Number;
            }>;
        }>;
        readonly name: Schema.String;
        readonly kind: Schema.Number;
    }>, Schema.Struct<{
        readonly type: Schema.Literal<"resource">;
        readonly text: Schema.Struct<{
            readonly value: Schema.String;
            readonly start: Schema.Number;
            readonly end: Schema.Number;
        }>;
        readonly clientName: Schema.String;
        readonly uri: Schema.String;
    }>]>>, never>>;
}>, Schema.Struct<{
    readonly content: Schema.mutableKey<Schema.String>;
    readonly start: Schema.mutableKey<Schema.Number>;
    readonly end: Schema.mutableKey<Schema.Number>;
    readonly type: Schema.mutableKey<Schema.Literal<"agent">>;
    readonly name: Schema.mutableKey<Schema.String>;
}>, Schema.Struct<{
    readonly content: Schema.mutableKey<Schema.String>;
    readonly start: Schema.mutableKey<Schema.Number>;
    readonly end: Schema.mutableKey<Schema.Number>;
    readonly type: Schema.mutableKey<Schema.Literal<"skill">>;
    readonly id: Schema.mutableKey<Schema.brand<Schema.String, "Skill.ID">>;
    readonly name: Schema.mutableKey<Schema.brand<Schema.String, "Skill.Name">>;
}>, Schema.Struct<{
    readonly content: Schema.mutableKey<Schema.String>;
    readonly start: Schema.mutableKey<Schema.Number>;
    readonly end: Schema.mutableKey<Schema.Number>;
    readonly type: Schema.mutableKey<Schema.Literal<"session">>;
    readonly id: Schema.mutableKey<Schema.brand<Schema.String, "SessionID"> & {
        create: () => string & import("effect/Brand").Brand<"SessionID">;
    }>;
}>, Schema.decodeTo<Schema.toType<Schema.Struct<{
    readonly type: Schema.mutableKey<Schema.Literal<"image">>;
    readonly id: Schema.mutableKey<Schema.String>;
    readonly filename: Schema.mutableKey<Schema.String>;
    readonly sourcePath: Schema.mutableKey<Schema.middlewareDecoding<Schema.optional<Schema.String>, never>>;
    readonly mime: Schema.mutableKey<Schema.String>;
    readonly blob: Schema.mutableKey<Schema.Struct<{
        readonly id: Schema.NonEmptyString;
        readonly url: Schema.String;
    }>>;
}>>, Schema.Struct<{
    readonly type: Schema.Literal<"image">;
    readonly id: Schema.String;
    readonly filename: Schema.String;
    readonly sourcePath: Schema.middlewareDecoding<Schema.optional<Schema.String>, never>;
    readonly mime: Schema.String;
    readonly blob: Schema.middlewareDecoding<Schema.optional<Schema.Struct<{
        readonly id: Schema.middlewareDecoding<Schema.optional<Schema.String>, never>;
        readonly url: Schema.middlewareDecoding<Schema.optional<Schema.String>, never>;
    }>>, never>;
    readonly dataUrl: Schema.middlewareDecoding<Schema.optional<Schema.String>, never>;
}>, never, never>, Schema.Struct<{
    readonly type: Schema.mutableKey<Schema.Literal<"path">>;
    readonly id: Schema.mutableKey<Schema.String>;
    readonly filename: Schema.mutableKey<Schema.String>;
    readonly mime: Schema.mutableKey<Schema.String>;
    readonly path: Schema.mutableKey<Schema.String>;
}>]>>>>, Schema.$Array<Schema.Unknown>, never, never>, never>, never>>, Schema.$Array<Schema.middlewareDecoding<Schema.withDecodingDefaultType<Schema.UndefinedOr<Schema.Union<readonly [Schema.Struct<{
    readonly content: Schema.mutableKey<Schema.String>;
    readonly start: Schema.mutableKey<Schema.Number>;
    readonly end: Schema.mutableKey<Schema.Number>;
    readonly type: Schema.mutableKey<Schema.Literal<"text">>;
}>, Schema.Struct<{
    readonly content: Schema.mutableKey<Schema.String>;
    readonly start: Schema.mutableKey<Schema.Number>;
    readonly end: Schema.mutableKey<Schema.Number>;
    readonly type: Schema.mutableKey<Schema.Literal<"file">>;
    readonly path: Schema.mutableKey<Schema.String>;
    readonly selection: Schema.mutableKey<Schema.middlewareDecoding<Schema.optional<Schema.Struct<{
        readonly startLine: Schema.mutableKey<Schema.Number>;
        readonly startChar: Schema.mutableKey<Schema.Number>;
        readonly endLine: Schema.mutableKey<Schema.Number>;
        readonly endChar: Schema.mutableKey<Schema.Number>;
    }>>, never>>;
    readonly mime: Schema.mutableKey<Schema.middlewareDecoding<Schema.optional<Schema.String>, never>>;
    readonly filename: Schema.mutableKey<Schema.middlewareDecoding<Schema.optional<Schema.String>, never>>;
    readonly description: Schema.mutableKey<Schema.middlewareDecoding<Schema.optional<Schema.String>, never>>;
    readonly url: Schema.mutableKey<Schema.middlewareDecoding<Schema.optional<Schema.String>, never>>;
    readonly source: Schema.mutableKey<Schema.middlewareDecoding<Schema.optional<Schema.Union<readonly [Schema.Struct<{
        readonly type: Schema.Literal<"file">;
        readonly text: Schema.Struct<{
            readonly value: Schema.String;
            readonly start: Schema.Number;
            readonly end: Schema.Number;
        }>;
        readonly path: Schema.String;
    }>, Schema.Struct<{
        readonly type: Schema.Literal<"symbol">;
        readonly text: Schema.Struct<{
            readonly value: Schema.String;
            readonly start: Schema.Number;
            readonly end: Schema.Number;
        }>;
        readonly path: Schema.String;
        readonly range: Schema.Struct<{
            readonly start: Schema.Struct<{
                readonly line: Schema.Number;
                readonly character: Schema.Number;
            }>;
            readonly end: Schema.Struct<{
                readonly line: Schema.Number;
                readonly character: Schema.Number;
            }>;
        }>;
        readonly name: Schema.String;
        readonly kind: Schema.Number;
    }>, Schema.Struct<{
        readonly type: Schema.Literal<"resource">;
        readonly text: Schema.Struct<{
            readonly value: Schema.String;
            readonly start: Schema.Number;
            readonly end: Schema.Number;
        }>;
        readonly clientName: Schema.String;
        readonly uri: Schema.String;
    }>]>>, never>>;
}>, Schema.Struct<{
    readonly content: Schema.mutableKey<Schema.String>;
    readonly start: Schema.mutableKey<Schema.Number>;
    readonly end: Schema.mutableKey<Schema.Number>;
    readonly type: Schema.mutableKey<Schema.Literal<"agent">>;
    readonly name: Schema.mutableKey<Schema.String>;
}>, Schema.Struct<{
    readonly content: Schema.mutableKey<Schema.String>;
    readonly start: Schema.mutableKey<Schema.Number>;
    readonly end: Schema.mutableKey<Schema.Number>;
    readonly type: Schema.mutableKey<Schema.Literal<"skill">>;
    readonly id: Schema.mutableKey<Schema.brand<Schema.String, "Skill.ID">>;
    readonly name: Schema.mutableKey<Schema.brand<Schema.String, "Skill.Name">>;
}>, Schema.Struct<{
    readonly content: Schema.mutableKey<Schema.String>;
    readonly start: Schema.mutableKey<Schema.Number>;
    readonly end: Schema.mutableKey<Schema.Number>;
    readonly type: Schema.mutableKey<Schema.Literal<"session">>;
    readonly id: Schema.mutableKey<Schema.brand<Schema.String, "SessionID"> & {
        create: () => string & import("effect/Brand").Brand<"SessionID">;
    }>;
}>, Schema.decodeTo<Schema.toType<Schema.Struct<{
    readonly type: Schema.mutableKey<Schema.Literal<"image">>;
    readonly id: Schema.mutableKey<Schema.String>;
    readonly filename: Schema.mutableKey<Schema.String>;
    readonly sourcePath: Schema.mutableKey<Schema.middlewareDecoding<Schema.optional<Schema.String>, never>>;
    readonly mime: Schema.mutableKey<Schema.String>;
    readonly blob: Schema.mutableKey<Schema.Struct<{
        readonly id: Schema.NonEmptyString;
        readonly url: Schema.String;
    }>>;
}>>, Schema.Struct<{
    readonly type: Schema.Literal<"image">;
    readonly id: Schema.String;
    readonly filename: Schema.String;
    readonly sourcePath: Schema.middlewareDecoding<Schema.optional<Schema.String>, never>;
    readonly mime: Schema.String;
    readonly blob: Schema.middlewareDecoding<Schema.optional<Schema.Struct<{
        readonly id: Schema.middlewareDecoding<Schema.optional<Schema.String>, never>;
        readonly url: Schema.middlewareDecoding<Schema.optional<Schema.String>, never>;
    }>>, never>;
    readonly dataUrl: Schema.middlewareDecoding<Schema.optional<Schema.String>, never>;
}>, never, never>, Schema.Struct<{
    readonly type: Schema.mutableKey<Schema.Literal<"path">>;
    readonly id: Schema.mutableKey<Schema.String>;
    readonly filename: Schema.mutableKey<Schema.String>;
    readonly mime: Schema.mutableKey<Schema.String>;
    readonly path: Schema.mutableKey<Schema.String>;
}>]>>, never>, never>>, never, never>]>, never, never>;
export type PromptHistoryEntry = typeof PromptHistoryEntry.Type;
export declare const PromptHistoryState: Schema.Struct<{
    readonly entries: Schema.mutableKey<Schema.middlewareDecoding<Schema.withDecodingDefaultType<Schema.decodeTo<Schema.mutable<Schema.$Array<Schema.toType<Schema.decodeTo<Schema.toType<Schema.Struct<{
        readonly prompt: Schema.decodeTo<Schema.toType<Schema.middlewareDecoding<Schema.withDecodingDefaultType<Schema.decodeTo<Schema.mutable<Schema.$Array<Schema.toType<Schema.Union<readonly [Schema.Struct<{
            readonly content: Schema.mutableKey<Schema.String>;
            readonly start: Schema.mutableKey<Schema.Number>;
            readonly end: Schema.mutableKey<Schema.Number>;
            readonly type: Schema.mutableKey<Schema.Literal<"text">>;
        }>, Schema.Struct<{
            readonly content: Schema.mutableKey<Schema.String>;
            readonly start: Schema.mutableKey<Schema.Number>;
            readonly end: Schema.mutableKey<Schema.Number>;
            readonly type: Schema.mutableKey<Schema.Literal<"file">>;
            readonly path: Schema.mutableKey<Schema.String>;
            readonly selection: Schema.mutableKey<Schema.middlewareDecoding<Schema.optional<Schema.Struct<{
                readonly startLine: Schema.mutableKey<Schema.Number>;
                readonly startChar: Schema.mutableKey<Schema.Number>;
                readonly endLine: Schema.mutableKey<Schema.Number>;
                readonly endChar: Schema.mutableKey<Schema.Number>;
            }>>, never>>;
            readonly mime: Schema.mutableKey<Schema.middlewareDecoding<Schema.optional<Schema.String>, never>>;
            readonly filename: Schema.mutableKey<Schema.middlewareDecoding<Schema.optional<Schema.String>, never>>;
            readonly description: Schema.mutableKey<Schema.middlewareDecoding<Schema.optional<Schema.String>, never>>;
            readonly url: Schema.mutableKey<Schema.middlewareDecoding<Schema.optional<Schema.String>, never>>;
            readonly source: Schema.mutableKey<Schema.middlewareDecoding<Schema.optional<Schema.Union<readonly [Schema.Struct<{
                readonly type: Schema.Literal<"file">;
                readonly text: Schema.Struct<{
                    readonly value: Schema.String;
                    readonly start: Schema.Number;
                    readonly end: Schema.Number;
                }>;
                readonly path: Schema.String;
            }>, Schema.Struct<{
                readonly type: Schema.Literal<"symbol">;
                readonly text: Schema.Struct<{
                    readonly value: Schema.String;
                    readonly start: Schema.Number;
                    readonly end: Schema.Number;
                }>;
                readonly path: Schema.String;
                readonly range: Schema.Struct<{
                    readonly start: Schema.Struct<{
                        readonly line: Schema.Number;
                        readonly character: Schema.Number;
                    }>;
                    readonly end: Schema.Struct<{
                        readonly line: Schema.Number;
                        readonly character: Schema.Number;
                    }>;
                }>;
                readonly name: Schema.String;
                readonly kind: Schema.Number;
            }>, Schema.Struct<{
                readonly type: Schema.Literal<"resource">;
                readonly text: Schema.Struct<{
                    readonly value: Schema.String;
                    readonly start: Schema.Number;
                    readonly end: Schema.Number;
                }>;
                readonly clientName: Schema.String;
                readonly uri: Schema.String;
            }>]>>, never>>;
        }>, Schema.Struct<{
            readonly content: Schema.mutableKey<Schema.String>;
            readonly start: Schema.mutableKey<Schema.Number>;
            readonly end: Schema.mutableKey<Schema.Number>;
            readonly type: Schema.mutableKey<Schema.Literal<"agent">>;
            readonly name: Schema.mutableKey<Schema.String>;
        }>, Schema.Struct<{
            readonly content: Schema.mutableKey<Schema.String>;
            readonly start: Schema.mutableKey<Schema.Number>;
            readonly end: Schema.mutableKey<Schema.Number>;
            readonly type: Schema.mutableKey<Schema.Literal<"skill">>;
            readonly id: Schema.mutableKey<Schema.brand<Schema.String, "Skill.ID">>;
            readonly name: Schema.mutableKey<Schema.brand<Schema.String, "Skill.Name">>;
        }>, Schema.Struct<{
            readonly content: Schema.mutableKey<Schema.String>;
            readonly start: Schema.mutableKey<Schema.Number>;
            readonly end: Schema.mutableKey<Schema.Number>;
            readonly type: Schema.mutableKey<Schema.Literal<"session">>;
            readonly id: Schema.mutableKey<Schema.brand<Schema.String, "SessionID"> & {
                create: () => string & import("effect/Brand").Brand<"SessionID">;
            }>;
        }>, Schema.decodeTo<Schema.toType<Schema.Struct<{
            readonly type: Schema.mutableKey<Schema.Literal<"image">>;
            readonly id: Schema.mutableKey<Schema.String>;
            readonly filename: Schema.mutableKey<Schema.String>;
            readonly sourcePath: Schema.mutableKey<Schema.middlewareDecoding<Schema.optional<Schema.String>, never>>;
            readonly mime: Schema.mutableKey<Schema.String>;
            readonly blob: Schema.mutableKey<Schema.Struct<{
                readonly id: Schema.NonEmptyString;
                readonly url: Schema.String;
            }>>;
        }>>, Schema.Struct<{
            readonly type: Schema.Literal<"image">;
            readonly id: Schema.String;
            readonly filename: Schema.String;
            readonly sourcePath: Schema.middlewareDecoding<Schema.optional<Schema.String>, never>;
            readonly mime: Schema.String;
            readonly blob: Schema.middlewareDecoding<Schema.optional<Schema.Struct<{
                readonly id: Schema.middlewareDecoding<Schema.optional<Schema.String>, never>;
                readonly url: Schema.middlewareDecoding<Schema.optional<Schema.String>, never>;
            }>>, never>;
            readonly dataUrl: Schema.middlewareDecoding<Schema.optional<Schema.String>, never>;
        }>, never, never>, Schema.Struct<{
            readonly type: Schema.mutableKey<Schema.Literal<"path">>;
            readonly id: Schema.mutableKey<Schema.String>;
            readonly filename: Schema.mutableKey<Schema.String>;
            readonly mime: Schema.mutableKey<Schema.String>;
            readonly path: Schema.mutableKey<Schema.String>;
        }>]>>>>, Schema.$Array<Schema.Unknown>, never, never>, never>, never>>, Schema.$Array<Schema.middlewareDecoding<Schema.withDecodingDefaultType<Schema.UndefinedOr<Schema.Union<readonly [Schema.Struct<{
            readonly content: Schema.mutableKey<Schema.String>;
            readonly start: Schema.mutableKey<Schema.Number>;
            readonly end: Schema.mutableKey<Schema.Number>;
            readonly type: Schema.mutableKey<Schema.Literal<"text">>;
        }>, Schema.Struct<{
            readonly content: Schema.mutableKey<Schema.String>;
            readonly start: Schema.mutableKey<Schema.Number>;
            readonly end: Schema.mutableKey<Schema.Number>;
            readonly type: Schema.mutableKey<Schema.Literal<"file">>;
            readonly path: Schema.mutableKey<Schema.String>;
            readonly selection: Schema.mutableKey<Schema.middlewareDecoding<Schema.optional<Schema.Struct<{
                readonly startLine: Schema.mutableKey<Schema.Number>;
                readonly startChar: Schema.mutableKey<Schema.Number>;
                readonly endLine: Schema.mutableKey<Schema.Number>;
                readonly endChar: Schema.mutableKey<Schema.Number>;
            }>>, never>>;
            readonly mime: Schema.mutableKey<Schema.middlewareDecoding<Schema.optional<Schema.String>, never>>;
            readonly filename: Schema.mutableKey<Schema.middlewareDecoding<Schema.optional<Schema.String>, never>>;
            readonly description: Schema.mutableKey<Schema.middlewareDecoding<Schema.optional<Schema.String>, never>>;
            readonly url: Schema.mutableKey<Schema.middlewareDecoding<Schema.optional<Schema.String>, never>>;
            readonly source: Schema.mutableKey<Schema.middlewareDecoding<Schema.optional<Schema.Union<readonly [Schema.Struct<{
                readonly type: Schema.Literal<"file">;
                readonly text: Schema.Struct<{
                    readonly value: Schema.String;
                    readonly start: Schema.Number;
                    readonly end: Schema.Number;
                }>;
                readonly path: Schema.String;
            }>, Schema.Struct<{
                readonly type: Schema.Literal<"symbol">;
                readonly text: Schema.Struct<{
                    readonly value: Schema.String;
                    readonly start: Schema.Number;
                    readonly end: Schema.Number;
                }>;
                readonly path: Schema.String;
                readonly range: Schema.Struct<{
                    readonly start: Schema.Struct<{
                        readonly line: Schema.Number;
                        readonly character: Schema.Number;
                    }>;
                    readonly end: Schema.Struct<{
                        readonly line: Schema.Number;
                        readonly character: Schema.Number;
                    }>;
                }>;
                readonly name: Schema.String;
                readonly kind: Schema.Number;
            }>, Schema.Struct<{
                readonly type: Schema.Literal<"resource">;
                readonly text: Schema.Struct<{
                    readonly value: Schema.String;
                    readonly start: Schema.Number;
                    readonly end: Schema.Number;
                }>;
                readonly clientName: Schema.String;
                readonly uri: Schema.String;
            }>]>>, never>>;
        }>, Schema.Struct<{
            readonly content: Schema.mutableKey<Schema.String>;
            readonly start: Schema.mutableKey<Schema.Number>;
            readonly end: Schema.mutableKey<Schema.Number>;
            readonly type: Schema.mutableKey<Schema.Literal<"agent">>;
            readonly name: Schema.mutableKey<Schema.String>;
        }>, Schema.Struct<{
            readonly content: Schema.mutableKey<Schema.String>;
            readonly start: Schema.mutableKey<Schema.Number>;
            readonly end: Schema.mutableKey<Schema.Number>;
            readonly type: Schema.mutableKey<Schema.Literal<"skill">>;
            readonly id: Schema.mutableKey<Schema.brand<Schema.String, "Skill.ID">>;
            readonly name: Schema.mutableKey<Schema.brand<Schema.String, "Skill.Name">>;
        }>, Schema.Struct<{
            readonly content: Schema.mutableKey<Schema.String>;
            readonly start: Schema.mutableKey<Schema.Number>;
            readonly end: Schema.mutableKey<Schema.Number>;
            readonly type: Schema.mutableKey<Schema.Literal<"session">>;
            readonly id: Schema.mutableKey<Schema.brand<Schema.String, "SessionID"> & {
                create: () => string & import("effect/Brand").Brand<"SessionID">;
            }>;
        }>, Schema.decodeTo<Schema.toType<Schema.Struct<{
            readonly type: Schema.mutableKey<Schema.Literal<"image">>;
            readonly id: Schema.mutableKey<Schema.String>;
            readonly filename: Schema.mutableKey<Schema.String>;
            readonly sourcePath: Schema.mutableKey<Schema.middlewareDecoding<Schema.optional<Schema.String>, never>>;
            readonly mime: Schema.mutableKey<Schema.String>;
            readonly blob: Schema.mutableKey<Schema.Struct<{
                readonly id: Schema.NonEmptyString;
                readonly url: Schema.String;
            }>>;
        }>>, Schema.Struct<{
            readonly type: Schema.Literal<"image">;
            readonly id: Schema.String;
            readonly filename: Schema.String;
            readonly sourcePath: Schema.middlewareDecoding<Schema.optional<Schema.String>, never>;
            readonly mime: Schema.String;
            readonly blob: Schema.middlewareDecoding<Schema.optional<Schema.Struct<{
                readonly id: Schema.middlewareDecoding<Schema.optional<Schema.String>, never>;
                readonly url: Schema.middlewareDecoding<Schema.optional<Schema.String>, never>;
            }>>, never>;
            readonly dataUrl: Schema.middlewareDecoding<Schema.optional<Schema.String>, never>;
        }>, never, never>, Schema.Struct<{
            readonly type: Schema.mutableKey<Schema.Literal<"path">>;
            readonly id: Schema.mutableKey<Schema.String>;
            readonly filename: Schema.mutableKey<Schema.String>;
            readonly mime: Schema.mutableKey<Schema.String>;
            readonly path: Schema.mutableKey<Schema.String>;
        }>]>>, never>, never>>, never, never>;
        readonly comments: Schema.middlewareDecoding<Schema.withDecodingDefaultType<Schema.decodeTo<Schema.mutable<Schema.$Array<Schema.toType<Schema.Struct<{
            readonly id: Schema.mutableKey<Schema.String>;
            readonly path: Schema.mutableKey<Schema.String>;
            readonly selection: Schema.mutableKey<Schema.Struct<{
                readonly start: Schema.mutableKey<Schema.Number>;
                readonly end: Schema.mutableKey<Schema.Number>;
                readonly side: Schema.mutableKey<Schema.middlewareDecoding<Schema.optional<Schema.Literals<readonly ["additions", "deletions"]>>, never>>;
                readonly endSide: Schema.mutableKey<Schema.middlewareDecoding<Schema.optional<Schema.Literals<readonly ["additions", "deletions"]>>, never>>;
            }>>;
            readonly comment: Schema.mutableKey<Schema.String>;
            readonly time: Schema.mutableKey<Schema.Number>;
            readonly origin: Schema.mutableKey<Schema.middlewareDecoding<Schema.optional<Schema.Literals<readonly ["review", "file"]>>, never>>;
            readonly preview: Schema.mutableKey<Schema.middlewareDecoding<Schema.optional<Schema.String>, never>>;
        }>>>>, Schema.$Array<Schema.Unknown>, never, never>, never>, never>;
    }>>, Schema.Union<readonly [Schema.Struct<{
        readonly prompt: Schema.decodeTo<Schema.toType<Schema.middlewareDecoding<Schema.withDecodingDefaultType<Schema.decodeTo<Schema.mutable<Schema.$Array<Schema.toType<Schema.Union<readonly [Schema.Struct<{
            readonly content: Schema.mutableKey<Schema.String>;
            readonly start: Schema.mutableKey<Schema.Number>;
            readonly end: Schema.mutableKey<Schema.Number>;
            readonly type: Schema.mutableKey<Schema.Literal<"text">>;
        }>, Schema.Struct<{
            readonly content: Schema.mutableKey<Schema.String>;
            readonly start: Schema.mutableKey<Schema.Number>;
            readonly end: Schema.mutableKey<Schema.Number>;
            readonly type: Schema.mutableKey<Schema.Literal<"file">>;
            readonly path: Schema.mutableKey<Schema.String>;
            readonly selection: Schema.mutableKey<Schema.middlewareDecoding<Schema.optional<Schema.Struct<{
                readonly startLine: Schema.mutableKey<Schema.Number>;
                readonly startChar: Schema.mutableKey<Schema.Number>;
                readonly endLine: Schema.mutableKey<Schema.Number>;
                readonly endChar: Schema.mutableKey<Schema.Number>;
            }>>, never>>;
            readonly mime: Schema.mutableKey<Schema.middlewareDecoding<Schema.optional<Schema.String>, never>>;
            readonly filename: Schema.mutableKey<Schema.middlewareDecoding<Schema.optional<Schema.String>, never>>;
            readonly description: Schema.mutableKey<Schema.middlewareDecoding<Schema.optional<Schema.String>, never>>;
            readonly url: Schema.mutableKey<Schema.middlewareDecoding<Schema.optional<Schema.String>, never>>;
            readonly source: Schema.mutableKey<Schema.middlewareDecoding<Schema.optional<Schema.Union<readonly [Schema.Struct<{
                readonly type: Schema.Literal<"file">;
                readonly text: Schema.Struct<{
                    readonly value: Schema.String;
                    readonly start: Schema.Number;
                    readonly end: Schema.Number;
                }>;
                readonly path: Schema.String;
            }>, Schema.Struct<{
                readonly type: Schema.Literal<"symbol">;
                readonly text: Schema.Struct<{
                    readonly value: Schema.String;
                    readonly start: Schema.Number;
                    readonly end: Schema.Number;
                }>;
                readonly path: Schema.String;
                readonly range: Schema.Struct<{
                    readonly start: Schema.Struct<{
                        readonly line: Schema.Number;
                        readonly character: Schema.Number;
                    }>;
                    readonly end: Schema.Struct<{
                        readonly line: Schema.Number;
                        readonly character: Schema.Number;
                    }>;
                }>;
                readonly name: Schema.String;
                readonly kind: Schema.Number;
            }>, Schema.Struct<{
                readonly type: Schema.Literal<"resource">;
                readonly text: Schema.Struct<{
                    readonly value: Schema.String;
                    readonly start: Schema.Number;
                    readonly end: Schema.Number;
                }>;
                readonly clientName: Schema.String;
                readonly uri: Schema.String;
            }>]>>, never>>;
        }>, Schema.Struct<{
            readonly content: Schema.mutableKey<Schema.String>;
            readonly start: Schema.mutableKey<Schema.Number>;
            readonly end: Schema.mutableKey<Schema.Number>;
            readonly type: Schema.mutableKey<Schema.Literal<"agent">>;
            readonly name: Schema.mutableKey<Schema.String>;
        }>, Schema.Struct<{
            readonly content: Schema.mutableKey<Schema.String>;
            readonly start: Schema.mutableKey<Schema.Number>;
            readonly end: Schema.mutableKey<Schema.Number>;
            readonly type: Schema.mutableKey<Schema.Literal<"skill">>;
            readonly id: Schema.mutableKey<Schema.brand<Schema.String, "Skill.ID">>;
            readonly name: Schema.mutableKey<Schema.brand<Schema.String, "Skill.Name">>;
        }>, Schema.Struct<{
            readonly content: Schema.mutableKey<Schema.String>;
            readonly start: Schema.mutableKey<Schema.Number>;
            readonly end: Schema.mutableKey<Schema.Number>;
            readonly type: Schema.mutableKey<Schema.Literal<"session">>;
            readonly id: Schema.mutableKey<Schema.brand<Schema.String, "SessionID"> & {
                create: () => string & import("effect/Brand").Brand<"SessionID">;
            }>;
        }>, Schema.decodeTo<Schema.toType<Schema.Struct<{
            readonly type: Schema.mutableKey<Schema.Literal<"image">>;
            readonly id: Schema.mutableKey<Schema.String>;
            readonly filename: Schema.mutableKey<Schema.String>;
            readonly sourcePath: Schema.mutableKey<Schema.middlewareDecoding<Schema.optional<Schema.String>, never>>;
            readonly mime: Schema.mutableKey<Schema.String>;
            readonly blob: Schema.mutableKey<Schema.Struct<{
                readonly id: Schema.NonEmptyString;
                readonly url: Schema.String;
            }>>;
        }>>, Schema.Struct<{
            readonly type: Schema.Literal<"image">;
            readonly id: Schema.String;
            readonly filename: Schema.String;
            readonly sourcePath: Schema.middlewareDecoding<Schema.optional<Schema.String>, never>;
            readonly mime: Schema.String;
            readonly blob: Schema.middlewareDecoding<Schema.optional<Schema.Struct<{
                readonly id: Schema.middlewareDecoding<Schema.optional<Schema.String>, never>;
                readonly url: Schema.middlewareDecoding<Schema.optional<Schema.String>, never>;
            }>>, never>;
            readonly dataUrl: Schema.middlewareDecoding<Schema.optional<Schema.String>, never>;
        }>, never, never>, Schema.Struct<{
            readonly type: Schema.mutableKey<Schema.Literal<"path">>;
            readonly id: Schema.mutableKey<Schema.String>;
            readonly filename: Schema.mutableKey<Schema.String>;
            readonly mime: Schema.mutableKey<Schema.String>;
            readonly path: Schema.mutableKey<Schema.String>;
        }>]>>>>, Schema.$Array<Schema.Unknown>, never, never>, never>, never>>, Schema.$Array<Schema.middlewareDecoding<Schema.withDecodingDefaultType<Schema.UndefinedOr<Schema.Union<readonly [Schema.Struct<{
            readonly content: Schema.mutableKey<Schema.String>;
            readonly start: Schema.mutableKey<Schema.Number>;
            readonly end: Schema.mutableKey<Schema.Number>;
            readonly type: Schema.mutableKey<Schema.Literal<"text">>;
        }>, Schema.Struct<{
            readonly content: Schema.mutableKey<Schema.String>;
            readonly start: Schema.mutableKey<Schema.Number>;
            readonly end: Schema.mutableKey<Schema.Number>;
            readonly type: Schema.mutableKey<Schema.Literal<"file">>;
            readonly path: Schema.mutableKey<Schema.String>;
            readonly selection: Schema.mutableKey<Schema.middlewareDecoding<Schema.optional<Schema.Struct<{
                readonly startLine: Schema.mutableKey<Schema.Number>;
                readonly startChar: Schema.mutableKey<Schema.Number>;
                readonly endLine: Schema.mutableKey<Schema.Number>;
                readonly endChar: Schema.mutableKey<Schema.Number>;
            }>>, never>>;
            readonly mime: Schema.mutableKey<Schema.middlewareDecoding<Schema.optional<Schema.String>, never>>;
            readonly filename: Schema.mutableKey<Schema.middlewareDecoding<Schema.optional<Schema.String>, never>>;
            readonly description: Schema.mutableKey<Schema.middlewareDecoding<Schema.optional<Schema.String>, never>>;
            readonly url: Schema.mutableKey<Schema.middlewareDecoding<Schema.optional<Schema.String>, never>>;
            readonly source: Schema.mutableKey<Schema.middlewareDecoding<Schema.optional<Schema.Union<readonly [Schema.Struct<{
                readonly type: Schema.Literal<"file">;
                readonly text: Schema.Struct<{
                    readonly value: Schema.String;
                    readonly start: Schema.Number;
                    readonly end: Schema.Number;
                }>;
                readonly path: Schema.String;
            }>, Schema.Struct<{
                readonly type: Schema.Literal<"symbol">;
                readonly text: Schema.Struct<{
                    readonly value: Schema.String;
                    readonly start: Schema.Number;
                    readonly end: Schema.Number;
                }>;
                readonly path: Schema.String;
                readonly range: Schema.Struct<{
                    readonly start: Schema.Struct<{
                        readonly line: Schema.Number;
                        readonly character: Schema.Number;
                    }>;
                    readonly end: Schema.Struct<{
                        readonly line: Schema.Number;
                        readonly character: Schema.Number;
                    }>;
                }>;
                readonly name: Schema.String;
                readonly kind: Schema.Number;
            }>, Schema.Struct<{
                readonly type: Schema.Literal<"resource">;
                readonly text: Schema.Struct<{
                    readonly value: Schema.String;
                    readonly start: Schema.Number;
                    readonly end: Schema.Number;
                }>;
                readonly clientName: Schema.String;
                readonly uri: Schema.String;
            }>]>>, never>>;
        }>, Schema.Struct<{
            readonly content: Schema.mutableKey<Schema.String>;
            readonly start: Schema.mutableKey<Schema.Number>;
            readonly end: Schema.mutableKey<Schema.Number>;
            readonly type: Schema.mutableKey<Schema.Literal<"agent">>;
            readonly name: Schema.mutableKey<Schema.String>;
        }>, Schema.Struct<{
            readonly content: Schema.mutableKey<Schema.String>;
            readonly start: Schema.mutableKey<Schema.Number>;
            readonly end: Schema.mutableKey<Schema.Number>;
            readonly type: Schema.mutableKey<Schema.Literal<"skill">>;
            readonly id: Schema.mutableKey<Schema.brand<Schema.String, "Skill.ID">>;
            readonly name: Schema.mutableKey<Schema.brand<Schema.String, "Skill.Name">>;
        }>, Schema.Struct<{
            readonly content: Schema.mutableKey<Schema.String>;
            readonly start: Schema.mutableKey<Schema.Number>;
            readonly end: Schema.mutableKey<Schema.Number>;
            readonly type: Schema.mutableKey<Schema.Literal<"session">>;
            readonly id: Schema.mutableKey<Schema.brand<Schema.String, "SessionID"> & {
                create: () => string & import("effect/Brand").Brand<"SessionID">;
            }>;
        }>, Schema.decodeTo<Schema.toType<Schema.Struct<{
            readonly type: Schema.mutableKey<Schema.Literal<"image">>;
            readonly id: Schema.mutableKey<Schema.String>;
            readonly filename: Schema.mutableKey<Schema.String>;
            readonly sourcePath: Schema.mutableKey<Schema.middlewareDecoding<Schema.optional<Schema.String>, never>>;
            readonly mime: Schema.mutableKey<Schema.String>;
            readonly blob: Schema.mutableKey<Schema.Struct<{
                readonly id: Schema.NonEmptyString;
                readonly url: Schema.String;
            }>>;
        }>>, Schema.Struct<{
            readonly type: Schema.Literal<"image">;
            readonly id: Schema.String;
            readonly filename: Schema.String;
            readonly sourcePath: Schema.middlewareDecoding<Schema.optional<Schema.String>, never>;
            readonly mime: Schema.String;
            readonly blob: Schema.middlewareDecoding<Schema.optional<Schema.Struct<{
                readonly id: Schema.middlewareDecoding<Schema.optional<Schema.String>, never>;
                readonly url: Schema.middlewareDecoding<Schema.optional<Schema.String>, never>;
            }>>, never>;
            readonly dataUrl: Schema.middlewareDecoding<Schema.optional<Schema.String>, never>;
        }>, never, never>, Schema.Struct<{
            readonly type: Schema.mutableKey<Schema.Literal<"path">>;
            readonly id: Schema.mutableKey<Schema.String>;
            readonly filename: Schema.mutableKey<Schema.String>;
            readonly mime: Schema.mutableKey<Schema.String>;
            readonly path: Schema.mutableKey<Schema.String>;
        }>]>>, never>, never>>, never, never>;
        readonly comments: Schema.middlewareDecoding<Schema.withDecodingDefaultType<Schema.decodeTo<Schema.mutable<Schema.$Array<Schema.toType<Schema.Struct<{
            readonly id: Schema.mutableKey<Schema.String>;
            readonly path: Schema.mutableKey<Schema.String>;
            readonly selection: Schema.mutableKey<Schema.Struct<{
                readonly start: Schema.mutableKey<Schema.Number>;
                readonly end: Schema.mutableKey<Schema.Number>;
                readonly side: Schema.mutableKey<Schema.middlewareDecoding<Schema.optional<Schema.Literals<readonly ["additions", "deletions"]>>, never>>;
                readonly endSide: Schema.mutableKey<Schema.middlewareDecoding<Schema.optional<Schema.Literals<readonly ["additions", "deletions"]>>, never>>;
            }>>;
            readonly comment: Schema.mutableKey<Schema.String>;
            readonly time: Schema.mutableKey<Schema.Number>;
            readonly origin: Schema.mutableKey<Schema.middlewareDecoding<Schema.optional<Schema.Literals<readonly ["review", "file"]>>, never>>;
            readonly preview: Schema.mutableKey<Schema.middlewareDecoding<Schema.optional<Schema.String>, never>>;
        }>>>>, Schema.$Array<Schema.Unknown>, never, never>, never>, never>;
    }>, Schema.decodeTo<Schema.toType<Schema.middlewareDecoding<Schema.withDecodingDefaultType<Schema.decodeTo<Schema.mutable<Schema.$Array<Schema.toType<Schema.Union<readonly [Schema.Struct<{
        readonly content: Schema.mutableKey<Schema.String>;
        readonly start: Schema.mutableKey<Schema.Number>;
        readonly end: Schema.mutableKey<Schema.Number>;
        readonly type: Schema.mutableKey<Schema.Literal<"text">>;
    }>, Schema.Struct<{
        readonly content: Schema.mutableKey<Schema.String>;
        readonly start: Schema.mutableKey<Schema.Number>;
        readonly end: Schema.mutableKey<Schema.Number>;
        readonly type: Schema.mutableKey<Schema.Literal<"file">>;
        readonly path: Schema.mutableKey<Schema.String>;
        readonly selection: Schema.mutableKey<Schema.middlewareDecoding<Schema.optional<Schema.Struct<{
            readonly startLine: Schema.mutableKey<Schema.Number>;
            readonly startChar: Schema.mutableKey<Schema.Number>;
            readonly endLine: Schema.mutableKey<Schema.Number>;
            readonly endChar: Schema.mutableKey<Schema.Number>;
        }>>, never>>;
        readonly mime: Schema.mutableKey<Schema.middlewareDecoding<Schema.optional<Schema.String>, never>>;
        readonly filename: Schema.mutableKey<Schema.middlewareDecoding<Schema.optional<Schema.String>, never>>;
        readonly description: Schema.mutableKey<Schema.middlewareDecoding<Schema.optional<Schema.String>, never>>;
        readonly url: Schema.mutableKey<Schema.middlewareDecoding<Schema.optional<Schema.String>, never>>;
        readonly source: Schema.mutableKey<Schema.middlewareDecoding<Schema.optional<Schema.Union<readonly [Schema.Struct<{
            readonly type: Schema.Literal<"file">;
            readonly text: Schema.Struct<{
                readonly value: Schema.String;
                readonly start: Schema.Number;
                readonly end: Schema.Number;
            }>;
            readonly path: Schema.String;
        }>, Schema.Struct<{
            readonly type: Schema.Literal<"symbol">;
            readonly text: Schema.Struct<{
                readonly value: Schema.String;
                readonly start: Schema.Number;
                readonly end: Schema.Number;
            }>;
            readonly path: Schema.String;
            readonly range: Schema.Struct<{
                readonly start: Schema.Struct<{
                    readonly line: Schema.Number;
                    readonly character: Schema.Number;
                }>;
                readonly end: Schema.Struct<{
                    readonly line: Schema.Number;
                    readonly character: Schema.Number;
                }>;
            }>;
            readonly name: Schema.String;
            readonly kind: Schema.Number;
        }>, Schema.Struct<{
            readonly type: Schema.Literal<"resource">;
            readonly text: Schema.Struct<{
                readonly value: Schema.String;
                readonly start: Schema.Number;
                readonly end: Schema.Number;
            }>;
            readonly clientName: Schema.String;
            readonly uri: Schema.String;
        }>]>>, never>>;
    }>, Schema.Struct<{
        readonly content: Schema.mutableKey<Schema.String>;
        readonly start: Schema.mutableKey<Schema.Number>;
        readonly end: Schema.mutableKey<Schema.Number>;
        readonly type: Schema.mutableKey<Schema.Literal<"agent">>;
        readonly name: Schema.mutableKey<Schema.String>;
    }>, Schema.Struct<{
        readonly content: Schema.mutableKey<Schema.String>;
        readonly start: Schema.mutableKey<Schema.Number>;
        readonly end: Schema.mutableKey<Schema.Number>;
        readonly type: Schema.mutableKey<Schema.Literal<"skill">>;
        readonly id: Schema.mutableKey<Schema.brand<Schema.String, "Skill.ID">>;
        readonly name: Schema.mutableKey<Schema.brand<Schema.String, "Skill.Name">>;
    }>, Schema.Struct<{
        readonly content: Schema.mutableKey<Schema.String>;
        readonly start: Schema.mutableKey<Schema.Number>;
        readonly end: Schema.mutableKey<Schema.Number>;
        readonly type: Schema.mutableKey<Schema.Literal<"session">>;
        readonly id: Schema.mutableKey<Schema.brand<Schema.String, "SessionID"> & {
            create: () => string & import("effect/Brand").Brand<"SessionID">;
        }>;
    }>, Schema.decodeTo<Schema.toType<Schema.Struct<{
        readonly type: Schema.mutableKey<Schema.Literal<"image">>;
        readonly id: Schema.mutableKey<Schema.String>;
        readonly filename: Schema.mutableKey<Schema.String>;
        readonly sourcePath: Schema.mutableKey<Schema.middlewareDecoding<Schema.optional<Schema.String>, never>>;
        readonly mime: Schema.mutableKey<Schema.String>;
        readonly blob: Schema.mutableKey<Schema.Struct<{
            readonly id: Schema.NonEmptyString;
            readonly url: Schema.String;
        }>>;
    }>>, Schema.Struct<{
        readonly type: Schema.Literal<"image">;
        readonly id: Schema.String;
        readonly filename: Schema.String;
        readonly sourcePath: Schema.middlewareDecoding<Schema.optional<Schema.String>, never>;
        readonly mime: Schema.String;
        readonly blob: Schema.middlewareDecoding<Schema.optional<Schema.Struct<{
            readonly id: Schema.middlewareDecoding<Schema.optional<Schema.String>, never>;
            readonly url: Schema.middlewareDecoding<Schema.optional<Schema.String>, never>;
        }>>, never>;
        readonly dataUrl: Schema.middlewareDecoding<Schema.optional<Schema.String>, never>;
    }>, never, never>, Schema.Struct<{
        readonly type: Schema.mutableKey<Schema.Literal<"path">>;
        readonly id: Schema.mutableKey<Schema.String>;
        readonly filename: Schema.mutableKey<Schema.String>;
        readonly mime: Schema.mutableKey<Schema.String>;
        readonly path: Schema.mutableKey<Schema.String>;
    }>]>>>>, Schema.$Array<Schema.Unknown>, never, never>, never>, never>>, Schema.$Array<Schema.middlewareDecoding<Schema.withDecodingDefaultType<Schema.UndefinedOr<Schema.Union<readonly [Schema.Struct<{
        readonly content: Schema.mutableKey<Schema.String>;
        readonly start: Schema.mutableKey<Schema.Number>;
        readonly end: Schema.mutableKey<Schema.Number>;
        readonly type: Schema.mutableKey<Schema.Literal<"text">>;
    }>, Schema.Struct<{
        readonly content: Schema.mutableKey<Schema.String>;
        readonly start: Schema.mutableKey<Schema.Number>;
        readonly end: Schema.mutableKey<Schema.Number>;
        readonly type: Schema.mutableKey<Schema.Literal<"file">>;
        readonly path: Schema.mutableKey<Schema.String>;
        readonly selection: Schema.mutableKey<Schema.middlewareDecoding<Schema.optional<Schema.Struct<{
            readonly startLine: Schema.mutableKey<Schema.Number>;
            readonly startChar: Schema.mutableKey<Schema.Number>;
            readonly endLine: Schema.mutableKey<Schema.Number>;
            readonly endChar: Schema.mutableKey<Schema.Number>;
        }>>, never>>;
        readonly mime: Schema.mutableKey<Schema.middlewareDecoding<Schema.optional<Schema.String>, never>>;
        readonly filename: Schema.mutableKey<Schema.middlewareDecoding<Schema.optional<Schema.String>, never>>;
        readonly description: Schema.mutableKey<Schema.middlewareDecoding<Schema.optional<Schema.String>, never>>;
        readonly url: Schema.mutableKey<Schema.middlewareDecoding<Schema.optional<Schema.String>, never>>;
        readonly source: Schema.mutableKey<Schema.middlewareDecoding<Schema.optional<Schema.Union<readonly [Schema.Struct<{
            readonly type: Schema.Literal<"file">;
            readonly text: Schema.Struct<{
                readonly value: Schema.String;
                readonly start: Schema.Number;
                readonly end: Schema.Number;
            }>;
            readonly path: Schema.String;
        }>, Schema.Struct<{
            readonly type: Schema.Literal<"symbol">;
            readonly text: Schema.Struct<{
                readonly value: Schema.String;
                readonly start: Schema.Number;
                readonly end: Schema.Number;
            }>;
            readonly path: Schema.String;
            readonly range: Schema.Struct<{
                readonly start: Schema.Struct<{
                    readonly line: Schema.Number;
                    readonly character: Schema.Number;
                }>;
                readonly end: Schema.Struct<{
                    readonly line: Schema.Number;
                    readonly character: Schema.Number;
                }>;
            }>;
            readonly name: Schema.String;
            readonly kind: Schema.Number;
        }>, Schema.Struct<{
            readonly type: Schema.Literal<"resource">;
            readonly text: Schema.Struct<{
                readonly value: Schema.String;
                readonly start: Schema.Number;
                readonly end: Schema.Number;
            }>;
            readonly clientName: Schema.String;
            readonly uri: Schema.String;
        }>]>>, never>>;
    }>, Schema.Struct<{
        readonly content: Schema.mutableKey<Schema.String>;
        readonly start: Schema.mutableKey<Schema.Number>;
        readonly end: Schema.mutableKey<Schema.Number>;
        readonly type: Schema.mutableKey<Schema.Literal<"agent">>;
        readonly name: Schema.mutableKey<Schema.String>;
    }>, Schema.Struct<{
        readonly content: Schema.mutableKey<Schema.String>;
        readonly start: Schema.mutableKey<Schema.Number>;
        readonly end: Schema.mutableKey<Schema.Number>;
        readonly type: Schema.mutableKey<Schema.Literal<"skill">>;
        readonly id: Schema.mutableKey<Schema.brand<Schema.String, "Skill.ID">>;
        readonly name: Schema.mutableKey<Schema.brand<Schema.String, "Skill.Name">>;
    }>, Schema.Struct<{
        readonly content: Schema.mutableKey<Schema.String>;
        readonly start: Schema.mutableKey<Schema.Number>;
        readonly end: Schema.mutableKey<Schema.Number>;
        readonly type: Schema.mutableKey<Schema.Literal<"session">>;
        readonly id: Schema.mutableKey<Schema.brand<Schema.String, "SessionID"> & {
            create: () => string & import("effect/Brand").Brand<"SessionID">;
        }>;
    }>, Schema.decodeTo<Schema.toType<Schema.Struct<{
        readonly type: Schema.mutableKey<Schema.Literal<"image">>;
        readonly id: Schema.mutableKey<Schema.String>;
        readonly filename: Schema.mutableKey<Schema.String>;
        readonly sourcePath: Schema.mutableKey<Schema.middlewareDecoding<Schema.optional<Schema.String>, never>>;
        readonly mime: Schema.mutableKey<Schema.String>;
        readonly blob: Schema.mutableKey<Schema.Struct<{
            readonly id: Schema.NonEmptyString;
            readonly url: Schema.String;
        }>>;
    }>>, Schema.Struct<{
        readonly type: Schema.Literal<"image">;
        readonly id: Schema.String;
        readonly filename: Schema.String;
        readonly sourcePath: Schema.middlewareDecoding<Schema.optional<Schema.String>, never>;
        readonly mime: Schema.String;
        readonly blob: Schema.middlewareDecoding<Schema.optional<Schema.Struct<{
            readonly id: Schema.middlewareDecoding<Schema.optional<Schema.String>, never>;
            readonly url: Schema.middlewareDecoding<Schema.optional<Schema.String>, never>;
        }>>, never>;
        readonly dataUrl: Schema.middlewareDecoding<Schema.optional<Schema.String>, never>;
    }>, never, never>, Schema.Struct<{
        readonly type: Schema.mutableKey<Schema.Literal<"path">>;
        readonly id: Schema.mutableKey<Schema.String>;
        readonly filename: Schema.mutableKey<Schema.String>;
        readonly mime: Schema.mutableKey<Schema.String>;
        readonly path: Schema.mutableKey<Schema.String>;
    }>]>>, never>, never>>, never, never>]>, never, never>>>>, Schema.$Array<Schema.Unknown>, never, never>, never>, never>>;
}>;
