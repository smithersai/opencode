import type { NewSessionComposerAdapter } from "@/composer/adapter";
import type { DraftMcpControls } from "./mcp.js";
export declare function createNewSessionComposerAdapter(props: {
    draftID: string;
    worktree: () => string;
    branch: () => string | undefined;
    submitted: () => void;
    mcp: DraftMcpControls;
}): {
    adapter: NewSessionComposerAdapter;
    project: import("solid-js").Accessor<import("./project/selector.js").PromptProjectControls>;
    model: {
        trackSessionCommit: (sessionID: string, selection: {
            agent: string;
            model: import("@/providers/models/selection").ModelKey;
            variant?: string;
        }) => () => void;
        remembered: () => {
            [k: string]: {
                model: {
                    readonly providerID: string;
                    readonly modelID: string;
                    readonly variant?: string | undefined;
                } | undefined;
            };
        };
        ready: (() => boolean) & {
            promise: Promise<unknown> | undefined;
        };
        key: () => {
            readonly providerID: string;
            readonly modelID: string;
            readonly variant?: string | undefined;
        } | undefined;
        current: () => {
            id: string;
            providerID: string;
            api: {
                id: string;
                url: string;
                npm: string;
            };
            family?: string;
            capabilities: {
                temperature: boolean;
                reasoning: boolean;
                attachment: boolean;
                toolcall: boolean;
                input: {
                    text: boolean;
                    audio: boolean;
                    image: boolean;
                    video: boolean;
                    pdf: boolean;
                };
                output: {
                    text: boolean;
                    audio: boolean;
                    image: boolean;
                    video: boolean;
                    pdf: boolean;
                };
                interleaved: boolean | {
                    field: "reasoning" | "reasoning_content" | "reasoning_details";
                };
            };
            cost: {
                input: number;
                output: number;
                cache: {
                    read: number;
                    write: number;
                };
                tiers?: {
                    input: number;
                    output: number;
                    cache: {
                        read: number;
                        write: number;
                    };
                    tier: {
                        type: "context";
                        size: number;
                    };
                }[];
                experimentalOver200K?: {
                    input: number;
                    output: number;
                    cache: {
                        read: number;
                        write: number;
                    };
                };
            };
            limit: {
                context: number;
                input?: number;
                output: number;
            };
            status: "alpha" | "beta" | "deprecated" | "active";
            options: Record<string, unknown>;
            headers: Record<string, string>;
            release_date: string;
            variants?: Record<string, Record<string, unknown>>;
            provider: import("../runtime/server/types.js").Provider;
            name: string;
            latest: boolean;
        } | undefined;
        recent: import("solid-js").Accessor<{
            id: string;
            providerID: string;
            api: {
                id: string;
                url: string;
                npm: string;
            };
            family?: string;
            capabilities: {
                temperature: boolean;
                reasoning: boolean;
                attachment: boolean;
                toolcall: boolean;
                input: {
                    text: boolean;
                    audio: boolean;
                    image: boolean;
                    video: boolean;
                    pdf: boolean;
                };
                output: {
                    text: boolean;
                    audio: boolean;
                    image: boolean;
                    video: boolean;
                    pdf: boolean;
                };
                interleaved: boolean | {
                    field: "reasoning" | "reasoning_content" | "reasoning_details";
                };
            };
            cost: {
                input: number;
                output: number;
                cache: {
                    read: number;
                    write: number;
                };
                tiers?: {
                    input: number;
                    output: number;
                    cache: {
                        read: number;
                        write: number;
                    };
                    tier: {
                        type: "context";
                        size: number;
                    };
                }[];
                experimentalOver200K?: {
                    input: number;
                    output: number;
                    cache: {
                        read: number;
                        write: number;
                    };
                };
            };
            limit: {
                context: number;
                input?: number;
                output: number;
            };
            status: "alpha" | "beta" | "deprecated" | "active";
            options: Record<string, unknown>;
            headers: Record<string, string>;
            release_date: string;
            variants?: Record<string, Record<string, unknown>>;
            provider: import("../runtime/server/types.js").Provider;
            name: string;
            latest: boolean;
        }[]>;
        favorite: {
            list: import("solid-js").Accessor<{
                id: string;
                providerID: string;
                api: {
                    id: string;
                    url: string;
                    npm: string;
                };
                family?: string;
                capabilities: {
                    temperature: boolean;
                    reasoning: boolean;
                    attachment: boolean;
                    toolcall: boolean;
                    input: {
                        text: boolean;
                        audio: boolean;
                        image: boolean;
                        video: boolean;
                        pdf: boolean;
                    };
                    output: {
                        text: boolean;
                        audio: boolean;
                        image: boolean;
                        video: boolean;
                        pdf: boolean;
                    };
                    interleaved: boolean | {
                        field: "reasoning" | "reasoning_content" | "reasoning_details";
                    };
                };
                cost: {
                    input: number;
                    output: number;
                    cache: {
                        read: number;
                        write: number;
                    };
                    tiers?: {
                        input: number;
                        output: number;
                        cache: {
                            read: number;
                            write: number;
                        };
                        tier: {
                            type: "context";
                            size: number;
                        };
                    }[];
                    experimentalOver200K?: {
                        input: number;
                        output: number;
                        cache: {
                            read: number;
                            write: number;
                        };
                    };
                };
                limit: {
                    context: number;
                    input?: number;
                    output: number;
                };
                status: "alpha" | "beta" | "deprecated" | "active";
                options: Record<string, unknown>;
                headers: Record<string, string>;
                release_date: string;
                variants?: Record<string, Record<string, unknown>>;
                provider: import("../runtime/server/types.js").Provider;
                name: string;
                latest: boolean;
            }[]>;
            toggle: (model: {
                providerID: string;
                modelID: string;
            }) => void;
        };
        list: import("solid-js").Accessor<{
            id: string;
            providerID: string;
            api: {
                id: string;
                url: string;
                npm: string;
            };
            family?: string;
            capabilities: {
                temperature: boolean;
                reasoning: boolean;
                attachment: boolean;
                toolcall: boolean;
                input: {
                    text: boolean;
                    audio: boolean;
                    image: boolean;
                    video: boolean;
                    pdf: boolean;
                };
                output: {
                    text: boolean;
                    audio: boolean;
                    image: boolean;
                    video: boolean;
                    pdf: boolean;
                };
                interleaved: boolean | {
                    field: "reasoning" | "reasoning_content" | "reasoning_details";
                };
            };
            cost: {
                input: number;
                output: number;
                cache: {
                    read: number;
                    write: number;
                };
                tiers?: {
                    input: number;
                    output: number;
                    cache: {
                        read: number;
                        write: number;
                    };
                    tier: {
                        type: "context";
                        size: number;
                    };
                }[];
                experimentalOver200K?: {
                    input: number;
                    output: number;
                    cache: {
                        read: number;
                        write: number;
                    };
                };
            };
            limit: {
                context: number;
                input?: number;
                output: number;
            };
            status: "alpha" | "beta" | "deprecated" | "active";
            options: Record<string, unknown>;
            headers: Record<string, string>;
            release_date: string;
            variants?: Record<string, Record<string, unknown>>;
            provider: import("../runtime/server/types.js").Provider;
            name: string;
            latest: boolean;
        }[]>;
        cycle(direction: 1 | -1): void;
        set(item: import("@/providers/models/selection").ModelKey | undefined, options?: {
            recent?: boolean;
        }): void;
        visible: (model: {
            providerID: string;
            modelID: string;
        }) => boolean;
        setVisibility: (model: {
            providerID: string;
            modelID: string;
        }, state: boolean) => void;
        variant: {
            configured(model?: {
                id: string;
                providerID: string;
                api: {
                    id: string;
                    url: string;
                    npm: string;
                };
                family?: string;
                capabilities: {
                    temperature: boolean;
                    reasoning: boolean;
                    attachment: boolean;
                    toolcall: boolean;
                    input: {
                        text: boolean;
                        audio: boolean;
                        image: boolean;
                        video: boolean;
                        pdf: boolean;
                    };
                    output: {
                        text: boolean;
                        audio: boolean;
                        image: boolean;
                        video: boolean;
                        pdf: boolean;
                    };
                    interleaved: boolean | {
                        field: "reasoning" | "reasoning_content" | "reasoning_details";
                    };
                };
                cost: {
                    input: number;
                    output: number;
                    cache: {
                        read: number;
                        write: number;
                    };
                    tiers?: {
                        input: number;
                        output: number;
                        cache: {
                            read: number;
                            write: number;
                        };
                        tier: {
                            type: "context";
                            size: number;
                        };
                    }[];
                    experimentalOver200K?: {
                        input: number;
                        output: number;
                        cache: {
                            read: number;
                            write: number;
                        };
                    };
                };
                limit: {
                    context: number;
                    input?: number;
                    output: number;
                };
                status: "alpha" | "beta" | "deprecated" | "active";
                options: Record<string, unknown>;
                headers: Record<string, string>;
                release_date: string;
                variants?: Record<string, Record<string, unknown>>;
                provider: import("../runtime/server/types.js").Provider;
                name: string;
                latest: boolean;
            } | undefined): string | undefined;
            selected(): string | null | undefined;
            current(item?: import("@/providers/models/selection").ModelKey): string | undefined;
            list(): string[];
            set(value: string | undefined): void;
            cycle(): void;
        };
    };
    ready: (() => boolean) & {
        readonly promise: Promise<unknown> | undefined;
    };
};
