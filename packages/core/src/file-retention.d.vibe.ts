import { Duration, Effect } from "effect";
export * as FileRetention from "./file-retention.vibe";
import { FSUtil } from "@opencode/util/fs-util";
export declare const cleanup: (fs: FSUtil.Interface, files: ReadonlyArray<string>, retention: Duration.Input) => Effect.Effect<void, never, never>;
