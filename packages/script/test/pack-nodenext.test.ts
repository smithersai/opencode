import { expect, test } from "bun:test"
import fc from "fast-check"
import { mkdtemp, mkdir, rm } from "node:fs/promises"
import os from "node:os"
import path from "node:path"
import ts from "typescript"

const entry = path.resolve(import.meta.dir, "../src/pack.ts")

test("pack helper resolves from a NodeNext consumer", () => {
  const program = ts.createProgram([path.resolve(import.meta.dir, "fixtures/opencode-pack-nodenext/consumer.mts")], {
    module: ts.ModuleKind.NodeNext,
    moduleResolution: ts.ModuleResolutionKind.NodeNext,
    target: ts.ScriptTarget.ESNext,
    types: ["bun"],
    noEmit: true,
    skipLibCheck: true,
  })
  const source = program.getSourceFile(entry)
  if (!source) throw new Error("The consumer did not include the pack helper")
  const diagnostics = program.getSemanticDiagnostics(source).filter((diagnostic) => diagnostic.code === 2835)
  expect(diagnostics.map((diagnostic) => ts.flattenDiagnosticMessageText(diagnostic.messageText, "\n"))).toEqual([])
})

test("pack helper imports resolve from generated ESM package locations", async () => {
  const source = await Bun.file(entry).text()
  const dependency = await Bun.file(path.resolve(import.meta.dir, "../src/declaration-routes.ts")).text()
  const imports = ts
    .createSourceFile(entry, source, ts.ScriptTarget.ESNext, true)
    .statements.filter(ts.isImportDeclaration)
    .flatMap((node) =>
      ts.isStringLiteral(node.moduleSpecifier) && node.moduleSpecifier.text.startsWith(".")
        ? [node.moduleSpecifier.text]
        : [],
    )
  expect(imports.length).toBeGreaterThan(0)

  await fc.assert(
    fc.asyncProperty(
      fc.array(fc.constantFrom("core", "theme", "nested", "utils", "模块"), { minLength: 1, maxLength: 4 }),
      fc.constantFrom(ts.ModuleKind.Node16, ts.ModuleKind.NodeNext),
      async (segments, module) => {
        const temporary = await mkdtemp(path.join(os.tmpdir(), "opencode-pack-consumers-"))
        const directory = path.join(temporary, ...segments)
        try {
          await mkdir(directory, { recursive: true })
          const file = path.join(directory, "pack.ts")
          const target = path.join(directory, "declaration-routes.ts")
          await Bun.write(path.join(directory, "package.json"), '{"type":"module"}')
          await Bun.write(file, source)
          await Bun.write(target, dependency)

          // Both ESM resolution modes require explicit extensions on relative imports.
          for (const specifier of imports) {
            const result = ts.resolveModuleName(
              specifier,
              file,
              {
                module,
                moduleResolution:
                  module === ts.ModuleKind.Node16 ? ts.ModuleResolutionKind.Node16 : ts.ModuleResolutionKind.NodeNext,
              },
              ts.sys,
              undefined,
              undefined,
              ts.ModuleKind.ESNext,
            )
            expect(path.resolve(result.resolvedModule?.resolvedFileName ?? "")).toBe(path.resolve(target))
          }
        } finally {
          await rm(temporary, { recursive: true, force: true })
        }
      },
    ),
    { seed: 2835, numRuns: 96, endOnFailure: true },
  )
})
