import { expect, test } from "bun:test"
import fs from "node:fs"
import path from "node:path"
import ts from "typescript"
import fc from "fast-check"
import corpus from "./opencode-readonly-neighborhood.corpus.json" with { type: "json" }

const packageRoot = path.resolve(import.meta.dir, "..")
type Consumer = { source: string; codec: string; type: string; property: string; alias: string }

test("decoded codec properties retain readonly contracts through consumer aliases", () => {
  const cases: Consumer[] = corpus.rows.flatMap((row) =>
    row.writes.map((property) => ({
      source: row.source,
      codec: row.codec,
      type: row.type,
      property,
      alias: "NativeContract",
    })),
  )
  const fields = corpus.rows.flatMap((row) => row.writes.map((property) => ({ ...row, property })))
  const fuzz = fc
    .sample(
      fc.tuple(
        fc.constantFrom(...fields),
        fc.array(fc.constantFrom("a", "b", "c", "X", "_"), { minLength: 1, maxLength: 12 }),
      ),
      { seed: 480503, numRuns: 80 },
    )
    .map(([row, letters]) => ({
      source: row.source,
      codec: row.codec,
      type: row.type,
      property: row.property,
      alias: "Consumer" + letters.join(""),
    }))
  cases.push(...fuzz)
  const virtual = new Map<string, string>()
  const locations = new Map<Consumer, { file: string; start: number; end: number }>()
  for (const source of new Set(cases.map((row) => row.source))) {
    const declaration = path.join(packageRoot, source.replace(/\.vibe$/, ".d.vibe.ts"))
    const original = fs.readFileSync(declaration, "utf8")
    const file = declaration.replace(/\.d\.vibe\.ts$/, ".readonly-consumer.ts")
    let content = original + "\n"
    cases
      .filter((row) => row.source === source)
      .forEach((row, index) => {
        const start = content.length
        content += `type ${row.alias}${index} = ${row.type};\ndeclare let value${index}: ${row.alias}${index};\nvalue${index}.${row.property} = undefined as never;\n`
        locations.set(row, { file, start, end: content.length })
      })
    virtual.set(file, content)
  }
  const options: ts.CompilerOptions = {
    target: ts.ScriptTarget.ESNext,
    module: ts.ModuleKind.NodeNext,
    moduleResolution: ts.ModuleResolutionKind.NodeNext,
    strict: true,
    skipLibCheck: true,
    allowArbitraryExtensions: true,
    noEmit: true,
    types: ["bun"],
  }
  const host = ts.createCompilerHost(options)
  const read = host.readFile.bind(host)
  const exists = host.fileExists.bind(host)
  host.readFile = (file) => virtual.get(file) ?? read(file)
  host.fileExists = (file) => virtual.has(file) || exists(file)
  const program = ts.createProgram([...virtual.keys()], options, host)
  const diagnostics = program.getSemanticDiagnostics()
  const check = (row: Consumer) => {
    const location = locations.get(row)!
    const errors = diagnostics.filter(
      (diagnostic) =>
        diagnostic.file?.fileName === location.file &&
        (diagnostic.start ?? 0) >= location.start &&
        (diagnostic.start ?? 0) < location.end,
    )
    expect(
      errors.map((error) => ({
        code: error.code,
        message: ts.flattenDiagnosticMessageText(error.messageText, "\n"),
      })),
    ).toEqual([
      {
        code: 2540,
        message: `Cannot assign to '${row.property.split(".").at(-1)}' because it is a read-only property.`,
      },
    ])
  }
  for (const row of cases) check(row)
  fc.assert(fc.property(fc.constantFrom(...fuzz), check), { seed: 480504, numRuns: 100 })
}, 30000)
