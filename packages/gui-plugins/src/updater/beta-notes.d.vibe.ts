import { Option, Schema } from "effect";
/** What a beta build embeds (packages/desktop/script/beta-notes.ts), newest first. */
declare const Embedded: Schema.Struct<{
    /** The build's commit. */
    readonly sha: Schema.String;
    /** The short shas of the build's newest commits, merges included. */
    readonly commits: Schema.$Array<Schema.String>;
    /** The feat, fix and perf commits among them. */
    readonly notes: Schema.$Array<Schema.Struct<{
        readonly type: Schema.Literals<readonly ["feat", "fix", "perf"]>;
        readonly summary: Schema.String;
        readonly pr: Schema.optional<Schema.Number>;
        readonly sha: Schema.String;
        readonly author: Schema.optional<Schema.Struct<{
            readonly name: Schema.String;
            readonly login: Schema.optional<Schema.String>;
            readonly avatar: Schema.optional<Schema.String>;
        }>>;
        readonly description: Schema.optional<Schema.String>;
        readonly visual: Schema.optional<Schema.Struct<{
            readonly animated: Schema.String;
            readonly still: Schema.String;
        }>>;
    }>>;
}>;
export type EmbeddedNotes = typeof Embedded.Type;
/** Decodes the notes a beta build embeds as JSON. Other builds embed none. */
export declare const decodeEmbeddedNotes: (input: unknown, options?: import("effect/SchemaAST").ParseOptions) => Option.Option<{
    readonly sha: string;
    readonly commits: readonly string[];
    readonly notes: readonly {
        readonly type: "feat" | "fix" | "perf";
        readonly summary: string;
        readonly pr?: number | undefined;
        readonly sha: string;
        readonly author?: {
            readonly name: string;
            readonly login?: string | undefined;
            readonly avatar?: string | undefined;
        } | undefined;
        readonly description?: string | undefined;
        readonly visual?: {
            readonly animated: string;
            readonly still: string;
        } | undefined;
    }[];
}>;
export type BetaNote = {
    readonly sha: string;
    readonly type: "feat" | "fix" | "perf";
    readonly summary: string;
    /** A sentence or two from the pull request about what it does, read out for its visual. */
    readonly description?: string;
    /** A small looping SVG of the change, from the pull request's "### Visual", sanitized at build time. */
    readonly visual?: {
        readonly animated: string;
        readonly still: string;
    };
    readonly pr?: {
        readonly number: number;
        readonly url: string;
    };
    /** Who made it, with GitHub's public avatar when the build could ask GitHub. */
    readonly author?: {
        readonly name: string;
        readonly avatar?: string;
    };
};
export type BetaNotes = {
    /** New features, newest first. */
    readonly added: readonly BetaNote[];
    /** Fixes and performance improvements, newest first. */
    readonly fixed: readonly BetaNote[];
    /** How many changes the header counts: every one since the previous build, or the listed ones when that is unknown. */
    readonly total: number;
    /** Some changes since the previous build are not listed. */
    readonly more: boolean;
};
/**
 * The changes since the build at `previous`: the notes of the commits newer than it, features first, then fixes, at
 * most 10 in all and at least half of them features when there are enough. When `previous` is older than the embedded
 * history (or was force-pushed away), the newest notes stand in, with the rest on the What's new page. None without a previous commit,
 * or without a change.
 */
export declare function sliceBetaNotes(embedded: EmbeddedNotes, previous: string | undefined): Option.Option<BetaNotes>;
/** Every change the build carries, features first, then fixes, newest first: the What's new page. */
export declare function allBetaNotes(embedded: EmbeddedNotes): BetaNotes;
/** The build's commit history on GitHub. */
export declare const betaHistory: (embedded: EmbeddedNotes) => string;
/** The beta run number of a version such as `0.0.0-beta-21180`, or the version itself. */
export declare function betaBuild(version: string): string;
/**
 * A visual as an image source. An image never runs scripts or loads anything, and does not inherit the page's colour, so
 * `color` sets its currentColor. Reduced motion uses the still copy the build made without the animations.
 */
export declare function visualSource(visual: NonNullable<BetaNote["visual"]>, input: {
    color: string;
    still: boolean;
}): string;
export {};
