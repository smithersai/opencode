import { Effect, Option } from "effect";
declare const _default: (input: {
    readonly hostname: Option.Option<string>;
    readonly port: Option.Option<number>;
    readonly cors: readonly string[];
    readonly service: boolean;
    readonly stdio: boolean;
}) => Effect.Effect<void, import("effect/Config").ConfigError | Error | import("effect/PlatformError").PlatformError | import("effect/Schema").SchemaError, never>;
export default _default;
