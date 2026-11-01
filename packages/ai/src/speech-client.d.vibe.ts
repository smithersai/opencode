import { Context } from "effect";
import { MediaClient } from "./media-client.vibe";
import { type SpeechEvent, type SpeechRequestFor, type SpeechResponse } from "./speech.ts";
export type Interface = MediaClient.Interface<SpeechRequestFor, SpeechEvent, SpeechResponse>;
declare const SpeechClientService_base: Context.ServiceClass<SpeechClientService, "@opencode/SpeechClient", Interface>;
export declare class SpeechClientService extends SpeechClientService_base {
}
export declare const Service: typeof SpeechClientService;
export type Service = SpeechClientService;
export declare const SpeechClient: {
    readonly layer: import("effect/Layer").Layer<SpeechClientService, never, import("./route.ts").RequestExecutorService>;
    readonly generate: (request: SpeechRequestFor, options?: import("./generation.vibe").AwaitOptions) => import("effect/Effect").Effect<SpeechResponse, import("./effect.ts").AIError, SpeechClientService>;
    readonly stream: (request: SpeechRequestFor, options?: import("./generation.vibe").AwaitOptions) => import("effect/Stream").Stream<{
        readonly type: "audio-delta";
        readonly chunk: Uint8Array<ArrayBufferLike>;
    } | {
        readonly type: "timestamps";
        readonly items: readonly {
            readonly text: string;
            readonly startSeconds: number;
            readonly endSeconds: number;
        }[];
    } | {
        readonly type: "finish";
        readonly audio: import("./media.ts").Asset;
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
    } | import("./generation.vibe").Observation, import("./effect.ts").AIError, SpeechClientService>;
    readonly start: (request: SpeechRequestFor) => import("effect/Effect").Effect<import("./generation.vibe").Generation<SpeechResponse>, import("./effect.ts").AIError, SpeechClientService>;
    readonly resume: (model: import("./speech.ts").SpeechModel<{
        readonly [x: string]: unknown;
    }>, token: unknown) => import("effect/Effect").Effect<import("./generation.vibe").Generation<SpeechResponse>, import("./effect.ts").AIError, SpeechClientService>;
    readonly Service: typeof SpeechClientService;
};
export {};
