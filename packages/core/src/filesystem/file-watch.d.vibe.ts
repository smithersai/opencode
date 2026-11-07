import { Cause, Context, Duration, Effect, Layer, Schema } from "effect";
export * as FileWatch from "./file-watch.vibe";
import { FSUtil } from "@opencode/util/fs-util";
import type { Location } from "@opencode/schema/location";
import { Bus } from "../bus.ts";
import { Watcher } from "./watcher.ts";
export declare const TTL: Duration.Duration;
export declare const SWEEP_INTERVAL: Duration.Duration;
export declare const MAX_PER_LOCATION = 256;
declare const DisabledError_base: Schema.Class<DisabledError, Schema.TaggedStruct<"FileWatch.DisabledError", {}>, Cause.YieldableError>;
export declare class DisabledError extends DisabledError_base {
    get message(): string;
}
export type Input = {
    readonly location: Location.Ref;
    /** Absolute path of the file to watch. */
    readonly file: string;
};
export interface Interface {
    /** Starts watching a file, or resets its expiry when it is already watched. */
    readonly watch: (input: Input) => Effect.Effect<void, DisabledError>;
    readonly unwatch: (input: Input) => Effect.Effect<void>;
}
declare const Service_base: Context.ServiceClass<Service, "@opencode/FileWatch", Interface>;
export declare class Service extends Service_base {
}
export declare const Options: Schema.Struct<{
    readonly enabled: Schema.optional<Schema.Boolean>;
}>;
export type Options = typeof Options.Type;
export declare const layer: (options?: Options) => Layer.Layer<Service, never, FSUtil.Service | Watcher.Service | Bus.Service>;
export declare function configured(options?: Options): import("@opencode/util/effect/layer-node").Provider<Service, never, import("@opencode/util/effect/layer-node").Tag<"global">>;
export declare const node: import("@opencode/util/effect/layer-node").Provider<Service, never, import("@opencode/util/effect/layer-node").Tag<"global">>;
