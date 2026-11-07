import { expect, test } from "bun:test"
import { mkdtemp, mkdir, rm, writeFile } from "node:fs/promises"
import { tmpdir } from "node:os"
import path from "node:path"
import { pack, npmDir } from "../src/pack"

test("packing rejects declarations that depend on private emitted routes", async () => {
  const directory = await mkdtemp(path.join(tmpdir(), "opencode-pack-routes-"))
  const name = "opencode-pack-routes-" + path.basename(directory)
  const manifest = JSON.stringify({
    name,
    version: "0.0.0",
    type: "module",
    files: ["dist"],
    exports: { ".": "./src/index.ts" },
    scripts: { build: "bun build-fixture.ts" },
  })
  const declaration = 'export type { ShellSelect } from "#vibelang/emitted/src/shell/select"'
  const tarball = path.join(npmDir, name + "-0.0.0.tgz")

  try {
    await mkdir(path.join(directory, "src"))
    await writeFile(path.join(directory, "package.json"), manifest)
    await writeFile(
      path.join(directory, "build-fixture.ts"),
      'await Bun.write("dist/index.d.ts", ' + JSON.stringify(declaration) + ")",
    )

    await expect(pack(directory)).rejects.toThrow("private emitted route")
    expect(await Bun.file(path.join(directory, "package.json")).text()).toBe(manifest)
    expect(await Bun.file(tarball).exists()).toBe(false)
  } finally {
    await rm(directory, { force: true, recursive: true })
    await rm(tarball, { force: true })
  }
})
