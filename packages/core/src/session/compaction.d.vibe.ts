export * as SessionCompaction from "./compaction.vibe";
import { Message } from "@opencode/ai/effect";
import type { SessionError } from "@opencode/schema/session-error";
import { Context, Effect, Layer } from "effect";
import { Agent } from "../agent.vibe";
import { Bus } from "../bus.ts";
import { Database } from "../database/database.ts";
import { Model } from "../model.ts";
import { State } from "../state.ts";
import type { SessionContext } from "./context.ts";
import type { SessionMessage } from "./message.ts";
import { SessionModelRequest } from "./model-request.ts";
import { SessionRunnerModel } from "./runner/model.ts";
export type Settings = {
    auto: boolean;
    /** Tokens kept free below the model's limits before compacting. Unset keeps 15%, and at least 16k, free. */
    buffer?: number;
    /** Tokens of recent conversation kept verbatim beside the summary. */
    keep: number;
    /** Summarize in the background as the context nears the threshold, so automatic compaction can swap it in. */
    precompute: boolean;
};
export type Editor = {
    configure: (settings: Partial<Settings>) => void;
};
/** A prompt's size: `measured` is what the provider reported at the latest response, `estimated` is the text since. */
export type Estimate = {
    readonly measured: number;
    readonly estimated: number;
};
export type Trigger = 
/** `overflow`: the provider just rejected this context as too long. `estimate` is `estimatePrompt(context)`. */
{
    readonly reason: "auto" | "overflow";
    readonly context: SessionContext.Loaded;
    readonly estimate?: Estimate;
}
/** `inputID` is the `/compact` inbox item, whose message shows the outcome. */
 | {
    readonly reason: "manual";
    readonly context: SessionContext.Loaded;
    readonly inputID: SessionMessage.ID;
};
export type Outcome = 
/** Only `auto` skips: the context fits, or automatic compaction is off. */
{
    readonly status: "skipped";
} | {
    readonly status: "completed";
} | {
    readonly status: "failed";
    readonly error: SessionError.Error;
};
export interface Interface extends State.Transformable<Editor> {
    readonly compact: (trigger: Trigger) => Effect.Effect<Outcome>;
    /**
     * Starts a background summary when the context nears the threshold. Never waits for it. Loads `context` only when
     * background summaries are on. `estimate`, when given, is `estimatePrompt` of the loaded context.
     */
    readonly precompute: <E>(context: Effect.Effect<SessionContext.Loaded, E>, estimate?: Estimate) => Effect.Effect<void, E>;
}
declare const Service_base: Context.ServiceClass<Service, "@opencode/SessionCompaction", Interface>;
export declare class Service extends Service_base {
}
export declare const buildPrompt: (update: boolean, legacy?: boolean) => string;
export declare const layer: Layer.Layer<Service, never, import("@opencode/ai/effect").LLMClientService | Database.Service | Model.Service | Bus.Service | Agent.Service | SessionRunnerModel.Service | SessionModelRequest.Service>;
export declare const node: import("@opencode/util/effect/layer-node").Provider<Service, never, import("@opencode/util/effect/layer-node").Tag<"location">>;
/** The newest whole, real user messages within `keep` tokens: no synthetic guidance, no half of an attachment. */
export declare const recentUserMessages: (messages: ReadonlyArray<SessionMessage.Info>, model: Pick<SessionContext.Loaded["model"], "ref" | "capabilities">, keep: number) => Message[];
export declare const estimateContext: (context: SessionContext.Loaded) => number;
/** The size of the prompt `context` sends. */
export declare const estimatePrompt: (context: SessionContext.Loaded) => Estimate;
