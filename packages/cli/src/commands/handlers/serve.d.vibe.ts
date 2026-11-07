import { Effect, Option } from "effect";
declare const _default: (input: {
    readonly hostname: Option.Option<string>;
    readonly port: Option.Option<number>;
    readonly cors: readonly string[];
    readonly service: boolean;
    readonly stdio: boolean;
}) => Effect.Effect<void, unknown, unknown>;
export default _default;
