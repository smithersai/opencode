import { Schema } from "effect";
import type { SessionMessageUser } from "@opencode/client/promise";
import { FileSelection } from "../workspaces/files/types.vibe";
import { NoteComment, QuoteComment, type ContextItem } from "./schema.vibe";
declare const PromptFileComment: Schema.Struct<{
    readonly type: Schema.mutableKey<Schema.optional<Schema.Literal<"file">>>;
    readonly path: Schema.mutableKey<Schema.String>;
    readonly selection: Schema.mutableKey<Schema.middlewareDecoding<Schema.optional<Schema.Struct<{
        readonly startLine: Schema.mutableKey<Schema.Number>;
        readonly startChar: Schema.mutableKey<Schema.Number>;
        readonly endLine: Schema.mutableKey<Schema.Number>;
        readonly endChar: Schema.mutableKey<Schema.Number>;
    }>>, never>>;
    readonly comment: Schema.mutableKey<Schema.String>;
    readonly preview: Schema.mutableKey<Schema.middlewareDecoding<Schema.optional<Schema.String>, never>>;
    readonly origin: Schema.mutableKey<Schema.middlewareDecoding<Schema.optional<Schema.Literals<readonly ["review", "file"]>>, never>>;
}>;
type PromptFileComment = typeof PromptFileComment.Type;
export type PromptComment = PromptFileComment | NoteComment | QuoteComment;
/** An attachment the model receives as a path on the server rather than inline bytes. */
export declare const PromptAttachmentReference: Schema.Struct<{
    readonly name: Schema.mutableKey<Schema.String>;
    readonly mime: Schema.mutableKey<Schema.String>;
    readonly path: Schema.mutableKey<Schema.String>;
}>;
export type PromptAttachmentReference = typeof PromptAttachmentReference.Type;
export declare function readPromptPresentation(metadata: SessionMessageUser["metadata"]): {
    displayText: string;
    attachments: {
        name: string;
        mime: string;
        path: string;
    }[];
    comments: PromptComment[];
} | undefined;
export declare function formatAttachmentReference(input: PromptAttachmentReference): string;
/** A note reads with its live subject while it stays in the app process that attached it. */
export declare function formatNoteComment(input: NoteComment): string;
/** Each quoted line is prefixed, so quoted text cannot end the quote early and read as the user's own words. */
export declare function formatQuoteComment(input: QuoteComment): string;
/** Restores a sent comment to the composer, for example after a revert or fork. */
export declare function commentContextItem(comment: PromptComment): ContextItem;
export declare function formatCommentNote(input: {
    path: string;
    selection?: FileSelection;
    comment: string;
}): string;
export declare function parseCommentNote(text: string): {
    path: string;
    selection: {
        startLine: number;
        startChar: number;
        endLine: number;
        endChar: number;
    } | undefined;
    comment: string;
} | undefined;
export {};
