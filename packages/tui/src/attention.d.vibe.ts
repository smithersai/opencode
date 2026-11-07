import type { Attention } from "@opencode/plugin/tui/context";
import { Config } from "./config/index.tsx";
import * as TuiAudio from "./audio.ts";
type AttentionRenderer = {
    readonly isDestroyed: boolean;
    on(event: "focus" | "blur", listener: () => void): unknown;
    off(event: "focus" | "blur", listener: () => void): unknown;
    triggerNotification(message: string, title?: string): boolean;
};
type AttentionHost = Attention & {
    dispose(): void;
};
export declare function createTuiAttention(input: {
    renderer: AttentionRenderer;
    config: Pick<Config.Resolved, "attention">;
    audio?: Pick<typeof TuiAudio, "loadSoundFile" | "play">;
}): AttentionHost;
export {};
