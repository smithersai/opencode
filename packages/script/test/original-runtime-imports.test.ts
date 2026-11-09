import { expect, test } from "bun:test"
import { readFileSync } from "node:fs"
import path from "node:path"
import ts from "typescript"
import fc from "fast-check"
import corpus from "./opencode-original-runtime-imports.corpus.json"

const root = path.resolve(import.meta.dir, "../../..")
function check(row: { source: string; imports: string[] }, prefix = "", suffix = "") {
  const source = prefix + readFileSync(path.join(root, row.source), "utf8") + suffix
  const imports = new Set(ts.preProcessFile(source, true, true).importedFiles.map((ref) => ref.fileName))
  for (const original of row.imports) expect(imports.has(original), row.source + ": " + original).toBe(true)
}

test("migrated modules preserve their original runtime import spellings", () => {
  expect(corpus.length).toBeGreaterThan(0)
  for (const row of corpus) check(row)
})

test("runtime import contracts survive comments and whitespace around migrated sources", () => {
  fc.assert(fc.property(
    fc.array(fc.constantFrom(...corpus), { minLength: 1, maxLength: 8 }),
    fc.constantFrom("", "\n\n", "// './unrelated.vibe'\n", "/* module './decoy.ts' */\n"),
    fc.constantFrom("", "\n", "\n// keep declarations portable\n"),
    (rows, prefix, suffix) => { for (const row of rows) check(row, prefix, suffix) },
  ), { numRuns: 64, seed: 480744 })
})
