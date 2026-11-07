import { Context, Effect, Layer } from "effect";
import { DatabaseError, DrizzleClient } from "../database.vibe";
import { modelRetention } from "../database/schema";
export type RetentionStatRow = typeof modelRetention.$inferInsert;
export type RetentionStatAggregate = {
    cohortDate: string;
    dataset: string;
    tier: string;
    provider: string;
    model: string;
    eligibleUsers: number;
    retainedUsers: number;
};
export declare namespace RetentionStatRepo {
    interface Service {
        readonly available: () => Effect.Effect<boolean, DatabaseError>;
        readonly replace: (rows: RetentionStatRow[], scope: {
            cohortDates: string[];
            dataset: string;
            tier: string;
        }) => Effect.Effect<void, DatabaseError>;
    }
}
declare const RetentionStatRepo_base: Context.ServiceClass<RetentionStatRepo, "@opencode/stats/RetentionStatRepo", RetentionStatRepo.Service>;
export declare class RetentionStatRepo extends RetentionStatRepo_base {
    static readonly layer: Layer.Layer<RetentionStatRepo, never, DrizzleClient>;
}
export declare function rowsFromAggregates(aggregates: RetentionStatAggregate[]): RetentionStatRow[];
export declare function isMissingRetentionTable(cause: unknown): boolean;
export {};
