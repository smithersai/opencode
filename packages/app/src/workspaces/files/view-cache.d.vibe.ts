import { Schema } from "effect";
import { SelectedLineRange } from "./types.vibe";
import type { ServerScope } from "@/runtime/server/scope";
export declare const FileViewsSchema: Schema.Struct<{
    readonly file: Schema.middlewareDecoding<Schema.withDecodingDefaultType<Schema.$Record<Schema.String, Schema.mutableKey<Schema.middlewareDecoding<Schema.withDecodingDefaultType<Schema.Struct<{
        readonly scrollTop: Schema.mutableKey<Schema.middlewareDecoding<Schema.optional<Schema.Finite>, never>>;
        readonly scrollLeft: Schema.mutableKey<Schema.middlewareDecoding<Schema.optional<Schema.Finite>, never>>;
        readonly selectedLines: Schema.mutableKey<Schema.middlewareDecoding<Schema.optional<Schema.NullOr<Schema.Struct<{
            readonly start: Schema.mutableKey<Schema.Number>;
            readonly end: Schema.mutableKey<Schema.Number>;
            readonly side: Schema.mutableKey<Schema.middlewareDecoding<Schema.optional<Schema.Literals<readonly ["additions", "deletions"]>>, never>>;
            readonly endSide: Schema.mutableKey<Schema.middlewareDecoding<Schema.optional<Schema.Literals<readonly ["additions", "deletions"]>>, never>>;
        }>>>, never>>;
    }>, never>, never>>>, never>, never>;
}>;
export declare function createFileViewCache(scope: ServerScope): {
    load: (dir: string, id: string | undefined) => {
        ready: import("solid-js").Accessor<boolean> & {
            promise: undefined | Promise<unknown>;
        };
        scrollTop: (path: string) => number | undefined;
        scrollLeft: (path: string) => number | undefined;
        selectedLines: (path: string) => {
            start: number;
            end: number;
            side?: "additions" | "deletions" | undefined;
            endSide?: "additions" | "deletions" | undefined;
        } | null | undefined;
        setScrollTop: (path: string, top: number) => void;
        setScrollLeft: (path: string, left: number) => void;
        setSelectedLines: (path: string, range: SelectedLineRange | null) => void;
    };
    clear: () => void;
};
