import { expect, test } from "bun:test"
import { statSync, readFileSync } from "node:fs"
import path from "node:path"
import { pathToFileURL } from "node:url"
import fc from "fast-check"
import corpus from "./opencode-core-runtime.corpus.json" with { type: "json" }

const root = path.resolve(import.meta.dir, "../.vibelang/js")
const transpiler = new Bun.Transpiler({ loader: "js" })
const edges = Array.from(new Bun.Glob("**/*.js").scanSync({ cwd: root, absolute: true })).flatMap((file) =>
  transpiler
    .scanImports(readFileSync(file, "utf8").replace(/^#![^\n]*(?:\n|$)/, "\n"))
    .filter((item) => item.path.startsWith("./") || item.path.startsWith("../"))
    .map((item) => ({ file, specifier: item.path, importer: pathToFileURL(file) })),
)

test("generated Core runtime imports name physical modules", () => {
  expect(edges.length).toBeGreaterThan(0)
  for (const item of corpus) {
    const imports = edges.filter((edge) => edge.file === path.join(root, item.module))
    for (const target of item.targets) {
      expect(
        imports.some(
          (edge) => new URL(edge.specifier, edge.importer).href === pathToFileURL(path.join(root, target)).href,
        ),
      ).toBeTrue()
    }
  }
  for (const edge of edges) {
    expect(
      statSync(new URL(edge.specifier, edge.importer)).isFile(),
      path.relative(root, edge.file) + " -> " + edge.specifier,
    ).toBeTrue()
  }
})

test("relative runtime module edges retain file identity through equivalent URL forms", () => {
  fc.assert(
    fc.property(
      fc.constantFrom(...edges),
      fc.integer({ min: 0, max: 5 }),
      fc.stringMatching(/^[a-z0-9]{0,8}$/),
      (edge, dots, query) => {
        const original = new URL(edge.specifier, edge.importer)
        const variant = new URL("./".repeat(dots) + edge.specifier, edge.importer)
        variant.searchParams.set("probe", query)
        variant.hash = "runtime"
        expect(variant.pathname).toBe(original.pathname)
        expect(statSync(variant).isFile()).toBeTrue()
      },
    ),
    { seed: 480508, numRuns: 150 },
  )
})
