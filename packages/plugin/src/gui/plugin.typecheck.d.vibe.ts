import { Schema } from "effect";
import { Plugin } from "./index.ts";
export declare const plugin: Plugin.Definition<{
    readonly prefs: import("./core.ts").StoreDeclaration<Schema.Struct<{
        readonly on: Schema.Boolean;
    }>, "global">;
}>;
export declare const split: Plugin.Definition<{
    readonly count: import("./core.ts").StoreDeclaration<Schema.Struct<{
        readonly n: Schema.Number;
    }>, "global">;
}>;
export declare const wrongImpl: Plugin.Definition<{}>;
export declare const asyncWindow: Plugin.Definition<{}>;
