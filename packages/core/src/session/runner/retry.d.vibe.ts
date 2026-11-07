import { Effect } from "effect";
export * as SessionRunnerRetry from "./retry.vibe";
import { AIError, isRetryable } from "@opencode/ai/effect";
import { Agent } from "@opencode/schema/agent";
import { Model } from "@opencode/schema/model";
import { SessionError } from "@opencode/schema/session-error";
import { Bus } from "../../bus.ts";
import type { PluginHooks } from "../../plugin/hooks.vibe";
import { SessionMessage } from "../message.ts";
import { SessionSchema } from "../schema.ts";
export { isRetryable };
interface Input {
    readonly cause: AIError;
    readonly error: SessionError.Error;
    readonly agent: Agent.ID;
    readonly model: Model.Ref;
    readonly hook: (event: PluginHooks.Domains["session"]["retry"]) => Effect.Effect<void>;
    readonly retry: boolean;
}
export interface Decision {
    readonly retry: true;
    readonly attempt: number;
    readonly delay: number;
}
export declare const policy: (sessionID: SessionSchema.ID) => Effect.Effect<(input: Input) => Effect.Effect<{
    retry: false;
} | {
    retry: true;
    attempt: number;
    delay: number;
}, never, never>, never, never>;
export declare const make: (bus: Bus.Interface, sessionID: SessionSchema.ID) => Effect.Effect<{
    decide: (input: Input) => Effect.Effect<{
        retry: false;
    } | {
        retry: true;
        attempt: number;
        delay: number;
    }, never, never>;
    wait: (input: {
        readonly decision: Decision;
        readonly assistantMessageID: SessionMessage.ID;
        readonly error: SessionError.Error;
    }) => Effect.Effect<void, never, never>;
}, never, never>;
