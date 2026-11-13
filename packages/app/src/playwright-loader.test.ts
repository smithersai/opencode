import { expect, test } from "bun:test"
import { mkdir, mkdtemp, rm, writeFile } from "node:fs/promises"
import { join, resolve } from "node:path"
import fc from "fast-check"
import corpus from "./opencode-playwright-loader.corpus"

const directory = resolve(import.meta.dir, "..")

test("Playwright scripts collect native and VibeLang helper graphs", async () => {
  await fc.assert(
    fc.asyncProperty(
      fc.array(
        fc.record({ kind: fc.constantFrom(...corpus), value: fc.integer({ min: -1_000_000, max: 1_000_000 }) }),
        {
          minLength: 16,
          maxLength: 16,
        },
      ),
      async (rows) => {
        const cases = [...corpus.map((kind, value) => ({ kind, value })), ...rows]
        const temporary = await mkdtemp(join(directory, ".playwright-loader-"))

        try {
          for (const extension of ["ts", "vibe"]) {
            const fixture = join(temporary, extension)
            const values = join(fixture, "values")
            await mkdir(values, { recursive: true })
            await writeFile(
              join(fixture, "tsconfig.json"),
              JSON.stringify({ extends: "../../tsconfig.json", include: ["values/**/*"], exclude: [] }),
            )
            await writeFile(
              join(fixture, "playwright.config.ts"),
              'export default { testDir: ".", testMatch: "witness.spec.ts" }',
            )
            await writeFile(join(values, "types.ts"), "export type Value = number")

            const imports: string[] = []

            for (const [index, row] of cases.entries()) {
              const body = {
                function: "const read = (): Value => " + row.value + "; export const value: Value = read()",
                reexport: 'import { input } from "./native-' + index + '.ts"; export const value: Value = input',
                typed: "export const value: Value = " + row.value,
              }[row.kind]

              if (row.kind === "reexport")
                await writeFile(join(values, "native-" + index + ".ts"), "export const input = " + row.value)
              await writeFile(
                join(values, "value-" + index + "." + extension),
                'import type { Value } from "./types.ts"; ' + body,
              )
              imports.push(
                "import { value as value" + index + ' } from "./values/value-' + index + "." + extension + '"',
              )
            }

            const actual = cases.map((_, index) => "value" + index).join(",")
            const expected = JSON.stringify(cases.map((row) => row.value))
            await writeFile(
              join(fixture, "witness.spec.ts"),
              [
                'import { test } from "@playwright/test"',
                ...imports,
                "if (JSON.stringify([" +
                  actual +
                  "]) !== JSON.stringify(" +
                  expected +
                  ')) throw new Error("Helper values changed")',
                'test("helper graph loads", () => {})',
              ].join("\n"),
            )

            const child = Bun.spawn(
              [process.execPath, "run", "test:e2e:built", "--config", join(fixture, "playwright.config.ts"), "--list"],
              { cwd: directory, stdout: "pipe", stderr: "pipe" },
            )

            const [exit, stdout, stderr] = await Promise.all([
              child.exited,
              new Response(child.stdout).text(),
              new Response(child.stderr).text(),
            ])

            expect({ extension, exit, diagnostics: exit === 0 ? "" : stdout + stderr }).toEqual({
              extension,
              exit: 0,
              diagnostics: "",
            })
            expect(stdout).toContain("Total: 1 test in 1 file")
          }
        } finally {
          await rm(temporary, { recursive: true, force: true })
        }
      },
    ),
    { numRuns: 2, seed: 1884201, endOnFailure: true },
  )
}, 30_000)
