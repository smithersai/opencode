import { Effect } from "effect";
import type { OpenCodeClient } from "@opencode/client";
export declare const resolveIntegration: (client: OpenCodeClient, name: string, location: {
    directory: string;
}) => Effect.Effect<import("@opencode/client").IntegrationInfo | undefined, Error, never>;
