import { Effect } from "effect";
import { type ToolDefinition } from "@opencode/ai/effect";
import { Tool } from "@opencode/schema/tool";
export declare const definition: (tool: Tool.Info<any, any>) => ToolDefinition;
export declare const execute: (tool: Tool.Info<any, any>, input: unknown, context: Tool.Context) => Effect.Effect<{
    output: any;
    content: ({
        readonly type: "text";
        readonly text: string;
    } | {
        readonly type: "file";
        readonly uri: string;
        readonly mime: string;
        readonly name?: string | undefined;
    })[];
    metadata?: Readonly<Record<string, any>> | undefined;
}, Tool.Error, never>;
export declare const normalizeContent: (value: string | ReadonlyArray<Tool.Content> | undefined, output?: unknown) => ({
    readonly type: "text";
    readonly text: string;
} | {
    readonly type: "file";
    readonly uri: string;
    readonly mime: string;
    readonly name?: string | undefined;
})[];
export declare const stringify: (value: unknown) => string;
export declare const normalizedName: (tool: Tool.Info) => string;
export declare const effectiveName: (tool: Tool.Info) => string;
