import { Effect, Option } from "effect";
declare const _default: (input: {
    readonly key: string;
    readonly value: string;
    readonly nestedValue: Option.Option<string>;
}) => Effect.Effect<void, Error | import("effect/PlatformError").PlatformError, import("effect/FileSystem").FileSystem | import("@opencode/util/global").Service>;
export default _default;
