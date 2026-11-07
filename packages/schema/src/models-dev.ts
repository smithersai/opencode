export * as ModelsDev from "./models-dev.js"

import { ephemeral, inventory } from "./event.vibe"

const Refreshed = ephemeral({
  type: "models-dev.refreshed",
  schema: {},
})
export const Event = { Refreshed, Definitions: inventory(Refreshed) }
