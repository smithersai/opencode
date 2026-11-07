import type { Ipc, IpcClient, IpcSpec } from "@opencode/plugin/gui";
import type { Bridge } from "@opencode/plugin/gui/host";
/** Renderer-side clients for the Ipcs that plugins provide in the main process. */
export declare function createIpcClients(bridge: Bridge | undefined): {
    client: (token: Ipc) => IpcClient<IpcSpec> | undefined;
    /** How many times the Ipc became available; 0 until it first is. Reactive. */
    generation: (token: Ipc) => number;
    /** A client typed by its token, for host code that uses one Ipc directly. */
    typed: <S extends IpcSpec>(token: Ipc<S>) => IpcClient<S> | undefined;
    /** Stops listening to the bridge. Call it when the owner of these clients goes away. */
    dispose(): void;
};
