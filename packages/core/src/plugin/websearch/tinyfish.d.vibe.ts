export * as WebSearchTinyFish from "./tinyfish.vibe";
import { Scope } from "effect";
import { HttpClient } from "effect/http";
export declare const endpoint = "https://agent.tinyfish.ai/mcp";
export declare const Plugin: import("@opencode/plugin/effect/plugin").Plugin<HttpClient.HttpClient | Scope.Scope>;
