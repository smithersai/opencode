import { RequestExecutor } from "@opencode/ai/route";
import { Socket } from "effect/socket";
export declare const requestExecutor: import("@opencode/util/effect/layer-node").Provider<RequestExecutor.RequestExecutorService, never, import("@opencode/util/effect/layer-node").Tag<"global">>;
export declare const llmClient: import("@opencode/util/effect/layer-node").Provider<import("@opencode/ai/effect").LLMClientService, never, import("@opencode/util/effect/layer-node").Tag<"global">>;
export declare const webSocketConstructor: import("@opencode/util/effect/layer-node").Provider<Socket.WebSocketConstructor, never, import("@opencode/util/effect/layer-node").Tag<"global">>;
export * as LayerNodePlatform from "./app-node-platform.vibe";
