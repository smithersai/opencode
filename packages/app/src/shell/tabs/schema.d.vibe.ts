import { Schema } from "effect";
export * as TabStorage from "./schema.vibe";
import { ServerKey } from "../../runtime/server/persistence.vibe";
export { ServerKey };
export declare const Session: Schema.Struct<{
    readonly type: Schema.mutableKey<Schema.Literal<"session">>;
    readonly server: Schema.mutableKey<Schema.brand<Schema.String, "ServerConnection.Key">>;
    readonly sessionId: Schema.mutableKey<Schema.String>;
    readonly routeSessionId: Schema.mutableKey<Schema.middlewareDecoding<Schema.optional<Schema.String>, never>>;
    readonly routeParentId: Schema.mutableKey<Schema.middlewareDecoding<Schema.optional<Schema.String>, never>>;
}>;
export declare const Draft: Schema.Struct<{
    readonly type: Schema.mutableKey<Schema.Literal<"draft">>;
    readonly draftID: Schema.mutableKey<Schema.String>;
    readonly server: Schema.mutableKey<Schema.brand<Schema.String, "ServerConnection.Key">>;
    readonly directory: Schema.mutableKey<Schema.String>;
    readonly worktree: Schema.mutableKey<Schema.middlewareDecoding<Schema.optional<Schema.String>, never>>;
    readonly branch: Schema.mutableKey<Schema.middlewareDecoding<Schema.optional<Schema.String>, never>>;
    readonly mcp: Schema.mutableKey<Schema.middlewareDecoding<Schema.optional<Schema.Struct<{
        readonly target: Schema.mutableKey<Schema.String>;
        readonly states: Schema.mutableKey<Schema.middlewareDecoding<Schema.withDecodingDefaultType<Schema.$Record<Schema.String, Schema.mutableKey<Schema.Boolean>>, never>, never>>;
    }>>, never>>;
}>;
export declare const Tab: Schema.Union<readonly [Schema.Struct<{
    readonly type: Schema.mutableKey<Schema.Literal<"session">>;
    readonly server: Schema.mutableKey<Schema.brand<Schema.String, "ServerConnection.Key">>;
    readonly sessionId: Schema.mutableKey<Schema.String>;
    readonly routeSessionId: Schema.mutableKey<Schema.middlewareDecoding<Schema.optional<Schema.String>, never>>;
    readonly routeParentId: Schema.mutableKey<Schema.middlewareDecoding<Schema.optional<Schema.String>, never>>;
}>, Schema.Struct<{
    readonly type: Schema.mutableKey<Schema.Literal<"draft">>;
    readonly draftID: Schema.mutableKey<Schema.String>;
    readonly server: Schema.mutableKey<Schema.brand<Schema.String, "ServerConnection.Key">>;
    readonly directory: Schema.mutableKey<Schema.String>;
    readonly worktree: Schema.mutableKey<Schema.middlewareDecoding<Schema.optional<Schema.String>, never>>;
    readonly branch: Schema.mutableKey<Schema.middlewareDecoding<Schema.optional<Schema.String>, never>>;
    readonly mcp: Schema.mutableKey<Schema.middlewareDecoding<Schema.optional<Schema.Struct<{
        readonly target: Schema.mutableKey<Schema.String>;
        readonly states: Schema.mutableKey<Schema.middlewareDecoding<Schema.withDecodingDefaultType<Schema.$Record<Schema.String, Schema.mutableKey<Schema.Boolean>>, never>, never>>;
    }>>, never>>;
}>]>;
export declare const Tabs: Schema.middlewareDecoding<Schema.withDecodingDefaultType<Schema.decodeTo<Schema.mutable<Schema.$Array<Schema.toType<Schema.Union<readonly [Schema.decodeTo<Schema.toType<Schema.Struct<{
    readonly type: Schema.mutableKey<Schema.Literal<"session">>;
    readonly server: Schema.mutableKey<Schema.brand<Schema.String, "ServerConnection.Key">>;
    readonly sessionId: Schema.mutableKey<Schema.String>;
    readonly routeSessionId: Schema.mutableKey<Schema.middlewareDecoding<Schema.optional<Schema.String>, never>>;
    readonly routeParentId: Schema.mutableKey<Schema.middlewareDecoding<Schema.optional<Schema.String>, never>>;
}>>, Schema.Struct<{
    readonly type: Schema.mutableKey<Schema.Literal<"session">>;
    readonly server: Schema.mutableKey<Schema.brand<Schema.String, "ServerConnection.Key">>;
    readonly sessionId: Schema.mutableKey<Schema.String>;
    readonly routeSessionId: Schema.mutableKey<Schema.middlewareDecoding<Schema.optional<Schema.String>, never>>;
    readonly routeParentId: Schema.mutableKey<Schema.middlewareDecoding<Schema.optional<Schema.String>, never>>;
}>, never, never>, Schema.Struct<{
    readonly type: Schema.mutableKey<Schema.Literal<"draft">>;
    readonly draftID: Schema.mutableKey<Schema.String>;
    readonly server: Schema.mutableKey<Schema.brand<Schema.String, "ServerConnection.Key">>;
    readonly directory: Schema.mutableKey<Schema.String>;
    readonly worktree: Schema.mutableKey<Schema.middlewareDecoding<Schema.optional<Schema.String>, never>>;
    readonly branch: Schema.mutableKey<Schema.middlewareDecoding<Schema.optional<Schema.String>, never>>;
    readonly mcp: Schema.mutableKey<Schema.middlewareDecoding<Schema.optional<Schema.Struct<{
        readonly target: Schema.mutableKey<Schema.String>;
        readonly states: Schema.mutableKey<Schema.middlewareDecoding<Schema.withDecodingDefaultType<Schema.$Record<Schema.String, Schema.mutableKey<Schema.Boolean>>, never>, never>>;
    }>>, never>>;
}>]>>>>, Schema.$Array<Schema.Unknown>, never, never>, never>, never>;
export declare const Recent: Schema.Struct<{
    readonly key: Schema.mutableKey<Schema.optional<Schema.String>>;
}>;
export declare const Info: Schema.Struct<{
    readonly title: Schema.mutableKey<Schema.optional<Schema.String>>;
    readonly directory: Schema.mutableKey<Schema.optional<Schema.String>>;
    readonly prompted: Schema.mutableKey<Schema.optional<Schema.Boolean>>;
}>;
export declare const Infos: Schema.$Record<Schema.String, Schema.mutableKey<Schema.Struct<{
    readonly title: Schema.mutableKey<Schema.optional<Schema.String>>;
    readonly directory: Schema.mutableKey<Schema.optional<Schema.String>>;
    readonly prompted: Schema.mutableKey<Schema.optional<Schema.Boolean>>;
}>>>;
export declare const Regions: Schema.$Record<Schema.String, Schema.mutableKey<Schema.encodeKeys<Schema.Struct<{
    readonly side: Schema.mutableKey<Schema.optional<Schema.Boolean>>;
    readonly sessionWidth: Schema.mutableKey<Schema.optional<Schema.Finite>>;
    readonly bottom: Schema.mutableKey<Schema.optional<Schema.Boolean>>;
    readonly bottomHeight: Schema.mutableKey<Schema.optional<Schema.Finite>>;
    readonly splitRatio: Schema.mutableKey<Schema.optional<Schema.Finite>>;
}>, {
    readonly side: "review";
}>>>;
export declare const ClosedTab: Schema.Struct<{
    readonly tab: Schema.mutableKey<Schema.decodeTo<Schema.toType<Schema.Struct<{
        readonly type: Schema.mutableKey<Schema.Literal<"session">>;
        readonly server: Schema.mutableKey<Schema.brand<Schema.String, "ServerConnection.Key">>;
        readonly sessionId: Schema.mutableKey<Schema.String>;
        readonly routeSessionId: Schema.mutableKey<Schema.middlewareDecoding<Schema.optional<Schema.String>, never>>;
        readonly routeParentId: Schema.mutableKey<Schema.middlewareDecoding<Schema.optional<Schema.String>, never>>;
    }>>, Schema.Struct<{
        readonly type: Schema.mutableKey<Schema.Literal<"session">>;
        readonly server: Schema.mutableKey<Schema.brand<Schema.String, "ServerConnection.Key">>;
        readonly sessionId: Schema.mutableKey<Schema.String>;
        readonly routeSessionId: Schema.mutableKey<Schema.middlewareDecoding<Schema.optional<Schema.String>, never>>;
        readonly routeParentId: Schema.mutableKey<Schema.middlewareDecoding<Schema.optional<Schema.String>, never>>;
    }>, never, never>>;
    readonly index: Schema.mutableKey<Schema.Int>;
    readonly info: Schema.mutableKey<Schema.middlewareDecoding<Schema.optional<Schema.Struct<{
        readonly title: Schema.mutableKey<Schema.optional<Schema.String>>;
        readonly directory: Schema.mutableKey<Schema.optional<Schema.String>>;
        readonly prompted: Schema.mutableKey<Schema.optional<Schema.Boolean>>;
    }>>, never>>;
}>;
export declare const Closed: Schema.middlewareDecoding<Schema.withDecodingDefaultType<Schema.decodeTo<Schema.mutable<Schema.$Array<Schema.toType<Schema.Struct<{
    readonly tab: Schema.mutableKey<Schema.decodeTo<Schema.toType<Schema.Struct<{
        readonly type: Schema.mutableKey<Schema.Literal<"session">>;
        readonly server: Schema.mutableKey<Schema.brand<Schema.String, "ServerConnection.Key">>;
        readonly sessionId: Schema.mutableKey<Schema.String>;
        readonly routeSessionId: Schema.mutableKey<Schema.middlewareDecoding<Schema.optional<Schema.String>, never>>;
        readonly routeParentId: Schema.mutableKey<Schema.middlewareDecoding<Schema.optional<Schema.String>, never>>;
    }>>, Schema.Struct<{
        readonly type: Schema.mutableKey<Schema.Literal<"session">>;
        readonly server: Schema.mutableKey<Schema.brand<Schema.String, "ServerConnection.Key">>;
        readonly sessionId: Schema.mutableKey<Schema.String>;
        readonly routeSessionId: Schema.mutableKey<Schema.middlewareDecoding<Schema.optional<Schema.String>, never>>;
        readonly routeParentId: Schema.mutableKey<Schema.middlewareDecoding<Schema.optional<Schema.String>, never>>;
    }>, never, never>>;
    readonly index: Schema.mutableKey<Schema.Int>;
    readonly info: Schema.mutableKey<Schema.middlewareDecoding<Schema.optional<Schema.Struct<{
        readonly title: Schema.mutableKey<Schema.optional<Schema.String>>;
        readonly directory: Schema.mutableKey<Schema.optional<Schema.String>>;
        readonly prompted: Schema.mutableKey<Schema.optional<Schema.Boolean>>;
    }>>, never>>;
}>>>>, Schema.$Array<Schema.Unknown>, never, never>, never>, never>;
