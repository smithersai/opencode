import { Schema } from "effect";
export * as LLM from "./llm.vibe";
export declare const FinishReason: Schema.Literals<readonly ["stop", "length", "tool-calls", "content-filter", "error", "unknown"]>;
export type FinishReason = typeof FinishReason.Type;
