import { Schema } from "effect";
import { Ipc } from "@opencode/plugin/gui";
/** The longest page icon data URL main reports: a 32px PNG is a few kilobytes; larger icons are dropped. */
export declare const MAX_ICON_URL = 24576;
/** An element the user picked in the page. The ref stays valid for browser tools until the page navigates. */
export declare const PaneElement: Schema.Struct<{
    readonly ref: Schema.brand<Schema.String, "Browser.Ref">;
    readonly selector: Schema.String;
    readonly label: Schema.String;
    readonly role: Schema.optionalKey<Schema.String>;
    readonly name: Schema.optionalKey<Schema.String>;
    readonly text: Schema.optionalKey<Schema.String>;
    /** Border box in the native view's DIPs. */
    readonly rect: Schema.Struct<{
        readonly x: Schema.Finite;
        readonly y: Schema.Finite;
        readonly width: Schema.Finite;
        readonly height: Schema.Finite;
    }>;
}>;
export type PaneElement = typeof PaneElement.Type;
export declare const PaneEvent: Schema.Union<readonly [Schema.Struct<{
    readonly type: Schema.Literal<"focus">;
    readonly tabID: Schema.brand<Schema.String, "Browser.TabID">;
}>, Schema.Struct<{
    readonly type: Schema.Literal<"preview">;
    readonly path: Schema.String;
}>, Schema.Struct<{
    readonly type: Schema.Literal<"state">;
    readonly state: Schema.NullOr<Schema.Struct<{
        readonly tabs: Schema.$Array<Schema.Struct<{
            readonly id: Schema.brand<Schema.String, "Browser.TabID">;
            readonly url: Schema.String;
            readonly title: Schema.String;
            readonly loading: Schema.Boolean;
            readonly loadError: Schema.decodeTo<Schema.optional<Schema.toType<Schema.String>>, Schema.optionalKey<Schema.String>, never, never>;
            readonly canGoBack: Schema.Boolean;
            readonly canGoForward: Schema.Boolean;
            readonly generation: Schema.Int;
        }>>;
        readonly focusedTabID: Schema.NullOr<Schema.brand<Schema.String, "Browser.TabID">>;
    }>>;
    readonly error: Schema.optionalKey<Schema.String>;
}>, Schema.Struct<{
    readonly type: Schema.Literal<"embed">;
    readonly tabID: Schema.brand<Schema.String, "Browser.TabID">;
    readonly embed: Schema.String;
}>, Schema.Struct<{
    readonly type: Schema.Literal<"inspect">;
    readonly tabID: Schema.brand<Schema.String, "Browser.TabID">;
    readonly active: Schema.Boolean;
    readonly element: Schema.optionalKey<Schema.Struct<{
        readonly ref: Schema.brand<Schema.String, "Browser.Ref">;
        readonly selector: Schema.String;
        readonly label: Schema.String;
        readonly role: Schema.optionalKey<Schema.String>;
        readonly name: Schema.optionalKey<Schema.String>;
        readonly text: Schema.optionalKey<Schema.String>;
        /** Border box in the native view's DIPs. */
        readonly rect: Schema.Struct<{
            readonly x: Schema.Finite;
            readonly y: Schema.Finite;
            readonly width: Schema.Finite;
            readonly height: Schema.Finite;
        }>;
    }>>;
}>, Schema.Struct<{
    readonly type: Schema.Literal<"page">;
    readonly tabID: Schema.brand<Schema.String, "Browser.TabID">;
    readonly icon: Schema.optionalKey<Schema.String>;
    readonly zoom: Schema.Finite;
}>, Schema.Struct<{
    readonly type: Schema.Literal<"focused">;
    readonly tabID: Schema.brand<Schema.String, "Browser.TabID">;
}>, Schema.Struct<{
    readonly type: Schema.Literal<"shortcut">;
    readonly key: Schema.String;
    readonly code: Schema.String;
    readonly ctrl: Schema.Boolean;
    readonly meta: Schema.Boolean;
    readonly shift: Schema.Boolean;
    readonly alt: Schema.Boolean;
}>]>;
export type PaneEvent = typeof PaneEvent.Type;
/**
 * The native browser pane in the main process. A binding is one registration of a session's pane
 * by a window; its events go to that window only.
 */
