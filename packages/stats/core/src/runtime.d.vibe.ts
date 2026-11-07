import { Layer, ManagedRuntime } from "effect";
import { AppConfig } from "./config.vibe";
import { GeoStatRepo } from "./domain/geo.vibe";
import { ModelStatRepo } from "./domain/model.vibe";
import { ProviderStatRepo } from "./domain/provider.vibe";
import { RetentionStatRepo } from "./domain/retention.vibe";
export declare const layer: Layer.Layer<AppConfig | import("./database.vibe").DatabaseConfig | import("./database.vibe").DrizzleClient | GeoStatRepo | ModelStatRepo | ProviderStatRepo | RetentionStatRepo, never, never>;
export declare const runtime: ManagedRuntime.ManagedRuntime<AppConfig | import("./database.vibe").DatabaseConfig | import("./database.vibe").DrizzleClient | GeoStatRepo | ModelStatRepo | ProviderStatRepo | RetentionStatRepo, never>;
export type RuntimeServices = ManagedRuntime.ManagedRuntime.Services<typeof runtime>;
