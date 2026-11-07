import { Context, Data, Effect } from "effect";
export * as SessionRunner from "./index.vibe";
import type { FileSystem } from "../../filesystem.ts";
import type { AIError } from "@opencode/ai/effect";
import { SessionSchema } from "../schema.ts";
import type { Promotable } from "../inbox.ts";
import type { AgentNotFoundError, MessageDecodeError, StepFailedError } from "../error.vibe";
import { SessionRunnerModel } from "./model.ts";
import type { Instructions } from "../../instructions/index.ts";
export type RunError = AIError | SessionRunnerModel.Error | MessageDecodeError | AgentNotFoundError | StepFailedError | Instructions.InitializationBlocked | FileSystem.DirectoryNotFoundError;
export type Continuation = {
    readonly step: number;
};
export type DrainResult = Data.TaggedEnum<{
    Complete: {};
    Moved: {
        readonly continuation?: Continuation;
    };
    Reloaded: {
        readonly force: boolean;
        readonly continuation?: Continuation;
    };
}>;
export declare const DrainResult: Data.TaggedEnum.Constructor<{
    readonly _tag: "Complete";
} | {
    readonly _tag: "Moved";
    readonly continuation?: Continuation;
} | {
    readonly _tag: "Reloaded";
    readonly force: boolean;
    readonly continuation?: Continuation;
}>;
/** Runs one local continuation from already-recorded Session history. */
export interface Interface {
    /** Drains eligible durable work, returning transient state when execution must continue at a new Location. */
    readonly drain: (input: {
        readonly sessionID: SessionSchema.ID;
        readonly force: boolean;
        readonly continuation?: Continuation;
        /** "steer" settles the active intent without promoting queued next-turn work. */
        readonly promotable?: Promotable;
    }) => Effect.Effect<DrainResult, RunError>;
}
declare const Service_base: Context.ServiceClass<Service, "@opencode/SessionRunner", Interface>;
export declare class Service extends Service_base {
}
