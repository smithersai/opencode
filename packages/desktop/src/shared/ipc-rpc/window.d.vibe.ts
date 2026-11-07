import { Schema } from "effect";
import { Rpc, RpcGroup } from "effect/rpc";
export declare const WindowThemeReady: Rpc.Rpc<"WindowThemeReady", Schema.Void, Schema.Void, Schema.Never, never, never>;
export declare const WindowRequestMicrophone: Rpc.Rpc<"WindowRequestMicrophone", Schema.Void, Schema.Boolean, Schema.Never, never, never>;
export declare const WindowSetVoiceCallActive: Rpc.Rpc<"WindowSetVoiceCallActive", Schema.Struct<{
    active: Schema.Boolean;
}>, Schema.Void, Schema.Never, never, never>;
export declare const WindowGetFocused: Rpc.Rpc<"WindowGetFocused", Schema.Void, Schema.Boolean, Schema.Never, never, never>;
export declare const WindowGetFullscreen: Rpc.Rpc<"WindowGetFullscreen", Schema.Void, Schema.Boolean, Schema.Never, never, never>;
export declare const WindowSetFocus: Rpc.Rpc<"WindowSetFocus", Schema.Void, Schema.Void, Schema.Never, never, never>;
export declare const WindowShow: Rpc.Rpc<"WindowShow", Schema.Void, Schema.Void, Schema.Never, never, never>;
export declare const WindowGetZoomFactor: Rpc.Rpc<"WindowGetZoomFactor", Schema.Void, Schema.Number, Schema.Never, never, never>;
export declare const WindowSetZoomFactor: Rpc.Rpc<"WindowSetZoomFactor", Schema.Struct<{
    factor: Schema.Number;
}>, Schema.Void, Schema.Never, never, never>;
export declare const WindowGetZoomLevel: Rpc.Rpc<"WindowGetZoomLevel", Schema.Void, Schema.Literals<readonly [1, 1.1, 1.25, 1.5, 1.75, 2]>, Schema.Never, never, never>;
export declare const WindowSetZoomLevel: Rpc.Rpc<"WindowSetZoomLevel", Schema.Struct<{
    level: Schema.Literals<readonly [1, 1.1, 1.25, 1.5, 1.75, 2]>;
}>, Schema.Void, Schema.Never, never, never>;
export declare const WindowGetPinchZoomEnabled: Rpc.Rpc<"WindowGetPinchZoomEnabled", Schema.Void, Schema.Boolean, Schema.Never, never, never>;
export declare const WindowSetPinchZoomEnabled: Rpc.Rpc<"WindowSetPinchZoomEnabled", Schema.Struct<{
    enabled: Schema.Boolean;
}>, Schema.Void, Schema.Never, never, never>;
export declare const WindowSetTitlebar: Rpc.Rpc<"WindowSetTitlebar", Schema.Struct<{
    theme: Schema.Struct<{
        readonly mode: Schema.Literals<readonly ["light", "dark"]>;
        readonly scheme: Schema.optionalKey<Schema.Literals<readonly ["system", "light", "dark"]>>;
    }>;
}>, Schema.Void, Schema.Never, never, never>;
export declare const WindowSetTrafficLightsPosition: Rpc.Rpc<"WindowSetTrafficLightsPosition", Schema.Struct<{
    x: Schema.Number;
    y: Schema.Number;
}>, Schema.Void, Schema.Never, never, never>;
export declare const WindowRpcs: RpcGroup.RpcGroup<Rpc.Rpc<"WindowGetFocused", Schema.Void, Schema.Boolean, Schema.Never, never, never> | Rpc.Rpc<"WindowGetFullscreen", Schema.Void, Schema.Boolean, Schema.Never, never, never> | Rpc.Rpc<"WindowGetPinchZoomEnabled", Schema.Void, Schema.Boolean, Schema.Never, never, never> | Rpc.Rpc<"WindowGetZoomFactor", Schema.Void, Schema.Number, Schema.Never, never, never> | Rpc.Rpc<"WindowGetZoomLevel", Schema.Void, Schema.Literals<readonly [1, 1.1, 1.25, 1.5, 1.75, 2]>, Schema.Never, never, never> | Rpc.Rpc<"WindowRequestMicrophone", Schema.Void, Schema.Boolean, Schema.Never, never, never> | Rpc.Rpc<"WindowSetFocus", Schema.Void, Schema.Void, Schema.Never, never, never> | Rpc.Rpc<"WindowSetPinchZoomEnabled", Schema.Struct<{
    enabled: Schema.Boolean;
}>, Schema.Void, Schema.Never, never, never> | Rpc.Rpc<"WindowSetTitlebar", Schema.Struct<{
    theme: Schema.Struct<{
        readonly mode: Schema.Literals<readonly ["light", "dark"]>;
        readonly scheme: Schema.optionalKey<Schema.Literals<readonly ["system", "light", "dark"]>>;
    }>;
}>, Schema.Void, Schema.Never, never, never> | Rpc.Rpc<"WindowSetTrafficLightsPosition", Schema.Struct<{
    x: Schema.Number;
    y: Schema.Number;
}>, Schema.Void, Schema.Never, never, never> | Rpc.Rpc<"WindowSetVoiceCallActive", Schema.Struct<{
    active: Schema.Boolean;
}>, Schema.Void, Schema.Never, never, never> | Rpc.Rpc<"WindowSetZoomFactor", Schema.Struct<{
    factor: Schema.Number;
}>, Schema.Void, Schema.Never, never, never> | Rpc.Rpc<"WindowSetZoomLevel", Schema.Struct<{
    level: Schema.Literals<readonly [1, 1.1, 1.25, 1.5, 1.75, 2]>;
}>, Schema.Void, Schema.Never, never, never> | Rpc.Rpc<"WindowShow", Schema.Void, Schema.Void, Schema.Never, never, never> | Rpc.Rpc<"WindowThemeReady", Schema.Void, Schema.Void, Schema.Never, never, never>>;
