export * as ConfigSnapshotPlugin from "./snapshot.vibe";
import { Config } from "../../config.js";
import { Snapshot } from "../../snapshot.js";
export declare const Plugin: import("@opencode/plugin/effect/plugin").Plugin<import("effect/Scope").Scope | Config.Service | Snapshot.Service>;
