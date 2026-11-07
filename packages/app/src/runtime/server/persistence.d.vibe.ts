import { Schema } from "effect";
export declare const ServerKey: Schema.brand<Schema.String, "ServerConnection.Key">;
export declare const ServerHttpBase: Schema.Struct<{
    readonly url: Schema.mutableKey<Schema.String>;
    readonly password: Schema.mutableKey<Schema.optional<Schema.String>>;
}>;
export declare const ServerHttp: Schema.Struct<{
    readonly type: Schema.mutableKey<Schema.Literal<"http">>;
    readonly http: Schema.mutableKey<Schema.Struct<{
        readonly url: Schema.mutableKey<Schema.String>;
        readonly password: Schema.mutableKey<Schema.optional<Schema.String>>;
    }>>;
    readonly authToken: Schema.mutableKey<Schema.optional<Schema.Boolean>>;
    readonly displayName: Schema.mutableKey<Schema.optional<Schema.String>>;
    readonly label: Schema.mutableKey<Schema.optional<Schema.String>>;
}>;
export declare const ServerState: Schema.Struct<{
    readonly list: Schema.mutableKey<Schema.middlewareDecoding<Schema.withDecodingDefaultType<Schema.decodeTo<Schema.mutable<Schema.$Array<Schema.toType<Schema.decodeTo<Schema.Struct<{
        readonly type: Schema.mutableKey<Schema.Literal<"http">>;
        readonly http: Schema.mutableKey<Schema.Struct<{
            readonly url: Schema.mutableKey<Schema.String>;
            readonly password: Schema.mutableKey<Schema.optional<Schema.String>>;
        }>>;
        readonly authToken: Schema.mutableKey<Schema.optional<Schema.Boolean>>;
        readonly displayName: Schema.mutableKey<Schema.optional<Schema.String>>;
        readonly label: Schema.mutableKey<Schema.optional<Schema.String>>;
    }>, Schema.Union<readonly [Schema.Struct<{
        readonly type: Schema.mutableKey<Schema.Literal<"http">>;
        readonly http: Schema.mutableKey<Schema.Struct<{
            readonly url: Schema.mutableKey<Schema.String>;
            readonly password: Schema.mutableKey<Schema.optional<Schema.String>>;
        }>>;
        readonly authToken: Schema.mutableKey<Schema.optional<Schema.Boolean>>;
        readonly displayName: Schema.mutableKey<Schema.optional<Schema.String>>;
        readonly label: Schema.mutableKey<Schema.optional<Schema.String>>;
    }>, Schema.Struct<{
        readonly url: Schema.mutableKey<Schema.String>;
        readonly password: Schema.mutableKey<Schema.optional<Schema.String>>;
    }>, Schema.String]>, never, never>>>>, Schema.$Array<Schema.Unknown>, never, never>, never>, never>>;
    readonly hidden: Schema.mutableKey<Schema.$Record<Schema.String, Schema.mutableKey<Schema.middlewareDecoding<Schema.Boolean, never>>>>;
    readonly lastProjectID: Schema.mutableKey<Schema.$Record<Schema.String, Schema.mutableKey<Schema.middlewareDecoding<Schema.String, never>>>>;
    readonly usedProjectIDs: Schema.mutableKey<Schema.middlewareDecoding<Schema.withDecodingDefaultType<Schema.$Record<Schema.String, Schema.mutableKey<Schema.middlewareDecoding<Schema.withDecodingDefaultType<Schema.decodeTo<Schema.mutable<Schema.$Array<Schema.toType<Schema.String>>>, Schema.$Array<Schema.Unknown>, never, never>, never>, never>>>, never>, never>>;
    readonly hostnames: Schema.mutableKey<Schema.$Record<Schema.String, Schema.mutableKey<Schema.middlewareDecoding<Schema.String, never>>>>;
    readonly projects: Schema.mutableKey<Schema.middlewareDecoding<Schema.withDecodingDefaultType<Schema.$Record<Schema.String, Schema.mutableKey<Schema.middlewareDecoding<Schema.withDecodingDefaultType<Schema.decodeTo<Schema.mutable<Schema.$Array<Schema.toType<Schema.Struct<{
        readonly worktree: Schema.mutableKey<Schema.String>;
    }>>>>, Schema.$Array<Schema.Unknown>, never, never>, never>, never>>>, never>, never>>;
}>;
export declare const ModelState: Schema.Struct<{
    readonly user: Schema.mutableKey<Schema.middlewareDecoding<Schema.withDecodingDefaultType<Schema.decodeTo<Schema.mutable<Schema.$Array<Schema.toType<Schema.Struct<{
        readonly providerID: Schema.mutableKey<Schema.String>;
        readonly modelID: Schema.mutableKey<Schema.String>;
        readonly visibility: Schema.mutableKey<Schema.Literals<readonly ["show", "hide"]>>;
        readonly favorite: Schema.mutableKey<Schema.optional<Schema.Boolean>>;
    }>>>>, Schema.$Array<Schema.Unknown>, never, never>, never>, never>>;
    readonly recent: Schema.mutableKey<Schema.middlewareDecoding<Schema.withDecodingDefaultType<Schema.decodeTo<Schema.mutable<Schema.$Array<Schema.toType<Schema.Struct<{
        readonly providerID: Schema.mutableKey<Schema.String>;
        readonly modelID: Schema.mutableKey<Schema.String>;
    }>>>>, Schema.$Array<Schema.Unknown>, never, never>, never>, never>>;
    readonly favorite: Schema.mutableKey<Schema.middlewareDecoding<Schema.withDecodingDefaultType<Schema.decodeTo<Schema.mutable<Schema.$Array<Schema.toType<Schema.Struct<{
        readonly providerID: Schema.mutableKey<Schema.String>;
        readonly modelID: Schema.mutableKey<Schema.String>;
    }>>>>, Schema.$Array<Schema.Unknown>, never, never>, never>, never>>;
    readonly variant: Schema.mutableKey<Schema.$Record<Schema.String, Schema.mutableKey<Schema.middlewareDecoding<Schema.UndefinedOr<Schema.String>, never>>>>;
}>;
export declare const VcsState: Schema.Struct<{
    readonly value: Schema.mutableKey<Schema.optional<Schema.Struct<{
        readonly branch: Schema.mutableKey<Schema.optional<Schema.String>>;
        readonly default_branch: Schema.mutableKey<Schema.optional<Schema.String>>;
    }>>>;
}>;
export declare const ProjectState: Schema.Struct<{
    readonly value: Schema.mutableKey<Schema.optional<Schema.Struct<{
        readonly name: Schema.mutableKey<Schema.optional<Schema.String>>;
        readonly icon: Schema.mutableKey<Schema.optional<Schema.Struct<{
            readonly override: Schema.mutableKey<Schema.optional<Schema.String>>;
            readonly color: Schema.mutableKey<Schema.optional<Schema.String>>;
        }>>>;
        readonly commands: Schema.mutableKey<Schema.optional<Schema.Struct<{
            readonly start: Schema.mutableKey<Schema.optional<Schema.String>>;
        }>>>;
    }>>>;
}>;
