export * as CommandPlugin from "./command.vibe";
import { Bus } from "../bus.js";
import { Location } from "../location.js";
import { Mcp } from "../mcp/index.js";
export declare const Plugin: import("@opencode/plugin/effect/plugin").Plugin<import("effect/Scope").Scope | Location.Service | Bus.Service | Mcp.Service>;
