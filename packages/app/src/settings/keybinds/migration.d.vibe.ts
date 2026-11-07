import type { useSettings } from "@/settings/model";
/**
 * Stored custom keybinds of commands now published under another id, mostly by built-in GUI plugins. Each old id maps to
 * the current one, and a newer old id comes first, so its override wins over an older one.
 */
export declare const keybindRenames: {
    "home.sessions.search.focus": string;
    "app.checkForUpdates": string;
    "server.pair": string;
    "server.ssh.add": string;
    "debugBar.toggle": string;
    "session.btw": string;
    "summary.toggle": string;
    "session.summary.toggle": string;
};
/** Moves renamed overrides once settings load. An override already stored under the new id wins. */
export declare function migrateKeybinds(settings: Pick<ReturnType<typeof useSettings>, "ready" | "keybinds">): void;
