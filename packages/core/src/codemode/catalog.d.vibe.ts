import { Schema } from "effect";
export * as CodeModeCatalog from "./catalog.vibe";
export type Tool = {
    readonly type: "tool";
    readonly name: string;
    readonly description: string;
    readonly signature: string;
    readonly pinned?: boolean;
};
export type Namespace = {
    readonly type: "namespace";
    readonly name: string;
    readonly description?: string;
    readonly tools: ReadonlyArray<Tool | Namespace>;
};
export type Inventory = {
    readonly tools: ReadonlyArray<Tool | Namespace>;
};
declare const NamespaceSummary: Schema.Struct<{
    readonly name: Schema.String;
    readonly description: Schema.optionalKey<Schema.String>;
    readonly count: Schema.Number;
    readonly entries: Schema.$Array<Schema.Struct<{
        readonly path: Schema.String;
        readonly line: Schema.String;
    }>>;
}>;
export declare const Summary: Schema.Struct<{
    readonly total: Schema.Number;
    readonly shown: Schema.Number;
    readonly namespaces: Schema.$Array<Schema.Struct<{
        readonly name: Schema.String;
        readonly description: Schema.optionalKey<Schema.String>;
        readonly count: Schema.Number;
        readonly entries: Schema.$Array<Schema.Struct<{
            readonly path: Schema.String;
            readonly line: Schema.String;
        }>>;
    }>>;
}>;
export type Summary = typeof Summary.Type;
export type Options = {
    readonly budget?: number;
};
export declare function summarize(inventory: Inventory, options?: Options): Summary;
export declare function namespaceLine(namespace: typeof NamespaceSummary.Type): string;
