import { expect, test } from "bun:test"
import fc from "fast-check"
import { mkdtemp, mkdir, rm, symlink, writeFile } from "node:fs/promises"
import { tmpdir } from "node:os"
import path from "node:path"
import { checkLoaderRecord } from "vibelang/project"
import { prepareRuntimeProjects } from "../../../script/vibelang-runtime"
import corpus from "./opencode-runtime-preparation.corpus.json"

async function checkPreparation(value: number, nested: boolean) {
  const root = await mkdtemp(path.join(tmpdir(), "opencode-runtime-preparation-"))
  try {
    await symlink(path.resolve(import.meta.dir, "../../../node_modules"), path.join(root, "node_modules"), "dir")
    const directory = nested ? path.join(root, "nested") : root
    await mkdir(directory, { recursive: true })
    const project = path.join(directory, "tsconfig.json")
    const source = path.join(directory, "value.vibe")
    await writeFile(path.join(root, "package.json"), '{"private":true,"type":"module"}')
    await writeFile(
      project,
      JSON.stringify({
        compilerOptions: {
          strict: true,
          target: "ESNext",
          module: "ESNext",
          moduleResolution: "Bundler",
          allowArbitraryExtensions: true,
          types: [],
        },
        include: ["*.vibe"],
      }),
    )
    await writeFile(source, "export const value = " + value + "\n")
    const options = { project, root: directory }
    expect(checkLoaderRecord(options)).toHaveProperty("miss")
    const first = prepareRuntimeProjects([source, source], root)
    expect(first).toHaveLength(1)
    expect(first[0]?.prepared).toBe(true)
    expect(checkLoaderRecord(options)).toHaveProperty("modules")
    expect(prepareRuntimeProjects([source], root)[0]?.prepared).toBe(false)
    await evaluate(value)
    await writeFile(source, "export const value = " + (value + 1) + "\n")
    expect(checkLoaderRecord(options)).toHaveProperty("miss")
    expect(prepareRuntimeProjects([source], root)[0]?.prepared).toBe(true)
    expect(checkLoaderRecord(options)).toHaveProperty("modules")
    await evaluate(value + 1)

    async function evaluate(expected: number) {
      const child = Bun.spawn(
        [
          process.execPath,
          "--preload",
          "vibelang/bun",
          "--eval",
          "import { value } from " + JSON.stringify(source) + "; console.log(JSON.stringify(value))",
        ],
        { cwd: root, stdout: "pipe", stderr: "pipe" },
      )
      const [stdout, stderr, code] = await Promise.all([
        new Response(child.stdout).text(),
        new Response(child.stderr).text(),
        child.exited,
      ])
      expect({ code, stderr }).toEqual({ code: 0, stderr: "" })
      expect(JSON.parse(stdout)).toBe(expected)
    }
  } finally {
    await rm(root, { recursive: true, force: true })
  }
}

// These cases compile real projects and start fresh loader processes.
test("runtime preparation creates valid records and refreshes changed sources", async () => {
  for (const example of corpus) await checkPreparation(example.value, example.nested)
}, 60_000)

test("runtime preparation preserves fresh-process values across source mutations", async () => {
  await fc.assert(fc.asyncProperty(fc.integer({ min: -1000, max: 1000 }), fc.boolean(), checkPreparation), {
    numRuns: 8,
    seed: 480609,
  })
}, 120_000)
