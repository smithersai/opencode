export * as ConfigCompactionPlugin from "./compaction.vibe";
import { Config } from "../../config.js";
import { SessionCompaction } from "../../session/compaction.vibe";
export declare const Plugin: import("@opencode/plugin/effect/plugin").Plugin<import("effect/Scope").Scope | Config.Service | SessionCompaction.Service>;
