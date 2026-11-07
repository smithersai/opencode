import { Context, Effect, Layer, Schema } from "effect";
import { HttpClient } from "effect/http";
export * as UsageLimits from "./usage-limits.vibe";
import { UsageLimits } from "@opencode/schema/usage-limits";
import { Integration } from "./integration.ts";
export declare const Info: Schema.Struct<{
    readonly workspace: Schema.Struct<{
        readonly id: Schema.String;
        readonly name: Schema.decodeTo<Schema.optional<Schema.toType<Schema.String>>, Schema.optionalKey<Schema.String>, never, never>;
        readonly usageURL: Schema.String;
    }>;
    readonly go: Schema.decodeTo<Schema.optional<Schema.toType<Schema.Struct<{
        readonly rolling: Schema.Struct<{
            readonly percent: Schema.Finite;
            readonly limited: Schema.Boolean;
            readonly resetsAt: Schema.Finite;
        }>;
        readonly weekly: Schema.Struct<{
            readonly percent: Schema.Finite;
            readonly limited: Schema.Boolean;
            readonly resetsAt: Schema.Finite;
        }>;
        readonly monthly: Schema.Struct<{
            readonly percent: Schema.Finite;
            readonly limited: Schema.Boolean;
            readonly resetsAt: Schema.Finite;
        }>;
    }>>>, Schema.optionalKey<Schema.Struct<{
        readonly rolling: Schema.Struct<{
            readonly percent: Schema.Finite;
            readonly limited: Schema.Boolean;
            readonly resetsAt: Schema.Finite;
        }>;
        readonly weekly: Schema.Struct<{
            readonly percent: Schema.Finite;
            readonly limited: Schema.Boolean;
            readonly resetsAt: Schema.Finite;
        }>;
        readonly monthly: Schema.Struct<{
            readonly percent: Schema.Finite;
            readonly limited: Schema.Boolean;
            readonly resetsAt: Schema.Finite;
        }>;
    }>>, never, never>;
    readonly budgets: Schema.$Array<Schema.Struct<{
        readonly id: Schema.String;
        readonly limit: Schema.brand<Schema.Finite, "Money.USD"> & {
            zero: number & import("effect/Brand").Brand<"Money.USD">;
        };
        readonly spent: Schema.brand<Schema.Finite, "Money.USD"> & {
            zero: number & import("effect/Brand").Brand<"Money.USD">;
        };
        readonly scope: Schema.Literals<readonly ["each", "combined"]>;
        readonly per: Schema.Literals<readonly ["set", "model"]>;
        readonly coverage: Schema.Literals<readonly ["all", "models"]>;
        readonly models: Schema.$Array<Schema.Struct<{
            readonly providerID: Schema.brand<Schema.String, "Provider.ID"> & {
                opencode: string & import("effect/Brand").Brand<"Provider.ID">;
                anthropic: string & import("effect/Brand").Brand<"Provider.ID">;
                openai: string & import("effect/Brand").Brand<"Provider.ID">;
                google: string & import("effect/Brand").Brand<"Provider.ID">;
                googleVertex: string & import("effect/Brand").Brand<"Provider.ID">;
                githubCopilot: string & import("effect/Brand").Brand<"Provider.ID">;
                amazonBedrock: string & import("effect/Brand").Brand<"Provider.ID">;
                azure: string & import("effect/Brand").Brand<"Provider.ID">;
                openrouter: string & import("effect/Brand").Brand<"Provider.ID">;
                mistral: string & import("effect/Brand").Brand<"Provider.ID">;
                gitlab: string & import("effect/Brand").Brand<"Provider.ID">;
            };
            readonly modelID: Schema.brand<Schema.String, "Model.ID">;
            readonly name: Schema.String;
            readonly spent: Schema.decodeTo<Schema.optional<Schema.toType<Schema.brand<Schema.Finite, "Money.USD"> & {
                zero: number & import("effect/Brand").Brand<"Money.USD">;
            }>>, Schema.optionalKey<Schema.brand<Schema.Finite, "Money.USD"> & {
                zero: number & import("effect/Brand").Brand<"Money.USD">;
            }>, never, never>;
        }>>;
        readonly vendors: Schema.$Array<Schema.String>;
        readonly inputPriceAtLeast: Schema.decodeTo<Schema.optional<Schema.toType<Schema.brand<Schema.Finite, "Money.USDPerMillionTokens"> & {
            zero: number & import("effect/Brand").Brand<"Money.USDPerMillionTokens">;
        }>>, Schema.optionalKey<Schema.brand<Schema.Finite, "Money.USDPerMillionTokens"> & {
            zero: number & import("effect/Brand").Brand<"Money.USDPerMillionTokens">;
        }>, never, never>;
        readonly picked: Schema.Boolean;
        readonly shared: Schema.Boolean;
        readonly resetsAt: Schema.Finite;
    }>>;
}>;
export type Info = UsageLimits.Info;
declare const UnavailableError_base: Schema.Class<UnavailableError, Schema.TaggedStruct<"UsageLimits.UnavailableError", {
    readonly message: Schema.String;
}>, import("effect/Cause").YieldableError>;
export declare class UnavailableError extends UnavailableError_base {
}
export interface Interface {
    /** The usage limits of the OpenCode Console workspace this location is signed in to, if it is. */
    readonly get: () => Effect.Effect<Info | undefined, UnavailableError>;
}
declare const Service_base: Context.ServiceClass<Service, "@opencode/UsageLimits", Interface>;
export declare class Service extends Service_base {
}
export declare const layer: Layer.Layer<Service, never, HttpClient.HttpClient | Integration.Service>;
export declare const node: import("@opencode/util/effect/layer-node").Provider<Service, never, import("@opencode/util/effect/layer-node").Tag<"location">>;
