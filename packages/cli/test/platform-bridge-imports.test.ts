import { expect, test } from "bun:test"
import { spawnSync } from "node:child_process"
import path from "node:path"
import fc from "fast-check"
import corpus from "./opencode-platform-bridge-imports.corpus.json" with { type: "json" }

const root = path.resolve(import.meta.dir, "../../..")
const binary = path.join(root, "node_modules/.bin/ast-grep")
const rules = ["no-import-alias", "no-star-import"]

function scan(rule: string, args: string[], input?: string) {
  return spawnSync(binary, ["scan", "--rule", path.join(root, "script/ast-grep/rules/" + rule + ".yml"), ...args], {
    cwd: root,
    encoding: "utf8",
    input,
  })
}

test("native command bridges satisfy the repository import rules", () => {
  for (const rule of rules) {
    const result = scan(rule, [
      "packages/cli/src/commands/handlers/upgrade.platform.ts",
      "packages/cli/src/commands/handlers/pair.platform.ts",
      "packages/cli/src/commands/handlers/debug/heap-dump.platform.ts",
      "packages/cli/src/acp/directories.platform.ts",
      "packages/cli/src/acp/prompt.platform.ts",
      "packages/cli/src/acp/tool.platform.ts",
    ])
    expect(result.status, result.stdout + result.stderr).toBe(0)
  }
})

test("native bridges obey import rules across generated binding names", () => {
  fc.assert(
    fc.property(fc.constantFrom(...corpus), fc.integer({ min: 0, max: 100000 }), (entry, suffix) => {
      const binding = "bridge" + suffix
      const body = entry.call ? "(...args: Parameters<typeof MEMBER>) => MEMBER(...args)" : "MEMBER"
      const valid =
        "import { " +
        entry.member +
        ' } from "' +
        entry.module +
        '"; const ' +
        binding +
        " = " +
        body.replaceAll("MEMBER", entry.member) +
        "; export { " +
        binding +
        " as " +
        entry.member +
        " }"
      for (const rule of rules) {
        const result = scan(rule, ["--stdin"], valid)
        expect(result.status, result.stdout + result.stderr).toBe(0)
      }
      const alias = scan(
        "no-import-alias",
        ["--stdin"],
        "import { " +
          entry.member +
          " as " +
          binding +
          ' } from "' +
          entry.module +
          '"; export const value = ' +
          body.replaceAll("MEMBER", binding),
      )
      expect(alias.status, alias.stdout + alias.stderr).toBe(1)
      expect(alias.stdout + alias.stderr).toContain("no-import-alias")
      const namespace = scan(
        "no-star-import",
        ["--stdin"],
        "import * as " +
          binding +
          ' from "' +
          entry.module +
          '"; export const value = ' +
          body.replaceAll("MEMBER", binding + "." + entry.member),
      )
      expect(namespace.status, namespace.stdout + namespace.stderr).toBe(1)
      expect(namespace.stdout + namespace.stderr).toContain("no-star-import")
    }),
    { seed: 480603, numRuns: 32 },
  )
})
