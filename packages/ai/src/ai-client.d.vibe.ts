import { Layer } from "effect";
import { RequestExecutor } from "./route/executor.vibe";
/** Every modality client over `executor`, which stays in the output so `asset.bytes()` and `Media.write` resolve. */
export declare const layerWith: <E, R>(executor: Layer.Layer<RequestExecutor.Service, E, R>) => Layer.Layer<import("./image-client.vibe").ImageClientService | import("./route/client.ts").LLMClientService | RequestExecutor.RequestExecutorService | import("./decision-client.vibe").Service | import("./speech-client.vibe").SpeechClientService | import("./transcription-client.vibe").TranscriptionClientService | import("./video-client.vibe").VideoClientService, E, R>;
/** Every modality client plus the executor over `RequestExecutor.fetchLayer`: the one layer most programs need. */
export declare const layer: Layer.Layer<import("./image-client.vibe").ImageClientService | import("./route/client.ts").LLMClientService | RequestExecutor.RequestExecutorService | import("./decision-client.vibe").Service | import("./speech-client.vibe").SpeechClientService | import("./transcription-client.vibe").TranscriptionClientService | import("./video-client.vibe").VideoClientService, never, never>;
export type Services = Layer.Success<typeof layer>;
export * as AIClient from "./ai-client.vibe";
