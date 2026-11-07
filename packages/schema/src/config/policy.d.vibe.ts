import { Schema } from "effect";
export * as ConfigPolicy from "./policy.vibe";
export declare const Effect: Schema.Literals<readonly ["allow", "deny"]>;
export type Effect = typeof Effect.Type;
export declare const Info: Schema.Struct<{
    readonly action: Schema.Literals<readonly ["provider.use", "tool.use", "integration.use"]>;
    readonly resource: Schema.String;
    readonly effect: Schema.Literals<readonly ["allow", "deny"]>;
}>;
export type Info = typeof Info.Type;
