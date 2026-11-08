import { expect, test } from "bun:test"
import path from "node:path"
import { spawnSync } from "node:child_process"
import fc from "fast-check"
import { plainJson } from "../src/generate.native.ts"
import corpus from "./opencode-migration-style.corpus.json" with { type: "json" }

const root = path.resolve(import.meta.dir, "../../..")

test("migrated bridge imports satisfy the repository Effect style rules", () => {
  const result = spawnSync(
    path.join(root, "node_modules/.bin/ast-grep"),
    [
      "scan",
      "-c",
      "script/ast-grep/sgconfig.yml",
      "--filter",
      "(no-star-import|no-import-alias)(-vibelang)?$",
      ...corpus.files,
    ],
    { cwd: root, encoding: "utf8", timeout: 20000 },
  )
  expect(result.status, result.stdout + result.stderr).toBe(0)
}, 30000)

test("the named native metadata helper preserves JSON data and removes absent fields", () => {
  expect(plainJson(corpus.metadata)).toEqual(corpus.metadata)
  fc.assert(
    fc.property(fc.dictionary(fc.string(), fc.oneof(fc.jsonValue(), fc.constant(undefined))), (value) => {
      const result = plainJson(value)
      expect(result).toEqual(Object.fromEntries(Object.entries(value).filter(([, field]) => field !== undefined)))
      expect(Object.keys(result).every((key) => Object.hasOwn(value, key))).toBeTrue()
    }),
    { seed: 480507, numRuns: 120 },
  )
})
