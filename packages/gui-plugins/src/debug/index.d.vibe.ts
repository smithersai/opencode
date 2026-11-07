import { Schema } from "effect";
import { Plugin } from "@opencode/plugin/gui";
declare const _default: Plugin.Declarations<{
    readonly bar: import("@opencode/plugin/gui").StoreDeclaration<Schema.Struct<{
        readonly visible: Schema.Boolean;
        readonly motion: Schema.Boolean;
    }>, "global">;
}>;
export default _default;
