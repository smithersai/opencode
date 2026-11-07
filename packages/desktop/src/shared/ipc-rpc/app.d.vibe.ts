import { Schema } from "effect";
import { Rpc, RpcGroup } from "effect/rpc";
export declare const AppAwaitInitialization: Rpc.Rpc<"AppAwaitInitialization", Schema.Void, Schema.Struct<{
    readonly url: Schema.String;
}>, Schema.Never, never, never>;
export declare const AppReconnectService: Rpc.Rpc<"AppReconnectService", Schema.Void, Schema.Struct<{
    readonly url: Schema.String;
}>, Schema.Never, never, never>;
export declare const AppConsumeInitialDeepLinks: Rpc.Rpc<"AppConsumeInitialDeepLinks", Schema.Void, Schema.$Array<Schema.String>, Schema.Never, never, never>;
export declare const AppIsFirstLaunchOnboardingPending: Rpc.Rpc<"AppIsFirstLaunchOnboardingPending", Schema.Void, Schema.Boolean, Schema.Never, never, never>;
export declare const AppFinishFirstLaunchOnboarding: Rpc.Rpc<"AppFinishFirstLaunchOnboarding", Schema.Struct<{
    createDefaultProject: Schema.Boolean;
}>, Schema.NullOr<Schema.String>, Schema.Never, never, never>;
export declare const AppCheckAppExists: Rpc.Rpc<"AppCheckAppExists", Schema.Struct<{
    appName: Schema.String;
}>, Schema.Boolean, Schema.Never, never, never>;
export declare const AppResolveAppPath: Rpc.Rpc<"AppResolveAppPath", Schema.Struct<{
    appName: Schema.String;
}>, Schema.NullOr<Schema.String>, Schema.Never, never, never>;
export declare const AppSetBackgroundColor: Rpc.Rpc<"AppSetBackgroundColor", Schema.Struct<{
    color: Schema.String;
}>, Schema.Void, Schema.Never, never, never>;
export declare const AppExportDebugLogs: Rpc.Rpc<"AppExportDebugLogs", Schema.Void, Schema.String, Schema.Never, never, never>;
export declare const AppSetForceFocus: Rpc.Rpc<"AppSetForceFocus", Schema.Struct<{
    enabled: Schema.Boolean;
}>, Schema.Void, Schema.Never, never, never>;
export declare const AppRecordFatalRendererError: Rpc.Rpc<"AppRecordFatalRendererError", Schema.Struct<{
    error: Schema.Struct<{
        readonly error: Schema.String;
        readonly url: Schema.String;
        readonly version: Schema.optionalKey<Schema.String>;
        readonly platform: Schema.String;
        readonly os: Schema.optionalKey<Schema.String>;
    }>;
}>, Schema.Void, Schema.Never, never, never>;
export declare const AppSetNativeTranslations: Rpc.Rpc<"AppSetNativeTranslations", Schema.Struct<{
    value: Schema.Unknown;
}>, Schema.Void, Schema.Never, never, never>;
export declare const AppRelaunch: Rpc.Rpc<"AppRelaunch", Schema.Void, Schema.Void, Schema.Never, never, never>;
export declare const AppRpcs: RpcGroup.RpcGroup<Rpc.Rpc<"AppAwaitInitialization", Schema.Void, Schema.Struct<{
    readonly url: Schema.String;
}>, Schema.Never, never, never> | Rpc.Rpc<"AppCheckAppExists", Schema.Struct<{
    appName: Schema.String;
}>, Schema.Boolean, Schema.Never, never, never> | Rpc.Rpc<"AppConsumeInitialDeepLinks", Schema.Void, Schema.$Array<Schema.String>, Schema.Never, never, never> | Rpc.Rpc<"AppExportDebugLogs", Schema.Void, Schema.String, Schema.Never, never, never> | Rpc.Rpc<"AppFinishFirstLaunchOnboarding", Schema.Struct<{
    createDefaultProject: Schema.Boolean;
}>, Schema.NullOr<Schema.String>, Schema.Never, never, never> | Rpc.Rpc<"AppIsFirstLaunchOnboardingPending", Schema.Void, Schema.Boolean, Schema.Never, never, never> | Rpc.Rpc<"AppReconnectService", Schema.Void, Schema.Struct<{
    readonly url: Schema.String;
}>, Schema.Never, never, never> | Rpc.Rpc<"AppRecordFatalRendererError", Schema.Struct<{
    error: Schema.Struct<{
        readonly error: Schema.String;
        readonly url: Schema.String;
        readonly version: Schema.optionalKey<Schema.String>;
        readonly platform: Schema.String;
        readonly os: Schema.optionalKey<Schema.String>;
    }>;
}>, Schema.Void, Schema.Never, never, never> | Rpc.Rpc<"AppRelaunch", Schema.Void, Schema.Void, Schema.Never, never, never> | Rpc.Rpc<"AppResolveAppPath", Schema.Struct<{
    appName: Schema.String;
}>, Schema.NullOr<Schema.String>, Schema.Never, never, never> | Rpc.Rpc<"AppSetBackgroundColor", Schema.Struct<{
    color: Schema.String;
}>, Schema.Void, Schema.Never, never, never> | Rpc.Rpc<"AppSetForceFocus", Schema.Struct<{
    enabled: Schema.Boolean;
}>, Schema.Void, Schema.Never, never, never> | Rpc.Rpc<"AppSetNativeTranslations", Schema.Struct<{
    value: Schema.Unknown;
}>, Schema.Void, Schema.Never, never, never>>;
