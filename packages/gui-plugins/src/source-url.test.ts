import { expect, test } from "bun:test"
import { readFile } from "node:fs/promises"
import path from "node:path"
import { fileURLToPath, pathToFileURL } from "node:url"
import fc from "fast-check"

test("component fixture source links name existing implementation files", async () => {
  const root = path.resolve(import.meta.dir, "../../..")
  const directory = path.join(root, "packages/app/component-tests")
  const references: URL[] = []
  for await (const file of new Bun.Glob("**/*.spec.ts").scan({ cwd: directory })) {
    const filename = path.join(directory, file)
    const source = await readFile(filename, "utf8")
    for (const match of source.matchAll(
      /sourceURL\(\s*new URL\(\s*["']([^"']+)["']\s*,\s*import\.meta\.url\s*\)\s*\)/g,
    )) {
      references.push(new URL(match[1], pathToFileURL(filename)))
    }
  }
  expect(references.length).toBeGreaterThan(0)
  for (const reference of references) expect(await Bun.file(fileURLToPath(reference)).exists()).toBe(true)
  await fc.assert(
    fc.asyncProperty(
      fc.constantFrom(...references),
      fc.stringMatching(/^[a-z0-9]{0,16}$/),
      fc.stringMatching(/^[a-z0-9]{0,16}$/),
      async (reference, query, fragment) => {
        const url = new URL(reference)
        url.searchParams.set("version", query)
        url.hash = fragment
        expect(await Bun.file(fileURLToPath(url)).exists()).toBe(true)
      },
    ),
    { seed: 881912, numRuns: 180 },
  )
})
