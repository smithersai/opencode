import { Schema } from "effect";
export declare const SchemaURL = "https://opencode.ai/v2/cli.json";
export declare const Info: Schema.Struct<{
    readonly theme: Schema.optional<Schema.Struct<{
        readonly name: Schema.optional<Schema.String>;
        readonly mode: Schema.optional<Schema.Literals<readonly ["system", "dark", "light"]>>;
    }>>;
    readonly keybinds: Schema.optional<Schema.Struct<{
        [k: string]: Schema.optional<Schema.Union<readonly [Schema.Literal<false>, Schema.Literal<"none">, Schema.Union<readonly [Schema.String, Schema.Struct<{
            readonly name: Schema.String;
            readonly ctrl: Schema.optional<Schema.Boolean>;
            readonly shift: Schema.optional<Schema.Boolean>;
            readonly meta: Schema.optional<Schema.Boolean>;
            readonly super: Schema.optional<Schema.Boolean>;
            readonly hyper: Schema.optional<Schema.Boolean>;
        }>, Schema.StructWithRest<Schema.Struct<{
            readonly key: Schema.Union<readonly [Schema.String, Schema.Struct<{
                readonly name: Schema.String;
                readonly ctrl: Schema.optional<Schema.Boolean>;
                readonly shift: Schema.optional<Schema.Boolean>;
                readonly meta: Schema.optional<Schema.Boolean>;
                readonly super: Schema.optional<Schema.Boolean>;
                readonly hyper: Schema.optional<Schema.Boolean>;
            }>]>;
            readonly event: Schema.optional<Schema.Literals<readonly ["press", "release"]>>;
            readonly preventDefault: Schema.optional<Schema.Boolean>;
            readonly fallthrough: Schema.optional<Schema.Boolean>;
        }>, readonly [Schema.$Record<Schema.String, Schema.Unknown>]>]>, Schema.$Array<Schema.Union<readonly [Schema.String, Schema.Struct<{
            readonly name: Schema.String;
            readonly ctrl: Schema.optional<Schema.Boolean>;
            readonly shift: Schema.optional<Schema.Boolean>;
            readonly meta: Schema.optional<Schema.Boolean>;
            readonly super: Schema.optional<Schema.Boolean>;
            readonly hyper: Schema.optional<Schema.Boolean>;
        }>, Schema.StructWithRest<Schema.Struct<{
            readonly key: Schema.Union<readonly [Schema.String, Schema.Struct<{
                readonly name: Schema.String;
                readonly ctrl: Schema.optional<Schema.Boolean>;
                readonly shift: Schema.optional<Schema.Boolean>;
                readonly meta: Schema.optional<Schema.Boolean>;
                readonly super: Schema.optional<Schema.Boolean>;
                readonly hyper: Schema.optional<Schema.Boolean>;
            }>]>;
            readonly event: Schema.optional<Schema.Literals<readonly ["press", "release"]>>;
            readonly preventDefault: Schema.optional<Schema.Boolean>;
            readonly fallthrough: Schema.optional<Schema.Boolean>;
        }>, readonly [Schema.$Record<Schema.String, Schema.Unknown>]>]>>]>>;
    }>>;
    readonly plugins: Schema.optional<Schema.$Array<Schema.Union<readonly [Schema.String, Schema.Struct<{
        readonly package: Schema.String;
        readonly options: Schema.optional<Schema.$Record<Schema.String, Schema.Any>>;
    }>]>>>;
    readonly leader: Schema.optional<Schema.Struct<{
        readonly timeout: Schema.optional<Schema.Int>;
    }>>;
    readonly scroll: Schema.optional<Schema.Struct<{
        readonly speed: Schema.optional<Schema.Finite>;
        readonly acceleration: Schema.optional<Schema.Boolean>;
    }>>;
    readonly attention: Schema.optional<Schema.Struct<{
        readonly notifications: Schema.optional<Schema.Boolean>;
        readonly sound: Schema.optional<Schema.Boolean>;
        readonly volume: Schema.optional<Schema.Finite>;
        readonly sound_pack: Schema.optional<Schema.String>;
        readonly sounds: Schema.optional<Schema.$Record<Schema.Literals<readonly ["default", "question", "permission", "error", "done", "subagent_done"]>, Schema.optionalKey<Schema.String>>>;
    }>>;
    readonly diffs: Schema.optional<Schema.Struct<{
        readonly source: Schema.optional<Schema.Union<readonly [Schema.Literals<readonly ["working", "branch", "committed"]>, Schema.Literal<"turn">]>>;
        readonly wrap: Schema.optional<Schema.Literals<readonly ["word", "none"]>>;
        readonly tree: Schema.optional<Schema.Boolean>;
        readonly single: Schema.optional<Schema.Boolean>;
        readonly fullscreen: Schema.optional<Schema.Boolean>;
        readonly view: Schema.optional<Schema.Literals<readonly ["auto", "split", "unified"]>>;
    }>>;
    readonly terminal: Schema.optional<Schema.Struct<{
        readonly title: Schema.optional<Schema.Boolean>;
        readonly copy: Schema.optional<Schema.Literals<readonly ["manual", "select"]>>;
    }>>;
    readonly prompt: Schema.optional<Schema.Struct<{
        readonly editor: Schema.optional<Schema.Boolean>;
        readonly paste: Schema.optional<Schema.Literals<readonly ["compact", "full"]>>;
        readonly image_preview: Schema.optional<Schema.Boolean>;
    }>>;
    readonly session: Schema.optional<Schema.Struct<{
        readonly sidebar: Schema.optional<Schema.Literals<readonly ["auto", "hide"]>>;
        readonly scrollbar: Schema.optional<Schema.Boolean>;
        readonly thinking: Schema.optional<Schema.Literals<readonly ["show", "hide"]>>;
        readonly grouping: Schema.optional<Schema.Literals<readonly ["auto", "none"]>>;
        readonly verbosity: Schema.optional<Schema.Literals<readonly ["low", "medium", "high"]>>;
        readonly image_preview: Schema.optional<Schema.Boolean>;
        readonly tps: Schema.optional<Schema.Boolean>;
        readonly markdown: Schema.optional<Schema.Literals<readonly ["source", "rendered"]>>;
        readonly new_location: Schema.optional<Schema.Literals<readonly ["launch", "inherit"]>>;
        readonly permissions: Schema.optional<Schema.Literals<readonly ["prompt", "autoaccept"]>>;
    }>>;
    readonly tabs: Schema.optional<Schema.Struct<{
        readonly mode: Schema.optional<Schema.Literals<readonly ["auto", "on", "off"]>>;
        readonly enabled: Schema.optional<Schema.Boolean>;
        readonly scope: Schema.optional<Schema.Literals<readonly ["global", "cwd"]>>;
        readonly layout: Schema.optional<Schema.Literals<readonly ["horizontal", "vertical"]>>;
        readonly indicators: Schema.optional<Schema.Literals<readonly ["status", "numbers"]>>;
    }>>;
    readonly mini: Schema.optional<Schema.Struct<{
        readonly thinking: Schema.optional<Schema.Literals<readonly ["show", "hide"]>>;
        readonly tools: Schema.optional<Schema.Literals<readonly ["show", "hide"]>>;
        readonly shell_output: Schema.optional<Schema.Literals<readonly ["show", "hide"]>>;
        readonly turn_summary: Schema.optional<Schema.Literals<readonly ["show", "hide"]>>;
        readonly footer: Schema.optional<Schema.Literals<readonly ["show", "hide"]>>;
        readonly splash: Schema.optional<Schema.Literals<readonly ["show", "hide"]>>;
        readonly work_spinner: Schema.optional<Schema.Literals<readonly ["block-soft-slide", "block-soft-sweep", "block-low-comet", "block-low-duet", "block-shuttle", "block-bridge", "block-squeeze", "small-toggle", "square-toggle", "grow-shrink", "quadrant-orbit", "crosshatch", "density-wave", "seed"]>>;
        readonly mono: Schema.optional<Schema.Boolean>;
        readonly replay: Schema.optional<Schema.Boolean>;
        readonly replay_limit: Schema.optional<Schema.Int>;
    }>>;
    readonly debug: Schema.optional<Schema.Struct<{
        readonly devtools: Schema.optional<Schema.Boolean>;
        readonly timing: Schema.optional<Schema.Boolean>;
        readonly turn_tokens: Schema.optional<Schema.Union<readonly [Schema.Boolean, Schema.Literal<"verbose">]>>;
    }>>;
    readonly experimental: Schema.optional<Schema.$Record<Schema.String, Schema.Boolean>>;
    readonly animations: Schema.optional<Schema.Boolean>;
    readonly highlights: Schema.optional<Schema.Boolean>;
    readonly mouse: Schema.optional<Schema.Boolean>;
    readonly cursor: Schema.optional<Schema.Struct<{
        readonly style: Schema.optional<Schema.Literals<readonly ["block", "underline", "line", "default"]>>;
        readonly blinking: Schema.optional<Schema.Boolean>;
    }>>;
    readonly $schema: Schema.optional<Schema.String>;
}>;
export type Info = Schema.Schema.Type<typeof Info>;
export declare function normalizeLegacyTabs(info: Info | undefined): {
    readonly theme?: {
        readonly name?: string | undefined;
        readonly mode?: "dark" | "light" | "system" | undefined;
    } | undefined;
    readonly keybinds?: {
        readonly [x: number]: string | false | readonly (string | {
            readonly name: string;
            readonly ctrl?: boolean | undefined;
            readonly shift?: boolean | undefined;
            readonly meta?: boolean | undefined;
            readonly super?: boolean | undefined;
            readonly hyper?: boolean | undefined;
        } | {
            readonly [x: string]: unknown;
            readonly key: string | {
                readonly name: string;
                readonly ctrl?: boolean | undefined;
                readonly shift?: boolean | undefined;
                readonly meta?: boolean | undefined;
                readonly super?: boolean | undefined;
                readonly hyper?: boolean | undefined;
            };
            readonly event?: "press" | "release" | undefined;
            readonly preventDefault?: boolean | undefined;
            readonly fallthrough?: boolean | undefined;
        })[] | {
            readonly name: string;
            readonly ctrl?: boolean | undefined;
            readonly shift?: boolean | undefined;
            readonly meta?: boolean | undefined;
            readonly super?: boolean | undefined;
            readonly hyper?: boolean | undefined;
        } | {
            readonly [x: string]: unknown;
            readonly key: string | {
                readonly name: string;
                readonly ctrl?: boolean | undefined;
                readonly shift?: boolean | undefined;
                readonly meta?: boolean | undefined;
                readonly super?: boolean | undefined;
                readonly hyper?: boolean | undefined;
            };
            readonly event?: "press" | "release" | undefined;
            readonly preventDefault?: boolean | undefined;
            readonly fallthrough?: boolean | undefined;
        } | undefined;
        readonly [x: string]: string | false | readonly (string | {
            readonly name: string;
            readonly ctrl?: boolean | undefined;
            readonly shift?: boolean | undefined;
            readonly meta?: boolean | undefined;
            readonly super?: boolean | undefined;
            readonly hyper?: boolean | undefined;
        } | {
            readonly [x: string]: unknown;
            readonly key: string | {
                readonly name: string;
                readonly ctrl?: boolean | undefined;
                readonly shift?: boolean | undefined;
                readonly meta?: boolean | undefined;
                readonly super?: boolean | undefined;
                readonly hyper?: boolean | undefined;
            };
            readonly event?: "press" | "release" | undefined;
            readonly preventDefault?: boolean | undefined;
            readonly fallthrough?: boolean | undefined;
        })[] | {
            readonly name: string;
            readonly ctrl?: boolean | undefined;
            readonly shift?: boolean | undefined;
            readonly meta?: boolean | undefined;
            readonly super?: boolean | undefined;
            readonly hyper?: boolean | undefined;
        } | {
            readonly [x: string]: unknown;
            readonly key: string | {
                readonly name: string;
                readonly ctrl?: boolean | undefined;
                readonly shift?: boolean | undefined;
                readonly meta?: boolean | undefined;
                readonly super?: boolean | undefined;
                readonly hyper?: boolean | undefined;
            };
            readonly event?: "press" | "release" | undefined;
            readonly preventDefault?: boolean | undefined;
            readonly fallthrough?: boolean | undefined;
        } | undefined;
    } | undefined;
    readonly plugins?: readonly (string | {
        readonly package: string;
        readonly options?: {
            readonly [x: string]: any;
        } | undefined;
    })[] | undefined;
    readonly leader?: {
        readonly timeout?: number | undefined;
    } | undefined;
    readonly scroll?: {
        readonly speed?: number | undefined;
        readonly acceleration?: boolean | undefined;
    } | undefined;
    readonly attention?: {
        readonly notifications?: boolean | undefined;
        readonly sound?: boolean | undefined;
        readonly volume?: number | undefined;
        readonly sound_pack?: string | undefined;
        readonly sounds?: {
            readonly default?: string | undefined;
            readonly done?: string | undefined;
            readonly error?: string | undefined;
            readonly permission?: string | undefined;
            readonly question?: string | undefined;
            readonly subagent_done?: string | undefined;
        } | undefined;
    } | undefined;
    readonly diffs?: {
        readonly source?: "branch" | "committed" | "turn" | "working" | undefined;
        readonly wrap?: "none" | "word" | undefined;
        readonly tree?: boolean | undefined;
        readonly single?: boolean | undefined;
        readonly fullscreen?: boolean | undefined;
        readonly view?: "auto" | "split" | "unified" | undefined;
    } | undefined;
    readonly terminal?: {
        readonly title?: boolean | undefined;
        readonly copy?: "manual" | "select" | undefined;
    } | undefined;
    readonly prompt?: {
        readonly editor?: boolean | undefined;
        readonly paste?: "compact" | "full" | undefined;
        readonly image_preview?: boolean | undefined;
    } | undefined;
    readonly session?: {
        readonly sidebar?: "auto" | "hide" | undefined;
        readonly scrollbar?: boolean | undefined;
        readonly thinking?: "hide" | "show" | undefined;
        readonly grouping?: "auto" | "none" | undefined;
        readonly verbosity?: "high" | "low" | "medium" | undefined;
        readonly image_preview?: boolean | undefined;
        readonly tps?: boolean | undefined;
        readonly markdown?: "rendered" | "source" | undefined;
        readonly new_location?: "inherit" | "launch" | undefined;
        readonly permissions?: "autoaccept" | "prompt" | undefined;
    } | undefined;
    readonly tabs?: {
        readonly mode?: "auto" | "off" | "on" | undefined;
        readonly enabled?: boolean | undefined;
        readonly scope?: "cwd" | "global" | undefined;
        readonly layout?: "horizontal" | "vertical" | undefined;
        readonly indicators?: "numbers" | "status" | undefined;
    } | undefined;
    readonly mini?: {
        readonly thinking?: "hide" | "show" | undefined;
        readonly tools?: "hide" | "show" | undefined;
        readonly shell_output?: "hide" | "show" | undefined;
        readonly turn_summary?: "hide" | "show" | undefined;
        readonly footer?: "hide" | "show" | undefined;
        readonly splash?: "hide" | "show" | undefined;
        readonly work_spinner?: "block-bridge" | "block-low-comet" | "block-low-duet" | "block-shuttle" | "block-soft-slide" | "block-soft-sweep" | "block-squeeze" | "crosshatch" | "density-wave" | "grow-shrink" | "quadrant-orbit" | "seed" | "small-toggle" | "square-toggle" | undefined;
        readonly mono?: boolean | undefined;
        readonly replay?: boolean | undefined;
        readonly replay_limit?: number | undefined;
    } | undefined;
    readonly debug?: {
        readonly devtools?: boolean | undefined;
        readonly timing?: boolean | undefined;
        readonly turn_tokens?: "verbose" | boolean | undefined;
    } | undefined;
    readonly experimental?: {
        readonly [x: string]: boolean;
    } | undefined;
    readonly animations?: boolean | undefined;
    readonly highlights?: boolean | undefined;
    readonly mouse?: boolean | undefined;
    readonly cursor?: {
        readonly style?: "block" | "default" | "line" | "underline" | undefined;
        readonly blinking?: boolean | undefined;
    } | undefined;
    readonly $schema?: string | undefined;
} | undefined;
