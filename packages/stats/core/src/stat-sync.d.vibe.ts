import { Effect } from "effect";
import { DatabaseError } from "./database.vibe";
import { GeoStatRepo } from "./domain/geo.vibe";
import { ModelStatRepo } from "./domain/model.vibe";
import { ProviderStatRepo } from "./domain/provider.vibe";
import { RetentionStatRepo } from "./domain/retention.vibe";
import { R2Sql, R2SqlQueryError } from "./r2-sql.vibe";
export type SyncStatsResult = {
    ok: true;
    rows: number;
    startedAt: string;
    periodStart: string;
    periodEnd: string;
};
export type SyncStatsError = R2SqlQueryError | DatabaseError;
type SyncStatsServices = R2Sql | ModelStatRepo | ProviderStatRepo | GeoStatRepo | RetentionStatRepo;
export declare const syncStats: (options?: {
    history?: boolean;
}) => Effect.Effect<SyncStatsResult, SyncStatsError, SyncStatsServices>;
export {};
