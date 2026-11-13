import { expect, test } from "bun:test"
import fc from "fast-check"
import corpus from "./opencode-debug-source-url.corpus"

test("the debug registry loads through its authored source URL", async () => {
  await fc.assert(
    fc.asyncProperty(
      fc.constantFrom(...corpus),
      fc.array(fc.constantFrom("a", "b", "-", " ", "工具"), { maxLength: 8 }),
      async (relative, parts) => {
        const url = new URL(relative, import.meta.url)
        url.searchParams.set("load", parts.join(""))
        url.hash = "registry"

        const entry = await import(url.href)

        expect(entry.default).toHaveProperty("stores.bar")
        expect(entry.default).toHaveProperty("i18n")
      },
    ),
    { numRuns: 75, seed: 441980, includeErrorInReport: true },
  )
})
