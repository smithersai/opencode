export * as ConfigProviderPlugin from "./provider.vibe";
import type { ProviderEditor } from "@opencode/plugin/effect/provider";
import { Config } from "../../config.js";
import { ConfigIntegration } from "../integration.vibe";
export declare const Plugin: import("@opencode/plugin/effect/plugin").Plugin<import("effect/Scope").Scope | Config.Service>;
/**
 * Applies an integration document's providers. The integration's plugin calls this at its own position in the
 * provider chain, so provider plugins registered after it treat these providers as configured ones rather than
 * as their canonical provider, while user and project config still overlay them in this plugin's late transform.
 */
export declare function integrate(providers: ProviderEditor, document: ConfigIntegration.Document): void;
