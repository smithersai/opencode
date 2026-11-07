import { Effect } from "effect";
export * as ModelRetry from "./model-retry.vibe";
import { AIError } from "@opencode/ai/effect";
interface Input {
    readonly cause: AIError;
    readonly retry: boolean;
}
export declare const policy: Effect.Effect<(input: Input) => Effect.Effect<{
    attempt: number;
    delay: number;
    retry: boolean;
} | undefined, never, never>, never, never>;
/** Retry a buffered model call from scratch; failed attempts never contribute to its returned output. */
export declare const retry: <A, R>(effect: Effect.Effect<A, AIError, R>) => Effect.Effect<A, AIError, R>;
/** Retry a one-shot call only when the provider clearly didn't run it: rate limits, overload, unreachable hosts. */
export declare const retryOneShot: <A, R>(effect: Effect.Effect<A, AIError, R>) => Effect.Effect<A, AIError, R>;
