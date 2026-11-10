import { describe, expect, test } from "bun:test"
import { mkdtemp, rm } from "node:fs/promises"
import path from "node:path"

const root = path.resolve(import.meta.dir, "../../..")

describe("CLI frontend import boundaries", () => {
  test("does not import Core directly", async () => {
    const glob = new Bun.Glob("{src,test}/**/*.{ts,tsx}")
    const imports: string[] = []
    for await (const file of glob.scan({ cwd: path.join(root, "packages/cli") })) {
      const source = await Bun.file(path.join(root, "packages/cli", file)).text()
      if (/["']@opencode\/core(?:\/[^"']*)?["']/.test(source)) imports.push(file)
    }
    expect(imports).toEqual([])
  })

  test("keeps ACP and its tests off the promise client", async () => {
    const glob = new Bun.Glob("{src,test}/acp/**/*.ts")
    const imports: string[] = []
    for await (const file of glob.scan({ cwd: path.join(root, "packages/cli") })) {
      const source = await Bun.file(path.join(root, "packages/cli", file)).text()
      if (/["']@opencode\/client(?:\/promise(?:\/[^"']*)?|\/service)?["']/.test(source)) imports.push(file)
    }
    expect(imports).toEqual([])
  })

  test("exposes only the intentional package entrypoints", async () => {
    const run = await import("@opencode/cli/run")
    const mini = await import("@opencode/tui/mini")
    const tool = await import("@opencode/tui/mini/tool")
    const cli = await Bun.file(path.join(root, "packages/cli/package.json")).json()

    expect(Object.keys(run).sort()).toEqual(["runNonInteractive", "runV1Bridge"])
    expect(Object.keys(mini).sort()).toEqual(["runMiniFrontend"])
    expect(Object.keys(tool).sort()).toEqual([
      "nonEmptyToolContent",
      "readDisplayText",
      "toolInlineInfo",
      "toolOutputText",
    ])
    expect(Object.keys(cli.exports).filter((key) => key === "./mini" || key.startsWith("./mini/"))).toEqual([])
  })

  test("keeps run and Mini on separate evaluation graphs", async () => {
    const run = await bundleInputs("packages/cli/src/commands/handlers/run.ts")
    expect(run).toContain("packages/cli/src/run/run.ts")
    expect(run).toContain("packages/cli/src/util/error.ts")
    expect(run).toContain("packages/tui/src/mini/tool.ts")
    expect(run).not.toContain("packages/cli/src/ui/prompt.ts")
    expect(run).not.toContain("packages/tui/src/mini/runtime.ts")
    expect(run).not.toContain("packages/tui/src/mini/runtime.lifecycle.ts")
    expect(run).not.toContain("packages/tui/src/mini/footer.ts")
    expect(run).not.toContain("packages/tui/src/mini/scrollback.surface.ts")
    expect(run).not.toContain("packages/tui/src/runtime.tsx")

    const mini = await bundleInputs("packages/cli/src/commands/handlers/mini.ts")
    expect(mini).toContain("packages/cli/src/mini.ts")
    expect(mini).toContain("packages/tui/src/mini/index.ts")
    expect(mini).toContain("packages/tui/src/mini/runtime.ts")
    expect(mini).not.toContain("packages/cli/src/run/run.ts")
    expect(mini).not.toContain("packages/cli/src/run/noninteractive.ts")
    expect(mini).not.toContain("packages/cli/src/run/ui.ts")
    expect(mini).not.toContain("packages/tui/src/runtime.tsx")
  })

  test("keeps TUI Mini independent from Core, Server, and CLI", async () => {
    const glob = new Bun.Glob("**/*.{ts,tsx}")
    const imports: string[] = []
    for await (const file of glob.scan({ cwd: path.join(root, "packages/tui/src/mini") })) {
      const source = await Bun.file(path.join(root, "packages/tui/src/mini", file)).text()
      if (/["']@opencode\/(?:core|server|cli)(?:\/[^"']*)?["']/.test(source)) imports.push(file)
    }
    expect(imports).toEqual([])

    const graph = await bundleInputs("packages/tui/src/mini/index.ts")
    expect(graph.filter((file) => file.startsWith("packages/core/"))).toEqual([])
    expect(graph.filter((file) => file.startsWith("packages/cli/") || file.startsWith("packages/server/"))).toEqual([])
  })
})

// Bundles the way script/build.ts does: Bun.build with the VibeLang and Solid plugins, so an
// import of a converted `x.vibe` resolves. The plain `bun build` CLI runs no plugin.
const bundle = `
const { default: vibelang } = await import(process.env.VIBELANG_BUN_PLUGIN)
const { createSolidTransformPlugin } = await import(process.env.SOLID_BUN_PLUGIN)
const result = await Bun.build({
  entrypoints: [process.env.BOUNDARY_ENTRY],
  target: "bun",
  format: "esm",
  packages: "bundle",
  external: ["@opentui/core-*"],
  metafile: true,
  outdir: process.env.BOUNDARY_OUTDIR,
  plugins: [vibelang(), createSolidTransformPlugin()],
})
if (!result.success) throw new AggregateError(result.logs, "Failed to bundle " + process.env.BOUNDARY_ENTRY)
await Bun.write(process.env.BOUNDARY_METAFILE, JSON.stringify(result.metafile))
`

async function bundleInputs(entrypoint: string) {
  const temporary = await mkdtemp(path.join(import.meta.dir, ".import-boundary-"))
  const metafile = path.join(temporary, "meta.json")
  try {
    const child = Bun.spawn([process.execPath, "-e", bundle], {
      cwd: root,
      env: {
        ...process.env,
        VIBELANG_BUN_PLUGIN: import.meta.resolve("vibelang-unplugin/bun"),
        SOLID_BUN_PLUGIN: import.meta.resolve("@opentui/solid/bun-plugin"),
        BOUNDARY_ENTRY: entrypoint,
        BOUNDARY_OUTDIR: path.join(temporary, "out"),
        BOUNDARY_METAFILE: metafile,
      },
      stdout: "pipe",
      stderr: "pipe",
    })
    const [exitCode, stdout, stderr] = await Promise.all([
      child.exited,
      new Response(child.stdout).text(),
      new Response(child.stderr).text(),
    ])
    if (exitCode !== 0) throw new Error(stdout + stderr)
    const metadata = await Bun.file(metafile).json()
    return Object.keys(metadata.inputs).map((input) =>
      path.relative(root, path.resolve(root, input)).replaceAll(path.sep, "/"),
    )
  } finally {
    await rm(temporary, { recursive: true, force: true })
  }
}
