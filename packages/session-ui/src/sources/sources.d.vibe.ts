import type { SessionMessageAssistant, SessionMessageInfo } from "@opencode/client/promise";
export type SourceResult = {
    url: string;
    title?: string;
    /** The hostname without `www.`, as shown and as the letter tile's seed. */
    site: string;
    /** The full hostname, where its favicon lives. */
    host: string;
};
type StepStatus = "running" | "completed" | "error";
export type SourceStep = {
    type: "search";
    id: string;
    query: string;
    status: StepStatus;
    results: SourceResult[];
    error?: string;
} | ({
    type: "fetch";
    id: string;
    path: string;
    status: StepStatus;
    error?: string;
} & SourceResult);
export type TurnSources = {
    steps: SourceStep[];
    /** Distinct sources in the order the turn met them: search results and opened pages, deduped by URL. */
    sources: SourceResult[];
};
/** The web searches and page fetches of one turn's assistant messages, in the order they ran. */
export declare function turnSources(messages: readonly SessionMessageAssistant[]): TurnSources;
/** The assistant messages of the turn a user message opened, grouped as the timeline groups them. */
export declare function turnMessages(messages: readonly SessionMessageInfo[], from: string): SessionMessageAssistant[];
export {};
