import { Option } from "effect";
import type { SessionMessageAssistant, SessionMessageAssistantTool } from "@opencode/client/promise";
export declare function currentToolInput(tool: SessionMessageAssistantTool): Record<string, unknown>;
export declare function currentToolMetadata(tool: SessionMessageAssistantTool): Record<string, unknown>;
export declare function currentToolOutput(tool: SessionMessageAssistantTool): string | undefined;
export declare function currentToolError(tool: SessionMessageAssistantTool): string | undefined;
export declare function currentToolFailed(tool: SessionMessageAssistantTool): boolean;
export declare function shellResultFailed(metadata: Record<string, unknown>): boolean;
declare const decodeExecuteCall: (input: unknown, options?: import("effect/SchemaAST").ParseOptions) => Option.Option<{
    readonly tool: string;
    readonly status: "completed" | "error" | "running";
    readonly input?: {
        readonly [x: string]: unknown;
    } | undefined;
}>;
export type ExecuteToolCall = Option.Option.Value<ReturnType<typeof decodeExecuteCall>>;
export declare function executeToolCalls(metadata: Record<string, unknown>): ExecuteToolCall[];
export declare function executeToolCallArgs(call: ExecuteToolCall): string[];
export declare function executeToolSubtitle(calls: readonly ExecuteToolCall[]): string | undefined;
export declare function currentToolHasLoadedFiles(tool: SessionMessageAssistantTool): boolean;
export declare function readImagePath(input: Record<string, unknown>): string | undefined;
export declare function currentToolGroupedRead(tool: SessionMessageAssistantTool): boolean;
export declare function currentContentDefaultOpen(content: SessionMessageAssistant["content"][number], shellExpanded: boolean, editExpanded: boolean): boolean | undefined;
export {};
