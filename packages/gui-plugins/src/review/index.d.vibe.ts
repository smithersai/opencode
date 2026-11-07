import { Schema } from "effect";
import { Plugin } from "@opencode/plugin/gui";
declare const _default: Plugin.Declarations<{
    readonly diff: import("@opencode/plugin/gui/builtin").BuiltinStoreDeclaration<Schema.Struct<{
        readonly diffStyle: Schema.Literals<readonly ["unified", "split"]>;
    }>, "global">;
    readonly panel: import("@opencode/plugin/gui/builtin").BuiltinStoreDeclaration<Schema.Struct<{
        readonly expandMode: Schema.Literals<readonly ["expand", "collapse"]>;
    }>, "global">;
    readonly mobileDiff: import("@opencode/plugin/gui/builtin").BuiltinStoreDeclaration<Schema.Struct<{
        readonly wrap: Schema.Boolean;
    }>, "global">;
    readonly session: import("@opencode/plugin/gui/builtin").BuiltinStoreDeclaration<Schema.Struct<{
        readonly mode: Schema.optional<Schema.Literals<readonly ["git", "branch", "turn"]>>;
        readonly file: Schema.optional<Schema.String>;
        readonly open: Schema.$Array<Schema.String>;
    }>, "session">;
}>;
export default _default;
