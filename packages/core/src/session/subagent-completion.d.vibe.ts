import { Effect } from "effect";
export * as SubagentCompletion from "./subagent-completion.vibe";
import type { Job } from "../job.ts";
import type { Session } from "../session.ts";
import type { SessionMessage } from "./message.ts";
export declare const NO_TEXT = "Subagent completed without a text response.";
export declare function text(message: SessionMessage.Info | undefined): string;
export declare const deliver: (sessions: Pick<Session.Interface, "synthetic">, jobs: Pick<Job.Interface, "completeBackground">, input: Pick<Job.Info, "status" | "output" | "error" | "notificationID"> & {
    recovery: Extract<Job.Recovery, {
        kind: "subagent";
    }>;
    resume?: boolean;
}) => Effect.Effect<void, Session.NotFoundError | Session.SyntheticConflictError, never>;
