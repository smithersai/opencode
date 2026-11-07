import { Config, Layer, Schema } from "effect";
import * as Context from "effect/Context";
declare const AppConfigValue_base: Schema.Class<AppConfigValue, Schema.Struct<{
    readonly stage: Schema.NonEmptyString;
    readonly publicUrl: Schema.NonEmptyString;
}>, {}>;
export declare class AppConfigValue extends AppConfigValue_base {
}
declare const AppConfig_base: Context.ServiceClass<AppConfig, "@opencode/stats/AppConfig", AppConfigValue>;
export declare class AppConfig extends AppConfig_base {
    static readonly config: Config.Config<AppConfigValue>;
    static readonly layer: Layer.Layer<AppConfig, never, never>;
}
export {};
