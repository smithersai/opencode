import { expect, test } from "bun:test"
import { existsSync } from "node:fs"
import { resolve } from "node:path"
import fc from "fast-check"
import manifest from "../package.json" with { type: "json" }
import corpus from "./fixtures/opencode-migrated-export-routes.json" with { type: "json" }

test("migrated plugin exports preserve source and declaration routes with emitted runtime defaults", () => {
  const check = (row: (typeof corpus)[number]) => {
    const entry = manifest.exports[row.entrypoint as keyof typeof manifest.exports]
    expect(entry).toEqual({ types: row.types, "vibelang-source": row.source, default: row.output })
    expect(existsSync(resolve(import.meta.dir, "..", row.source))).toBe(true)
    expect(existsSync(resolve(import.meta.dir, "..", row.types))).toBe(true)
    expect(existsSync(resolve(import.meta.dir, "..", row.output))).toBe(true)
  }
  for (const row of corpus) check(row)
  fc.assert(fc.property(fc.constantFrom(...corpus), check), { numRuns: 200, seed: 3280430 })
})
