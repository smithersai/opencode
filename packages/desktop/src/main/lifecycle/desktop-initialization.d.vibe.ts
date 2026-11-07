export * as DesktopInitialization from "./desktop-initialization.vibe";
import { Context, Layer } from "effect";
import { DesktopLogging } from "../native/logging";
export interface Interface {
    readonly version: string;
}
declare const Service_base: Context.ServiceClass<Service, "opencode/desktop/DesktopInitialization", Interface>;
export declare class Service extends Service_base {
}
export declare const layer: Layer.Layer<Service, never, import("effect/Path").Path | DesktopLogging.Service>;
