export * as ConfigMigrateV1 from "./migrate.vibe";
import { ConfigAgent } from "@opencode/schema/config/agent";
import { ConfigAgentV1 } from "./agent.vibe";
import { ConfigCommandV1 } from "./command.vibe";
import { ConfigMCPV1 } from "./mcp.vibe";
import { ConfigProviderV1 } from "./provider.vibe";
export declare function normalizeAction(action: string): string;
export declare function migrateAgent(info: ConfigAgentV1.Info): ConfigAgent.Info;
export declare function migrateCommand(command: ConfigCommandV1.Info): {
    template: string;
    description: string | undefined;
    agent: string | undefined;
    model: {
        providerID: string;
        model: string;
        variant?: string | undefined;
    } | undefined;
    subagent: boolean | undefined;
};
export declare function modelSelection(input?: string, variant?: string): {
    providerID: string;
    model: string;
    variant?: string | undefined;
} | undefined;
export declare function migrateMcpTimeout(timeout: number): {
    startup: number;
    catalog: number;
    execution: number;
};
export declare function migrateMcp(info: ConfigMCPV1.Info): {
    type: "local";
    command: string[];
    cwd: string | undefined;
    environment: {
        readonly [x: string]: string;
    } | undefined;
    disabled: boolean | undefined;
    codemode: boolean | undefined;
    timeout: {
        startup: number;
        catalog: number;
        execution: number;
    } | undefined;
    url?: undefined;
    headers?: undefined;
    oauth?: undefined;
} | {
    command?: undefined;
    cwd?: undefined;
    environment?: undefined;
    type: "remote";
    url: string;
    headers: {
        readonly [x: string]: string;
    } | undefined;
    oauth: false | {
        client_id: string | undefined;
        client_secret: string | undefined;
        scope: string | undefined;
        callback_port: number | undefined;
        redirect_uri: string | undefined;
    } | undefined;
    disabled: boolean | undefined;
    codemode: boolean | undefined;
    timeout: {
        startup: number;
        catalog: number;
        execution: number;
    } | undefined;
};
export declare function migrateProvider(sourceID: string, info: ConfigProviderV1.Info): {
    name: string | undefined;
    env: string[] | undefined;
    package: string | undefined;
    compatibility: {
        supportsPromptCacheKey: boolean;
    } | undefined;
    settings: Record<string, unknown> | undefined;
    headers: Record<string, string> | undefined;
    body: Record<string, unknown> | undefined;
    models: {
        [k: string]: {
            modelID: string | undefined;
            family: string | undefined;
            name: string | undefined;
            compatibility: import("@opencode/schema/model-compatibility").Compatibility | undefined;
            package: string | undefined;
            settings: {
                [k: string]: unknown;
            } | undefined;
            capabilities: {
                tools: boolean;
                input: string[];
                output: string[];
            } | undefined;
            headers: {
                readonly [x: string]: string;
            } | undefined;
            body: {
                [k: string]: unknown;
            } | undefined;
            variants: {
                settings: {
                    [k: string]: unknown;
                };
                body: {
                    [k: string]: unknown;
                } | undefined;
                id: string;
            }[] | undefined;
            cost: ({
                input: number;
                output: number;
                cache: {
                    read: number | undefined;
                    write: number | undefined;
                };
                tier?: undefined;
            } | {
                tier: {
                    type: "context";
                    size: number;
                };
                input: number;
                output: number;
                cache: {
                    read: number | undefined;
                    write: number | undefined;
                };
            })[] | undefined;
            disabled: boolean | undefined;
            limit: {
                context: number;
                input: number | undefined;
                output: number;
            } | undefined;
        };
    } | undefined;
};
export declare function providerID(input: string): string;
