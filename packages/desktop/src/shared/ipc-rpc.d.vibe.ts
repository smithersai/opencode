import { RpcClient, RpcClientError } from "effect/rpc";
export { AppRpcs } from "./ipc-rpc/app.vibe";
export { EventRpcs } from "./ipc-rpc/events.vibe";
export { PluginRpcs } from "./ipc-rpc/plugins.vibe";
export { FileRpcs } from "./ipc-rpc/files.vibe";
export { MenuRpcs } from "./ipc-rpc/menu.vibe";
export { StorageRpcs } from "./ipc-rpc/storage.vibe";
export { WindowRpcs } from "./ipc-rpc/window.vibe";
export declare const DesktopRpcs: import("effect/rpc/RpcGroup").RpcGroup<import("effect/rpc/Rpc").Rpc<"AppAwaitInitialization", import("effect/Schema").Void, import("effect/Schema").Struct<{
    readonly url: import("effect/Schema").String;
}>, import("effect/Schema").Never, never, never> | import("effect/rpc/Rpc").Rpc<"AppCheckAppExists", import("effect/Schema").Struct<{
    appName: import("effect/Schema").String;
}>, import("effect/Schema").Boolean, import("effect/Schema").Never, never, never> | import("effect/rpc/Rpc").Rpc<"AppConsumeInitialDeepLinks", import("effect/Schema").Void, import("effect/Schema").$Array<import("effect/Schema").String>, import("effect/Schema").Never, never, never> | import("effect/rpc/Rpc").Rpc<"AppExportDebugLogs", import("effect/Schema").Void, import("effect/Schema").String, import("effect/Schema").Never, never, never> | import("effect/rpc/Rpc").Rpc<"AppFinishFirstLaunchOnboarding", import("effect/Schema").Struct<{
    createDefaultProject: import("effect/Schema").Boolean;
}>, import("effect/Schema").NullOr<import("effect/Schema").String>, import("effect/Schema").Never, never, never> | import("effect/rpc/Rpc").Rpc<"AppIsFirstLaunchOnboardingPending", import("effect/Schema").Void, import("effect/Schema").Boolean, import("effect/Schema").Never, never, never> | import("effect/rpc/Rpc").Rpc<"AppReconnectService", import("effect/Schema").Void, import("effect/Schema").Struct<{
    readonly url: import("effect/Schema").String;
}>, import("effect/Schema").Never, never, never> | import("effect/rpc/Rpc").Rpc<"AppRecordFatalRendererError", import("effect/Schema").Struct<{
    error: import("effect/Schema").Struct<{
        readonly error: import("effect/Schema").String;
        readonly url: import("effect/Schema").String;
        readonly version: import("effect/Schema").optionalKey<import("effect/Schema").String>;
        readonly platform: import("effect/Schema").String;
        readonly os: import("effect/Schema").optionalKey<import("effect/Schema").String>;
    }>;
}>, import("effect/Schema").Void, import("effect/Schema").Never, never, never> | import("effect/rpc/Rpc").Rpc<"AppRelaunch", import("effect/Schema").Void, import("effect/Schema").Void, import("effect/Schema").Never, never, never> | import("effect/rpc/Rpc").Rpc<"AppResolveAppPath", import("effect/Schema").Struct<{
    appName: import("effect/Schema").String;
}>, import("effect/Schema").NullOr<import("effect/Schema").String>, import("effect/Schema").Never, never, never> | import("effect/rpc/Rpc").Rpc<"AppSetBackgroundColor", import("effect/Schema").Struct<{
    color: import("effect/Schema").String;
}>, import("effect/Schema").Void, import("effect/Schema").Never, never, never> | import("effect/rpc/Rpc").Rpc<"AppSetForceFocus", import("effect/Schema").Struct<{
    enabled: import("effect/Schema").Boolean;
}>, import("effect/Schema").Void, import("effect/Schema").Never, never, never> | import("effect/rpc/Rpc").Rpc<"AppSetNativeTranslations", import("effect/Schema").Struct<{
    value: import("effect/Schema").Unknown;
}>, import("effect/Schema").Void, import("effect/Schema").Never, never, never> | import("effect/rpc/Rpc").Rpc<"DesktopEvents", import("effect/Schema").Void, import("effect/rpc/RpcSchema").Stream<import("effect/Schema").Union<readonly [typeof import("./ipc-rpc/events.vibe").DeepLinksOpened, typeof import("./ipc-rpc/events.vibe").MenuCommandTriggered, typeof import("./ipc-rpc/events.vibe").WindowFullscreenChanged, typeof import("./ipc-rpc/events.vibe").WindowFocusChanged, typeof import("./ipc-rpc/events.vibe").WindowPinchZoomChanged, typeof import("./ipc-rpc/events.vibe").WindowZoomChanged, typeof import("./ipc-rpc/events.vibe").StorageChanged, typeof import("./ipc-rpc/events.vibe").PluginState, typeof import("./ipc-rpc/events.vibe").PluginEvent, typeof import("./ipc-rpc/events.vibe").PluginAvailable, typeof import("./ipc-rpc/events.vibe").PluginsChanged, typeof import("./ipc-rpc/events.vibe").PluginGuisChanged, typeof import("./ipc-rpc/events.vibe").PluginMenubarItemsChanged]>, import("effect/Schema").Never>, import("effect/Schema").Never, never, never> | import("effect/rpc/Rpc").Rpc<"DraftsDelete", import("effect/Schema").Struct<{
    key: import("effect/Schema").String;
}>, import("effect/Schema").Void, import("effect/Schema").Never, never, never> | import("effect/rpc/Rpc").Rpc<"DraftsGet", import("effect/Schema").Struct<{
    key: import("effect/Schema").String;
}>, import("effect/Schema").NullOr<import("effect/Schema").String>, import("effect/Schema").Never, never, never> | import("effect/rpc/Rpc").Rpc<"DraftsGetBlob", import("effect/Schema").Struct<{
    id: import("effect/Schema").String;
}>, import("effect/Schema").NullOr<import("effect/workers/Transferable").Transferable<import("effect/Schema").instanceOf<Uint8Array<ArrayBuffer>, Uint8Array<ArrayBuffer>>>>, import("effect/Schema").Never, never, never> | import("effect/rpc/Rpc").Rpc<"DraftsPutBlob", import("effect/Schema").Struct<{
    data: import("effect/workers/Transferable").Transferable<import("effect/Schema").instanceOf<Uint8Array<ArrayBuffer>, Uint8Array<ArrayBuffer>>>;
}>, import("effect/Schema").String, import("effect/Schema").Never, never, never> | import("effect/rpc/Rpc").Rpc<"DraftsSet", import("effect/Schema").Struct<{
    key: import("effect/Schema").String;
    value: import("effect/Schema").String;
    strict: import("effect/Schema").Boolean;
}>, import("effect/Schema").$Array<import("effect/Schema").String>, import("effect/Schema").Never, never, never> | import("effect/rpc/Rpc").Rpc<"FilesOpenBrowser", import("effect/Schema").Struct<{
    url: import("effect/Schema").String;
}>, import("effect/Schema").Boolean, import("effect/Schema").Never, never, never> | import("effect/rpc/Rpc").Rpc<"FilesOpenDirectoryPicker", import("effect/Schema").Struct<{
    options: import("effect/Schema").optional<import("effect/Schema").Struct<{
        readonly multiple: import("effect/Schema").optional<import("effect/Schema").Boolean>;
        readonly title: import("effect/Schema").optional<import("effect/Schema").String>;
        readonly defaultPath: import("effect/Schema").optional<import("effect/Schema").String>;
    }>>;
}>, import("effect/Schema").NullOr<import("effect/Schema").Union<readonly [import("effect/Schema").String, import("effect/Schema").$Array<import("effect/Schema").String>]>>, import("effect/Schema").Never, never, never> | import("effect/rpc/Rpc").Rpc<"FilesOpenExternal", import("effect/Schema").Struct<{
    url: import("effect/Schema").String;
}>, import("effect/Schema").Void, import("effect/Schema").Never, never, never> | import("effect/rpc/Rpc").Rpc<"FilesOpenFilePicker", import("effect/Schema").Struct<{
    options: import("effect/Schema").optional<import("effect/Schema").Struct<{
        readonly multiple: import("effect/Schema").optional<import("effect/Schema").Boolean>;
        readonly title: import("effect/Schema").optional<import("effect/Schema").String>;
        readonly defaultPath: import("effect/Schema").optional<import("effect/Schema").String>;
        readonly extensions: import("effect/Schema").optional<import("effect/Schema").$Array<import("effect/Schema").String>>;
    }>>;
}>, import("effect/Schema").NullOr<import("effect/Schema").Struct<{
    readonly token: import("effect/Schema").String;
    readonly files: import("effect/Schema").$Array<import("effect/Schema").Struct<{
        readonly path: import("effect/Schema").String;
        readonly name: import("effect/Schema").String;
        readonly size: import("effect/Schema").Number;
    }>>;
}>>, import("effect/Schema").Never, never, never> | import("effect/rpc/Rpc").Rpc<"FilesOpenLocalFile", import("effect/Schema").Struct<{
    url: import("effect/Schema").String;
}>, import("effect/Schema").Void, import("effect/Schema").Never, never, never> | import("effect/rpc/Rpc").Rpc<"FilesOpenPath", import("effect/Schema").Struct<{
    path: import("effect/Schema").String;
    application: import("effect/Schema").optional<import("effect/Schema").String>;
}>, import("effect/Schema").NullOr<import("effect/Schema").String>, import("effect/Schema").Never, never, never> | import("effect/rpc/Rpc").Rpc<"FilesReadClipboardImage", import("effect/Schema").Void, import("effect/Schema").NullOr<import("effect/Schema").Struct<{
    readonly buffer: import("effect/workers/Transferable").Transferable<import("effect/Schema").instanceOf<Uint8Array<ArrayBuffer>, Uint8Array<ArrayBuffer>>>;
    readonly width: import("effect/Schema").Number;
    readonly height: import("effect/Schema").Number;
}>>, import("effect/Schema").Never, never, never> | import("effect/rpc/Rpc").Rpc<"FilesReadPickedFile", import("effect/Schema").Struct<{
    token: import("effect/Schema").String;
    path: import("effect/Schema").String;
}>, import("effect/workers/Transferable").Transferable<import("effect/Schema").instanceOf<Uint8Array<ArrayBuffer>, Uint8Array<ArrayBuffer>>>, import("effect/Schema").Never, never, never> | import("effect/rpc/Rpc").Rpc<"FilesReleasePickedFiles", import("effect/Schema").Struct<{
    token: import("effect/Schema").String;
}>, import("effect/Schema").Void, import("effect/Schema").Never, never, never> | import("effect/rpc/Rpc").Rpc<"FilesRevealPath", import("effect/Schema").Struct<{
    path: import("effect/Schema").String;
}>, import("effect/Schema").Boolean, import("effect/Schema").Never, never, never> | import("effect/rpc/Rpc").Rpc<"FilesSaveFile", import("effect/Schema").Struct<{
    options: import("effect/Schema").Struct<{
        readonly title: import("effect/Schema").optional<import("effect/Schema").String>;
        readonly defaultPath: import("effect/Schema").optional<import("effect/Schema").String>;
    }>;
    content: import("effect/Schema").String;
}>, import("effect/Schema").Boolean, import("effect/Schema").Never, never, never> | import("effect/rpc/Rpc").Rpc<"FilesWriteClipboardText", import("effect/Schema").Struct<{
    text: import("effect/Schema").String;
}>, import("effect/Schema").Void, import("effect/Schema").Never, never, never> | import("effect/rpc/Rpc").Rpc<"MenuRunAction", import("effect/Schema").Struct<{
    action: import("effect/Schema").Literals<readonly ["app.installCli", "app.relaunch", "edit.undo", "edit.redo", "edit.cut", "edit.copy", "edit.paste", "edit.delete", "edit.selectAll", "view.reload", "view.toggleDevTools", "view.resetZoom", "view.zoomIn", "view.zoomOut", "view.toggleFullscreen", "window.new", "window.close", "window.minimize", "window.toggleMaximize"]>;
}>, import("effect/Schema").Void, import("effect/Schema").Never, never, never> | import("effect/rpc/Rpc").Rpc<"PluginCall", import("effect/Schema").Struct<{
    ipc: import("effect/Schema").String;
    method: import("effect/Schema").String;
    input: import("effect/Schema").optionalKey<import("effect/Schema").declare<unknown, unknown>>;
}>, import("effect/Schema").declare<unknown, unknown>, import("effect/Schema").Struct<{
    readonly code: import("effect/Schema").Literals<readonly ["unavailable", "method", "input", "output", "failed", "notFound", "builtin"]>;
    readonly message: import("effect/Schema").optionalKey<import("effect/Schema").String>;
}>, never, never> | import("effect/rpc/Rpc").Rpc<"PluginCapture", import("effect/Schema").Struct<{
    id: import("effect/Schema").String;
}>, import("effect/Schema").NullOr<import("effect/workers/Transferable").Transferable<import("effect/Schema").instanceOf<Uint8Array<ArrayBuffer>, Uint8Array<ArrayBuffer>>>>, import("effect/Schema").Never, never, never> | import("effect/rpc/Rpc").Rpc<"PluginConfigure", import("effect/Schema").Struct<{
    servers: import("effect/Schema").$Array<import("effect/Schema").Struct<{
        readonly id: import("effect/Schema").String;
        readonly url: import("effect/Schema").String;
        readonly password: import("effect/Schema").optionalKey<import("effect/Schema").String>;
    }>>;
}>, import("effect/Schema").Void, import("effect/Schema").Never, never, never> | import("effect/rpc/Rpc").Rpc<"PluginDisable", import("effect/Schema").Struct<{
    id: import("effect/Schema").String;
}>, import("effect/Schema").Void, import("effect/Schema").Struct<{
    readonly code: import("effect/Schema").Literals<readonly ["unavailable", "method", "input", "output", "failed", "notFound", "builtin"]>;
    readonly message: import("effect/Schema").optionalKey<import("effect/Schema").String>;
}>, never, never> | import("effect/rpc/Rpc").Rpc<"PluginEmbed", import("effect/Schema").Struct<{
    id: import("effect/Schema").String;
    layout: import("effect/Schema").optionalKey<import("effect/Schema").Struct<{
        readonly visible: import("effect/Schema").Boolean;
        readonly bounds: import("effect/Schema").optionalKey<import("effect/Schema").Struct<{
            readonly x: import("effect/Schema").Finite;
            readonly y: import("effect/Schema").Finite;
            readonly width: import("effect/Schema").Finite;
            readonly height: import("effect/Schema").Finite;
        }>>;
        readonly viewport: import("effect/Schema").optionalKey<import("effect/Schema").Struct<{
            readonly width: import("effect/Schema").Finite;
            readonly height: import("effect/Schema").Finite;
        }>>;
        readonly background: import("effect/Schema").optionalKey<import("effect/Schema").Tuple<readonly [import("effect/Schema").Finite, import("effect/Schema").Finite, import("effect/Schema").Finite, import("effect/Schema").Finite]>>;
        readonly radius: import("effect/Schema").optionalKey<import("effect/Schema").Finite>;
        readonly border: import("effect/Schema").optionalKey<import("effect/Schema").Struct<{
            readonly color: import("effect/Schema").Tuple<readonly [import("effect/Schema").Finite, import("effect/Schema").Finite, import("effect/Schema").Finite, import("effect/Schema").Finite]>;
            readonly width: import("effect/Schema").Finite;
        }>>;
    }>>;
}>, import("effect/Schema").Void, import("effect/Schema").Never, never, never> | import("effect/rpc/Rpc").Rpc<"PluginEnable", import("effect/Schema").Struct<{
    id: import("effect/Schema").String;
}>, import("effect/Schema").Void, import("effect/Schema").Struct<{
    readonly code: import("effect/Schema").Literals<readonly ["unavailable", "method", "input", "output", "failed", "notFound", "builtin"]>;
    readonly message: import("effect/Schema").optionalKey<import("effect/Schema").String>;
}>, never, never> | import("effect/rpc/Rpc").Rpc<"PluginGuis", import("effect/Schema").Void, import("effect/Schema").Struct<{
    readonly plugins: import("effect/Schema").$Array<import("effect/Schema").Struct<{
        readonly id: import("effect/Schema").String;
        readonly revision: import("effect/Schema").String;
        readonly code: import("effect/Schema").String;
        readonly options: import("effect/Schema").$Record<import("effect/Schema").String, import("effect/Schema").Codec<import("effect/Schema").Json, import("effect/Schema").Json, never, never>>;
    }>>;
    readonly reserved: import("effect/Schema").$Array<import("effect/Schema").String>;
}>, import("effect/Schema").Never, never, never> | import("effect/rpc/Rpc").Rpc<"PluginList", import("effect/Schema").Void, import("effect/Schema").$Array<import("effect/Schema").Struct<{
    readonly id: import("effect/Schema").String;
    readonly builtin: import("effect/Schema").Boolean;
    readonly enabled: import("effect/Schema").Boolean;
    readonly error: import("effect/Schema").optionalKey<import("effect/Schema").String>;
    readonly server: import("effect/Schema").optionalKey<import("effect/Schema").Boolean>;
    readonly tui: import("effect/Schema").optionalKey<import("effect/Schema").Boolean>;
    readonly unsupported: import("effect/Schema").optionalKey<import("effect/Schema").Boolean>;
}>>, import("effect/Schema").Never, never, never> | import("effect/rpc/Rpc").Rpc<"PluginMenubarItem", import("effect/Schema").Struct<{
    id: import("effect/Schema").String;
}>, import("effect/Schema").Void, import("effect/Schema").Never, never, never> | import("effect/rpc/Rpc").Rpc<"PluginMenubarItems", import("effect/Schema").Void, import("effect/Schema").$Array<import("effect/Schema").Struct<{
    readonly menu: import("effect/Schema").String;
    readonly id: import("effect/Schema").String;
    readonly label: import("effect/Schema").String;
    readonly after: import("effect/Schema").optionalKey<import("effect/Schema").String>;
    readonly enabled: import("effect/Schema").Boolean;
}>>, import("effect/Schema").Never, never, never> | import("effect/rpc/Rpc").Rpc<"PluginReload", import("effect/Schema").Struct<{
    id: import("effect/Schema").String;
}>, import("effect/Schema").Void, import("effect/Schema").Struct<{
    readonly code: import("effect/Schema").Literals<readonly ["unavailable", "method", "input", "output", "failed", "notFound", "builtin"]>;
    readonly message: import("effect/Schema").optionalKey<import("effect/Schema").String>;
}>, never, never> | import("effect/rpc/Rpc").Rpc<"PluginSubscribe", import("effect/Schema").Struct<{
    ipc: import("effect/Schema").String;
}>, import("effect/Schema").Struct<{
    readonly available: import("effect/Schema").Boolean;
    readonly state: import("effect/Schema").optionalKey<import("effect/Schema").declare<unknown, unknown>>;
}>, import("effect/Schema").Never, never, never> | import("effect/rpc/Rpc").Rpc<"StorageClear", import("effect/Schema").Struct<{
    name: import("effect/Schema").String;
}>, import("effect/Schema").Void, import("effect/Schema").Never, never, never> | import("effect/rpc/Rpc").Rpc<"StorageItems", import("effect/Schema").Struct<{
    name: import("effect/Schema").String;
}>, import("effect/Schema").Struct<{
    readonly items: import("effect/Schema").$Record<import("effect/Schema").String, import("effect/Schema").String>;
    readonly revision: import("effect/Schema").Number;
}>, import("effect/Schema").Never, never, never> | import("effect/rpc/Rpc").Rpc<"StorageUpdate", import("effect/Schema").Struct<{
    name: import("effect/Schema").String;
    insert: import("effect/Schema").$Record<import("effect/Schema").String, import("effect/Schema").String>;
    remove: import("effect/Schema").$Array<import("effect/Schema").String>;
}>, import("effect/Schema").Number, import("effect/Schema").Never, never, never> | import("effect/rpc/Rpc").Rpc<"WindowGetFocused", import("effect/Schema").Void, import("effect/Schema").Boolean, import("effect/Schema").Never, never, never> | import("effect/rpc/Rpc").Rpc<"WindowGetFullscreen", import("effect/Schema").Void, import("effect/Schema").Boolean, import("effect/Schema").Never, never, never> | import("effect/rpc/Rpc").Rpc<"WindowGetPinchZoomEnabled", import("effect/Schema").Void, import("effect/Schema").Boolean, import("effect/Schema").Never, never, never> | import("effect/rpc/Rpc").Rpc<"WindowGetZoomFactor", import("effect/Schema").Void, import("effect/Schema").Number, import("effect/Schema").Never, never, never> | import("effect/rpc/Rpc").Rpc<"WindowGetZoomLevel", import("effect/Schema").Void, import("effect/Schema").Literals<readonly [1, 1.1, 1.25, 1.5, 1.75, 2]>, import("effect/Schema").Never, never, never> | import("effect/rpc/Rpc").Rpc<"WindowRequestMicrophone", import("effect/Schema").Void, import("effect/Schema").Boolean, import("effect/Schema").Never, never, never> | import("effect/rpc/Rpc").Rpc<"WindowSetFocus", import("effect/Schema").Void, import("effect/Schema").Void, import("effect/Schema").Never, never, never> | import("effect/rpc/Rpc").Rpc<"WindowSetPinchZoomEnabled", import("effect/Schema").Struct<{
    enabled: import("effect/Schema").Boolean;
}>, import("effect/Schema").Void, import("effect/Schema").Never, never, never> | import("effect/rpc/Rpc").Rpc<"WindowSetTitlebar", import("effect/Schema").Struct<{
    theme: import("effect/Schema").Struct<{
        readonly mode: import("effect/Schema").Literals<readonly ["light", "dark"]>;
        readonly scheme: import("effect/Schema").optionalKey<import("effect/Schema").Literals<readonly ["system", "light", "dark"]>>;
    }>;
}>, import("effect/Schema").Void, import("effect/Schema").Never, never, never> | import("effect/rpc/Rpc").Rpc<"WindowSetTrafficLightsPosition", import("effect/Schema").Struct<{
    x: import("effect/Schema").Number;
    y: import("effect/Schema").Number;
}>, import("effect/Schema").Void, import("effect/Schema").Never, never, never> | import("effect/rpc/Rpc").Rpc<"WindowSetVoiceCallActive", import("effect/Schema").Struct<{
    active: import("effect/Schema").Boolean;
}>, import("effect/Schema").Void, import("effect/Schema").Never, never, never> | import("effect/rpc/Rpc").Rpc<"WindowSetZoomFactor", import("effect/Schema").Struct<{
    factor: import("effect/Schema").Number;
}>, import("effect/Schema").Void, import("effect/Schema").Never, never, never> | import("effect/rpc/Rpc").Rpc<"WindowSetZoomLevel", import("effect/Schema").Struct<{
    level: import("effect/Schema").Literals<readonly [1, 1.1, 1.25, 1.5, 1.75, 2]>;
}>, import("effect/Schema").Void, import("effect/Schema").Never, never, never> | import("effect/rpc/Rpc").Rpc<"WindowShow", import("effect/Schema").Void, import("effect/Schema").Void, import("effect/Schema").Never, never, never> | import("effect/rpc/Rpc").Rpc<"WindowThemeReady", import("effect/Schema").Void, import("effect/Schema").Void, import("effect/Schema").Never, never, never>>;
export type DesktopRpcClient = RpcClient.FromGroup<typeof DesktopRpcs, RpcClientError.RpcClientError>;
