import { Schema } from "effect";
/** A page the browser showed, newest first in the history. */
export declare const Visit: Schema.Struct<{
    readonly url: Schema.String;
    readonly title: Schema.String;
    /** The page's icon as a data URL, when it was small enough to keep. */
    readonly icon: Schema.optionalKey<Schema.String>;
}>;
export type Visit = typeof Visit.Type;
export declare const History: Schema.Struct<{
    readonly visits: Schema.$Array<Schema.Struct<{
        readonly url: Schema.String;
        readonly title: Schema.String;
        /** The page's icon as a data URL, when it was small enough to keep. */
        readonly icon: Schema.optionalKey<Schema.String>;
    }>>;
}>;
export type History = typeof History.Type;
/** The pages the history records: web pages and workspace files, not blank or internal ones. */
export declare function recordable(url: string): boolean;
/**
 * Puts a visit first, replacing an earlier visit of the same URL, and drops the oldest past the limit. A visit without
 * a title or icon yet keeps the earlier visit's.
 */
export declare function remember(visits: readonly Visit[], visit: Pick<Visit, "url" | "title">, icon?: string): Visit[];
/** The visits with a newly loaded icon on the visit of `url`, or undefined when nothing would change. */
export declare function withIcon(visits: readonly Visit[], url: string, icon: string): {
    url: string;
    title: string;
    icon?: string | undefined;
}[] | undefined;
/**
 * Visits whose address or title contains the query, case-insensitively. Addresses that begin with the query come
 * first, as the address field completes them; within each group the newest visit leads.
 */
export declare function suggest(visits: readonly Visit[], query: string, limit: number): {
    readonly url: string;
    readonly title: string;
    readonly icon?: string | undefined;
}[];
/** Whether the visit's address begins with what the user typed, so Enter may open it in place of the typed text. */
export declare function completes(visit: Visit, query: string): boolean;
/** Splits text around case-insensitive matches of the query, for drawing the matched parts. */
export declare function highlight(text: string, query: string): {
    text: string;
    match: boolean;
}[];
/** The address without its web scheme or a leading `www.`, as people type it. */
export declare function bare(url: string): string;
