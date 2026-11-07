import { Effect } from "effect";
export * as BackgroundServiceState from "./background-service-state.vibe";
import type { SidecarCredentials } from "./sidecar-credentials";
export declare const make: (options: {
    readonly initial: Effect.Effect<SidecarCredentials.Data, unknown>;
    readonly reconnect: Effect.Effect<SidecarCredentials.Data>;
}) => Effect.Effect<{
    connection: Effect.Effect<SidecarCredentials.Data, never, never>;
    reconnect: Effect.Effect<SidecarCredentials.Data, never, never>;
}, never, import("effect/Scope").Scope>;
