import { Schema } from "effect"
import { DecisionTextPart, DecisionMediaPart } from "../src/decision.vibe"
import { Media } from "../src/media.js"
import { expect, test } from "bun:test"
import fs from "node:fs"
import path from "node:path"
import { fileURLToPath } from "node:url"
import fc from "fast-check"
import ts from "typescript"
import corpus from "./opencode-value-only-codecs.corpus.json" with { type: "json" }

const directory = path.dirname(fileURLToPath(import.meta.url))
const declaration = path.join(directory, "../src/decision.d.vibe.ts")

function meanings(header: string, alias: string, style: "named" | "namespace", name: string) {
  const root = path.resolve(directory, "virtual-value-only")
  const leaf = path.join(root, "codec.d.ts")
  const consumer = path.join(root, "consumer.ts")
  const imported =
    style === "named"
      ? "import { " + name + " as " + alias + ' } from "./codec.js";'
      : "import * as " + alias + ' from "./codec.js";'
  const target = style === "named" ? alias : alias + "." + name
  const text = imported + "\nexport type Codec = typeof " + target + ";\nexport type Unavailable = " + target + ";\n"
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
      name === "./codec.js" || name === "./codec.vibe"
        ? { resolvedFileName: leaf, extension: ts.Extension.Dts }
        : undefined,
    )
  const program = ts.createProgram([leaf, consumer], options, host)
  const source = program.getSourceFile(consumer)!
  const checker = program.getTypeChecker()
  const query = source.statements.find(
    (node): node is ts.TypeAliasDeclaration => ts.isTypeAliasDeclaration(node) && node.name.text === "Codec",
  )!
  if (!ts.isTypeQueryNode(query.type)) throw new Error("invalid consumer probe")
  let symbol = checker.getSymbolAtLocation(query.type.exprName)
  if (symbol && symbol.flags & ts.SymbolFlags.Alias) symbol = checker.getAliasedSymbol(symbol)
  const unavailable = source.statements
    .find(
      (node): node is ts.TypeAliasDeclaration => ts.isTypeAliasDeclaration(node) && node.name.text === "Unavailable",
    )!
    .getStart(source)
  const diagnostics = program.getSemanticDiagnostics(source)
  return {
    value: !!symbol && !!(symbol.flags & ts.SymbolFlags.Value),
    type: !!symbol && !!(symbol.flags & ts.SymbolFlags.Type),
    valueErrors: diagnostics
      .filter((diagnostic) => (diagnostic.start ?? 0) < unavailable)
      .map((diagnostic) => diagnostic.code),
    typeErrors: diagnostics.filter((diagnostic) => (diagnostic.start ?? 0) >= unavailable).length,
  }
}

test("codec exports preserve their original value-only meanings", () => {
  const actual = fs.readFileSync(declaration, "utf8")
  for (const name of corpus.names)
    for (const style of ["named", "namespace"] as const) {
      const expected = meanings(corpus.nativeDeclaration, "CodecAlias", style, name)
      expect(expected).toEqual({ value: true, type: false, valueErrors: [], typeErrors: 1 })
      expect(meanings(actual, "CodecAlias", style, name)).toEqual(expected)
    }
})

test("value-only meanings survive generated consumer aliases", () => {
  const actual = fs.readFileSync(declaration, "utf8")
  fc.assert(
    fc.property(
      fc
        .array(fc.constantFrom("a", "b", "c", "X", "Y", "_"), { minLength: 1, maxLength: 12 })
        .map((parts) => "Codec" + parts.join("")),
      fc.constantFrom("named", "namespace"),
      fc.constantFrom(...corpus.names),
      (alias, style, name) => {
        const expected = meanings(corpus.nativeDeclaration, alias, style, name)
        expect(expected).toEqual({ value: true, type: false, valueErrors: [], typeErrors: 1 })
        expect(meanings(actual, alias, style, name)).toEqual(expected)
      },
    ),
    { seed: 480203, numRuns: 80 },
  )
})

test("decision codecs retain literal, media and optional filename behavior", () => {
  const text = Schema.decodeUnknownSync(DecisionTextPart)
  const media = Schema.decodeUnknownSync(DecisionMediaPart)
  const encode = Schema.encodeSync(DecisionMediaPart)
  fc.assert(
    fc.property(fc.string(), fc.option(fc.string(), { nil: undefined }), (value, filename) => {
      expect(text({ type: "text", text: value, extra: 1 })).toEqual({ type: "text", text: value })
      const decoded = media({ type: "media", media: { source: { type: "url", url: value } }, filename, extra: 1 })
      expect(decoded.media).toBeInstanceOf(Media.Asset)
      expect(decoded.media.source).toEqual({ type: "url", url: value })
      expect(decoded.filename).toBe(filename)
      expect(encode(decoded).filename).toBe(filename)
      expect("extra" in decoded).toBe(false)
    }),
    { seed: 480204, numRuns: 100 },
  )
  expect(() => text({ type: "media", text: "x" })).toThrow()
  expect(() => media({ type: "media", media: null })).toThrow()
})

test("native value-only controls keep their meanings when type suggestions differ", () => {
  const header =
    corpus.nativeDeclaration + "\nexport type DecisionPart = unknown;\nexport type SessionMediaMessages = unknown;\n"
  for (const name of corpus.names)
    for (const style of ["named", "namespace"] as const) {
      expect(meanings(header, "CodecAlias", style, name)).toEqual(
        meanings(corpus.nativeDeclaration, "CodecAlias", style, name),
      )
    }
})
