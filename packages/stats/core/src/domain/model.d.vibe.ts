import { Effect, Layer } from "effect";
import * as Context from "effect/Context";
import { DatabaseError, DrizzleClient } from "../database.vibe";
import { modelStat } from "../database/schema";
import { type StatBaseAggregate } from "./stat";
export type ModelStatRow = typeof modelStat.$inferInsert;
export type ModelStatAggregate = StatBaseAggregate & {
    provider: string;
    model: string;
    provider_model: string;
};
export type ModelStatMetric = {
    periodKey: string;
    updatedAt: Date;
    tier: string;
    provider: string;
    model: string;
    sessions: number;
    uniqueUsers: number;
    inputTokens: number;
    outputTokens: number;
    reasoningTokens: number;
    cacheReadTokens: number;
    totalTokens: number;
    inputCostMicrocents: number;
    outputCostMicrocents: number;
    totalCostMicrocents: number;
};
export declare namespace ModelStatRepo {
    interface Service {
        readonly listDaily: () => Effect.Effect<ModelStatMetric[], DatabaseError>;
        readonly lastSyncedAt: (since: Date) => Effect.Effect<Date | null, DatabaseError>;
        readonly upsert: (rows: ModelStatRow[]) => Effect.Effect<void, DatabaseError>;
        readonly deleteRetiredDimensions: (rows: ModelStatRow[], hiddenModels: readonly string[]) => Effect.Effect<void, DatabaseError>;
        readonly deleteUnknownDimensions: (rows: ModelStatRow[]) => Effect.Effect<void, DatabaseError>;
    }
}
declare const ModelStatRepo_base: Context.ServiceClass<ModelStatRepo, "@opencode/stats/ModelStatRepo", ModelStatRepo.Service>;
export declare class ModelStatRepo extends ModelStatRepo_base {
    static readonly layer: Layer.Layer<ModelStatRepo, never, DrizzleClient>;
}
export declare function rowsFromAggregates(aggregates: ModelStatAggregate[]): {
    rank_by_tokens: number | null;
    rank_by_requests: number | null;
    rank_by_cost: number | null;
    avg_duration_ms?: number | null | undefined;
    avg_output_tps?: number | null | undefined;
    avg_ttfb_ms?: number | null | undefined;
    cache_read_tokens?: number | undefined;
    client?: string | undefined;
    created_at?: Date | undefined;
    dataset?: string | undefined;
    error_count?: number | undefined;
    grain: string;
    id?: number | undefined;
    input_cost_microcents?: number | undefined;
    input_tokens?: number | undefined;
    model: string;
    output_cost_microcents?: number | undefined;
    output_tokens?: number | undefined;
    p50_duration_ms?: number | null | undefined;
    p50_ttfb_ms?: number | null | undefined;
    p95_duration_ms?: number | null | undefined;
    p95_ttfb_ms?: number | null | undefined;
    period_key: string;
    provider: string;
    provider_model?: string | undefined;
    reasoning_tokens?: number | undefined;
    requests?: number | undefined;
    sample_count?: number | undefined;
    sessions?: number | undefined;
    source?: string | undefined;
    success_count?: number | undefined;
    tier?: string | undefined;
    total_cost_microcents?: number | undefined;
    total_tokens?: number | undefined;
    unique_users?: number | undefined;
    updated_at?: Date | undefined;
}[];
export {};
