import { Schema } from "effect";
import { Rpc, RpcGroup } from "effect/rpc";
import { Transferable } from "effect/workers";
export declare const PluginPayload: Schema.declare<unknown, unknown>;
export declare const PluginErrorCode: Schema.Literals<readonly ["unavailable", "method", "input", "output", "failed", "notFound", "builtin"]>;
export type PluginErrorCode = typeof PluginErrorCode.Type;
export declare const PluginFailure: Schema.Struct<{
    readonly code: Schema.Literals<readonly ["unavailable", "method", "input", "output", "failed", "notFound", "builtin"]>;
    readonly message: Schema.optionalKey<Schema.String>;
}>;
export type PluginFailure = typeof PluginFailure.Type;
export declare const PluginLayout: Schema.Struct<{
    readonly visible: Schema.Boolean;
    readonly bounds: Schema.optionalKey<Schema.Struct<{
        readonly x: Schema.Finite;
        readonly y: Schema.Finite;
        readonly width: Schema.Finite;
        readonly height: Schema.Finite;
    }>>;
    readonly viewport: Schema.optionalKey<Schema.Struct<{
        readonly width: Schema.Finite;
        readonly height: Schema.Finite;
    }>>;
    readonly background: Schema.optionalKey<Schema.Tuple<readonly [Schema.Finite, Schema.Finite, Schema.Finite, Schema.Finite]>>;
    readonly radius: Schema.optionalKey<Schema.Finite>;
    readonly border: Schema.optionalKey<Schema.Struct<{
        readonly color: Schema.Tuple<readonly [Schema.Finite, Schema.Finite, Schema.Finite, Schema.Finite]>;
        readonly width: Schema.Finite;
    }>>;
}>;
export declare const PluginEndpoint: Schema.Struct<{
    readonly id: Schema.String;
    readonly url: Schema.String;
    readonly password: Schema.optionalKey<Schema.String>;
}>;
export type PluginEndpoint = typeof PluginEndpoint.Type;
export declare const PluginInstalled: Schema.Struct<{
    readonly id: Schema.String;
    readonly builtin: Schema.Boolean;
    readonly enabled: Schema.Boolean;
    readonly error: Schema.optionalKey<Schema.String>;
    readonly server: Schema.optionalKey<Schema.Boolean>;
    readonly tui: Schema.optionalKey<Schema.Boolean>;
    readonly unsupported: Schema.optionalKey<Schema.Boolean>;
}>;
export type PluginInstalled = typeof PluginInstalled.Type;
export declare const PluginGuis: Schema.Struct<{
    readonly plugins: Schema.$Array<Schema.Struct<{
        readonly id: Schema.String;
        readonly revision: Schema.String;
        readonly code: Schema.String;
        readonly options: Schema.$Record<Schema.String, Schema.Codec<Schema.Json, Schema.Json, never, never>>;
    }>>;
    readonly reserved: Schema.$Array<Schema.String>;
}>;
export type PluginGuis = typeof PluginGuis.Type;
export declare const PluginMenubarItem: Schema.Struct<{
    readonly menu: Schema.String;
    readonly id: Schema.String;
    readonly label: Schema.String;
    readonly after: Schema.optionalKey<Schema.String>;
    readonly enabled: Schema.Boolean;
}>;
export type PluginMenubarItem = typeof PluginMenubarItem.Type;
export declare const PluginRpcs: RpcGroup.RpcGroup<Rpc.Rpc<"PluginCall", Schema.Struct<{
    ipc: Schema.String;
    method: Schema.String;
    input: Schema.optionalKey<Schema.declare<unknown, unknown>>;
}>, Schema.declare<unknown, unknown>, Schema.Struct<{
    readonly code: Schema.Literals<readonly ["unavailable", "method", "input", "output", "failed", "notFound", "builtin"]>;
    readonly message: Schema.optionalKey<Schema.String>;
}>, never, never> | Rpc.Rpc<"PluginCapture", Schema.Struct<{
    id: Schema.String;
}>, Schema.NullOr<Transferable.Transferable<Schema.instanceOf<Uint8Array<ArrayBuffer>, Uint8Array<ArrayBuffer>>>>, Schema.Never, never, never> | Rpc.Rpc<"PluginConfigure", Schema.Struct<{
    servers: Schema.$Array<Schema.Struct<{
        readonly id: Schema.String;
        readonly url: Schema.String;
        readonly password: Schema.optionalKey<Schema.String>;
    }>>;
}>, Schema.Void, Schema.Never, never, never> | Rpc.Rpc<"PluginDisable", Schema.Struct<{
    id: Schema.String;
}>, Schema.Void, Schema.Struct<{
    readonly code: Schema.Literals<readonly ["unavailable", "method", "input", "output", "failed", "notFound", "builtin"]>;
    readonly message: Schema.optionalKey<Schema.String>;
}>, never, never> | Rpc.Rpc<"PluginEmbed", Schema.Struct<{
    id: Schema.String;
    layout: Schema.optionalKey<Schema.Struct<{
        readonly visible: Schema.Boolean;
        readonly bounds: Schema.optionalKey<Schema.Struct<{
            readonly x: Schema.Finite;
            readonly y: Schema.Finite;
            readonly width: Schema.Finite;
            readonly height: Schema.Finite;
        }>>;
        readonly viewport: Schema.optionalKey<Schema.Struct<{
            readonly width: Schema.Finite;
            readonly height: Schema.Finite;
        }>>;
        readonly background: Schema.optionalKey<Schema.Tuple<readonly [Schema.Finite, Schema.Finite, Schema.Finite, Schema.Finite]>>;
        readonly radius: Schema.optionalKey<Schema.Finite>;
        readonly border: Schema.optionalKey<Schema.Struct<{
            readonly color: Schema.Tuple<readonly [Schema.Finite, Schema.Finite, Schema.Finite, Schema.Finite]>;
            readonly width: Schema.Finite;
        }>>;
    }>>;
}>, Schema.Void, Schema.Never, never, never> | Rpc.Rpc<"PluginEnable", Schema.Struct<{
    id: Schema.String;
}>, Schema.Void, Schema.Struct<{
    readonly code: Schema.Literals<readonly ["unavailable", "method", "input", "output", "failed", "notFound", "builtin"]>;
    readonly message: Schema.optionalKey<Schema.String>;
}>, never, never> | Rpc.Rpc<"PluginGuis", Schema.Void, Schema.Struct<{
    readonly plugins: Schema.$Array<Schema.Struct<{
        readonly id: Schema.String;
        readonly revision: Schema.String;
        readonly code: Schema.String;
        readonly options: Schema.$Record<Schema.String, Schema.Codec<Schema.Json, Schema.Json, never, never>>;
    }>>;
    readonly reserved: Schema.$Array<Schema.String>;
}>, Schema.Never, never, never> | Rpc.Rpc<"PluginList", Schema.Void, Schema.$Array<Schema.Struct<{
    readonly id: Schema.String;
    readonly builtin: Schema.Boolean;
    readonly enabled: Schema.Boolean;
    readonly error: Schema.optionalKey<Schema.String>;
    readonly server: Schema.optionalKey<Schema.Boolean>;
    readonly tui: Schema.optionalKey<Schema.Boolean>;
    readonly unsupported: Schema.optionalKey<Schema.Boolean>;
}>>, Schema.Never, never, never> | Rpc.Rpc<"PluginMenubarItem", Schema.Struct<{
    id: Schema.String;
}>, Schema.Void, Schema.Never, never, never> | Rpc.Rpc<"PluginMenubarItems", Schema.Void, Schema.$Array<Schema.Struct<{
    readonly menu: Schema.String;
    readonly id: Schema.String;
    readonly label: Schema.String;
    readonly after: Schema.optionalKey<Schema.String>;
    readonly enabled: Schema.Boolean;
}>>, Schema.Never, never, never> | Rpc.Rpc<"PluginReload", Schema.Struct<{
    id: Schema.String;
}>, Schema.Void, Schema.Struct<{
    readonly code: Schema.Literals<readonly ["unavailable", "method", "input", "output", "failed", "notFound", "builtin"]>;
    readonly message: Schema.optionalKey<Schema.String>;
}>, never, never> | Rpc.Rpc<"PluginSubscribe", Schema.Struct<{
    ipc: Schema.String;
}>, Schema.Struct<{
    readonly available: Schema.Boolean;
    readonly state: Schema.optionalKey<Schema.declare<unknown, unknown>>;
}>, Schema.Never, never, never>>;
