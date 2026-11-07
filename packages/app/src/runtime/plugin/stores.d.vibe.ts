import { type Accessor, type Owner } from "solid-js";
import { type SetStoreFunction } from "solid-js/store";
import type { Persisted, SessionRef } from "@opencode/plugin/gui";
import type { BuiltinStoreFrom } from "@opencode/plugin/gui/builtin";
import { type persisted } from "@/runtime/persistence/storage";
import type { SessionStateKey } from "@/runtime/server/scope";
/** One older key persistence imports a store's value from. */
type CopyFrom = NonNullable<Exclude<Parameters<typeof persisted>[0], string>["copyFrom"]>[number];
/** The storage key of a plugin's store: the plugin id is its namespace. */
export declare function storeName(plugin: string, key: string): string;
/** The key the same store of a built-in had before plugins were renamed from extensions. */
export declare function renamedStoreName(plugin: string, key: string): string;
/**
 * Imports a built-in's store value once from where it lived before the rename: the same place under
 * `renamedStoreName`. It copies instead of moving, so an older build opened on the same storage still finds the value.
 * Other plugins never stored values there.
 */
export declare function renamedFrom(target: {
    readonly storage?: string;
    readonly key: string;
}): CopyFrom;
/** Where `Storage.store` keeps a plugin's app-wide store, with the older keys it imports. */
export declare function globalStoreTarget(plugin: string, key: string, from: BuiltinStoreFrom | readonly BuiltinStoreFrom[] | undefined, builtin: boolean): {
    draft?: boolean;
    sync?: boolean;
    storage?: string;
    scope?: "window";
    workspaceStorageAliases?: string[];
    previousKey?: string;
    key: string;
    copyFrom: {
        key: string;
        storage?: string;
        pick?: (value: unknown) => unknown;
    }[];
};
/**
 * A store's `from` in the form persistence takes, in order. For a session store, an app key holding every session's
 * state under one field imports only that session's entry.
 */
export declare function storeImports(from: BuiltinStoreFrom | readonly BuiltinStoreFrom[] | undefined, session?: SessionStateKey): CopyFrom[];
/**
 * What `Storage.store` returns: a `Persisted` whose `update` and `set` wait for load, then apply in call order.
 */
export declare function persistedHandle<T extends object>(input: {
    readonly store: T;
    /** The persisted store's setter. */
    readonly set: SetStoreFunction<T>;
    /** The storage read; undefined when storage answered synchronously. */
    readonly init: Promise<unknown> | undefined;
}): Persisted<T, T | undefined>;
/** Settles once a handle from `persistedHandle` has loaded; rejects when its storage read failed. */
export declare function whenLoaded<T>(handle: Persisted<T>): Promise<void>;
/**
 * A `Persisted` over a store that opens later: `value` is undefined and `ready()` false until `store` returns one, and
 * changes made before then wait and apply in order. Call it inside an owner, which ends the hand-over.
 */
export declare function deferredHandle<T>(store: Accessor<Persisted<T> | undefined>): Persisted<T>;
/**
 * A store of one session, which needs the session's location: it opens once the location is known, and again in a
 * new directory. The session is one session's ref or `MountedSession`, so it never reads another session's location.
 */
export declare function locatedHandle<T>(session: SessionRef, open: () => Persisted<T>): Persisted<T, T | undefined>;
/**
 * A declared session store: one handle per session, opened through `locatedHandle`. Call it under an owner: an effect
 * drops the store of a session whose tab closed.
 */
export declare function createSessionStore<T extends object>(input: {
    readonly open: (session: SessionRef) => Persisted<T>;
    readonly owner: Owner | null;
    /**
     * The host's sessions. `list` holds the refs of open tabs, which follow their servers' live controllers; the ref a
     * store first opens with, such as a screen's `MountedSession`, reads its own screen's controller. `current` is the
     * routed session. Reactive.
     */
    readonly sessions: {
        list(): readonly SessionRef[];
        current(): SessionRef | undefined;
    };
}): {
    get(session: SessionRef): Persisted<T, T | undefined>;
    dispose(): void;
};
export {};
