export * as DurableEventManifest from "./durable-event-manifest.js"

import { Event } from "./event.vibe"
import { Worktree } from "./worktree.vibe"
import { SessionEvent } from "./session-event.vibe"

export const Durable = Event.durableMap([...SessionEvent.DurableDefinitions, Worktree.Event.Resolved])
