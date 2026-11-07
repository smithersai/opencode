import { Effect, Layer } from "effect";
import * as Context from "effect/Context";
import { DatabaseError, DrizzleClient } from "../database.vibe";
import { providerStat } from "../database/schema";
import { type StatBaseAggregate } from "./stat";
export type ProviderStatRow = typeof providerStat.$inferInsert;
export type ProviderStatAggregate = StatBaseAggregate & {
    provider: string;
};
export type ProviderStatMetric = {
    periodKey: string;
    updatedAt: Date;
    tier: string;
    provider: string;
    totalTokens: number;
};
export declare namespace ProviderStatRepo {
    interface Service {
        readonly listDaily: () => Effect.Effect<ProviderStatMetric[], DatabaseError>;
        readonly listByPeriod: (opts: {
            readonly grain: string;
            readonly periodKey: string;
            readonly dataset?: string;
            readonly tier?: string;
            readonly client?: string;
            readonly source?: string;
        }) => Effect.Effect<ProviderStatRow[], DatabaseError>;
        readonly upsert: (rows: ProviderStatRow[]) => Effect.Effect<void, DatabaseError>;
        readonly deleteRetiredDimensions: (rows: ProviderStatRow[]) => Effect.Effect<void, DatabaseError>;
    }
}
declare const ProviderStatRepo_base: Context.ServiceClass<ProviderStatRepo, "@opencode/stats/ProviderStatRepo", ProviderStatRepo.Service>;
export declare class ProviderStatRepo extends ProviderStatRepo_base {
    static readonly layer: Layer.Layer<ProviderStatRepo, never, DrizzleClient>;
}
export declare function rowsFromAggregates(aggregates: ProviderStatAggregate[]): ({
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
    market_share_requests?: number | null | undefined;
    market_share_sessions?: number | null | undefined;
    market_share_tokens?: number | null | undefined;
    output_cost_microcents?: number | undefined;
    output_tokens?: number | undefined;
    p50_duration_ms?: number | null | undefined;
    p50_ttfb_ms?: number | null | undefined;
    p95_duration_ms?: number | null | undefined;
    p95_ttfb_ms?: number | null | undefined;
    period_key: string;
    provider: string;
    rank_by_cost?: number | null | undefined;
    rank_by_requests?: number | null | undefined;
    rank_by_sessions?: number | null | undefined;
    rank_by_tokens?: number | null | undefined;
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
} & {
    market_share_tokens: number | null;
    market_share_requests: number | null;
    market_share_sessions: number | null;
    rank_by_tokens: number | null;
    rank_by_requests: number | null;
    rank_by_sessions: number | null;
    rank_by_cost: number | null;
})[];
export {};
