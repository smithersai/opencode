import { WebSearchExa } from "./exa.vibe"
import { WebSearchFirecrawl } from "./firecrawl.vibe"
import { WebSearchParallel } from "./parallel.vibe"
import { WebSearchTavily } from "./tavily.vibe"
import { WebSearchTinyFish } from "./tinyfish.vibe"

export const WebSearchPlugins = [
  WebSearchExa.Plugin,
  WebSearchFirecrawl.Plugin,
  WebSearchParallel.Plugin,
  WebSearchTavily.Plugin,
  WebSearchTinyFish.Plugin,
] as const
