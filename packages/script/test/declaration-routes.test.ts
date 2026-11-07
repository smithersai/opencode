import { expect, test } from "bun:test"
import fc from "fast-check"
import corpus from "./opencode-shell-select-declarations.corpus.json"
import { privateDeclarationRoutes } from "../src/declaration-routes"

test("packed shell-select declaration corpus rejects every private module edge", () => {
  for (const source of corpus) expect(privateDeclarationRoutes(source)).toEqual(["#vibelang/emitted/src/shell/select"])
})

test("declaration routing distinguishes module edges from quoted values and comments", () => {
  // Tooling emitted-routes: private emitted routes must not appear in published ordinary declarations.
  fc.assert(
    fc.property(
      fc.array(fc.constantFrom("a", "b", "path", "工具", "module-name"), { minLength: 1, maxLength: 6 }),
      fc.constantFrom(...corpus),
      fc.constantFrom('"', "'"),
      (segments, pattern, quote) => {
        const route = "#vibelang/emitted/" + segments.join("/")
        const source = pattern.replaceAll("#vibelang/emitted/src/shell/select", route).replaceAll('"', quote)
        const decoy = "export type Text = " + JSON.stringify(route) + "; // " + route
        const relative = source.replaceAll(route, "./ordinary.js")
        const bare = source.replaceAll(route, "effect/Scope")

        expect(privateDeclarationRoutes(source)).toEqual([route])
        expect(privateDeclarationRoutes(decoy)).toEqual([])
        expect(privateDeclarationRoutes(relative)).toEqual([])
        expect(privateDeclarationRoutes(bare)).toEqual([])
      },
    ),
    { numRuns: 250, seed: 881740 },
  )
})
