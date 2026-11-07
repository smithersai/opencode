import { MediaGetEndpoint } from "./media.vibe"
import { PersistentPtyGroup } from "./persistent-pty.vibe"

/** `server.experimental`: routes under /api/experimental, without compatibility guarantees. */
export const ExperimentalGroup = PersistentPtyGroup.add(MediaGetEndpoint)
