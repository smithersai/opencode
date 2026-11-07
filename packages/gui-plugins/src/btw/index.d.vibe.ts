import { Schema } from "effect";
import { Plugin } from "@opencode/plugin/gui";
declare const _default: Plugin.Declarations<{
    readonly chats: import("@opencode/plugin/gui").StoreDeclaration<Schema.Struct<{
        readonly chats: Schema.$Array<Schema.Struct<{
            readonly id: Schema.String;
            readonly question: Schema.String;
            readonly answer: Schema.optional<Schema.String>;
            readonly agent: Schema.optional<Schema.String>;
            readonly model: Schema.optional<Schema.Struct<{
                readonly providerID: Schema.String;
                readonly id: Schema.String;
                readonly variant: Schema.optional<Schema.String>;
            }>>;
            readonly created: Schema.optional<Schema.Number>;
            readonly duration: Schema.optional<Schema.Number>;
        }>>;
    }>, "session">;
}>;
export default _default;
