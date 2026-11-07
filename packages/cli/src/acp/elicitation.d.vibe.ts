import { Effect } from "effect";
import type { ElicitationSchema } from "@agentclientprotocol/sdk";
import type { OpenCodeClient } from "@opencode/client/effect";
import { Form } from "@opencode/schema/form";
import type { Capabilities } from "./capabilities.ts";
import { ACPChild } from "./child.ts";
import type { ACPConnection } from "./connection.ts";
export type AskedForm = Omit<Form.Info, "id"> & {
    readonly id: string;
};
type Input = {
    readonly client: OpenCodeClient;
    readonly connection: ACPConnection.Interface;
    readonly form: Form.Info;
    readonly requestedSchema: ElicitationSchema;
    readonly clientSessionID: string;
    readonly child?: ACPChild.Session;
    readonly toolCallSent: boolean;
};
export declare const UnshownQuestionMessage = "The question couldn't be shown to the user in this client. Continue without an answer: make reasonable assumptions and state them, or ask the user in your reply if you can't proceed.";
export declare function requestedSchema(form: AskedForm, capabilities: Capabilities): ElicitationSchema | undefined;
export declare function cancelUnshown(client: OpenCodeClient, form: Form.Info): Effect.Effect<void, never, never>;
export declare const ask: (input: Input) => Effect.Effect<"cancel" | {
    readonly [x: string]: string | number | boolean | readonly string[];
}, import("@agentclientprotocol/sdk").RequestError, never>;
export declare function respond(input: Input, outcome: Form.Answer | "cancel"): Effect.Effect<void, never, never>;
export * as ACPElicitation from "./elicitation.vibe";
