import type { SessionMessageAssistant, SessionMessageInfo } from "@opencode/client/promise";
import type { TimelineRow } from "./timeline-row.ts";
/** A user message's place in a run of consecutive user messages: joined to the one above, below, or both. */
export type UserRun = {
    above: boolean;
    below: boolean;
};
/** What a user message brings to a run: its delivery, the agent and model its meta line names, and its surfaces. */
export type UserRunMember = {
    kind: "sent" | "pending";
    agent: string;
    model: SessionMessageAssistant["model"];
    /** It has a text bubble, the surface that carries a run's meta line. */
    text: boolean;
    /** Attachments sit above its bubble. */
    attachments: boolean;
};
/** Layout moves in a run settle on Kit's calm spring: .4 s, bounce 0. */
export declare const userRunSpring: {
    omega: number;
    zeta: number;
};
/**
 * Like the iOS app's grouped corners, consecutive user messages with nothing but turn gaps between them read as
 * one block under a single meta line. Text bubbles with the same agent and model join, and steers waiting for
 * delivery group the same way, but never with a sent message. An agent, model, location or compaction boundary
 * between them ends the run even when the timeline hides its notice.
 */
export declare function userMessageRuns(rows: readonly TimelineRow.TimelineRow[], messages: readonly SessionMessageInfo[], member: (messageID: string) => UserRunMember | undefined): Map<string, {
    above: boolean;
    below: boolean;
}>;
