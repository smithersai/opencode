export type PartRef = {
    messageID: string;
    partID: string;
};
export type PartGroup = {
    key: string;
    type: "part";
    ref: PartRef;
} | {
    key: string;
    type: "context";
    refs: PartRef[];
} | {
    key: string;
    type: "file" | "read";
    refs: PartRef[];
};
export declare namespace TimelineRow {
    const TurnGap_base: new <A extends Record<string, any> = {}>(args: import("effect/Types").VoidIfEmpty<{ readonly [P in keyof A as P extends "_tag" ? never : P]: A[P]; }>) => Readonly<A> & {
        readonly _tag: "TurnGap";
    } & import("effect/Pipeable").Pipeable;
    export class TurnGap extends TurnGap_base<{
        userMessageID: string;
    }> {
    }
    const UserMessage_base: new <A extends Record<string, any> = {}>(args: import("effect/Types").VoidIfEmpty<{ readonly [P in keyof A as P extends "_tag" ? never : P]: A[P]; }>) => Readonly<A> & {
        readonly _tag: "UserMessage";
    } & import("effect/Pipeable").Pipeable;
    export class UserMessage extends UserMessage_base<{
        userMessageID: string;
    }> {
    }
    const Shell_base: new <A extends Record<string, any> = {}>(args: import("effect/Types").VoidIfEmpty<{ readonly [P in keyof A as P extends "_tag" ? never : P]: A[P]; }>) => Readonly<A> & {
        readonly _tag: "Shell";
    } & import("effect/Pipeable").Pipeable;
    export class Shell extends Shell_base<{
        userMessageID: string;
        messageID: string;
    }> {
    }
    const Notice_base: new <A extends Record<string, any> = {}>(args: import("effect/Types").VoidIfEmpty<{ readonly [P in keyof A as P extends "_tag" ? never : P]: A[P]; }>) => Readonly<A> & {
        readonly _tag: "Notice";
    } & import("effect/Pipeable").Pipeable;
    export class Notice extends Notice_base<{
        userMessageID: string;
        messageID: string;
    }> {
    }
    const TurnDivider_base: new <A extends Record<string, any> = {}>(args: import("effect/Types").VoidIfEmpty<{ readonly [P in keyof A as P extends "_tag" ? never : P]: A[P]; }>) => Readonly<A> & {
        readonly _tag: "TurnDivider";
    } & import("effect/Pipeable").Pipeable;
    export class TurnDivider extends TurnDivider_base<{
        userMessageID: string;
    }> {
    }
    const AssistantPart_base: new <A extends Record<string, any> = {}>(args: import("effect/Types").VoidIfEmpty<{ readonly [P in keyof A as P extends "_tag" ? never : P]: A[P]; }>) => Readonly<A> & {
        readonly _tag: "AssistantPart";
    } & import("effect/Pipeable").Pipeable;
    export class AssistantPart extends AssistantPart_base<{
        userMessageID: string;
        group: PartGroup;
        previousAssistantPart: boolean;
        spacing?: "tool" | "content";
    }> {
    }
    const Thinking_base: new <A extends Record<string, any> = {}>(args: import("effect/Types").VoidIfEmpty<{ readonly [P in keyof A as P extends "_tag" ? never : P]: A[P]; }>) => Readonly<A> & {
        readonly _tag: "Thinking";
    } & import("effect/Pipeable").Pipeable;
    export class Thinking extends Thinking_base<{
        userMessageID: string;
        ref: PartRef;
    }> {
    }
    const Error_base: new <A extends Record<string, any> = {}>(args: import("effect/Types").VoidIfEmpty<{ readonly [P in keyof A as P extends "_tag" ? never : P]: A[P]; }>) => Readonly<A> & {
        readonly _tag: "Error";
    } & import("effect/Pipeable").Pipeable;
    /**
     * `free-limit` marks OpenCode Zen's daily free allowance running out. `budget-limit` marks an OpenCode Console budget
     * on all spend pausing paid models, and `model-budget-limit` one pausing only the models it covers. `resetAt` is when
     * the allowance or budget comes back, if known.
     */
    export class Error extends Error_base<{
        userMessageID: string;
        text: string;
        kind?: "free-limit" | "budget-limit" | "model-budget-limit";
        resetAt?: number;
    }> {
    }
    const Retry_base: new <A extends Record<string, any> = {}>(args: import("effect/Types").VoidIfEmpty<{ readonly [P in keyof A as P extends "_tag" ? never : P]: A[P]; }>) => Readonly<A> & {
        readonly _tag: "Retry";
    } & import("effect/Pipeable").Pipeable;
    export class Retry extends Retry_base<{
        userMessageID: string;
    }> {
    }
    const CompactionQueued_base: new <A extends Record<string, any> = {}>(args: import("effect/Types").VoidIfEmpty<{ readonly [P in keyof A as P extends "_tag" ? never : P]: A[P]; }>) => Readonly<A> & {
        readonly _tag: "CompactionQueued";
    } & import("effect/Pipeable").Pipeable;
    /** A compaction the server has admitted but not started. */
    export class CompactionQueued extends CompactionQueued_base<{
        userMessageID: string;
        inboxID: string;
    }> {
    }
    const TurnDiff_base: new <A extends Record<string, any> = {}>(args: import("effect/Types").VoidIfEmpty<{ readonly [P in keyof A as P extends "_tag" ? never : P]: A[P]; }>) => Readonly<A> & {
        readonly _tag: "TurnDiff";
    } & import("effect/Pipeable").Pipeable;
    /**
     * The files a finished turn changed, shown once the Session goes idle. `messageID` is the
     * idle marker that ended the turn; `from` is the prompt that opened it, which names the turn
     * to the session diff route even when later prompts were steered in. `files` are the paths its
     * steps recorded, listed before the diff loads; the diff can omit a file a later step reverted.
     */
    export class TurnDiff extends TurnDiff_base<{
        userMessageID: string;
        messageID: string;
        from: string;
        files: readonly string[];
    }> {
    }
    const Activity_base: new <A extends Record<string, any> = {}>(args: import("effect/Types").VoidIfEmpty<{ readonly [P in keyof A as P extends "_tag" ? never : P]: A[P]; }>) => Readonly<A> & {
        readonly _tag: "Activity";
    } & import("effect/Pipeable").Pipeable;
    /** Where the host shows the active turn's live status when undelivered input waits below it. */
    export class Activity extends Activity_base<{
        userMessageID: string;
    }> {
    }
    export type TimelineRow = TurnGap | UserMessage | Shell | Notice | TurnDivider | AssistantPart | Thinking | Error | Retry | CompactionQueued | TurnDiff | Activity;
    export const key: (row: TimelineRow) => string;
    export function equals(a: TimelineRow, b: TimelineRow): boolean;
    export {};
}
export type TimelineRowMap = {
    TurnGap: {
        userMessageID: string;
    };
    UserMessage: {
        userMessageID: string;
    };
    Shell: {
        userMessageID: string;
        messageID: string;
    };
    Notice: {
        userMessageID: string;
        messageID: string;
    };
    TurnDivider: {
        userMessageID: string;
    };
    AssistantPart: {
        userMessageID: string;
        group: PartGroup;
        previousAssistantPart: boolean;
        spacing?: "tool" | "content";
    };
    Thinking: {
        userMessageID: string;
        ref: PartRef;
    };
    Retry: {
        userMessageID: string;
    };
    Error: {
        userMessageID: string;
        text: string;
        kind?: "free-limit" | "budget-limit" | "model-budget-limit";
        resetAt?: number;
    };
    CompactionQueued: {
        userMessageID: string;
        inboxID: string;
    };
    TurnDiff: {
        userMessageID: string;
        messageID: string;
        from: string;
        files: readonly string[];
    };
    Activity: {
        userMessageID: string;
    };
};
