import { Schema } from "effect";
import { Ipc } from "@opencode/plugin/gui";
export declare const WslServerConfig: Schema.Struct<{
    readonly id: Schema.String;
    readonly distro: Schema.String;
}>;
export type WslServerConfig = typeof WslServerConfig.Type;
export declare const WslServerRuntime: Schema.Union<readonly [Schema.Struct<{
    readonly kind: Schema.Literal<"starting">;
}>, Schema.Struct<{
    readonly kind: Schema.Literal<"ready">;
    readonly url: Schema.String;
    readonly password: Schema.NullOr<Schema.String>;
}>, Schema.Struct<{
    readonly kind: Schema.Literal<"failed">;
    readonly message: Schema.String;
}>, Schema.Struct<{
    readonly kind: Schema.Literal<"stopped">;
}>]>;
export type WslServerRuntime = typeof WslServerRuntime.Type;
export declare const WslJob: Schema.Union<readonly [Schema.Struct<{
    readonly kind: Schema.Literal<"runtime">;
    readonly startedAt: Schema.Number;
}>, Schema.Struct<{
    readonly kind: Schema.Literal<"distros">;
    readonly startedAt: Schema.Number;
}>, Schema.Struct<{
    readonly kind: Schema.Literal<"install-wsl">;
    readonly startedAt: Schema.Number;
}>, Schema.Struct<{
    readonly kind: Schema.Literal<"install-distro">;
    readonly distro: Schema.String;
    readonly startedAt: Schema.Number;
}>, Schema.Struct<{
    readonly kind: Schema.Literal<"probe-addable">;
    readonly distros: Schema.$Array<Schema.String>;
    readonly startedAt: Schema.Number;
}>, Schema.Struct<{
    readonly kind: Schema.Literal<"install-opencode">;
    readonly distro: Schema.String;
    readonly startedAt: Schema.Number;
}>]>;
export type WslJob = typeof WslJob.Type;
export declare const WslRuntimeCheck: Schema.Struct<{
    readonly available: Schema.Boolean;
    readonly version: Schema.NullOr<Schema.String>;
    readonly error: Schema.NullOr<Schema.String>;
}>;
export type WslRuntimeCheck = typeof WslRuntimeCheck.Type;
export declare const WslInstalledDistro: Schema.Struct<{
    readonly name: Schema.String;
    readonly version: Schema.NullOr<Schema.Number>;
    readonly isDefault: Schema.Boolean;
}>;
export type WslInstalledDistro = typeof WslInstalledDistro.Type;
export declare const WslOnlineDistro: Schema.Struct<{
    readonly name: Schema.String;
    readonly label: Schema.String;
}>;
export type WslOnlineDistro = typeof WslOnlineDistro.Type;
export declare const WslDistroProbe: Schema.Struct<{
    readonly name: Schema.String;
    readonly canExecute: Schema.Boolean;
    readonly hasBash: Schema.Boolean;
    readonly hasCurl: Schema.Boolean;
    readonly error: Schema.NullOr<Schema.String>;
}>;
export type WslDistroProbe = typeof WslDistroProbe.Type;
export declare const WslOpencodeCheck: Schema.Struct<{
    readonly distro: Schema.String;
    readonly resolvedPath: Schema.NullOr<Schema.String>;
    readonly version: Schema.NullOr<Schema.String>;
    readonly expectedVersion: Schema.NullOr<Schema.String>;
    readonly matchesDesktop: Schema.NullOr<Schema.Boolean>;
    readonly error: Schema.NullOr<Schema.String>;
}>;
export type WslOpencodeCheck = typeof WslOpencodeCheck.Type;
export declare const WslServerItem: Schema.Struct<{
    readonly config: Schema.Struct<{
        readonly id: Schema.String;
        readonly distro: Schema.String;
    }>;
    readonly runtime: Schema.Union<readonly [Schema.Struct<{
        readonly kind: Schema.Literal<"starting">;
    }>, Schema.Struct<{
        readonly kind: Schema.Literal<"ready">;
        readonly url: Schema.String;
        readonly password: Schema.NullOr<Schema.String>;
    }>, Schema.Struct<{
        readonly kind: Schema.Literal<"failed">;
        readonly message: Schema.String;
    }>, Schema.Struct<{
        readonly kind: Schema.Literal<"stopped">;
    }>]>;
}>;
export type WslServerItem = typeof WslServerItem.Type;
export declare const WslServersState: Schema.Struct<{
    readonly runtime: Schema.NullOr<Schema.Struct<{
        readonly available: Schema.Boolean;
        readonly version: Schema.NullOr<Schema.String>;
        readonly error: Schema.NullOr<Schema.String>;
    }>>;
    readonly installed: Schema.$Array<Schema.Struct<{
        readonly name: Schema.String;
        readonly version: Schema.NullOr<Schema.Number>;
        readonly isDefault: Schema.Boolean;
    }>>;
    readonly online: Schema.$Array<Schema.Struct<{
        readonly name: Schema.String;
        readonly label: Schema.String;
    }>>;
    readonly distroProbes: Schema.$Record<Schema.String, Schema.Struct<{
        readonly name: Schema.String;
        readonly canExecute: Schema.Boolean;
        readonly hasBash: Schema.Boolean;
        readonly hasCurl: Schema.Boolean;
        readonly error: Schema.NullOr<Schema.String>;
    }>>;
    readonly opencodeChecks: Schema.$Record<Schema.String, Schema.Struct<{
        readonly distro: Schema.String;
        readonly resolvedPath: Schema.NullOr<Schema.String>;
        readonly version: Schema.NullOr<Schema.String>;
        readonly expectedVersion: Schema.NullOr<Schema.String>;
        readonly matchesDesktop: Schema.NullOr<Schema.Boolean>;
        readonly error: Schema.NullOr<Schema.String>;
    }>>;
    readonly pendingRestart: Schema.Boolean;
    readonly servers: Schema.$Array<Schema.Struct<{
        readonly config: Schema.Struct<{
            readonly id: Schema.String;
            readonly distro: Schema.String;
        }>;
        readonly runtime: Schema.Union<readonly [Schema.Struct<{
            readonly kind: Schema.Literal<"starting">;
        }>, Schema.Struct<{
            readonly kind: Schema.Literal<"ready">;
            readonly url: Schema.String;
            readonly password: Schema.NullOr<Schema.String>;
        }>, Schema.Struct<{
            readonly kind: Schema.Literal<"failed">;
            readonly message: Schema.String;
        }>, Schema.Struct<{
            readonly kind: Schema.Literal<"stopped">;
        }>]>;
    }>>;
    readonly job: Schema.NullOr<Schema.Union<readonly [Schema.Struct<{
        readonly kind: Schema.Literal<"runtime">;
        readonly startedAt: Schema.Number;
    }>, Schema.Struct<{
        readonly kind: Schema.Literal<"distros">;
        readonly startedAt: Schema.Number;
    }>, Schema.Struct<{
        readonly kind: Schema.Literal<"install-wsl">;
        readonly startedAt: Schema.Number;
    }>, Schema.Struct<{
        readonly kind: Schema.Literal<"install-distro">;
        readonly distro: Schema.String;
        readonly startedAt: Schema.Number;
    }>, Schema.Struct<{
        readonly kind: Schema.Literal<"probe-addable">;
        readonly distros: Schema.$Array<Schema.String>;
        readonly startedAt: Schema.Number;
    }>, Schema.Struct<{
        readonly kind: Schema.Literal<"install-opencode">;
        readonly distro: Schema.String;
        readonly startedAt: Schema.Number;
    }>]>>;
}>;
export type WslServersState = typeof WslServersState.Type;
/** WSL runtime, distros, and the OpenCode servers the main process runs inside them. */
export declare const Wsl: Ipc<{
    readonly id: "wsl";
    readonly state: Schema.Struct<{
        readonly runtime: Schema.NullOr<Schema.Struct<{
            readonly available: Schema.Boolean;
            readonly version: Schema.NullOr<Schema.String>;
            readonly error: Schema.NullOr<Schema.String>;
        }>>;
        readonly installed: Schema.$Array<Schema.Struct<{
            readonly name: Schema.String;
            readonly version: Schema.NullOr<Schema.Number>;
            readonly isDefault: Schema.Boolean;
        }>>;
        readonly online: Schema.$Array<Schema.Struct<{
            readonly name: Schema.String;
            readonly label: Schema.String;
        }>>;
        readonly distroProbes: Schema.$Record<Schema.String, Schema.Struct<{
            readonly name: Schema.String;
            readonly canExecute: Schema.Boolean;
            readonly hasBash: Schema.Boolean;
            readonly hasCurl: Schema.Boolean;
            readonly error: Schema.NullOr<Schema.String>;
        }>>;
        readonly opencodeChecks: Schema.$Record<Schema.String, Schema.Struct<{
            readonly distro: Schema.String;
            readonly resolvedPath: Schema.NullOr<Schema.String>;
            readonly version: Schema.NullOr<Schema.String>;
            readonly expectedVersion: Schema.NullOr<Schema.String>;
            readonly matchesDesktop: Schema.NullOr<Schema.Boolean>;
            readonly error: Schema.NullOr<Schema.String>;
        }>>;
        readonly pendingRestart: Schema.Boolean;
        readonly servers: Schema.$Array<Schema.Struct<{
            readonly config: Schema.Struct<{
                readonly id: Schema.String;
                readonly distro: Schema.String;
            }>;
            readonly runtime: Schema.Union<readonly [Schema.Struct<{
                readonly kind: Schema.Literal<"starting">;
            }>, Schema.Struct<{
                readonly kind: Schema.Literal<"ready">;
                readonly url: Schema.String;
                readonly password: Schema.NullOr<Schema.String>;
            }>, Schema.Struct<{
                readonly kind: Schema.Literal<"failed">;
                readonly message: Schema.String;
            }>, Schema.Struct<{
                readonly kind: Schema.Literal<"stopped">;
            }>]>;
        }>>;
        readonly job: Schema.NullOr<Schema.Union<readonly [Schema.Struct<{
            readonly kind: Schema.Literal<"runtime">;
            readonly startedAt: Schema.Number;
        }>, Schema.Struct<{
            readonly kind: Schema.Literal<"distros">;
            readonly startedAt: Schema.Number;
        }>, Schema.Struct<{
            readonly kind: Schema.Literal<"install-wsl">;
            readonly startedAt: Schema.Number;
        }>, Schema.Struct<{
            readonly kind: Schema.Literal<"install-distro">;
            readonly distro: Schema.String;
            readonly startedAt: Schema.Number;
        }>, Schema.Struct<{
            readonly kind: Schema.Literal<"probe-addable">;
            readonly distros: Schema.$Array<Schema.String>;
            readonly startedAt: Schema.Number;
        }>, Schema.Struct<{
            readonly kind: Schema.Literal<"install-opencode">;
            readonly distro: Schema.String;
            readonly startedAt: Schema.Number;
        }>]>>;
    }>;
    readonly methods: {
        probeRuntime: {};
        refreshDistros: {};
        installWsl: {};
        installDistro: {
            input: Schema.Struct<{
                readonly name: Schema.NonEmptyString;
            }>;
        };
        probeAddable: {
            input: Schema.Struct<{
                readonly distros: Schema.$Array<Schema.NonEmptyString>;
            }>;
        };
        installOpencode: {
            input: Schema.Struct<{
                readonly name: Schema.NonEmptyString;
            }>;
        };
        addServer: {
            input: Schema.Struct<{
                readonly distro: Schema.NonEmptyString;
            }>;
            output: Schema.Struct<{
                readonly id: Schema.String;
                readonly distro: Schema.String;
            }>;
        };
        removeServer: {
            input: Schema.Struct<{
                readonly id: Schema.NonEmptyString;
            }>;
        };
        startServer: {
            input: Schema.Struct<{
                readonly id: Schema.NonEmptyString;
            }>;
        };
    };
}>;
