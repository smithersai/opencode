export * as Plugin from "./service.vibe";
import { Plugin } from "@opencode/schema/plugin";
import type { Plugin as PluginDefinition } from "@opencode/plugin/effect/plugin";
import { Context, type Effect, type Exit } from "effect";
export interface Interface {
    readonly activate: (plugins: readonly Generation[], failures?: readonly Failure[]) => Effect.Effect<void>;
    readonly list: () => Effect.Effect<Plugin.Info[]>;
    /** An active plugin's prebuilt `./gui-experimental` bundle, or undefined when it exports none. */
    readonly gui: (id: Plugin.ID) => Effect.Effect<Plugin.GuiBundle | undefined>;
    readonly close: (exit: Exit.Exit<unknown, unknown>) => Effect.Effect<void>;
    /** Wait for announced updates and activation to settle; failures remain in the inventory. */
    readonly awaitActivation: Effect.Effect<void>;
    /** Keep readiness pending while preparing an update. Run the returned Effect to release it. */
    readonly hold: () => Effect.Effect<Effect.Effect<void>>;
}
export type Failure = Plugin.Info & {
    readonly state: Extract<Plugin.State, {
        readonly status: "failed";
    }>;
};
export type Generation = PluginDefinition & {
    readonly revision: string;
    readonly source?: Plugin.Source;
    readonly features?: Plugin.Features;
    /**
     * The package's `./gui-experimental` bundle: its file URL, the plugin's options, and an opaque revision that changes
     * with the plugin, its options or the bundle's content. A change to the bundle alone reloads it in the app without
     * restarting the server entry.
     */
    readonly gui?: {
        readonly file: string;
        readonly revision: string;
        readonly options: Plugin.GuiBundle["options"];
    };
};
declare const Service_base: Context.ServiceClass<Service, "@opencode/Plugin", Interface>;
export declare class Service extends Service_base {
}
/**
 * Session entry points wait here before reading plugin-provided state such as commands, skills, hooks,
 * and the model catalog. A cold Location activates its plugins asynchronously, so without the wait an
 * early request observes an empty registry and admits or fails work the plugins would have shaped.
 */
export declare const awaitActivation: Effect.Effect<void, never, Service>;
