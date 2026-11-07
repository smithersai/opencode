import { expect, test } from "bun:test"
import { mkdtemp, rm } from "node:fs/promises"
import path from "node:path"
import { fileURLToPath } from "node:url"
import fc from "fast-check"
import corpus from "./fixtures/opencode-serve-handler-loaders.json" with { type: "json" }

const directory = fileURLToPath(new URL("..", import.meta.url))

test("native lazy loaders accept the checked server handler declaration", async () => {
  const temporary = await mkdtemp(path.join(directory, ".serve-handler-types-"))
  try {
    await Bun.write(
      path.join(temporary, "tsconfig.json"),
      JSON.stringify({
        extends: "../tsconfig.json",
        compilerOptions: { noEmit: true, composite: false, incremental: false },
        files: ["consumer.ts"],
        include: [],
        exclude: [],
        references: [{ path: "../../core" }],
      }),
    )
    await fc.assert(
      fc.asyncProperty(
        fc.array(fc.record({ name: fc.nat(1_000_000), kind: fc.constantFrom(...corpus) }), {
          minLength: 32,
          maxLength: 32,
        }),
        async (rows) => {
          const cases = [...corpus.map((kind, name) => ({ kind, name })), ...rows]
          const specifier = JSON.stringify("../src/commands/handlers/serve.vibe")
          const source = [
            'import { Commands } from "../src/commands/commands.ts"',
            'import { Runtime } from "../src/framework/runtime.ts"',
            ...cases.map((row, index) => {
              const name = `loader_${index}_${row.name}`
              const expressions: Readonly<Record<string, string>> = {
                arrow: `() => import(${specifier})`,
                "async-arrow": `async () => await import(${specifier})`,
                function: `function () { return import(${specifier}) }`,
                "async-function": `async function () { return await import(${specifier}) }`,
                then: `() => import(${specifier}).then((value) => value)`,
                binding: `() => import(${specifier})`,
              }
              if (row.kind === "binding")
                return `const ${name}_load = ${expressions.binding}; export const ${name}: Runtime.Handlers<typeof Commands.commands.serve> = ${name}_load`
              return `export const ${name}: Runtime.Handlers<typeof Commands.commands.serve> = ${expressions[row.kind]}`
            }),
          ].join("\n")
          await Bun.write(path.join(temporary, "consumer.ts"), source)
          const child = Bun.spawn(
            [process.execPath, "check", "--no-script", "-b", path.join(temporary, "tsconfig.json")],
            {
              cwd: directory,
              stdout: "pipe",
              stderr: "pipe",
            },
          )
          const [stdout, stderr, exit] = await Promise.all([
            new Response(child.stdout).text(),
            new Response(child.stderr).text(),
            child.exited,
          ])
          expect({ exit, diagnostics: exit === 0 ? "" : stdout + stderr }).toEqual({ exit: 0, diagnostics: "" })
        },
      ),
      { numRuns: 2, seed: 2634003, endOnFailure: true },
    )
  } finally {
    await rm(temporary, { recursive: true, force: true })
  }
})
