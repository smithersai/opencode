import { Context } from "effect";
import { MediaClient } from "./media-client.vibe";
import { type VideoEvent, type VideoRequestFor, type VideoResponse } from "./video.ts";
export type Interface = MediaClient.Interface<VideoRequestFor, VideoEvent, VideoResponse>;
declare const VideoClientService_base: Context.ServiceClass<VideoClientService, "@opencode/VideoClient", Interface>;
export declare class VideoClientService extends VideoClientService_base {
}
export declare const Service: typeof VideoClientService;
export type Service = VideoClientService;
export declare const VideoClient: {
    readonly layer: import("effect/Layer").Layer<VideoClientService, never, import("./route.ts").RequestExecutorService>;
    readonly generate: (request: VideoRequestFor, options?: import("./generation.vibe").AwaitOptions) => import("effect/Effect").Effect<VideoResponse, import("./effect.ts").AIError, VideoClientService>;
    readonly stream: (request: VideoRequestFor, options?: import("./generation.vibe").AwaitOptions) => import("effect/Stream").Stream<{
        readonly type: "video";
        readonly index: number;
        readonly video: import("./media.ts").Asset;
    } | {
        readonly type: "finish";
        readonly usage?: {
            readonly type: "seconds";
            readonly seconds: number;
        } | {
            readonly type: "characters";
            readonly characters: number;
        } | {
            readonly type: "credits";
            readonly credits: number;
        } | {
            readonly type: "compute";
            readonly seconds: number;
        } | {
            readonly type: "tokens";
            readonly input?: number | undefined;
            readonly output?: number | undefined;
            readonly total?: number | undefined;
            readonly details?: {
                readonly [x: string]: unknown;
            } | undefined;
        } | undefined;
        readonly providerMetadata?: {
            readonly [x: string]: {
                readonly [x: string]: unknown;
            };
        } | undefined;
    } | import("./generation.vibe").Observation, import("./effect.ts").AIError, VideoClientService>;
    readonly start: (request: VideoRequestFor) => import("effect/Effect").Effect<import("./generation.vibe").Generation<VideoResponse>, import("./effect.ts").AIError, VideoClientService>;
    readonly resume: (model: import("./video.ts").VideoModel<{
        readonly [x: string]: unknown;
    }>, token: unknown) => import("effect/Effect").Effect<import("./generation.vibe").Generation<VideoResponse>, import("./effect.ts").AIError, VideoClientService>;
    readonly Service: typeof VideoClientService;
};
export {};
