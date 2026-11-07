import { Schema } from "effect";
import { Plugin } from "@opencode/plugin/gui";
declare const _default: Plugin.Declarations<{
    readonly releaseNotes: import("@opencode/plugin/gui/builtin").BuiltinStoreDeclaration<Schema.Struct<{
        readonly enabled: Schema.Boolean;
    }>, "global">;
    readonly seen: import("@opencode/plugin/gui").StoreDeclaration<Schema.Struct<{
        readonly version: Schema.optional<Schema.String>;
        readonly commit: Schema.optional<Schema.String>;
    }>, "global">;
}>;
export default _default;
