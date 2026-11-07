import { Scope } from "effect";
export * as IdentityPlugin from "./identity.vibe";
import { Model } from "@opencode/schema/model";
export declare function identity(model: {
    readonly name: string;
    readonly ref: Model.Ref;
}): string;
export declare const Plugin: import("@opencode/plugin/effect/plugin").Plugin<Scope.Scope>;
