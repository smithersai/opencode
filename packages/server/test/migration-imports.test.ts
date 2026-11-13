import { expect, test } from "bun:test"
import { mkdtemp, readFile, rm, writeFile } from "node:fs/promises"
import path from "node:path"
import fc from "fast-check"

const root = path.resolve(import.meta.dir, "../../..")

test("native route imports resolve to their implementation sources", async () => {
  const directory = path.join(root, "packages/server/src")
  const manifest = JSON.parse(await readFile(path.join(directory, "../package.json"), "utf8"))
  const source = await readFile(path.join(directory, "routes.ts"), "utf8")
  const imports = new Bun.Transpiler({ loader: "ts" }).scanImports(source)
  const targets = [
    "api",
    "handlers",
    "middleware/schema-error",
    "middleware/form-location",
    "middleware/session-location",
  ]
  fc.assert(
    fc.property(
      fc.constantFrom(...targets),
      fc.array(fc.constantFrom(".", "middleware/.."), { maxLength: 8 }),
      (target, segments) => {
        const entry = imports.find((entry) => entry.path.replace(/^\.\//, "").replace(/\.(?:vibe|ts)$/, "") === target)
        expect(entry).toBeDefined()
        const specifier = "./" + [...segments, entry!.path].join("/")
        expect(Bun.resolveSync(specifier, directory)).toBe(
          path.resolve(directory, "..", manifest.exports["./" + target]["vibelang-source"]),
        )
      },
    ),
    { seed: 881910, numRuns: 150 },
  )
})

test("native self namespace exports retain one identity across relative import paths", async () => {
  const temporary = await mkdtemp(path.join(root, "packages/cli/test/.native-self-export-"))
  try {
    const variants = fc.sample(fc.array(fc.constantFrom(".", "../framework"), { maxLength: 8 }), {
      seed: 881911,
      numRuns: 120,
    })
    const directory = path.relative(temporary, path.join(root, "packages/cli/src/framework"))
    await Promise.all(
      variants.map((segments, index) =>
        writeFile(
          path.join(temporary, "case-" + index + ".ts"),
          "export { Spec } from " + JSON.stringify(directory + "/" + [...segments, "spec.ts"].join("/")) + "\n",
        ),
      ),
    )
    const entry = path.join(temporary, "entry.ts")
    await writeFile(
      entry,
      "const modules = await Promise.all([" +
        variants.map((_, index) => "import(" + JSON.stringify("./case-" + index + ".ts") + ")").join(",") +
        "]);\nif (!modules.every((module) => typeof module.Spec.make === 'function' && module.Spec.make === modules[0].Spec.make)) throw new Error('Namespace identity changed');\n",
    )
    const output = path.join(temporary, "bundle.js")
    for (const command of [
      [process.execPath, "-e", namespaceBundle],
      [process.execPath, output],
    ]) {
      const child = Bun.spawn(command, {
        cwd: root,
        env: {
          ...process.env,
          NAMESPACE_ENTRY: entry,
          NAMESPACE_OUTDIR: temporary,
          NAMESPACE_OUTFILE: path.basename(output),
          VIBELANG_BUN_PLUGIN: Bun.resolveSync("vibelang-unplugin/bun", path.join(root, "packages/cli")),
          SOLID_BUN_PLUGIN: Bun.resolveSync("@opentui/solid/bun-plugin", path.join(root, "packages/cli")),
        },
        stdout: "pipe",
        stderr: "pipe",
      })
      const [code, stdout, stderr] = await Promise.all([
        child.exited,
        new Response(child.stdout).text(),
        new Response(child.stderr).text(),
      ])
      if (code !== 0) console.error(stdout + stderr)
      expect(stdout + stderr).not.toContain("No matching export")
      expect(code).toBe(0)
    }
  } finally {
    await rm(temporary, { recursive: true, force: true })
  }
}, 60_000)

// Uses the CLI production plugins with the same entry, target, format, packages and output.
// Cold plugin bundles take 11–16 seconds, so the test allows their real compilation work.
const namespaceBundle = `
const { default: vibelang } = await import(process.env.VIBELANG_BUN_PLUGIN)
const { createSolidTransformPlugin } = await import(process.env.SOLID_BUN_PLUGIN)
const result = await Bun.build({
  entrypoints: [process.env.NAMESPACE_ENTRY],
  target: "bun",
  format: "esm",
  packages: "bundle",
  outdir: process.env.NAMESPACE_OUTDIR,
  naming: process.env.NAMESPACE_OUTFILE,
  plugins: [vibelang(), createSolidTransformPlugin()],
})
if (!result.success) throw new AggregateError(result.logs, "Failed to bundle the native namespace fixture")
`
