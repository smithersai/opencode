import type { SessionInfo, SessionMessageInfo, ShellInfo } from "@opencode/client/promise";
type Subagent = {
    id: string;
    type: "subagent";
    sessionID: string | undefined;
    partID: string | undefined;
    label: string | undefined;
    agent?: string;
    started: number;
};
type Task = (Omit<Subagent, "label"> & {
    label: string;
}) | {
    id: string;
    type: "shell";
    label: string;
    started: number;
};
export declare function createSessionBackground(input: {
    sessionID: () => string | undefined;
    messages: (id: string) => SessionMessageInfo[];
    sessions: () => SessionInfo[];
    status: (id: string) => "idle" | "running";
    shells: () => ShellInfo[];
}): {
    blocking: import("solid-js").Accessor<{
        type: "shell" | "subagent";
        partID: string;
        id: string | undefined;
        label: string | undefined;
        agent: string | undefined;
        started: number;
    }[]>;
    subagents: import("solid-js").Accessor<Subagent[]>;
    tasks: import("solid-js").Accessor<Task[]>;
};
export {};
