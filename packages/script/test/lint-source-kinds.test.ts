import { expect, test } from "bun:test"
import { chmodSync, existsSync, mkdirSync, mkdtempSync, readFileSync, rmSync, writeFileSync } from "node:fs"
import { tmpdir } from "node:os"
import path from "node:path"
import fc from "fast-check"
import corpus from "./opencode-lint-source-kinds.corpus.json"

const script = path.resolve(import.meta.dir, "../../../script/lint-changed.ts")
const base = "fixture-base"

function run(selection: { tracked: string[]; untracked?: string[] }) {
  const root = mkdtempSync(path.join(tmpdir(), "lint-source-kinds-"))
  try {
    const bin = path.join(root, "bin")
    mkdirSync(bin)
    mkdirSync(path.join(root, ".vibelang"))
    writeFileSync(path.join(root, "selection.json"), JSON.stringify(selection))
    for (const file of [...selection.tracked, ...(selection.untracked ?? [])]) {
      mkdirSync(path.dirname(path.join(root, file)), { recursive: true })
      writeFileSync(path.join(root, file), "export const value = 1\n")
    }
    const scm = [
      "const args = process.argv.slice(2)",
      'const selection = JSON.parse(await Bun.file("selection.json").text())',
      'if (args[0] === "rev-parse") console.log("' + base + '")',
      'else if (args[0] === "diff") console.log(selection.tracked.join("\\n"))',
      'else if (args[0] === "ls-files") console.log((selection.untracked ?? []).join("\\n"))',
      "else process.exit(2)",
    ].join("\n")
    const scmFile = path.join(bin, process.platform === "win32" ? "scm.ts" : "git")
    writeFileSync(scmFile, "#!" + process.execPath + "\n" + scm)
    chmodSync(scmFile, 0o755)
    if (process.platform === "win32") {
      writeFileSync(path.join(bin, "git.cmd"), '@"' + process.execPath + '" "' + scmFile + '" %*\r\n')
    }
    const lint = [
      "const files = process.argv.slice(2).filter(arg => !arg.startsWith(\"-\" ) && arg !== \"json\")",
      'await Bun.write("selected.json", JSON.stringify(files))',
      "console.log(JSON.stringify({diagnostics: files.map(filename => ({filename, message: \"source selected\", code: \"fixture(selection)\", labels: [{span: {line: 1, column: 1}}]}))}))",
    ].join("\n")
    const lintFile = path.join(root, ".vibelang/oxlint.mjs")
    writeFileSync(lintFile, "#!" + process.execPath + "\n" + lint)
    chmodSync(lintFile, 0o755)
    const result = Bun.spawnSync([process.execPath, script, base], {
      cwd: root,
      env: { ...process.env, PATH: bin + path.delimiter + (process.env.PATH ?? "") },
      stdout: "pipe",
      stderr: "pipe",
    })
    const selected: string[] = existsSync(path.join(root, "selected.json"))
      ? JSON.parse(readFileSync(path.join(root, "selected.json"), "utf8"))
      : []
    return { code: result.exitCode, selected, stdout: result.stdout.toString(), stderr: result.stderr.toString() }
  } finally {
    rmSync(root, { recursive: true, force: true })
  }
}

test("changed lint includes JSX VibeLang sources and excludes generated declarations", () => {
  const result = run(corpus)
  expect(result.stderr).not.toContain("Unsupported")
  expect(result.selected).toEqual(corpus.selected)
  expect(result.code).toBe(1)
})

test("changed lint ignores both compatibility declaration source kinds", () => {
  const result = run({ tracked: ["packages/app/src/X.d.vibe.ts", "packages/app/src/X.d.vibex.ts"] })
  expect(result.stderr).toBe("")
  expect(result.selected).toEqual([])
  expect(result.code).toBe(0)
  expect(result.stdout).toContain("no changed TypeScript files")
})

test("changed lint selects each untracked source once", () => {
  const file = "packages/app/src/new.vibex"
  const result = run({ tracked: [file], untracked: [file] })
  expect(result.selected).toEqual([file])
  expect(result.code).toBe(1)
})

for (const seed of [391066, 391067, 391068, 391069]) test("source-kind selection holds across first-party packages and neighboring suffixes (seed " + seed + ")", () => {
  const suffixes = {
    typed: "ts",
    jsx: "tsx",
    effect: "vibe",
    effectJsx: "vibex",
    declaration: "d.ts",
    sidecar: "d.vibe.ts",
    jsxSidecar: "d.vibex.ts",
    other: "json",
  }
  fc.assert(fc.property(
    fc.array(fc.record({
      package: fc.constantFrom("app", "desktop", "gui-plugins", "session-ui"),
      name: fc.stringMatching(/^[a-z]{1,8}$/),
      kind: fc.constantFrom(...Object.keys(suffixes) as (keyof typeof suffixes)[]),
      untracked: fc.boolean(),
    }), { minLength: 2, maxLength: 12 }),
    rows => {
      const tracked: string[] = []
      const untracked: string[] = []
      const expected: string[] = []
      for (const row of rows) {
        const file = "packages/" + row.package + "/src/" + row.name + "." + suffixes[row.kind]
        ;(row.untracked ? untracked : tracked).push(file)
        if (["typed", "jsx", "effect", "effectJsx"].includes(row.kind) && !expected.includes(file)) expected.push(file)
      }
      const result = run({ tracked, untracked })
      const ordered = [...new Set([...tracked, ...untracked])].filter(file => expected.includes(file))
      expect(result.selected).toEqual(ordered)
      expect(result.code).toBe(ordered.length ? 1 : 0)
    },
  ), { numRuns: 25, seed })
})
