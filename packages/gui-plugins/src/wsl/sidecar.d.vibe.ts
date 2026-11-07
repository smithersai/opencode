import type { MainContext } from "@opencode/plugin/gui/main";
import { type WslCommandLine, type WslRuntime } from "./runtime";
export type WslSidecar = {
    stop: () => Promise<void>;
    onExit: (cb: (code: number | null, signal: NodeJS.Signals | null) => void) => void;
    url: string;
    password: string;
};
export declare function spawnWslSidecar(distro: string, opts: {
    runtime: WslRuntime;
    t: MainContext["t"];
    packaged: boolean;
    /** Aborts the start: CLI discovery, health polling, and the server process, which has exited when this rejects. */
    signal: AbortSignal;
    onLine?: (line: WslCommandLine) => void;
    healthTimeoutMs?: number;
}): Promise<WslSidecar>;
