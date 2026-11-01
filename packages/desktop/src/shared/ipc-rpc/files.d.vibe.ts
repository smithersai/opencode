import { Schema } from "effect";
import { Rpc, RpcGroup } from "effect/rpc";
import { Transferable } from "effect/workers";
export declare const FilesOpenDirectoryPicker: Rpc.Rpc<"FilesOpenDirectoryPicker", Schema.Struct<{
    options: Schema.optional<Schema.Struct<{
        readonly multiple: Schema.optional<Schema.Boolean>;
        readonly title: Schema.optional<Schema.String>;
        readonly defaultPath: Schema.optional<Schema.String>;
    }>>;
}>, Schema.NullOr<Schema.Union<readonly [Schema.String, Schema.$Array<Schema.String>]>>, Schema.Never, never, never>;
export declare const FilesOpenFilePicker: Rpc.Rpc<"FilesOpenFilePicker", Schema.Struct<{
    options: Schema.optional<Schema.Struct<{
        readonly multiple: Schema.optional<Schema.Boolean>;
        readonly title: Schema.optional<Schema.String>;
        readonly defaultPath: Schema.optional<Schema.String>;
        readonly extensions: Schema.optional<Schema.$Array<Schema.String>>;
    }>>;
}>, Schema.NullOr<Schema.Struct<{
    readonly token: Schema.String;
    readonly files: Schema.$Array<Schema.Struct<{
        readonly path: Schema.String;
        readonly name: Schema.String;
        readonly size: Schema.Number;
    }>>;
}>>, Schema.Never, never, never>;
export declare const FilesReadPickedFile: Rpc.Rpc<"FilesReadPickedFile", Schema.Struct<{
    token: Schema.String;
    path: Schema.String;
}>, Transferable.Transferable<Schema.instanceOf<Uint8Array<ArrayBuffer>, Uint8Array<ArrayBuffer>>>, Schema.Never, never, never>;
export declare const FilesReleasePickedFiles: Rpc.Rpc<"FilesReleasePickedFiles", Schema.Struct<{
    token: Schema.String;
}>, Schema.Void, Schema.Never, never, never>;
export declare const FilesSaveFile: Rpc.Rpc<"FilesSaveFile", Schema.Struct<{
    options: Schema.Struct<{
        readonly title: Schema.optional<Schema.String>;
        readonly defaultPath: Schema.optional<Schema.String>;
    }>;
    content: Schema.String;
}>, Schema.Boolean, Schema.Never, never, never>;
export declare const FilesOpenExternal: Rpc.Rpc<"FilesOpenExternal", Schema.Struct<{
    url: Schema.String;
}>, Schema.Void, Schema.Never, never, never>;
export declare const FilesOpenBrowser: Rpc.Rpc<"FilesOpenBrowser", Schema.Struct<{
    url: Schema.String;
}>, Schema.Boolean, Schema.Never, never, never>;
export declare const FilesOpenLocalFile: Rpc.Rpc<"FilesOpenLocalFile", Schema.Struct<{
    url: Schema.String;
}>, Schema.Void, Schema.Never, never, never>;
export declare const FilesOpenPath: Rpc.Rpc<"FilesOpenPath", Schema.Struct<{
    path: Schema.String;
    application: Schema.optional<Schema.String>;
}>, Schema.NullOr<Schema.String>, Schema.Never, never, never>;
export declare const FilesRevealPath: Rpc.Rpc<"FilesRevealPath", Schema.Struct<{
    path: Schema.String;
}>, Schema.Boolean, Schema.Never, never, never>;
export declare const FilesReadClipboardImage: Rpc.Rpc<"FilesReadClipboardImage", Schema.Void, Schema.NullOr<Schema.Struct<{
    readonly buffer: Transferable.Transferable<Schema.instanceOf<Uint8Array<ArrayBuffer>, Uint8Array<ArrayBuffer>>>;
    readonly width: Schema.Number;
    readonly height: Schema.Number;
}>>, Schema.Never, never, never>;
export declare const FilesWriteClipboardText: Rpc.Rpc<"FilesWriteClipboardText", Schema.Struct<{
    text: Schema.String;
}>, Schema.Void, Schema.Never, never, never>;
export declare const FileRpcs: RpcGroup.RpcGroup<Rpc.Rpc<"FilesOpenBrowser", Schema.Struct<{
    url: Schema.String;
}>, Schema.Boolean, Schema.Never, never, never> | Rpc.Rpc<"FilesOpenDirectoryPicker", Schema.Struct<{
    options: Schema.optional<Schema.Struct<{
        readonly multiple: Schema.optional<Schema.Boolean>;
        readonly title: Schema.optional<Schema.String>;
        readonly defaultPath: Schema.optional<Schema.String>;
    }>>;
}>, Schema.NullOr<Schema.Union<readonly [Schema.String, Schema.$Array<Schema.String>]>>, Schema.Never, never, never> | Rpc.Rpc<"FilesOpenExternal", Schema.Struct<{
    url: Schema.String;
}>, Schema.Void, Schema.Never, never, never> | Rpc.Rpc<"FilesOpenFilePicker", Schema.Struct<{
    options: Schema.optional<Schema.Struct<{
        readonly multiple: Schema.optional<Schema.Boolean>;
        readonly title: Schema.optional<Schema.String>;
        readonly defaultPath: Schema.optional<Schema.String>;
        readonly extensions: Schema.optional<Schema.$Array<Schema.String>>;
    }>>;
}>, Schema.NullOr<Schema.Struct<{
    readonly token: Schema.String;
    readonly files: Schema.$Array<Schema.Struct<{
        readonly path: Schema.String;
        readonly name: Schema.String;
        readonly size: Schema.Number;
    }>>;
}>>, Schema.Never, never, never> | Rpc.Rpc<"FilesOpenLocalFile", Schema.Struct<{
    url: Schema.String;
}>, Schema.Void, Schema.Never, never, never> | Rpc.Rpc<"FilesOpenPath", Schema.Struct<{
    path: Schema.String;
    application: Schema.optional<Schema.String>;
}>, Schema.NullOr<Schema.String>, Schema.Never, never, never> | Rpc.Rpc<"FilesReadClipboardImage", Schema.Void, Schema.NullOr<Schema.Struct<{
    readonly buffer: Transferable.Transferable<Schema.instanceOf<Uint8Array<ArrayBuffer>, Uint8Array<ArrayBuffer>>>;
    readonly width: Schema.Number;
    readonly height: Schema.Number;
}>>, Schema.Never, never, never> | Rpc.Rpc<"FilesReadPickedFile", Schema.Struct<{
    token: Schema.String;
    path: Schema.String;
}>, Transferable.Transferable<Schema.instanceOf<Uint8Array<ArrayBuffer>, Uint8Array<ArrayBuffer>>>, Schema.Never, never, never> | Rpc.Rpc<"FilesReleasePickedFiles", Schema.Struct<{
    token: Schema.String;
}>, Schema.Void, Schema.Never, never, never> | Rpc.Rpc<"FilesRevealPath", Schema.Struct<{
    path: Schema.String;
}>, Schema.Boolean, Schema.Never, never, never> | Rpc.Rpc<"FilesSaveFile", Schema.Struct<{
    options: Schema.Struct<{
        readonly title: Schema.optional<Schema.String>;
        readonly defaultPath: Schema.optional<Schema.String>;
    }>;
    content: Schema.String;
}>, Schema.Boolean, Schema.Never, never, never> | Rpc.Rpc<"FilesWriteClipboardText", Schema.Struct<{
    text: Schema.String;
}>, Schema.Void, Schema.Never, never, never>>;
