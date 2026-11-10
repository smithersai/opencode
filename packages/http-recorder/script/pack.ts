#!/usr/bin/env bun
import { $, Glob } from "bun"
import { copyFile, mkdtemp, rm } from "node:fs/promises"
import { tmpdir } from "node:os"
import path from "node:path"
import { fileURLToPath } from "node:url"

const dir = fileURLToPath(new URL("..", import.meta.url))

export const pack = async () => {
  process.chdir(dir)
  await $`bun run build`
  const original = await Bun.file("package.json").text()
  // oxlint-disable-next-line typescript-eslint/no-unsafe-type-assertion -- package.json is validated by the package schema and build checks.
  const pkg = JSON.parse(original) as {
    readonly name: string
    readonly version: string
    exports: Record<
      string,
      string | { readonly import?: string; readonly types?: string; readonly "vibelang-source"?: string }
    >
  }

  for (const [key, value] of Object.entries(pkg.exports)) {
    const source = typeof value === "string" ? value : (value["vibelang-source"] ?? value.import)
    if (!source) continue
    const file = source.replace("./src/", "./dist/").replace(/\.(?:tsx?|vibex?)$/, "")
    pkg.exports[key] = { import: `${file}.js`, types: `${file}.d.ts` }
  }
  await Bun.write("package.json", JSON.stringify(pkg, null, 2))
  // Generated platform companions stay private: their headers leave the archive, their runtime files stay.
  const staging = await mkdtemp(path.join(tmpdir(), "http-recorder-private-declarations-"))
  const staged: Array<{ readonly original: string; readonly saved: string }> = []
  try {
    for (const [index, header] of [...new Glob("dist/**/*.platform.d.ts").scanSync(".")].entries()) {
      const saved = path.join(staging, index + ".d.ts")
      await copyFile(header, saved)
      staged.push({ original: header, saved })
      await rm(header)
    }
    await $`bun pm pack`
    return fileURLToPath(
      new URL(`../${pkg.name.replace("@", "").replace("/", "-")}-${pkg.version}.tgz`, import.meta.url),
    )
  } finally {
    for (const { original, saved } of staged) await copyFile(saved, original)
    await rm(staging, { recursive: true, force: true })
    await Bun.write("package.json", original)
  }
}

export const withPackedArchive = async <A>(use: (archive: string) => Promise<A>) => {
  const archive = await pack()
  try {
    return await use(archive)
  } finally {
    const file = Bun.file(archive)
    if (await file.exists()) await file.delete()
  }
}

if (import.meta.main) await pack()
