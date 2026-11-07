import { FileSystem, Path } from "effect";
import { HttpClient } from "effect/http";
export declare const filesystem: import("./layer-node.ts").Provider<FileSystem.FileSystem, never, import("./layer-node.ts").Tag<"global">>;
export declare const path: import("./layer-node.ts").Provider<Path.Path, never, import("./layer-node.ts").Tag<"global">>;
export declare const httpClient: import("./layer-node.ts").Provider<HttpClient.HttpClient, never, import("./layer-node.ts").Tag<"global">>;
export * as LayerNodePlatform from "./app-node-platform.vibe";
