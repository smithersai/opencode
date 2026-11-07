import { Schema } from "effect";
declare const OPEN_APPS: readonly ["vscode", "cursor", "zed", "textmate", "antigravity", "finder", "terminal", "iterm2", "ghostty", "warp", "xcode", "android-studio", "powershell", "sublime-text"];
export type OpenApp = (typeof OPEN_APPS)[number];
export declare const OpenAppPreferences: Schema.Struct<{
    readonly app: Schema.Literals<readonly ["vscode", "cursor", "zed", "textmate", "antigravity", "finder", "terminal", "iterm2", "ghostty", "warp", "xcode", "android-studio", "powershell", "sublime-text"]>;
}>;
export {};
