import { Effect } from "effect";
export * as BrowserFiles from "./files.vibe";
import { Browser } from "./rpc.vibe";
import { Tool } from "@opencode/schema/tool";
export declare const read: (paths: readonly string[], directory: string) => Effect.Effect<{
    id: string & import("effect/Brand").Brand<"Browser.FileID">;
    name: string;
    mime: string;
    data: Uint8Array<ArrayBuffer>;
}[], Tool.Error, never>;
export declare const save: (files: readonly Browser.File[]) => Effect.Effect<{
    id: string & import("effect/Brand").Brand<"Browser.FileID">;
    name: string;
    mime: string;
    bytes: number;
    path: string;
}[], Tool.Error, never>;
export declare function captureName(name: string): string;
