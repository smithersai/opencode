import { RequestError } from "@agentclientprotocol/sdk";
import { Schema } from "effect";
declare const SessionNotFoundError_base: Schema.Class<SessionNotFoundError, Schema.TaggedStruct<"ACPSessionNotFoundError", {
    readonly sessionId: Schema.String;
}>, import("effect/Cause").YieldableError>;
export declare class SessionNotFoundError extends SessionNotFoundError_base {
}
declare const SessionDirectoryMismatchError_base: Schema.Class<SessionDirectoryMismatchError, Schema.TaggedStruct<"ACPSessionDirectoryMismatchError", {
    readonly sessionId: Schema.String;
    readonly cwd: Schema.String;
}>, import("effect/Cause").YieldableError>;
export declare class SessionDirectoryMismatchError extends SessionDirectoryMismatchError_base {
}
declare const InvalidConfigOptionError_base: Schema.Class<InvalidConfigOptionError, Schema.TaggedStruct<"ACPInvalidConfigOptionError", {
    readonly configId: Schema.String;
}>, import("effect/Cause").YieldableError>;
export declare class InvalidConfigOptionError extends InvalidConfigOptionError_base {
}
declare const InvalidModelError_base: Schema.Class<InvalidModelError, Schema.TaggedStruct<"ACPInvalidModelError", {
    readonly modelId: Schema.String;
    readonly providerId: Schema.optional<Schema.String>;
}>, import("effect/Cause").YieldableError>;
export declare class InvalidModelError extends InvalidModelError_base {
}
declare const InvalidEffortError_base: Schema.Class<InvalidEffortError, Schema.TaggedStruct<"ACPInvalidEffortError", {
    readonly effort: Schema.String;
}>, import("effect/Cause").YieldableError>;
export declare class InvalidEffortError extends InvalidEffortError_base {
}
declare const InvalidModeError_base: Schema.Class<InvalidModeError, Schema.TaggedStruct<"ACPInvalidModeError", {
    readonly mode: Schema.String;
}>, import("effect/Cause").YieldableError>;
export declare class InvalidModeError extends InvalidModeError_base {
}
declare const InvalidAdditionalDirectoryError_base: Schema.Class<InvalidAdditionalDirectoryError, Schema.TaggedStruct<"ACPInvalidAdditionalDirectoryError", {
    readonly directory: Schema.String;
}>, import("effect/Cause").YieldableError>;
export declare class InvalidAdditionalDirectoryError extends InvalidAdditionalDirectoryError_base {
}
declare const AuthRequiredError_base: Schema.Class<AuthRequiredError, Schema.TaggedStruct<"ACPAuthRequiredError", {}>, import("effect/Cause").YieldableError>;
export declare class AuthRequiredError extends AuthRequiredError_base {
}
declare const UnknownAuthMethodError_base: Schema.Class<UnknownAuthMethodError, Schema.TaggedStruct<"ACPUnknownAuthMethodError", {
    readonly methodId: Schema.String;
}>, import("effect/Cause").YieldableError>;
export declare class UnknownAuthMethodError extends UnknownAuthMethodError_base {
}
declare const InvalidRequestError_base: Schema.Class<InvalidRequestError, Schema.TaggedStruct<"ACPInvalidRequestError", {
    readonly message: Schema.String;
    readonly field: Schema.optional<Schema.String>;
}>, import("effect/Cause").YieldableError>;
export declare class InvalidRequestError extends InvalidRequestError_base {
}
declare const ServiceFailureError_base: Schema.Class<ServiceFailureError, Schema.TaggedStruct<"ACPServiceFailureError", {
    readonly safeMessage: Schema.String;
    readonly service: Schema.optional<Schema.String>;
    readonly errorName: Schema.optional<Schema.String>;
}>, import("effect/Cause").YieldableError>;
export declare class ServiceFailureError extends ServiceFailureError_base {
}
declare const ServerUnavailableError_base: Schema.Class<ServerUnavailableError, Schema.TaggedStruct<"ACPServerUnavailableError", {}>, import("effect/Cause").YieldableError>;
export declare class ServerUnavailableError extends ServerUnavailableError_base {
}
declare const CatalogNotReadyError_base: Schema.Class<CatalogNotReadyError, Schema.TaggedStruct<"ACPCatalogNotReadyError", {
    readonly reason: Schema.Literals<readonly ["models", "agents"]>;
}>, import("effect/Cause").YieldableError>;
export declare class CatalogNotReadyError extends CatalogNotReadyError_base {
    get message(): "No models are available" | "No primary agents are available";
}
declare const CatalogLoadError_base: Schema.Class<CatalogLoadError, Schema.TaggedStruct<"ACPCatalogLoadError", {
    readonly cause: Schema.Defect;
}>, import("effect/Cause").YieldableError>;
export declare class CatalogLoadError extends CatalogLoadError_base {
}
export type CatalogError = CatalogNotReadyError | CatalogLoadError;
export type Error = SessionNotFoundError | SessionDirectoryMismatchError | InvalidConfigOptionError | InvalidModelError | InvalidEffortError | InvalidModeError | InvalidAdditionalDirectoryError | AuthRequiredError | UnknownAuthMethodError | InvalidRequestError | ServiceFailureError | ServerUnavailableError;
export type Failure = Error | RequestError | CatalogError;
export declare function toRequestError(error: Error): RequestError;
export declare function fromUnknown(error: unknown): ServiceFailureError;
export * as ACPError from "./error.vibe";
