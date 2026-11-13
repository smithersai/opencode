import { expect, test } from "bun:test"
import { readFileSync } from "node:fs"
import path from "node:path"
import corpus from "./opencode-original-namespace-exports.corpus.json"

const root = path.resolve(import.meta.dir, "../../..")

// A namespace re-export of the module itself is part of its published declaration, which copies the written specifier.
function exportsOf(source: string) {
  return new Map([...source.matchAll(/^export \* as (\w+) from "([^"]+)"/gm)].map((match) => [match[1], match[2]]))
}

test("migrated modules keep the original spelling of their namespace re-exports", () => {
  expect(corpus.length).toBeGreaterThan(0)
  for (const row of corpus) {
    const written = exportsOf(readFileSync(path.join(root, row.source), "utf8"))
    for (const entry of row.exports) expect(written.get(entry.namespace), row.source + ": " + entry.namespace).toBe(entry.specifier)
  }
})

test("namespace re-export contracts name the original JavaScript specifier", () => {
  for (const row of corpus) for (const entry of row.exports) expect(entry.specifier, row.source).toMatch(/^\.{1,2}\/.*\.js$/)
})
