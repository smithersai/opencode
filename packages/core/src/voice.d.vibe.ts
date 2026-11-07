import { Context, Effect, Layer, Schema } from "effect";
export * as Voice from "./voice.vibe";
import { type RealtimeSession, type RealtimeTransport, type RealtimeTransportInput, type RealtimeTransportType } from "@opencode/ai/experimental";
import { RequestExecutor } from "@opencode/ai/route";
import { Integration } from "./integration.js";
export interface ModelInfo {
    readonly model: string;
    readonly provider: string;
    readonly transports: readonly RealtimeTransportType[];
    readonly available: boolean;
}
export interface Models {
    readonly models: readonly ModelInfo[];
    readonly default?: string;
}
export interface SessionInput {
    readonly model: string;
    readonly session?: RealtimeSession;
    readonly transport: RealtimeTransportInput;
}
declare const InvalidRequestError_base: Schema.Class<InvalidRequestError, Schema.TaggedStruct<"Voice.InvalidRequestError", {
    readonly message: Schema.String;
}>, import("effect/Cause").YieldableError>;
export declare class InvalidRequestError extends InvalidRequestError_base {
}
declare const UnavailableError_base: Schema.Class<UnavailableError, Schema.TaggedStruct<"Voice.UnavailableError", {
    readonly message: Schema.String;
    readonly service: Schema.optional<Schema.String>;
}>, import("effect/Cause").YieldableError>;
export declare class UnavailableError extends UnavailableError_base {
}
export type Error = InvalidRequestError | UnavailableError;
export interface Interface {
    readonly models: () => Effect.Effect<Models>;
    readonly session: (input: SessionInput) => Effect.Effect<RealtimeTransport, Error>;
}
declare const Service_base: Context.ServiceClass<Service, "@opencode/Voice", Interface>;
export declare class Service extends Service_base {
}
export declare const layer: Layer.Layer<Service, never, RequestExecutor.RequestExecutorService | Integration.Service>;
export declare const node: import("@opencode/util/effect/layer-node").Provider<Service, never, import("@opencode/util/effect/layer-node").Tag<"location">>;
