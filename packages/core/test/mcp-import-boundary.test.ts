import { expect, test } from "bun:test"
import { mkdtemp, rm } from "node:fs/promises"
import path from "node:path"

const root = path.resolve(import.meta.dir, "../../..")

// Bundles the way script/build.ts does: Bun.build with the VibeLang plugin, so a `./x.js`
// specifier resolves to a converted `x.vibe`. The plain `bun build` CLI runs no plugin.
const bundle = `
const { default: vibelang } = await import(process.env.VIBELANG_BUN_PLUGIN)
const result = await Bun.build({
  entrypoints: ["packages/core/src/mcp/index.ts"],
  target: "node",
  format: "esm",
  packages: "bundle",
  splitting: true,
  metafile: true,
  outdir: process.env.MCP_BUNDLE_OUTDIR,
  plugins: [vibelang()],
})
if (!result.success) throw new AggregateError(result.logs, "Failed to bundle the MCP entry")
await Bun.write(process.env.MCP_BUNDLE_METAFILE, JSON.stringify(result.metafile))
`

test("loads the MCP SDK only when connecting or authorizing", async () => {
  const temporary = await mkdtemp(path.join(import.meta.dir, ".mcp-import-boundary-"))
  const metafile = path.join(temporary, "meta.json")
  try {
    const result = Bun.spawn([process.execPath, "-e", bundle], {
      cwd: root,
      env: {
        ...process.env,
        VIBELANG_BUN_PLUGIN: import.meta.resolve("vibelang-unplugin/bun"),
        MCP_BUNDLE_OUTDIR: path.join(temporary, "out"),
        MCP_BUNDLE_METAFILE: metafile,
      },
      stdout: "pipe",
      stderr: "pipe",
    })
    const [exitCode, stdout, stderr] = await Promise.all([
      result.exited,
      new Response(result.stdout).text(),
      new Response(result.stderr).text(),
    ])
    if (exitCode !== 0) throw new Error(stdout + stderr)

    const metadata = await Bun.file(metafile).json()
    const imports = metadata.inputs["packages/core/src/mcp/index.ts"].imports
    const lazy = imports.filter(
      (item: { original?: string }) => item.original === "./client.js" || item.original === "./oauth.js",
    )
    expect(new Set(lazy.map((item: { original: string }) => item.original))).toEqual(
      new Set(["./client.js", "./oauth.js"]),
    )
    expect(lazy.every((item: { kind: string }) => item.kind === "dynamic-import")).toBe(true)
  } finally {
    await rm(temporary, { recursive: true, force: true })
  }
}, 60000)
