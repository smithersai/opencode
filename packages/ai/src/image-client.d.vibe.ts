import { Context } from "effect";
import { MediaClient } from "./media-client.vibe";
import { type ImageEvent, type ImageRequestFor, type ImageResponse } from "./image.ts";
export type Interface = MediaClient.Interface<ImageRequestFor, ImageEvent, ImageResponse>;
declare const ImageClientService_base: Context.ServiceClass<ImageClientService, "@opencode/ImageClient", Interface>;
export declare class ImageClientService extends ImageClientService_base {
}
export declare const Service: typeof ImageClientService;
export type Service = ImageClientService;
export declare const ImageClient: {
    readonly layer: import("effect/Layer").Layer<ImageClientService, never, import("./route.ts").RequestExecutorService>;
    readonly generate: (request: ImageRequestFor, options?: import("./generation.vibe").AwaitOptions) => import("effect/Effect").Effect<ImageResponse, import("./effect.ts").AIError, ImageClientService>;
    readonly stream: (request: ImageRequestFor, options?: import("./generation.vibe").AwaitOptions) => import("effect/Stream").Stream<{
        readonly type: "image-partial";
        readonly index: number;
        readonly image: import("./media.ts").Asset;
    } | {
        readonly type: "image";
        readonly index: number;
        readonly image: import("./media.ts").Asset;
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
    } | import("./generation.vibe").Observation, import("./effect.ts").AIError, ImageClientService>;
    readonly start: (request: ImageRequestFor) => import("effect/Effect").Effect<import("./generation.vibe").Generation<ImageResponse>, import("./effect.ts").AIError, ImageClientService>;
    readonly resume: (model: import("./image.ts").ImageModel<{
        readonly [x: string]: unknown;
    }>, token: unknown) => import("effect/Effect").Effect<import("./generation.vibe").Generation<ImageResponse>, import("./effect.ts").AIError, ImageClientService>;
    readonly Service: typeof ImageClientService;
};
export {};
