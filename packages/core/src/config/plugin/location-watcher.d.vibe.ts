export * as ConfigLocationWatcherPlugin from "./location-watcher.vibe";
import { Config } from "../../config.js";
import { LocationWatcherPolicy } from "../../filesystem/location-watcher-policy.vibe";
export declare const Plugin: import("@opencode/plugin/effect/plugin").Plugin<import("effect/Scope").Scope | Config.Service | LocationWatcherPolicy.Service>;
