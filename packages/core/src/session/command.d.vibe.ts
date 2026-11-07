import { Effect } from "effect";
export * as SessionCommand from "./command.vibe";
import type { PromptInput } from "@opencode/schema/prompt-input";
import type { Session } from "@opencode/schema/session";
import type { SessionInbox } from "@opencode/schema/session-inbox";
import { Command } from "../command.ts";
import { Instance } from "../instance/service.ts";
export declare const execute: (input: {
    session: Session.Info;
    command: string;
    text: string;
    files?: PromptInput.Prompt["files"];
    agents?: PromptInput.Prompt["agents"];
    skills?: PromptInput.Prompt["skills"];
    delivery?: SessionInbox.Delivery;
}) => Effect.Effect<void, import("../filesystem.ts").DirectoryNotFoundError | Command.ExecutionError | Command.NotFoundError, Instance.Service>;
