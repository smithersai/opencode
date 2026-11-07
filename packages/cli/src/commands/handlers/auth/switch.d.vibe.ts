import { Effect, Option } from "effect";
declare const _default: (input: {
    readonly target: Option.Option<string>;
    readonly credential: Option.Option<string>;
}) => Effect.Effect<void, never, import("effect/FileSystem").FileSystem | import("effect/Scope").Scope | import("@opencode/util/global").Service>;
export default _default;