export declare const BrowserPane: Ipc<{
    readonly id: "browser.pane";
    readonly methods: {
        register: {
            input: Schema.Struct<{
                readonly binding: Schema.String;
                readonly server: Schema.String;
                readonly session: Schema.String;
                readonly restore: Schema.optionalKey<Schema.Struct<{
                    readonly tabs: Schema.$Array<Schema.Struct<{
                        readonly id: Schema.brand<Schema.String, "Browser.TabID">;
                        readonly url: Schema.String;
                        readonly title: Schema.String;
                        readonly loading: Schema.Boolean;
                        readonly loadError: Schema.decodeTo<Schema.optional<Schema.toType<Schema.String>>, Schema.optionalKey<Schema.String>, never, never>;
                        readonly canGoBack: Schema.Boolean;
                        readonly canGoForward: Schema.Boolean;
                        readonly generation: Schema.Int;
                    }>>;
                    readonly focusedTabID: Schema.NullOr<Schema.brand<Schema.String, "Browser.TabID">>;
                }>>;
            }>;
        };
        load: {
            input: Schema.Struct<{
                readonly binding: Schema.String;
                readonly tabID: Schema.brand<Schema.String, "Browser.TabID">;
            }>;
        };
        command: {
            input: Schema.Struct<{
                readonly binding: Schema.String;
                readonly command: Schema.Union<(Schema.Struct<{
                    readonly type: Schema.Literal<"tabs.list">;
                }> | Schema.Struct<{
                    readonly type: Schema.Literal<"back">;
                } & {
                    tabID: Schema.brand<Schema.String, "Browser.TabID">;
                }> | Schema.Struct<{
                    readonly type: Schema.Literal<"check">;
                } & {
                    readonly tabID: Schema.brand<Schema.String, "Browser.TabID">;
                    readonly ref: Schema.brand<Schema.String, "Browser.Ref">;
                    readonly checked: Schema.Boolean;
                }> | Schema.Struct<{
                    readonly type: Schema.Literal<"click">;
                } & {
                    readonly tabID: Schema.brand<Schema.String, "Browser.TabID">;
                    readonly ref: Schema.brand<Schema.String, "Browser.Ref">;
                    readonly button: Schema.decodeTo<Schema.optional<Schema.toType<Schema.Literals<readonly ["left", "right", "middle"]>>>, Schema.optionalKey<Schema.Literals<readonly ["left", "right", "middle"]>>, never, never>;
                    readonly count: Schema.decodeTo<Schema.optional<Schema.toType<Schema.Literals<readonly [1, 2]>>>, Schema.optionalKey<Schema.Literals<readonly [1, 2]>>, never, never>;
                    readonly modifiers: Schema.decodeTo<Schema.optional<Schema.toType<Schema.$Array<Schema.Literals<readonly ["Alt", "Control", "Meta", "Shift"]>>>>, Schema.optionalKey<Schema.$Array<Schema.Literals<readonly ["Alt", "Control", "Meta", "Shift"]>>>, never, never>;
                }> | Schema.Struct<{
                    readonly type: Schema.Literal<"console">;
                } & {
                    readonly tabID: Schema.brand<Schema.String, "Browser.TabID">;
                    readonly level: Schema.decodeTo<Schema.optional<Schema.toType<Schema.Literals<readonly ["debug", "info", "warning", "error"]>>>, Schema.optionalKey<Schema.Literals<readonly ["debug", "info", "warning", "error"]>>, never, never>;
                    readonly limit: Schema.decodeTo<Schema.optional<Schema.toType<Schema.Int>>, Schema.optionalKey<Schema.Int>, never, never>;
                }> | Schema.Struct<{
                    readonly type: Schema.Literal<"cpu.analyze">;
                } & {
                    readonly tabID: Schema.brand<Schema.String, "Browser.TabID">;
                    readonly fileID: Schema.brand<Schema.String, "Browser.FileID">;
                    readonly limit: Schema.decodeTo<Schema.optional<Schema.toType<Schema.Int>>, Schema.optionalKey<Schema.Int>, never, never>;
                }> | Schema.Struct<{
                    readonly type: Schema.Literal<"cpu.start">;
                } & {
                    tabID: Schema.brand<Schema.String, "Browser.TabID">;
                }> | Schema.Struct<{
                    readonly type: Schema.Literal<"cpu.stop">;
                } & {
                    tabID: Schema.brand<Schema.String, "Browser.TabID">;
                }> | Schema.Struct<{
                    readonly type: Schema.Literal<"dialog">;
                } & {
                    readonly tabID: Schema.brand<Schema.String, "Browser.TabID">;
                    readonly action: Schema.Literals<readonly ["get", "accept", "dismiss"]>;
                    readonly promptText: Schema.decodeTo<Schema.optional<Schema.toType<Schema.String>>, Schema.optionalKey<Schema.String>, never, never>;
                }> | Schema.Struct<{
                    readonly type: Schema.Literal<"drag">;
                } & {
                    readonly tabID: Schema.brand<Schema.String, "Browser.TabID">;
                    readonly from: Schema.brand<Schema.String, "Browser.Ref">;
                    readonly to: Schema.brand<Schema.String, "Browser.Ref">;
                }> | Schema.Struct<{
                    readonly type: Schema.Literal<"evaluate">;
                } & {
                    readonly tabID: Schema.brand<Schema.String, "Browser.TabID">;
                    readonly frameID: Schema.decodeTo<Schema.optional<Schema.toType<Schema.String>>, Schema.optionalKey<Schema.String>, never, never>;
                    readonly ref: Schema.decodeTo<Schema.optional<Schema.toType<Schema.brand<Schema.String, "Browser.Ref">>>, Schema.optionalKey<Schema.brand<Schema.String, "Browser.Ref">>, never, never>;
                    readonly script: Schema.String;
                }> | Schema.Struct<{
                    readonly type: Schema.Literal<"files.drop">;
                } & {
                    readonly tabID: Schema.brand<Schema.String, "Browser.TabID">;
                    readonly ref: Schema.brand<Schema.String, "Browser.Ref">;
                    readonly paths: Schema.$Array<Schema.String>;
                }> | Schema.Struct<{
                    readonly type: Schema.Literal<"files.get">;
                } & {
                    tabID: Schema.brand<Schema.String, "Browser.TabID">;
                    fileID: Schema.brand<Schema.String, "Browser.FileID">;
                }> | Schema.Struct<{
                    readonly type: Schema.Literal<"files.list">;
                } & {
                    tabID: Schema.brand<Schema.String, "Browser.TabID">;
                }> | Schema.Struct<{
                    readonly type: Schema.Literal<"files.upload">;
                } & {
                    readonly tabID: Schema.brand<Schema.String, "Browser.TabID">;
                    readonly ref: Schema.brand<Schema.String, "Browser.Ref">;
                    readonly paths: Schema.$Array<Schema.String>;
                }> | Schema.Struct<{
                    readonly type: Schema.Literal<"fill">;
                } & {
                    readonly tabID: Schema.brand<Schema.String, "Browser.TabID">;
                    readonly ref: Schema.brand<Schema.String, "Browser.Ref">;
                    readonly text: Schema.String;
                }> | Schema.Struct<{
                    readonly type: Schema.Literal<"fill_form">;
                } & {
                    readonly tabID: Schema.brand<Schema.String, "Browser.TabID">;
                    readonly fields: Schema.$Array<Schema.Union<readonly [Schema.Struct<{
                        readonly ref: Schema.brand<Schema.String, "Browser.Ref">;
                        readonly type: Schema.Literal<"text">;
                        readonly value: Schema.String;
                    }>, Schema.Struct<{
                        readonly ref: Schema.brand<Schema.String, "Browser.Ref">;
                        readonly type: Schema.Literal<"select">;
                        readonly values: Schema.$Array<Schema.String>;
                    }>, Schema.Struct<{
                        readonly ref: Schema.brand<Schema.String, "Browser.Ref">;
                        readonly type: Schema.Literal<"check">;
                        readonly checked: Schema.Boolean;
                    }>]>>;
                }> | Schema.Struct<{
                    readonly type: Schema.Literal<"find">;
                } & {
                    readonly tabID: Schema.brand<Schema.String, "Browser.TabID">;
                    readonly frameID: Schema.decodeTo<Schema.optional<Schema.toType<Schema.String>>, Schema.optionalKey<Schema.String>, never, never>;
                    readonly text: Schema.String;
                }> | Schema.Struct<{
                    readonly type: Schema.Literal<"forward">;
                } & {
                    tabID: Schema.brand<Schema.String, "Browser.TabID">;
                }> | Schema.Struct<{
                    readonly type: Schema.Literal<"frames">;
                } & {
                    tabID: Schema.brand<Schema.String, "Browser.TabID">;
                }> | Schema.Struct<{
                    readonly type: Schema.Literal<"heap.compare">;
                } & {
                    readonly tabID: Schema.brand<Schema.String, "Browser.TabID">;
                    readonly before: Schema.brand<Schema.String, "Browser.FileID">;
                    readonly after: Schema.brand<Schema.String, "Browser.FileID">;
                    readonly limit: Schema.decodeTo<Schema.optional<Schema.toType<Schema.Int>>, Schema.optionalKey<Schema.Int>, never, never>;
                }> | Schema.Struct<{
                    readonly type: Schema.Literal<"heap.object">;
                } & {
                    readonly tabID: Schema.brand<Schema.String, "Browser.TabID">;
                    readonly fileID: Schema.brand<Schema.String, "Browser.FileID">;
                    readonly id: Schema.Finite;
                    readonly limit: Schema.decodeTo<Schema.optional<Schema.toType<Schema.Int>>, Schema.optionalKey<Schema.Int>, never, never>;
                }> | Schema.Struct<{
                    readonly type: Schema.Literal<"heap.query">;
                } & {
                    readonly tabID: Schema.brand<Schema.String, "Browser.TabID">;
                    readonly fileID: Schema.brand<Schema.String, "Browser.FileID">;
                    readonly name: Schema.decodeTo<Schema.optional<Schema.toType<Schema.String>>, Schema.optionalKey<Schema.String>, never, never>;
                    readonly limit: Schema.decodeTo<Schema.optional<Schema.toType<Schema.Int>>, Schema.optionalKey<Schema.Int>, never, never>;
                }> | Schema.Struct<{
                    readonly type: Schema.Literal<"heap.snapshot">;
                } & {
                    tabID: Schema.brand<Schema.String, "Browser.TabID">;
                }> | Schema.Struct<{
                    readonly type: Schema.Literal<"heap.summary">;
                } & {
                    readonly tabID: Schema.brand<Schema.String, "Browser.TabID">;
                    readonly fileID: Schema.brand<Schema.String, "Browser.FileID">;
                    readonly limit: Schema.decodeTo<Schema.optional<Schema.toType<Schema.Int>>, Schema.optionalKey<Schema.Int>, never, never>;
                }> | Schema.Struct<{
                    readonly type: Schema.Literal<"hover">;
                } & {
                    tabID: Schema.brand<Schema.String, "Browser.TabID">;
                    ref: Schema.brand<Schema.String, "Browser.Ref">;
                }> | Schema.Struct<{
                    readonly type: Schema.Literal<"lighthouse">;
                } & {
                    tabID: Schema.brand<Schema.String, "Browser.TabID">;
                }> | Schema.Struct<{
                    readonly type: Schema.Literal<"navigate">;
                } & {
                    readonly tabID: Schema.brand<Schema.String, "Browser.TabID">;
                    readonly url: Schema.String;
                }> | Schema.Struct<{
                    readonly type: Schema.Literal<"network.get">;
                } & {
                    readonly tabID: Schema.brand<Schema.String, "Browser.TabID">;
                    readonly id: Schema.String;
                    readonly includeBody: Schema.decodeTo<Schema.optional<Schema.toType<Schema.Boolean>>, Schema.optionalKey<Schema.Boolean>, never, never>;
                    readonly maxBodyChars: Schema.decodeTo<Schema.optional<Schema.toType<Schema.Int>>, Schema.optionalKey<Schema.Int>, never, never>;
                }> | Schema.Struct<{
                    readonly type: Schema.Literal<"network.list">;
                } & {
                    readonly tabID: Schema.brand<Schema.String, "Browser.TabID">;
                    readonly urlContains: Schema.decodeTo<Schema.optional<Schema.toType<Schema.String>>, Schema.optionalKey<Schema.String>, never, never>;
                    readonly resourceType: Schema.decodeTo<Schema.optional<Schema.toType<Schema.Literals<readonly ["document", "stylesheet", "image", "media", "font", "script", "xhr", "fetch", "eventsource", "websocket", "manifest", "other"]>>>, Schema.optionalKey<Schema.Literals<readonly ["document", "stylesheet", "image", "media", "font", "script", "xhr", "fetch", "eventsource", "websocket", "manifest", "other"]>>, never, never>;
                    readonly limit: Schema.decodeTo<Schema.optional<Schema.toType<Schema.Int>>, Schema.optionalKey<Schema.Int>, never, never>;
                }> | Schema.Struct<{
                    readonly type: Schema.Literal<"press">;
                } & {
                    readonly tabID: Schema.brand<Schema.String, "Browser.TabID">;
                    readonly key: Schema.String;
                }> | Schema.Struct<{
                    readonly type: Schema.Literal<"preview">;
                } & {
                    readonly path: Schema.String;
                }> | Schema.Struct<{
                    readonly type: Schema.Literal<"reload">;
                } & {
                    tabID: Schema.brand<Schema.String, "Browser.TabID">;
                }> | Schema.Struct<{
                    readonly type: Schema.Literal<"screenshot">;
                } & {
                    readonly tabID: Schema.brand<Schema.String, "Browser.TabID">;
                    readonly ref: Schema.decodeTo<Schema.optional<Schema.toType<Schema.brand<Schema.String, "Browser.Ref">>>, Schema.optionalKey<Schema.brand<Schema.String, "Browser.Ref">>, never, never>;
                    readonly fullPage: Schema.decodeTo<Schema.optional<Schema.toType<Schema.Boolean>>, Schema.optionalKey<Schema.Boolean>, never, never>;
                    readonly format: Schema.decodeTo<Schema.optional<Schema.toType<Schema.Literals<readonly ["png", "jpeg", "webp"]>>>, Schema.optionalKey<Schema.Literals<readonly ["png", "jpeg", "webp"]>>, never, never>;
                    readonly quality: Schema.decodeTo<Schema.optional<Schema.toType<Schema.Int>>, Schema.optionalKey<Schema.Int>, never, never>;
                    readonly maxWidth: Schema.decodeTo<Schema.optional<Schema.toType<Schema.Int>>, Schema.optionalKey<Schema.Int>, never, never>;
                }> | Schema.Struct<{
                    readonly type: Schema.Literal<"scroll">;
                } & {
                    readonly tabID: Schema.brand<Schema.String, "Browser.TabID">;
                    readonly deltaX: Schema.decodeTo<Schema.optional<Schema.toType<Schema.Int>>, Schema.optionalKey<Schema.Int>, never, never>;
                    readonly deltaY: Schema.Int;
                }> | Schema.Struct<{
                    readonly type: Schema.Literal<"select">;
                } & {
                    readonly tabID: Schema.brand<Schema.String, "Browser.TabID">;
                    readonly ref: Schema.brand<Schema.String, "Browser.Ref">;
                    readonly values: Schema.$Array<Schema.String>;
                }> | Schema.Struct<{
                    readonly type: Schema.Literal<"snapshot">;
                } & {
                    readonly tabID: Schema.brand<Schema.String, "Browser.TabID">;
                    readonly frameID: Schema.decodeTo<Schema.optional<Schema.toType<Schema.String>>, Schema.optionalKey<Schema.String>, never, never>;
                    readonly ref: Schema.decodeTo<Schema.optional<Schema.toType<Schema.brand<Schema.String, "Browser.Ref">>>, Schema.optionalKey<Schema.brand<Schema.String, "Browser.Ref">>, never, never>;
                    readonly depth: Schema.decodeTo<Schema.optional<Schema.toType<Schema.Int>>, Schema.optionalKey<Schema.Int>, never, never>;
                    readonly boxes: Schema.decodeTo<Schema.optional<Schema.toType<Schema.Boolean>>, Schema.optionalKey<Schema.Boolean>, never, never>;
                }> | Schema.Struct<{
                    readonly type: Schema.Literal<"stop">;
                } & {
                    tabID: Schema.brand<Schema.String, "Browser.TabID">;
                }> | Schema.Struct<{
                    readonly type: Schema.Literal<"tabs.close">;
                } & {
                    tabID: Schema.brand<Schema.String, "Browser.TabID">;
                }> | Schema.Struct<{
                    readonly type: Schema.Literal<"tabs.focus">;
                } & {
                    tabID: Schema.brand<Schema.String, "Browser.TabID">;
                }> | Schema.Struct<{
                    readonly type: Schema.Literal<"tabs.open">;
                } & {
                    readonly url: Schema.decodeTo<Schema.optional<Schema.toType<Schema.String>>, Schema.optionalKey<Schema.String>, never, never>;
                    readonly focus: Schema.decodeTo<Schema.optional<Schema.toType<Schema.Boolean>>, Schema.optionalKey<Schema.Boolean>, never, never>;
                }> | Schema.Struct<{
                    readonly type: Schema.Literal<"trace.analyze">;
                } & {
                    readonly tabID: Schema.brand<Schema.String, "Browser.TabID">;
                    readonly fileID: Schema.brand<Schema.String, "Browser.FileID">;
                    readonly limit: Schema.decodeTo<Schema.optional<Schema.toType<Schema.Int>>, Schema.optionalKey<Schema.Int>, never, never>;
                }> | Schema.Struct<{
                    readonly type: Schema.Literal<"trace.start">;
                } & {
                    readonly tabID: Schema.brand<Schema.String, "Browser.TabID">;
                    readonly durationMs: Schema.decodeTo<Schema.optional<Schema.toType<Schema.Int>>, Schema.optionalKey<Schema.Int>, never, never>;
                }> | Schema.Struct<{
                    readonly type: Schema.Literal<"trace.stop">;
                } & {
                    tabID: Schema.brand<Schema.String, "Browser.TabID">;
                }> | Schema.Struct<{
                    readonly type: Schema.Literal<"wait">;
                } & {
                    readonly tabID: Schema.brand<Schema.String, "Browser.TabID">;
                    readonly frameID: Schema.decodeTo<Schema.optional<Schema.toType<Schema.String>>, Schema.optionalKey<Schema.String>, never, never>;
                    readonly condition: Schema.Literals<readonly ["load", "text", "textGone"]>;
                    readonly text: Schema.decodeTo<Schema.optional<Schema.toType<Schema.String>>, Schema.optionalKey<Schema.String>, never, never>;
                    readonly timeoutMs: Schema.decodeTo<Schema.optional<Schema.toType<Schema.Int>>, Schema.optionalKey<Schema.Int>, never, never>;
                }>)[]>;
            }>;
        };
        inspect: {
            input: Schema.Struct<{
                readonly binding: Schema.String;
                readonly tabID: Schema.brand<Schema.String, "Browser.TabID">;
                readonly enabled: Schema.Boolean;
            }>;
        };
        highlight: {
            input: Schema.Struct<{
                readonly binding: Schema.String;
                readonly tabID: Schema.brand<Schema.String, "Browser.TabID">;
                readonly ref: Schema.optionalKey<Schema.brand<Schema.String, "Browser.Ref">>;
            }>;
        };
        zoom: {
            input: Schema.Struct<{
                readonly binding: Schema.String;
                readonly tabID: Schema.brand<Schema.String, "Browser.TabID">;
                readonly zoom: Schema.Literals<readonly ["in", "out", "reset"]>;
            }>;
        };
        site: {
            input: Schema.Struct<{
                readonly binding: Schema.String;
                readonly tabID: Schema.brand<Schema.String, "Browser.TabID">;
            }>;
            output: Schema.Struct<{
                readonly cookies: Schema.Int;
            }>;
        };
        clearSite: {
            input: Schema.Struct<{
                readonly binding: Schema.String;
                readonly tabID: Schema.brand<Schema.String, "Browser.TabID">;
            }>;
        };
        close: {
            input: Schema.Struct<{
                readonly binding: Schema.String;
            }>;
        };
    };
    readonly events: {
        event: Schema.Struct<{
            readonly binding: Schema.String;
            readonly event: Schema.Union<readonly [Schema.Struct<{
                readonly type: Schema.Literal<"focus">;
                readonly tabID: Schema.brand<Schema.String, "Browser.TabID">;
            }>, Schema.Struct<{
                readonly type: Schema.Literal<"preview">;
                readonly path: Schema.String;
            }>, Schema.Struct<{
                readonly type: Schema.Literal<"state">;
                readonly state: Schema.NullOr<Schema.Struct<{
                    readonly tabs: Schema.$Array<Schema.Struct<{
                        readonly id: Schema.brand<Schema.String, "Browser.TabID">;
                        readonly url: Schema.String;
                        readonly title: Schema.String;
                        readonly loading: Schema.Boolean;
                        readonly loadError: Schema.decodeTo<Schema.optional<Schema.toType<Schema.String>>, Schema.optionalKey<Schema.String>, never, never>;
                        readonly canGoBack: Schema.Boolean;
                        readonly canGoForward: Schema.Boolean;
                        readonly generation: Schema.Int;
                    }>>;
                    readonly focusedTabID: Schema.NullOr<Schema.brand<Schema.String, "Browser.TabID">>;
                }>>;
                readonly error: Schema.optionalKey<Schema.String>;
            }>, Schema.Struct<{
                readonly type: Schema.Literal<"embed">;
                readonly tabID: Schema.brand<Schema.String, "Browser.TabID">;
                readonly embed: Schema.String;
            }>, Schema.Struct<{
                readonly type: Schema.Literal<"inspect">;
                readonly tabID: Schema.brand<Schema.String, "Browser.TabID">;
                readonly active: Schema.Boolean;
                readonly element: Schema.optionalKey<Schema.Struct<{
                    readonly ref: Schema.brand<Schema.String, "Browser.Ref">;
                    readonly selector: Schema.String;
                    readonly label: Schema.String;
                    readonly role: Schema.optionalKey<Schema.String>;
                    readonly name: Schema.optionalKey<Schema.String>;
                    readonly text: Schema.optionalKey<Schema.String>;
                    /** Border box in the native view's DIPs. */
                    readonly rect: Schema.Struct<{
                        readonly x: Schema.Finite;
                        readonly y: Schema.Finite;
                        readonly width: Schema.Finite;
                        readonly height: Schema.Finite;
                    }>;
                }>>;
            }>, Schema.Struct<{
                readonly type: Schema.Literal<"page">;
                readonly tabID: Schema.brand<Schema.String, "Browser.TabID">;
                readonly icon: Schema.optionalKey<Schema.String>;
                readonly zoom: Schema.Finite;
            }>, Schema.Struct<{
                readonly type: Schema.Literal<"focused">;
                readonly tabID: Schema.brand<Schema.String, "Browser.TabID">;
            }>, Schema.Struct<{
                readonly type: Schema.Literal<"shortcut">;
                readonly key: Schema.String;
                readonly code: Schema.String;
                readonly ctrl: Schema.Boolean;
                readonly meta: Schema.Boolean;
                readonly shift: Schema.Boolean;
                readonly alt: Schema.Boolean;
            }>]>;
        }>;
    };
}>;
