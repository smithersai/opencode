import type { FileDiffInfo } from "@opencode/client/promise";
import type { ChangeKind } from "@opencode/plugin/gui/review";
export type RenderDiff = FileDiffInfo;
export declare function normalizePath(value: string): string;
export declare function filterRenderableDiff(value: FileDiffInfo): value is RenderDiff;
export declare function reviewDiffNeedsLoad(diff: RenderDiff): boolean;
export declare function reviewRootDirectory(root: string): string;
export declare function reviewDiffDirectory(root: string, file: string): string;
/** The directory of a workspace-relative folder inside the review root. */
export declare function reviewFolderDirectory(root: string, folder: string): string;
/** An untracked folder that Git lists as one row, as `git status` shows it. */
export declare function isReviewFolder(file: string): boolean;
/** The rows with each loaded folder's entries after its row, depth first. A folder's `more` entry stays out. */
export declare function expandReviewFolders(rows: readonly RenderDiff[], loaded: ReadonlyMap<string, readonly RenderDiff[]>): RenderDiff[];
export declare function reviewDiffKinds(diffs: readonly RenderDiff[]): Map<string, ChangeKind>;
export declare function filterReviewFiles(files: string[], query: string): string[];
/** Depth-first file order with directories before sibling files, as the change tree lists them. */
export declare function sortReviewPaths(paths: readonly string[]): string[];
export declare function applyFileListKeyDown(event: KeyboardEvent, files: readonly string[], highlighted: string | undefined, options: {
    onHighlight: (path: string) => void;
    onSelect: (path: string) => void;
}): void;
