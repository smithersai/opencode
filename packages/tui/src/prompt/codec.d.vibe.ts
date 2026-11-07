import type { Prompt, PromptInput } from "@opencode/schema";
import type { Types } from "effect";
export type EditablePromptInput = Types.DeepMutable<PromptInput.Prompt>;
type ProjectedPrompt = Pick<Prompt, "text" | "files" | "agents"> & {
    readonly skills?: ReadonlyArray<{
        readonly id: string;
        readonly mention?: PromptInput.SkillAttachment["mention"];
    }>;
};
export declare function projectedPromptInput(input: ProjectedPrompt): EditablePromptInput;
export {};
