import { Schema } from "effect";
import type { Persisted } from "@opencode/plugin/gui/main";
/** Main storage's `refs` store: the end of the last block of refs main reserved, so refs stay unique across reloads. */
export declare const RefsStore: {
    schema: Schema.Int;
    initial: number;
};
/**
 * Element refs for every page of the pane. A composer chip or an agent's message can still name a ref from
 * before the pane's main entry reloaded, so a new pane starts past every ref the previous one could hand out.
 */
export declare function createRefs(reserved: Persisted<number, number>): () => string;
