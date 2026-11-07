import type { BuiltinMainStorage } from "@opencode/plugin/gui/builtin";
import type { StateStore } from "../storage/state";
import type { SettingsStore } from "../storage/store";
/** A desktop settings file by name; the app's own when the name is left out. */
export type SettingsFiles = (file?: string) => SettingsStore;
/**
 * Each plugin's values live in the `state` table under `plugin.<id>`, stored as canonical JSON. Writes are rare, so
 * each one reaches the database before it returns and survives a crash. A built-in's `from` imports an older value
 * once from a settings file or another state namespace, and every store of a built-in first imports from
 * `extension.<id>`, where builds before the plugin rename kept it. Other plugins never stored values there.
 */
export declare function createStorage(state: StateStore, settings: SettingsFiles, id: string, builtin: boolean): BuiltinMainStorage;
