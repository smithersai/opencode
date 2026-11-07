import { Effect } from "effect";
import type { IntegrationInfo } from "@opencode/client";
export declare const chooseIntegration: (integrations: IntegrationInfo[], target?: string | undefined) => Effect.Effect<IntegrationInfo, unknown, never>;
export declare const chooseCredential: (integration: IntegrationInfo, action: "log out" | "switch to", target?: string | undefined) => Effect.Effect<string, unknown, never>;
