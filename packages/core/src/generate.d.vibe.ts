import { Context, Effect, Layer, Schema } from "effect";
export * as Generate from "./generate.vibe";
import type { DecisionRequest, DecisionResult, ImageRequest, ImageResult } from "@opencode/schema/generate";
import { RequestExecutor } from "@opencode/ai/route";
import { ModelResolver } from "./model-resolver.js";
import { Model } from "./model.js";
export interface TextInput {
    readonly prompt: string;
    readonly model?: Model.Ref;
}
declare const UnavailableError_base: Schema.Class<UnavailableError, Schema.TaggedStruct<"Generate.UnavailableError", {
    readonly message: Schema.String;
    readonly service: Schema.optional<Schema.String>;
}>, import("effect/Cause").YieldableError>;
export declare class UnavailableError extends UnavailableError_base {
}
declare const ModelNotFoundError_base: Schema.Class<ModelNotFoundError, Schema.TaggedStruct<"Generate.ModelNotFoundError", {
    readonly providerID: Schema.String;
    readonly modelID: Schema.String;
    readonly message: Schema.String;
}>, import("effect/Cause").YieldableError>;
export declare class ModelNotFoundError extends ModelNotFoundError_base {
}
declare const UnsupportedModelError_base: Schema.Class<UnsupportedModelError, Schema.TaggedStruct<"Generate.UnsupportedModelError", {
    readonly providerID: Schema.String;
    readonly modelID: Schema.String;
    readonly capability: Schema.String;
    readonly message: Schema.String;
}>, import("effect/Cause").YieldableError>;
/** The model exists but cannot serve this request, such as a chat model asked for images. */
export declare class UnsupportedModelError extends UnsupportedModelError_base {
}
declare const InvalidRequestError_base: Schema.Class<InvalidRequestError, Schema.TaggedStruct<"Generate.InvalidRequestError", {
    readonly message: Schema.String;
    readonly field: Schema.optional<Schema.String>;
}>, import("effect/Cause").YieldableError>;
export declare class InvalidRequestError extends InvalidRequestError_base {
}
export declare const ProviderFailure: Schema.Literals<readonly ["authentication", "rate_limit", "content_filter", "invalid_request", "overloaded", "provider"]>;
declare const ProviderRequestError_base: Schema.Class<ProviderRequestError, Schema.TaggedStruct<"Generate.ProviderRequestError", {
    readonly providerID: Schema.String;
    readonly reason: Schema.Literals<readonly ["authentication", "rate_limit", "content_filter", "invalid_request", "overloaded", "provider"]>;
    readonly message: Schema.String;
    readonly status: Schema.optional<Schema.Int>;
    readonly retryAfterMs: Schema.optional<Schema.Int>;
}>, import("effect/Cause").YieldableError>;
/** The provider rejected or failed the request after it was sent. */
export declare class ProviderRequestError extends ProviderRequestError_base {
}
export type Error = ModelNotFoundError | UnsupportedModelError | InvalidRequestError | ProviderRequestError | UnavailableError;
export interface Interface {
    readonly text: (input: TextInput) => Effect.Effect<string, Error>;
    readonly image: (input: ImageRequest) => Effect.Effect<ImageResult, Error>;
    readonly decisions: (input: DecisionRequest) => Effect.Effect<DecisionResult, Error>;
}
declare const Service_base: Context.ServiceClass<Service, "@opencode/Generate", Interface>;
export declare class Service extends Service_base {
}
export declare const layer: Layer.Layer<Service, never, import("@opencode/ai/effect").LLMClientService | RequestExecutor.RequestExecutorService | Model.Service | ModelResolver.Service>;
export declare const node: import("@opencode/util/effect/layer-node").Provider<Service, never, import("@opencode/util/effect/layer-node").Tag<"location">>;
