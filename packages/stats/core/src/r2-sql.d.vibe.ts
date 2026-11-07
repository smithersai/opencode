import { Context, Effect, Layer } from "effect";
export type R2SqlData = Record<string, string>;
export declare class R2SqlQueryError extends Error {
    readonly _tag = "R2SqlQueryError";
    readonly requestId?: string;
    readonly status?: number;
    readonly code?: number;
    constructor(input: {
        message: string;
        requestId?: string;
        status?: number;
        code?: number;
        cause?: unknown;
    });
}
export declare namespace R2Sql {
    interface Service {
        readonly query: (query: string, columns?: readonly string[]) => Effect.Effect<R2SqlData[], R2SqlQueryError>;
    }
}
declare const R2Sql_base: Context.ServiceClass<R2Sql, "@opencode/stats/R2Sql", R2Sql.Service>;
export declare class R2Sql extends R2Sql_base {
    static readonly layer: Layer.Layer<R2Sql>;
}
export declare const queryR2SqlPages: (query: string, columns: readonly string[] | undefined, fetchRows: (query: string) => Effect.Effect<R2SqlData[], R2SqlQueryError>) => Effect.Effect<R2SqlData[], R2SqlQueryError, never>;
export {};
