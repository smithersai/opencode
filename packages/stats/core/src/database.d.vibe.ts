import { Config, Effect, Layer, Schema } from "effect";
import { Client } from "@planetscale/database";
import * as Context from "effect/Context";
export declare const DatabaseUrl: Schema.brand<Schema.NonEmptyString, "DatabaseUrl">;
export type DatabaseUrl = typeof DatabaseUrl.Type;
declare const DatabaseSettings_base: Schema.Class<DatabaseSettings, Schema.Struct<{
    readonly url: Schema.brand<Schema.NonEmptyString, "DatabaseUrl">;
    readonly migrationsDir: Schema.NonEmptyString;
}>, {}>;
export declare class DatabaseSettings extends DatabaseSettings_base {
}
declare const DatabaseConfig_base: Context.ServiceClass<DatabaseConfig, "@opencode/stats/DatabaseConfig", DatabaseSettings>;
export declare class DatabaseConfig extends DatabaseConfig_base {
    static readonly config: Config.Config<DatabaseSettings>;
    static readonly layer: Layer.Layer<DatabaseConfig, never, never>;
}
declare function makeDrizzle(settings: DatabaseSettings): import("drizzle-orm/planetscale-serverless").PlanetScaleDatabase<import("drizzle-orm").EmptyRelations> & {
    $client: Client;
};
export type Drizzle = ReturnType<typeof makeDrizzle>;
declare const DrizzleClient_base: Context.ServiceClass<DrizzleClient, "@opencode/stats/DrizzleClient", import("drizzle-orm/planetscale-serverless").PlanetScaleDatabase<import("drizzle-orm").EmptyRelations> & {
    $client: Client;
}>;
export declare class DrizzleClient extends DrizzleClient_base {
    static readonly layer: Layer.Layer<DrizzleClient, never, DatabaseConfig>;
}
export declare class DatabaseError extends Error {
    readonly _tag = "DatabaseError";
    constructor(input: {
        cause: unknown;
    });
    static make(input: {
        cause: unknown;
    }): DatabaseError;
}
export declare const catchDbError: <A, R>(self: Effect.Effect<A, unknown, R>) => Effect.Effect<A, DatabaseError, R>;
export declare class MigrationError extends Error {
    readonly _tag = "MigrationError";
    constructor(input: {
        message: string;
        cause?: unknown;
    });
}
export declare const migrate: () => Effect.Effect<undefined, MigrationError, DatabaseConfig>;
export declare const layer: Layer.Layer<DatabaseConfig | DrizzleClient, never, never>;
export {};
