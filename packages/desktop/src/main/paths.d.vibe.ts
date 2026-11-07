export * as DesktopPaths from "./paths.vibe";
import { Effect, Path } from "effect";
export interface Resolved {
    readonly developmentResourcesRoot: string;
    readonly preloadPath: string;
    readonly rendererRoot: string;
}
export declare const resolve: Effect.Effect<{
    developmentResourcesRoot: string;
    preloadPath: string;
    rendererRoot: string;
}, never, Path.Path>;
