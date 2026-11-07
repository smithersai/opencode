export * as WellKnownPlugin from "./plugin.vibe";
import { Bus } from "../bus.js";
import { WellKnown } from "../wellknown.js";
export declare const Plugin: import("@opencode/plugin/effect/plugin").Plugin<import("effect/Scope").Scope | WellKnown.Service | Bus.Service>;
