export * as OptimizePlugin from "./optimize.vibe";
import { type Context } from "@opencode/plugin/effect/plugin";
import type { SessionHooks } from "@opencode/plugin/effect/session";
import { Model } from "@opencode/schema/model";
import { Effect, Scope } from "effect";
export declare const OpenAIPlugin: import("@opencode/plugin/effect/plugin").Plugin<Scope.Scope>;
export declare const AnthropicPlugin: import("@opencode/plugin/effect/plugin").Plugin<Scope.Scope>;
export declare const OpenAIToolsPlugin: import("@opencode/plugin/effect/plugin").Plugin<Scope.Scope>;
export declare const AnthropicToolsPlugin: import("@opencode/plugin/effect/plugin").Plugin<Scope.Scope>;
export declare const KimiPlugin: import("@opencode/plugin/effect/plugin").Plugin<Scope.Scope>;
export declare const ArceePlugin: import("@opencode/plugin/effect/plugin").Plugin<Scope.Scope>;
export declare const MetaPlugin: import("@opencode/plugin/effect/plugin").Plugin<Scope.Scope>;
export declare const Plugins: readonly [import("@opencode/plugin/effect/plugin").Plugin<Scope.Scope>, import("@opencode/plugin/effect/plugin").Plugin<Scope.Scope>, import("@opencode/plugin/effect/plugin").Plugin<Scope.Scope>, import("@opencode/plugin/effect/plugin").Plugin<Scope.Scope>, import("@opencode/plugin/effect/plugin").Plugin<Scope.Scope>];
export declare const resolveModel: (ctx: Context, event: SessionHooks["context"]) => Effect.Effect<Model.Info | {
    id: string & import("effect/Brand").Brand<"Model.ID">;
    modelID: string & import("effect/Brand").Brand<"Model.ID">;
    providerID: string & import("effect/Brand").Brand<"Provider.ID">;
    name: string & import("effect/Brand").Brand<"Model.ID">;
    capabilities: {
        tools: true;
        input: string[];
        output: string[];
    };
    variants: never[];
    time: {
        released: number;
    };
    cost: never[];
    status: "active";
    enabled: true;
    limit: {
        context: number;
        output: number;
    };
}, unknown, never>;
