import { expect, test } from "bun:test"
import fc from "fast-check"
import { chmod, mkdir, mkdtemp, rm, symlink, writeFile } from "node:fs/promises"
import { tmpdir } from "node:os"
import path from "node:path"
import corpus from "./opencode-sidecar-membership.corpus.json"

type Example = { mode: string; kind: string; imported: boolean; dotted: boolean; empty: boolean }
const collector = path.resolve(import.meta.dir, "../../../script/vibelang-sidecars.ts")
const typescript = path.dirname(path.dirname(Bun.resolveSync("typescript", import.meta.dir)))

async function checkMembership(example: Example) {
  const root = await mkdtemp(path.join(tmpdir(), "opencode-sidecar-membership-"))
  try {
    await mkdir(path.join(root, "script"), { recursive: true })
    await mkdir(path.join(root, "node_modules/.bin"), { recursive: true })
    await symlink(typescript, path.join(root, "node_modules/typescript"), "dir")
    await writeFile(path.join(root, "script/vibelang-sidecars.ts"), await Bun.file(collector).text())
    await writeFile(
      path.join(root, "package.json"),
      JSON.stringify({
        name: "sidecar-fixture",
        private: true,
        type: "module",
        workspaces: { packages: ["packages/*"] },
      }),
    )
    const workspace = path.join(root, "packages/example")
    await mkdir(workspace, { recursive: true })
    await writeFile(path.join(workspace, "package.json"), '{"name":"example","private":true}')
    const project = example.mode === "references" ? path.join(workspace, "nested") : workspace
    await mkdir(path.join(project, "src"), { recursive: true })
    await mkdir(path.join(project, "fixtures"), { recursive: true })
    await mkdir(path.join(project, "shared"), { recursive: true })
    const source = path.join(project, "src", (example.dotted ? ".included" : "included") + "." + example.kind)
    const imported = path.join(project, "shared", "imported." + example.kind)
    const fixture = path.join(project, "fixtures", "standalone." + example.kind)
    const excluded = path.join(project, "src", "excluded." + example.kind)
    await writeFile(fixture, "export const value = 1\n")
    await writeFile(excluded, "export const value = 1\n")
    await writeFile(path.join(project, "src/native.ts"), "export const native = 1\n")
    const sources = example.empty ? [] : [source, ...(example.imported ? [imported] : [])]
    if (!example.empty) {
      await writeFile(
        source,
        example.imported
          ? 'import { value } from "../shared/imported.' + example.kind + '"; export const selected = value\n'
          : "export const selected = 1\n",
      )
      if (example.imported) await writeFile(imported, "export const value = 1\n")
    }
    const options = { allowArbitraryExtensions: true, target: "ESNext", module: "ESNext" }
    const config =
      example.mode === "files"
        ? { compilerOptions: options, files: example.empty ? ["src/native.ts"] : [path.relative(project, source)] }
        : { compilerOptions: options, include: ["src"], exclude: ["src/excluded.*", "fixtures"] }
    if (example.mode === "extends") {
      await writeFile(path.join(project, "tsconfig.base.json"), JSON.stringify(config))
      await writeFile(path.join(project, "tsconfig.json"), '{"extends":"./tsconfig.base.json"}')
    } else await writeFile(path.join(project, "tsconfig.json"), JSON.stringify(config))
    const plan: Record<string, string[]> = { [path.join(project, "tsconfig.json")]: sources }
    if (example.mode === "references") {
      await writeFile(path.join(workspace, "tsconfig.json"), '{"files":[],"references":[{"path":"./nested"}]}')
      plan[path.join(workspace, "tsconfig.json")] = []
    }
    await writeFile(path.join(root, "compiler-plan.json"), JSON.stringify(plan))
    await writeFile(
      path.join(root, "node_modules/.bin/vibelang"),
      [
        "#!/usr/bin/env bun",
        'import fs from "node:fs"',
        'import path from "node:path"',
        'const plan = await Bun.file("compiler-plan.json").json()',
        'const project = path.resolve(process.argv[process.argv.indexOf("-p") + 1])',
        'const sources = plan[project]; if (!sources) throw Error("Unexpected project")',
        'const list = process.argv.includes("--listFilesOnly")',
        'fs.appendFileSync("compiler-calls.jsonl", JSON.stringify({ project, list, sources }) + "\\n")',
        "if (list) for (const source of sources) console.log(source)",
        'else for (const source of sources) await Bun.write(source.replace(/\\.(vibex?)$/, ".d.$1.ts"), "export declare const selected: 1\\n")',
      ].join("\n"),
    )
    await chmod(path.join(root, "node_modules/.bin/vibelang"), 0o755)
    const child = Bun.spawn([process.execPath, path.join(root, "script/vibelang-sidecars.ts")], {
      cwd: root,
      stdout: "pipe",
      stderr: "pipe",
    })
    const [stdout, stderr, code] = await Promise.all([
      new Response(child.stdout).text(),
      new Response(child.stderr).text(),
      child.exited,
    ])
    expect({ code, stderr }).toEqual({ code: 0, stderr: "" })
    expect(stdout).toContain("Generated declarations for " + sources.length + " VibeLang modules")
    for (const file of sources) expect(await Bun.file(file.replace(/\.(vibex?)$/, ".d.$1.ts")).exists()).toBe(true)
    for (const file of [fixture, excluded])
      expect(await Bun.file(file.replace(/\.(vibex?)$/, ".d.$1.ts")).exists()).toBe(false)
    const calls = (await Bun.file(path.join(root, "compiler-calls.jsonl")).text())
      .trim()
      .split("\n")
      .map((line) => JSON.parse(line) as { list: boolean })
    expect(calls.filter((call) => !call.list).length).toBe(example.empty ? 0 : 1)
  } finally {
    await rm(root, { recursive: true, force: true })
  }
}

test("sidecar collection ignores standalone fixtures outside each compiler project", async () => {
  for (const example of corpus) await checkMembership(example)
})

for (const [index, mode] of ["include", "files", "extends", "references"].entries()) {
  test("sidecar collection follows " + mode + " project membership including imports", async () => {
    // Sidecar coverage follows the compiler project, including its import closure.
    await fc.assert(
      fc.asyncProperty(
        fc.constantFrom("vibe", "vibex"),
        fc.boolean(),
        fc.boolean(),
        fc.boolean(),
        async (kind, imported, dotted, empty) => checkMembership({ mode, kind, imported, dotted, empty }),
      ),
      { numRuns: 8, seed: 882019 + index },
    )
  })
}
