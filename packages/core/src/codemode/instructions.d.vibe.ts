export * as CodeModeInstructions from "./instructions.vibe";
import { Instructions } from "../instructions/index.ts";
import { CodeModeCatalog } from "./catalog.vibe";
export declare function render(catalog: CodeModeCatalog.Summary): string;
export declare function update(previous: CodeModeCatalog.Summary, current: CodeModeCatalog.Summary): string;
export declare const make: (inventory?: CodeModeCatalog.Inventory) => Instructions.List;
