import { expect, test } from "bun:test"
import fc from "fast-check"
import { mkdtemp, mkdir, rm } from "node:fs/promises"
import os from "node:os"
import path from "node:path"
import ts from "typescript"

test("pack helper resolves in generated NodeNext consumers", async () => {
  await fc.assert(
    fc.asyncProperty(
      fc.array(fc.array(fc.constantFrom("core", "theme", "nested", "utils", "模块"), { minLength: 1, maxLength: 4 }), {
        minLength: 24,
        maxLength: 24,
      }),
      async (consumers) => {
        const directory = await mkdtemp(path.join(os.tmpdir(), "opencode-pack-consumers-"))
        const entry = path.resolve(import.meta.dir, "../src/pack.ts")
        try {
          const files = await Promise.all(
            consumers.map(async (segments, index) => {
              const file = path.join(directory, String(index), ...segments, "consumer.mts")
              const target = path.relative(path.dirname(file), entry).split(path.sep).join("/").replace(/\.ts$/, ".js")
              await mkdir(path.dirname(file), { recursive: true })
              await Bun.write(file, 'export { pack } from "' + target + '"\n')
              return file
            }),
          )

          // NodeNext requires explicit extensions for relative ECMAScript module imports.
          for (const module of [ts.ModuleKind.Node16, ts.ModuleKind.NodeNext]) {
            const program = ts.createProgram(
              [path.resolve(import.meta.dir, "fixtures/opencode-pack-nodenext/consumer.mts"), ...files],
              {
                module,
                moduleResolution:
                  module === ts.ModuleKind.Node16 ? ts.ModuleResolutionKind.Node16 : ts.ModuleResolutionKind.NodeNext,
                target: ts.ScriptTarget.ESNext,
                noEmit: true,
                skipLibCheck: true,
              },
            )
            const diagnostics = ts.getPreEmitDiagnostics(program).filter((diagnostic) => diagnostic.code === 2835)
            expect(
              diagnostics.map((diagnostic) => ts.flattenDiagnosticMessageText(diagnostic.messageText, "\n")),
            ).toEqual([])
          }
        } finally {
          await rm(directory, { recursive: true, force: true })
        }
      },
    ),
    { seed: 2835, numRuns: 2, endOnFailure: true },
  )
})
