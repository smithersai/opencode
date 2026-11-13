import { expect, test } from "bun:test"
import fs from "node:fs"
import path from "node:path"
import { fileURLToPath } from "node:url"
import fc from "fast-check"
import ts from "typescript"
import { Schema } from "effect"
import corpus from "./opencode-value-only-schema.corpus.json" with { type: "json" }

const directory = path.dirname(fileURLToPath(import.meta.url))
const native = path.join(directory, "../src/config/lsp.ts")
const declaration = fs.existsSync(native) ? native : path.join(directory, "../src/config/lsp.ts")
const { ConfigLSP } = await import(
  new URL(fs.existsSync(native) ? "../src/config/lsp.ts" : "../src/config/lsp.vibe", import.meta.url).href
)

function meanings(header: string, alias: string, style: "named" | "namespace" | "projection") {
  const root = path.resolve(directory, "virtual-value-only")
  const leaf = path.join(root, "lsp.d.ts")
  const consumer = path.join(root, "consumer.ts")
  const imported =
    style === "named"
      ? "import { Disabled as " + alias + ' } from "./lsp.js";'
      : style === "namespace"
        ? "import * as " + alias + ' from "./lsp.js";'
        : "import { ConfigLSP as " + alias + ' } from "./lsp.js";'
  const name = style === "named" ? alias : alias + ".Disabled"
  const text = imported + "\nexport type Codec = typeof " + name + ";\nexport type Unavailable = " + name + ";\n"
  const options: ts.CompilerOptions = {
    noLib: true,
    noResolve: true,
    types: [],
    skipLibCheck: true,
    target: ts.ScriptTarget.ESNext,
    module: ts.ModuleKind.ESNext,
  }
  const files = new Map([
    [leaf, header],
    [consumer, text],
  ])
  const host = ts.createCompilerHost(options)
  host.getSourceFile = (file, target) =>
    files.has(file) ? ts.createSourceFile(file, files.get(file)!, target, true) : undefined
  host.fileExists = (file) => files.has(file)
  host.readFile = (file) => files.get(file)
  host.resolveModuleNames = (names) =>
    names.map((name) =>
      name === "./lsp.js" || name === "./lsp.vibe"
        ? { resolvedFileName: leaf, extension: ts.Extension.Dts }
        : undefined,
    )
  const program = ts.createProgram([leaf, consumer], options, host)
  return program
    .getSemanticDiagnostics(program.getSourceFile(consumer)!)
    .map((diagnostic) => ({
      code: diagnostic.code,
      start: diagnostic.start,
      message: ts.flattenDiagnosticMessageText(diagnostic.messageText, "\n"),
    }))
}

test("LSP disabled codec preserves its original value-only export", () => {
  const actual = fs.readFileSync(declaration, "utf8")
  for (const style of ["named", "namespace", "projection"] as const) {
    const expected = meanings(corpus.nativeDeclaration, "CodecNamespace", style)
    expect(expected).toHaveLength(1)
    expect(meanings(actual, "CodecNamespace", style)).toEqual(expected)
  }
})

test("value-only export meanings survive consumer alias and namespace choices", () => {
  const actual = fs.readFileSync(declaration, "utf8")
  fc.assert(
    fc.property(
      fc
        .array(fc.constantFrom("a", "b", "c", "X", "Y", "_"), { minLength: 1, maxLength: 12 })
        .map((parts) => "Codec" + parts.join("")),
      fc.constantFrom("named", "namespace", "projection"),
      (alias, style) => {
        const expected = meanings(corpus.nativeDeclaration, alias, style)
        expect(expected).toHaveLength(1)
        expect(meanings(actual, alias, style)).toEqual(expected)
      },
    ),
    { seed: 480201, numRuns: 40 },
  )
})

test("disabled codec keeps its literal validation and unknown-field behavior", () => {
  const decode = Schema.decodeUnknownSync(ConfigLSP.Disabled)
  for (const value of corpus.witnesses) {
    if (value && value.disabled === true) expect(decode(value)).toEqual({ disabled: true })
    else expect(() => decode(value)).toThrow()
  }
  fc.assert(
    fc.property(fc.boolean(), fc.jsonValue(), (disabled, extra) => {
      if (disabled) expect(decode({ disabled, extra })).toEqual({ disabled: true })
      else expect(() => decode({ disabled, extra })).toThrow()
    }),
    { seed: 480202, numRuns: 100 },
  )
})
