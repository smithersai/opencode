import { expect, test } from "bun:test"
import fs from "node:fs/promises"
import os from "node:os"
import path from "node:path"
import fc from "fast-check"
import { renderRegistry, typescriptMigrations } from "../script/migration"
import corpus from "./opencode-migration-registry.corpus.json" with { type: "json" }

type Source = { name: string; extension: string }

async function withFiles(sources: Source[], ignored: string[], run: (directory: string) => Promise<void>) {
  const directory = await fs.mkdtemp(path.join(os.tmpdir(), "opencode-migration-registry-"))
  try {
    await Promise.all([
      ...sources.map((source) => Bun.write(path.join(directory, source.name + source.extension), "export default {}")),
      ...ignored.map((name) => Bun.write(path.join(directory, name), "")),
    ])
    await run(directory)
  } finally {
    await fs.rm(directory, { recursive: true, force: true })
  }
}

function imports(source: string) {
  return [...source.matchAll(/from "\.\/migration\/([^"]+)"/g)].map((match) => match[1])
}

test("migration inventory includes native and Vibe sources without generated siblings", async () => {
  await withFiles(corpus.sources, corpus.ignored, async (directory) => {
    expect(await typescriptMigrations(directory)).toEqual(corpus.sources.map((source) => source.name).sort())
  })
})

test("migration registry imports each source through its executable file kind", async () => {
  await withFiles(corpus.sources, corpus.ignored, async (directory) => {
    const sources = [...corpus.sources].sort((a, b) => a.name.localeCompare(b.name))
    expect(
      imports(
        renderRegistry(
          sources.map((source) => source.name),
          directory,
        ),
      ),
    ).toEqual(sources.map((source) => source.name + (source.extension === ".vibe" ? ".vibe" : ".js")))
  })
})

test("mixed migration layouts preserve every migration once in chronological order", async () => {
  await fc.assert(
    fc.asyncProperty(
      fc.uniqueArray(fc.record({ id: fc.integer({ min: 0, max: 999999 }), vibe: fc.boolean() }), {
        minLength: 1,
        maxLength: 12,
        selector: (source) => source.id,
      }),
      async (rows) => {
        const sources = [...rows]
          .sort((a, b) => a.id - b.id)
          .map((source) => ({
            name: "20260101" + String(source.id).padStart(6, "0") + "_case",
            extension: source.vibe ? ".vibe" : ".ts",
          }))
        const ignored = sources.flatMap((source) => [source.name + ".d.vibe.ts", source.name + ".platform.ts"])
        await withFiles(sources, ignored, async (directory) => {
          const names = await typescriptMigrations(directory)
          expect(names).toEqual(sources.map((source) => source.name))
          expect(imports(renderRegistry(names, directory))).toEqual(
            sources.map((source) => source.name + (source.extension === ".vibe" ? ".vibe" : ".js")),
          )
        })
      },
    ),
    { seed: 480608, numRuns: 64 },
  )
})
