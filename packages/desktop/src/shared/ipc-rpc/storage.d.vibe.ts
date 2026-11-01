import { Schema } from "effect";
import { Rpc, RpcGroup } from "effect/rpc";
import { Transferable } from "effect/workers";
export declare const StorageItems: Rpc.Rpc<"StorageItems", Schema.Struct<{
    name: Schema.String;
}>, Schema.Struct<{
    readonly items: Schema.$Record<Schema.String, Schema.String>;
    readonly revision: Schema.Number;
}>, Schema.Never, never, never>;
export declare const StorageUpdate: Rpc.Rpc<"StorageUpdate", Schema.Struct<{
    name: Schema.String;
    insert: Schema.$Record<Schema.String, Schema.String>;
    remove: Schema.$Array<Schema.String>;
}>, Schema.Number, Schema.Never, never, never>;
export declare const StorageClear: Rpc.Rpc<"StorageClear", Schema.Struct<{
    name: Schema.String;
}>, Schema.Void, Schema.Never, never, never>;
export declare const DraftsGet: Rpc.Rpc<"DraftsGet", Schema.Struct<{
    key: Schema.String;
}>, Schema.NullOr<Schema.String>, Schema.Never, never, never>;
export declare const DraftsSet: Rpc.Rpc<"DraftsSet", Schema.Struct<{
    key: Schema.String;
    value: Schema.String;
    strict: Schema.Boolean;
}>, Schema.$Array<Schema.String>, Schema.Never, never, never>;
export declare const DraftsDelete: Rpc.Rpc<"DraftsDelete", Schema.Struct<{
    key: Schema.String;
}>, Schema.Void, Schema.Never, never, never>;
export declare const DraftsPutBlob: Rpc.Rpc<"DraftsPutBlob", Schema.Struct<{
    data: Transferable.Transferable<Schema.instanceOf<Uint8Array<ArrayBuffer>, Uint8Array<ArrayBuffer>>>;
}>, Schema.String, Schema.Never, never, never>;
export declare const DraftsGetBlob: Rpc.Rpc<"DraftsGetBlob", Schema.Struct<{
    id: Schema.String;
}>, Schema.NullOr<Transferable.Transferable<Schema.instanceOf<Uint8Array<ArrayBuffer>, Uint8Array<ArrayBuffer>>>>, Schema.Never, never, never>;
export declare const StorageRpcs: RpcGroup.RpcGroup<Rpc.Rpc<"DraftsDelete", Schema.Struct<{
    key: Schema.String;
}>, Schema.Void, Schema.Never, never, never> | Rpc.Rpc<"DraftsGet", Schema.Struct<{
    key: Schema.String;
}>, Schema.NullOr<Schema.String>, Schema.Never, never, never> | Rpc.Rpc<"DraftsGetBlob", Schema.Struct<{
    id: Schema.String;
}>, Schema.NullOr<Transferable.Transferable<Schema.instanceOf<Uint8Array<ArrayBuffer>, Uint8Array<ArrayBuffer>>>>, Schema.Never, never, never> | Rpc.Rpc<"DraftsPutBlob", Schema.Struct<{
    data: Transferable.Transferable<Schema.instanceOf<Uint8Array<ArrayBuffer>, Uint8Array<ArrayBuffer>>>;
}>, Schema.String, Schema.Never, never, never> | Rpc.Rpc<"DraftsSet", Schema.Struct<{
    key: Schema.String;
    value: Schema.String;
    strict: Schema.Boolean;
}>, Schema.$Array<Schema.String>, Schema.Never, never, never> | Rpc.Rpc<"StorageClear", Schema.Struct<{
    name: Schema.String;
}>, Schema.Void, Schema.Never, never, never> | Rpc.Rpc<"StorageItems", Schema.Struct<{
    name: Schema.String;
}>, Schema.Struct<{
    readonly items: Schema.$Record<Schema.String, Schema.String>;
    readonly revision: Schema.Number;
}>, Schema.Never, never, never> | Rpc.Rpc<"StorageUpdate", Schema.Struct<{
    name: Schema.String;
    insert: Schema.$Record<Schema.String, Schema.String>;
    remove: Schema.$Array<Schema.String>;
}>, Schema.Number, Schema.Never, never, never>>;
