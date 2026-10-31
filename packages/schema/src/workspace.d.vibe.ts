import { Schema } from "effect";
export * as Workspace from "./workspace.vibe";
import { WorkspaceEvent } from "./workspace-event.vibe";
import { WorkspaceID } from "./workspace-id.vibe";
export declare const ID: Schema.brand<Schema.String, "Workspace.ID"> & {
    ascending: (id?: string) => string & import("effect/Brand").Brand<"Workspace.ID">;
    create: () => string & import("effect/Brand").Brand<"Workspace.ID">;
};
export type ID = WorkspaceID;
export declare const DestroyResult: Schema.Struct<{
    readonly destroyed: Schema.Boolean;
}>;
export interface DestroyResult extends Schema.Schema.Type<typeof DestroyResult> {
}
export declare const Event: typeof WorkspaceEvent;
