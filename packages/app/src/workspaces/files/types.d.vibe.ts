import { Schema } from "effect";
import type { FileContent } from "@opencode/plugin/gui";
export declare const FileSelection: Schema.Struct<{
    readonly startLine: Schema.mutableKey<Schema.Number>;
    readonly startChar: Schema.mutableKey<Schema.Number>;
    readonly endLine: Schema.mutableKey<Schema.Number>;
    readonly endChar: Schema.mutableKey<Schema.Number>;
}>;
export type FileSelection = typeof FileSelection.Type;
export declare const SelectedLineRange: Schema.Struct<{
    readonly start: Schema.mutableKey<Schema.Number>;
    readonly end: Schema.mutableKey<Schema.Number>;
    readonly side: Schema.mutableKey<Schema.middlewareDecoding<Schema.optional<Schema.Literals<readonly ["additions", "deletions"]>>, never>>;
    readonly endSide: Schema.mutableKey<Schema.middlewareDecoding<Schema.optional<Schema.Literals<readonly ["additions", "deletions"]>>, never>>;
}>;
export type SelectedLineRange = typeof SelectedLineRange.Type;
export type FileViewState = {
    scrollTop?: number;
    scrollLeft?: number;
    selectedLines?: SelectedLineRange | null;
};
export type FileState = {
    path: string;
    name: string;
    loaded?: boolean;
    loading?: boolean;
    notFound?: boolean;
    error?: string;
    content?: FileContent;
};
export declare function selectionFromLines(range: SelectedLineRange): FileSelection;
