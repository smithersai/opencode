import { Schema } from "effect";
import type { BuiltinMainStorage } from "@opencode/plugin/gui/builtin";
declare const Stored: Schema.Struct<{
    readonly tabs: Schema.$Array<Schema.Struct<{
        readonly id: Schema.brand<Schema.String, "Browser.TabID">;
        readonly url: Schema.String;
    }>>;
    readonly focusedTabID: Schema.NullOr<Schema.brand<Schema.String, "Browser.TabID">>;
}>;
type Stored = typeof Stored.Type;
/** Tab URLs and focus per `${server}\n${session}`, imported once from the desktop's own `opencode.browser.dat` rows. */
export declare function createBrowserRestoreStore(storage: BuiltinMainStorage): {
    load: (key: string) => {
        readonly tabs: readonly {
            readonly id: string & import("effect/Brand").Brand<"Browser.TabID">;
            readonly url: string;
        }[];
        readonly focusedTabID: (string & import("effect/Brand").Brand<"Browser.TabID">) | null;
    };
    save(key: string, state: Stored): void;
    remove(key: string): void;
};
export {};
