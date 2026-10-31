import { Plugin } from "@opencode/plugin/effect"
import { Effect } from "effect"
import { BrowserConnection } from "./connection.ts"
import { BrowserTools } from "./tools.ts"

export default Plugin.define({
  id: "opencode.browser",
  effect: (ctx) =>
    Effect.gen(function* () {
      const connection = yield* BrowserConnection.make(ctx)
      yield* BrowserTools.register(ctx, connection)
    }),
})
