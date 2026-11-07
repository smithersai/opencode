import { Schema } from "effect";
import { Ipc } from "@opencode/plugin/gui";
export declare const SshConfig: Schema.Struct<{
    readonly id: Schema.String;
    readonly target: Schema.String;
    readonly name: Schema.String;
}>;
export type SshConfig = typeof SshConfig.Type;
export declare const SshHttp: Schema.Struct<{
    readonly url: Schema.String;
    readonly password: Schema.String;
}>;
export type SshHttp = typeof SshHttp.Type;
export declare const SshStage: Schema.Literals<readonly ["disconnected", "connecting", "checking", "downloading", "uploading", "starting", "ready", "authentication", "incompatible", "failed"]>;
export declare const SshPrompt: Schema.Struct<{
    readonly id: Schema.String;
    readonly text: Schema.String;
    readonly confirm: Schema.Boolean;
}>;
export declare const SshItem: Schema.Struct<{
    readonly config: Schema.Struct<{
        readonly id: Schema.String;
        readonly target: Schema.String;
        readonly name: Schema.String;
    }>;
    readonly saved: Schema.Boolean;
    readonly destination: Schema.optional<Schema.String>;
    readonly stage: Schema.Literals<readonly ["disconnected", "connecting", "checking", "downloading", "uploading", "starting", "ready", "authentication", "incompatible", "failed"]>;
    readonly http: Schema.optional<Schema.Struct<{
        readonly url: Schema.String;
        readonly password: Schema.String;
    }>>;
    readonly prompt: Schema.optional<Schema.Struct<{
        readonly id: Schema.String;
        readonly text: Schema.String;
        readonly confirm: Schema.Boolean;
    }>>;
    readonly authenticatingElsewhere: Schema.optional<Schema.Boolean>;
    readonly detail: Schema.String;
    readonly error: Schema.optional<Schema.Literals<readonly ["connection", "input", "platform", "version", "install", "service", "host-key", "ssh-missing", "unpublished"]>>;
}>;
export type SshItem = typeof SshItem.Type;
/** `revision` grows with every push, so a caller can wait for the state that follows its request. */
export declare const SshState: Schema.Struct<{
    readonly servers: Schema.$Array<Schema.Struct<{
        readonly config: Schema.Struct<{
            readonly id: Schema.String;
            readonly target: Schema.String;
            readonly name: Schema.String;
        }>;
        readonly saved: Schema.Boolean;
        readonly destination: Schema.optional<Schema.String>;
        readonly stage: Schema.Literals<readonly ["disconnected", "connecting", "checking", "downloading", "uploading", "starting", "ready", "authentication", "incompatible", "failed"]>;
        readonly http: Schema.optional<Schema.Struct<{
            readonly url: Schema.String;
            readonly password: Schema.String;
        }>>;
        readonly prompt: Schema.optional<Schema.Struct<{
            readonly id: Schema.String;
            readonly text: Schema.String;
            readonly confirm: Schema.Boolean;
        }>>;
        readonly authenticatingElsewhere: Schema.optional<Schema.Boolean>;
        readonly detail: Schema.String;
        readonly error: Schema.optional<Schema.Literals<readonly ["connection", "input", "platform", "version", "install", "service", "host-key", "ssh-missing", "unpublished"]>>;
    }>>;
    readonly revision: Schema.Number;
}>;
export type SshState = typeof SshState.Type;
export declare const SshStart: Schema.Struct<{
    readonly id: Schema.String;
    readonly target: Schema.String;
    readonly name: Schema.String;
    readonly replace: Schema.optional<Schema.Boolean>;
    readonly background: Schema.optional<Schema.Boolean>;
}>;
export type SshStart = typeof SshStart.Type;
/** SSH connections, owned by the main process. Prompts reach only the window that started the attempt. */
export declare const Ssh: Ipc<{
    readonly id: "ssh";
    readonly state: Schema.Struct<{
        readonly servers: Schema.$Array<Schema.Struct<{
            readonly config: Schema.Struct<{
                readonly id: Schema.String;
                readonly target: Schema.String;
                readonly name: Schema.String;
            }>;
            readonly saved: Schema.Boolean;
            readonly destination: Schema.optional<Schema.String>;
            readonly stage: Schema.Literals<readonly ["disconnected", "connecting", "checking", "downloading", "uploading", "starting", "ready", "authentication", "incompatible", "failed"]>;
            readonly http: Schema.optional<Schema.Struct<{
                readonly url: Schema.String;
                readonly password: Schema.String;
            }>>;
            readonly prompt: Schema.optional<Schema.Struct<{
                readonly id: Schema.String;
                readonly text: Schema.String;
                readonly confirm: Schema.Boolean;
            }>>;
            readonly authenticatingElsewhere: Schema.optional<Schema.Boolean>;
            readonly detail: Schema.String;
            readonly error: Schema.optional<Schema.Literals<readonly ["connection", "input", "platform", "version", "install", "service", "host-key", "ssh-missing", "unpublished"]>>;
        }>>;
        readonly revision: Schema.Number;
    }>;
    readonly methods: {
        /** Resolves with the state revision that includes the admitted attempt. */
        start: {
            input: Schema.Struct<{
                readonly id: Schema.String;
                readonly target: Schema.String;
                readonly name: Schema.String;
                readonly replace: Schema.optional<Schema.Boolean>;
                readonly background: Schema.optional<Schema.Boolean>;
            }>;
            output: Schema.Number;
        };
        resolve: {
            input: Schema.Struct<{
                readonly id: Schema.String;
            }>;
            output: Schema.NullOr<Schema.Struct<{
                readonly url: Schema.String;
                readonly password: Schema.String;
            }>>;
        };
        respond: {
            input: Schema.Struct<{
                readonly id: Schema.String;
                readonly prompt: Schema.String;
                readonly value: Schema.String;
            }>;
        };
        cancel: {
            input: Schema.Struct<{
                readonly id: Schema.String;
            }>;
        };
        forget: {
            input: Schema.Struct<{
                readonly id: Schema.String;
            }>;
        };
    };
}>;
