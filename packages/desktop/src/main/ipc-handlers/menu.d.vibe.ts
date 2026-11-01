import { IpcPortHandoff } from "../ipc-transport.ts";
import { ApplicationLifecycle } from "../lifecycle/index.ts";
export declare const menuHandlers: import("effect/Layer").Layer<import("effect/rpc/Rpc").Handler<"MenuRunAction">, never, IpcPortHandoff | ApplicationLifecycle.Service>;
