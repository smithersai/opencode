import { expect, test } from "bun:test"
import { mkdirSync, mkdtempSync, readFileSync, rmSync, writeFileSync } from "node:fs"
import { tmpdir } from "node:os"
import path from "node:path"
import { spawnSync } from "node:child_process"
import ts from "typescript"
import fc from "fast-check"
import { isolatedDependency } from "../script/local-dependencies"
import corpus from "./opencode-local-sdk-consumer.corpus.json"

const script = path.resolve(import.meta.dir, "../script/verify-package.ts")
const text = readFileSync(script, "utf8")
const ast = ts.createSourceFile(script, text, ts.ScriptTarget.Latest, true)
let mapper: ts.ArrowFunction | undefined
function visit(node: ts.Node) {
  if (ts.isBinaryExpression(node) && node.left.getText(ast) === "pkg.dependencies") {
    const collect = (child: ts.Node) => {
      if (ts.isArrowFunction(child) && child.parameters[0]?.name.getText(ast) === "[dependency, version]")
        mapper = child
      ts.forEachChild(child, collect)
    }
    collect(node.right)
  }
  ts.forEachChild(node, visit)
}
visit(ast)
if (!mapper) throw new Error("SDK verification has no package dependency mapper")
const callback = ts.transpileModule("const callback = " + mapper.getText(ast), {
  compilerOptions: { target: ts.ScriptTarget.ES2022, module: ts.ModuleKind.CommonJS },
}).outputText
// SAFETY: The extracted mapper is the SDK script's own dependency callback.
const mapDependency = new Function("archives", "directory", "isolatedDependency", callback + "; return callback;") as (
  archives: Map<string, string>,
  directory: string,
  isolate: typeof isolatedDependency,
) => (entry: [string, string]) => [string, string]
function installedDependency(directory: string, version: string) {
  return mapDependency(new Map(), directory, isolatedDependency)([corpus.dependency, version])[1]
}
function command(cwd: string, binary: string, args: string[]) {
  const result = spawnSync(binary, args, { cwd, encoding: "utf8", timeout: 25000 })
  expect({
    status: result.status,
    error: result.error?.message,
    stderr: result.status === 0 ? "" : result.stderr.slice(-3000),
  }).toEqual({ status: 0, error: undefined, stderr: "" })
  return result.stdout.trim()
}
test("the SDK isolated consumer installs a transitive local archive", () => {
  const root = mkdtempSync(path.join(tmpdir(), "opencode-local-sdk-"))
  const provider = path.join(root, "provider"),
    source = path.join(root, "source/packages/sdk")
  const consumer = path.join(root, "isolated/consumer"),
    archives = path.join(root, "release archives")
  try {
    for (const directory of [provider, source, consumer, archives]) mkdirSync(directory, { recursive: true })
    writeFileSync(
      path.join(provider, "package.json"),
      JSON.stringify({
        name: corpus.dependency,
        version: "1.0.0",
        type: "module",
        files: ["index.js"],
        exports: "./index.js",
      }),
    )
    writeFileSync(path.join(provider, "index.js"), 'export const ready = "local-archive"\n')
    const runtime = path.join(archives, "runtime.tgz")
    command(provider, "bun", ["pm", "pack", "--ignore-scripts", "--filename", runtime])
    writeFileSync(
      path.join(source, "package.json"),
      JSON.stringify({
        name: "opencode-local-sdk-wrapper",
        version: "1.0.0",
        type: "module",
        files: ["index.js"],
        exports: "./index.js",
        dependencies: { [corpus.dependency]: installedDependency(source, "file:" + path.relative(source, runtime)) },
      }),
    )
    writeFileSync(path.join(source, "index.js"), 'export { ready } from "' + corpus.dependency + '"\n')
    const sdk = path.join(archives, "sdk.tgz")
    command(source, "bun", ["pm", "pack", "--ignore-scripts", "--filename", sdk])
    writeFileSync(path.join(consumer, "package.json"), '{"private":true,"type":"module"}\n')
    command(consumer, "npm", [
      "install",
      "--offline",
      "--ignore-scripts",
      "--no-audit",
      "--no-fund",
      "--package-lock=false",
      sdk,
    ])
    expect(
      command(consumer, "node", [
        "--input-type=module",
        "-e",
        'import { ready } from "opencode-local-sdk-wrapper"; console.log(ready)',
      ]),
    ).toBe("local-archive")
  } finally {
    rmSync(root, { recursive: true, force: true })
  }
}, 30000)
test("local archive identity survives consumer directory changes", () => {
  fc.assert(
    fc.property(
      fc.constantFrom("runtime", "space name", "工具"),
      fc.integer({ min: 1, max: 4 }),
      fc.string({ minLength: 1, maxLength: 30 }),
      (stem, depth, payload) => {
        const root = mkdtempSync(path.join(tmpdir(), "opencode-local-archive-"))
        try {
          const source = path.join(root, "source", ...Array.from({ length: depth }, () => "package"))
          const consumer = path.join(root, "other/consumer"),
            archive = path.join(root, "release archives", stem + ".tgz")
          for (const directory of [source, consumer, path.dirname(archive)]) mkdirSync(directory, { recursive: true })
          writeFileSync(archive, payload)
          const spec = installedDependency(source, "file:" + path.relative(source, archive))
          expect(spec.startsWith("file:")).toBeTrue()
          expect(readFileSync(path.resolve(consumer, spec.slice(5)), "utf8")).toBe(payload)
        } finally {
          rmSync(root, { recursive: true, force: true })
        }
      },
    ),
    { seed: 881908, numRuns: 120 },
  )
})
test("registry and absolute file dependencies retain their spelling", () => {
  for (const spec of [
    "0.0.13",
    "^1.0.0",
    "catalog:",
    "workspace:*",
    "npm:other@1.0.0",
    "file:" + path.resolve("release.tgz"),
  ])
    expect(installedDependency(path.resolve("package"), spec)).toBe(spec)
})
