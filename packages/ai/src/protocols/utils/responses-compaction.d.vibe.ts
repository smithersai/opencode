import { Effect } from "effect";
import { AIError, LLMRequest } from "../../schema/index.ts";
import type { CompactOperation } from "../../route/client.ts";
import { OpenResponses } from "../open-responses.ts";
export declare const make: (adapter: OpenResponses.ProviderAdapter, lowerTools: (request: LLMRequest) => Effect.Effect<ReadonlyArray<Record<string, unknown>>, AIError>) => CompactOperation;
export * as ResponsesCompaction from "./responses-compaction.vibe";
