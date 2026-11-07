export declare function analyzeTrace(value: unknown, limit?: number): {
    metrics: {
        name: string;
        value: number;
        unit: string;
    }[];
    events: {
        name: string;
        count: number;
        totalMs: number;
        maxMs: number;
    }[];
    insights: string[];
};
export declare function analyzeCpu(value: unknown, limit?: number): {
    durationMs: number;
    functions: {
        name: string;
        url: string;
        line: number;
        selfMs: number;
    }[];
};
export declare function parseHeap(value: unknown): {
    summary(limit?: number): {
        nodes: number;
        edges: number;
        selfBytes: number;
        classes: {
            name: string;
            count: number;
            bytes: number;
        }[];
    };
    classes: Map<string, {
        name: string;
        count: number;
        bytes: number;
    }>;
    query(name?: string, limit?: number): {
        nodes: {
            id: number;
            name: string;
            type: any;
            selfBytes: number;
            edgeCount: number;
        }[];
        truncated: boolean;
    };
    object(id: number, limit?: number): {
        node: {
            id: number;
            name: string;
            type: any;
            selfBytes: number;
            edgeCount: number;
        };
        references: {
            name: string;
            node: ReturnType<(offset: number) => {
                id: number;
                name: string;
                type: any;
                selfBytes: number;
                edgeCount: number;
            }>;
        }[];
        retainers: {
            name: string;
            node: ReturnType<(offset: number) => {
                id: number;
                name: string;
                type: any;
                selfBytes: number;
                edgeCount: number;
            }>;
        }[];
        truncated: boolean;
    };
};
