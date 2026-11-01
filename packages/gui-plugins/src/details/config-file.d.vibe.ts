import type { ConfigEntry } from "@opencode/client";
/**
 * The configuration file that holds a service's entries: the last one that lists any, else the last one that sets the
 * service, else the first. An empty `"mcp": {}` in a project file does not hide the servers the global file lists.
 */
export declare function serviceConfigFile(entries: readonly ConfigEntry[], service: "mcp" | "plugins" | "skills" | "lsp"): string | undefined;
/**
 * The global configuration directory, else the location itself. The server lists a `directory` entry for each config
 * root, the global one before any project's, and a project root is always a `.opencode` folder. So the first root is
 * the global one unless it is a project's, which means global configuration is off. A project config in an ancestor of
 * the worktree is not mistaken for it.
 */
export declare function globalConfigDirectory(entries: readonly ConfigEntry[], directory: string): string;
