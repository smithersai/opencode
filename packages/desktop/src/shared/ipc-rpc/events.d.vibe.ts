import { Schema } from "effect";
import { Rpc, RpcGroup } from "effect/rpc";
declare const DeepLinksOpened_base: Schema.Class<DeepLinksOpened, Schema.TaggedStruct<"DeepLinksOpened", {
    readonly urls: Schema.$Array<Schema.String>;
}>, {}>;
export declare class DeepLinksOpened extends DeepLinksOpened_base {
}
declare const MenuCommandTriggered_base: Schema.Class<MenuCommandTriggered, Schema.TaggedStruct<"MenuCommandTriggered", {
    readonly id: Schema.String;
}>, {}>;
export declare class MenuCommandTriggered extends MenuCommandTriggered_base {
}
declare const WindowFullscreenChanged_base: Schema.Class<WindowFullscreenChanged, Schema.TaggedStruct<"WindowFullscreenChanged", {
    readonly fullscreen: Schema.Boolean;
}>, {}>;
export declare class WindowFullscreenChanged extends WindowFullscreenChanged_base {
}
declare const WindowFocusChanged_base: Schema.Class<WindowFocusChanged, Schema.TaggedStruct<"WindowFocusChanged", {
    readonly focused: Schema.Boolean;
}>, {}>;
export declare class WindowFocusChanged extends WindowFocusChanged_base {
}
declare const WindowPinchZoomChanged_base: Schema.Class<WindowPinchZoomChanged, Schema.TaggedStruct<"WindowPinchZoomChanged", {
    readonly enabled: Schema.Boolean;
}>, {}>;
export declare class WindowPinchZoomChanged extends WindowPinchZoomChanged_base {
}
declare const WindowZoomChanged_base: Schema.Class<WindowZoomChanged, Schema.TaggedStruct<"WindowZoomChanged", {
    readonly factor: Schema.Number;
    readonly level: Schema.Literals<readonly [1, 1.1, 1.25, 1.5, 1.75, 2]>;
}>, {}>;
export declare class WindowZoomChanged extends WindowZoomChanged_base {
}
declare const StorageChanged_base: Schema.Class<StorageChanged, Schema.TaggedStruct<"StorageChanged", {
    readonly name: Schema.String;
    readonly insert: Schema.$Record<Schema.String, Schema.String>;
    readonly remove: Schema.$Array<Schema.String>;
    readonly revision: Schema.Number;
}>, {}>;
export declare class StorageChanged extends StorageChanged_base {
}
declare const PluginState_base: Schema.Class<PluginState, Schema.TaggedStruct<"PluginState", {
    readonly ipc: Schema.String;
    readonly state: Schema.declare<unknown, unknown>;
}>, {}>;
export declare class PluginState extends PluginState_base {
}
declare const PluginEvent_base: Schema.Class<PluginEvent, Schema.TaggedStruct<"PluginEvent", {
    readonly ipc: Schema.String;
    readonly name: Schema.String;
    readonly data: Schema.declare<unknown, unknown>;
}>, {}>;
export declare class PluginEvent extends PluginEvent_base {
}
declare const PluginAvailable_base: Schema.Class<PluginAvailable, Schema.TaggedStruct<"PluginAvailable", {
    readonly ipc: Schema.String;
    readonly available: Schema.Boolean;
}>, {}>;
export declare class PluginAvailable extends PluginAvailable_base {
}
declare const PluginsChanged_base: Schema.Class<PluginsChanged, Schema.TaggedStruct<"PluginsChanged", {
    readonly list: Schema.$Array<Schema.Struct<{
        readonly id: Schema.String;
        readonly builtin: Schema.Boolean;
        readonly enabled: Schema.Boolean;
        readonly error: Schema.optionalKey<Schema.String>;
        readonly server: Schema.optionalKey<Schema.Boolean>;
        readonly tui: Schema.optionalKey<Schema.Boolean>;
        readonly unsupported: Schema.optionalKey<Schema.Boolean>;
    }>>;
}>, {}>;
export declare class PluginsChanged extends PluginsChanged_base {
}
declare const PluginGuisChanged_base: Schema.Class<PluginGuisChanged, Schema.TaggedStruct<"PluginGuisChanged", {
    readonly plugins: Schema.$Array<Schema.Struct<{
        readonly id: Schema.String;
        readonly revision: Schema.String;
        readonly code: Schema.String;
        readonly options: Schema.$Record<Schema.String, Schema.Codec<Schema.Json, Schema.Json, never, never>>;
    }>>;
    readonly reserved: Schema.$Array<Schema.String>;
}>, {}>;
export declare class PluginGuisChanged extends PluginGuisChanged_base {
}
declare const PluginMenubarItemsChanged_base: Schema.Class<PluginMenubarItemsChanged, Schema.TaggedStruct<"PluginMenubarItemsChanged", {
    readonly items: Schema.$Array<Schema.Struct<{
        readonly menu: Schema.String;
        readonly id: Schema.String;
        readonly label: Schema.String;
        readonly after: Schema.optionalKey<Schema.String>;
        readonly enabled: Schema.Boolean;
    }>>;
}>, {}>;
export declare class PluginMenubarItemsChanged extends PluginMenubarItemsChanged_base {
}
export declare const DesktopEvent: Schema.Union<readonly [typeof DeepLinksOpened, typeof MenuCommandTriggered, typeof WindowFullscreenChanged, typeof WindowFocusChanged, typeof WindowPinchZoomChanged, typeof WindowZoomChanged, typeof StorageChanged, typeof PluginState, typeof PluginEvent, typeof PluginAvailable, typeof PluginsChanged, typeof PluginGuisChanged, typeof PluginMenubarItemsChanged]>;
export type DesktopEvent = Schema.Schema.Type<typeof DesktopEvent>;
export declare const DesktopEvents: Rpc.Rpc<"DesktopEvents", Schema.Void, import("effect/rpc/RpcSchema").Stream<Schema.Union<readonly [typeof DeepLinksOpened, typeof MenuCommandTriggered, typeof WindowFullscreenChanged, typeof WindowFocusChanged, typeof WindowPinchZoomChanged, typeof WindowZoomChanged, typeof StorageChanged, typeof PluginState, typeof PluginEvent, typeof PluginAvailable, typeof PluginsChanged, typeof PluginGuisChanged, typeof PluginMenubarItemsChanged]>, Schema.Never>, Schema.Never, never, never>;
export declare const EventRpcs: RpcGroup.RpcGroup<Rpc.Rpc<"DesktopEvents", Schema.Void, import("effect/rpc/RpcSchema").Stream<Schema.Union<readonly [typeof DeepLinksOpened, typeof MenuCommandTriggered, typeof WindowFullscreenChanged, typeof WindowFocusChanged, typeof WindowPinchZoomChanged, typeof WindowZoomChanged, typeof StorageChanged, typeof PluginState, typeof PluginEvent, typeof PluginAvailable, typeof PluginsChanged, typeof PluginGuisChanged, typeof PluginMenubarItemsChanged]>, Schema.Never>, Schema.Never, never, never>>;
export {};
