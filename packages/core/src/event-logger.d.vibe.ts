export * as EventLogger from "./event-logger.vibe";
import { Layer } from "effect";
import { Bus } from "./bus.ts";
export declare const layer: Layer.Layer<never, never, Bus.Service>;
export declare const node: import("@opencode/util/effect/layer-node").Provider<never, never, import("@opencode/util/effect/layer-node").Tag<"global">>;
