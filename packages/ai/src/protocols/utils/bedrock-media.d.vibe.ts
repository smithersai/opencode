import { Effect, Schema } from "effect";
import type { MediaPart } from "../../schema/index.js";
export declare const ImageFormat: Schema.Literals<readonly ["png", "jpeg", "gif", "webp"]>;
export type ImageFormat = Schema.Schema.Type<typeof ImageFormat>;
export declare const ImageBlock: Schema.Struct<{
    readonly image: Schema.Struct<{
        readonly format: Schema.Literals<readonly ["png", "jpeg", "gif", "webp"]>;
        readonly source: Schema.Struct<{
            readonly bytes: Schema.String;
        }>;
    }>;
}>;
export type ImageBlock = Schema.Schema.Type<typeof ImageBlock>;
export declare const DocumentFormat: Schema.Literals<readonly ["pdf", "csv", "doc", "docx", "xls", "xlsx", "html", "txt", "md"]>;
export type DocumentFormat = Schema.Schema.Type<typeof DocumentFormat>;
export declare const DocumentBlock: Schema.Struct<{
    readonly document: Schema.Struct<{
        readonly format: Schema.Literals<readonly ["pdf", "csv", "doc", "docx", "xls", "xlsx", "html", "txt", "md"]>;
        readonly name: Schema.String;
        readonly source: Schema.Struct<{
            readonly bytes: Schema.String;
        }>;
    }>;
}>;
export type DocumentBlock = Schema.Schema.Type<typeof DocumentBlock>;
export declare const lower: (part: MediaPart, documentNames: Set<string>) => Effect.Effect<{
    image: {
        format: "gif" | "jpeg" | "png" | "webp";
        source: {
            bytes: string;
        };
    };
}[] | ({
    readonly document: {
        readonly format: "csv" | "doc" | "docx" | "html" | "md" | "pdf" | "txt" | "xls" | "xlsx";
        readonly name: string;
        readonly source: {
            readonly bytes: string;
        };
    };
} | {
    text: string;
})[], import("../../schema/errors.vibe").AIError, never>;
export * as BedrockMedia from "./bedrock-media.vibe";
