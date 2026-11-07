import { Effect, FileSystem, Path } from "effect";
import type { Database } from "./database";
export declare const importLegacyStores: (db: Database, userData: string) => Effect.Effect<{
    imported: number;
    removed: string[];
}, import("effect/PlatformError").PlatformError, FileSystem.FileSystem | Path.Path>;
