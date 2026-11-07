import { Browser } from "@opencode/plugin-browser/rpc";
export { commentNote, pageNote } from "./comment.vibe.platform.js";
export type { ElementComment } from "./comment.vibe.platform.js";
/** The tab a note's href names, and its element ref while the note is live. */
type NoteHref = {
    readonly tabID: Browser.TabID;
    readonly ref?: Browser.Ref;
};
/** The tab a note's href names, and its element ref while the note is live. */
export declare function readHref(href: string): NoteHref | undefined;
