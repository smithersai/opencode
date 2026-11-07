import { Schema } from "effect";
import { Ipc, Plugin, type IconName, type IpcClient, type PanelTab } from "./index.ts";
declare const Consumer: Plugin.Declarations<{
    readonly view: import("./core.ts").StoreDeclaration<Schema.Struct<{
        readonly open: Schema.Boolean;
    }>, "global">;
    readonly draft: import("./core.ts").StoreDeclaration<Schema.Struct<{
        readonly open: Schema.Boolean;
    }>, "session">;
}>;
export declare const setup: Plugin.Setup<typeof Consumer>;
export declare const asyncSetup: Plugin.Setup<typeof Consumer>;
export declare const returningSetup: Plugin.Setup<typeof Consumer>;
export declare const mainProvider: Plugin.MainSetup;
export declare const ineligible: PanelTab;
export declare const unknownIcon: IconName;
export declare const bound: import("solid-js").Component<{
    readonly label: string;
}>;
declare const NoInput: Ipc<{
    readonly id: "fixture.no-input";
    readonly methods: {
        info: {
            output: Schema.String;
        };
    };
}>;
export declare function noInput(client: IpcClient<typeof NoInput.spec>, signal: AbortSignal): void;
declare const Nested: Plugin.Declarations<{
    readonly prefs: import("./core.ts").StoreDeclaration<Schema.Struct<{
        readonly items: Schema.$Array<Schema.Struct<{
            readonly shown: Schema.Boolean;
        }>>;
    }>, "global">;
}>;
export declare const nested: Plugin.Setup<typeof Nested>;
export {};
