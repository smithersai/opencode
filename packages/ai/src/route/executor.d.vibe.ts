import { Layer, Stream } from "effect";
import { HttpClient, HttpClientRequest, HttpClientResponse } from "effect/http";
import { AIError } from "../schema/index.ts";
import { Service, type HttpMiddleware, type Interface } from "./executor-service.vibe";
export { responseHttp, Service } from "./executor-service.vibe";
export type { HttpHandler, HttpMiddleware, Interface, RequestExecutorService } from "./executor-service.vibe";
/** Preserve HTTP diagnostics for executor and externally captured failures alike. */
export declare const httpFailure: (input: {
    readonly message: string;
    readonly url?: string | undefined;
    readonly status?: number | undefined;
    readonly data?: unknown;
    readonly responseHeaders?: Record<string, string> | undefined;
    readonly responseBody?: string | undefined;
    readonly cause?: unknown;
}) => AIError;
export declare const responseStream: (response: HttpClientResponse.HttpClientResponse) => Stream.Stream<Uint8Array, AIError>;
export declare const stream: (executor: Interface, request: HttpClientRequest.HttpClientRequest, middleware?: HttpMiddleware) => Stream.Stream<Uint8Array, AIError>;
export declare const layer: Layer.Layer<Service, never, HttpClient.HttpClient>;
export declare const fetchLayer: Layer.Layer<import("./executor-service.vibe").RequestExecutorService, never, never>;
/** Run `fn` on every request: it sees the raw response before status classification, inside middleware already on `executor`, and outside per-call middleware. */
export declare const middleware: (fn: HttpMiddleware, executor?: Layer.Layer<Service>) => Layer.Layer<Service>;
export * as RequestExecutor from "./executor.vibe";
