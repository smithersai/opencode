import { Effect } from "effect";
export * as SessionShell from "./shell.vibe";
import type { Session } from "@opencode/schema/session";
import { Instance } from "../instance/service.ts";
import { ShellResult } from "../shell/result.ts";
export declare const start: (input: {
    session: Session.Info;
    command: string;
}) => Effect.Effect<{
    info: import("@opencode/schema/shell").Info;
    result: Effect.Effect<ShellResult.Result, never, never>;
    output: Effect.Effect<import("@opencode/schema/shell").Output, never, never>;
}, import("@opencode/util/process").AppProcessError | import("../filesystem.ts").DirectoryNotFoundError, Instance.Service>;
