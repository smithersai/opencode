import { expect, test } from "bun:test"
import { mkdirSync, mkdtempSync, rmSync, writeFileSync } from "node:fs"
import { tmpdir } from "node:os"
import path from "node:path"
import fc from "fast-check"
import manifest from "../package.json" with { type: "json" }

const helpers = ["database/sqlite.bun.platform", "database/sqlite.node.platform"]
const entries = Object.entries(manifest.exports)

function check(order: typeof entries) {
  const root = mkdtempSync(path.join(tmpdir(), "opencode-sqlite-private-"))
  const consumer = path.join(root, "consumer")
  const pkg = path.join(consumer, "node_modules/@opencode/core")
  try {
    mkdirSync(pkg, { recursive: true })
    writeFileSync(
      path.join(pkg, "package.json"),
      JSON.stringify({
        name: manifest.name,
        version: "0.0.0",
        type: "module",
        exports: Object.fromEntries(order),
      }),
    )
    for (const helper of helpers) {
      const file = path.join(pkg, ".vibelang/js/src", helper + ".js")
      mkdirSync(path.dirname(file), { recursive: true })
      writeFileSync(file, "export const internal = true\n")
      expect(() => Bun.resolveSync(manifest.name + "/" + helper, consumer)).toThrow()
    }
  } finally {
    rmSync(root, { recursive: true, force: true })
  }
}

test("native SQLite implementation helpers remain private through wildcard exports", () => check(entries))
test("private SQLite helpers stay hidden when export entry order changes", () => {
  fc.assert(
    fc.property(fc.shuffledSubarray(entries, { minLength: entries.length, maxLength: entries.length }), check),
    { seed: 881909, numRuns: 120 },
  )
})
