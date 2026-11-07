import { Cause, Context, Effect, Schema } from "effect";
export * as PermissionSaved from "./saved.vibe";
import type { Project } from "@opencode/schema/project";
export declare const ID: Schema.brand<Schema.String, "PermissionSaved.ID"> & {
    create: () => string & import("effect/Brand").Brand<"PermissionSaved.ID">;
};
export type ID = typeof ID.Type;
export declare const Info: Schema.Struct<{
    readonly id: Schema.brand<Schema.String, "PermissionSaved.ID"> & {
        create: () => string & import("effect/Brand").Brand<"PermissionSaved.ID">;
    };
    readonly projectID: Schema.brand<Schema.String, "Project.ID"> & {
        global: string & import("effect/Brand").Brand<"Project.ID">;
    };
    readonly action: Schema.String;
    readonly resource: Schema.String;
    readonly time: Schema.Struct<{
        readonly created: Schema.decodeTo<Schema.DateTimeUtc, Schema.Finite, never, never>;
        readonly updated: Schema.decodeTo<Schema.DateTimeUtc, Schema.Finite, never, never>;
    }>;
}>;
export type Info = typeof Info.Type;
export interface ListInput {
    readonly projectID?: Project.ID;
}
export interface AddInput {
    readonly projectID: Project.ID;
    readonly action: string;
    readonly resources: readonly string[];
}
export interface UpdateInput {
    readonly id: ID;
    readonly action?: string;
    readonly resource?: string;
}
declare const NotFoundError_base: Schema.Class<NotFoundError, Schema.TaggedStruct<"PermissionSaved.NotFoundError", {
    readonly id: Schema.brand<Schema.String, "PermissionSaved.ID"> & {
        create: () => string & import("effect/Brand").Brand<"PermissionSaved.ID">;
    };
}>, Cause.YieldableError>;
export declare class NotFoundError extends NotFoundError_base {
}
declare const ConflictError_base: Schema.Class<ConflictError, Schema.TaggedStruct<"PermissionSaved.ConflictError", {
    readonly id: Schema.brand<Schema.String, "PermissionSaved.ID"> & {
        create: () => string & import("effect/Brand").Brand<"PermissionSaved.ID">;
    };
    readonly action: Schema.String;
    readonly resource: Schema.String;
}>, Cause.YieldableError>;
export declare class ConflictError extends ConflictError_base {
}
export interface Interface {
    readonly list: (input?: ListInput) => Effect.Effect<ReadonlyArray<Info>>;
    readonly add: (input: AddInput) => Effect.Effect<void>;
    readonly update: (input: UpdateInput) => Effect.Effect<Info, NotFoundError | ConflictError>;
    readonly remove: (id: ID) => Effect.Effect<void>;
}
declare const Service_base: Context.ServiceClass<Service, "@opencode/PermissionSaved", Interface>;
export declare class Service extends Service_base {
}
export declare const node: import("@opencode/util/effect/layer-node").Provider<Service, never, import("@opencode/util/effect/layer-node").Tag<"global">>;
