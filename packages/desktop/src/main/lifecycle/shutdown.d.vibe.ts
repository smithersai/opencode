export * as Shutdown from "./shutdown.vibe";
import { Context, Effect, Layer } from "effect";
export interface Interface {
    readonly add: (effect: Effect.Effect<void>) => Effect.Effect<() => void>;
    readonly run: Effect.Effect<void>;
}
declare const Service_base: Context.ServiceClass<Service, "opencode/desktop/Shutdown", Interface>;
export declare class Service extends Service_base {
}
export declare const layer: Layer.Layer<Service, never, never>;
