#!/usr/bin/env bun

import path from "node:path"
import { existsSync, statSync } from "node:fs"
import manifest from "../package.json"

type Workspace = {
  directory: string
  dependencies: string[]
}

type Package = {
  name: string
  dependencies?: Record<string, string>
  devDependencies?: Record<string, string>
  optionalDependencies?: Record<string, string>
}

// TypeScript consumers need dependency declarations before checking their own sources.
export function workspaceOrder(packages: ReadonlyMap<string, Workspace>) {
  const complete = new Set<string>()
  const active = new Set<string>()
  const ordered: string[] = []
  function visit(name: string) {
    if (complete.has(name)) return
    if (active.has(name)) throw new Error(`Workspace dependency cycle at ${name}`)
    const workspace = packages.get(name)
    if (!workspace) return
    active.add(name)
    for (const dependency of workspace.dependencies) visit(dependency)
    active.delete(name)
    complete.add(name)
    ordered.push(name)
  }
  for (const name of [...packages.keys()].sort()) visit(name)
  return ordered
}

async function generate() {
  const { default: ts } = await import("typescript")
  const root = path.resolve(import.meta.dir, "..")
  const packages = new Map<string, Workspace>()
  for (const pattern of manifest.workspaces.packages) {
    const glob = new Bun.Glob(`${pattern}/package.json`)
    for await (const file of glob.scan({ cwd: root, absolute: true, onlyFiles: true })) {
      const pkg = (await Bun.file(file).json()) as Package
      packages.set(pkg.name, {
        directory: path.dirname(file),
        dependencies: Object.keys({ ...pkg.dependencies, ...pkg.devDependencies, ...pkg.optionalDependencies }),
      })
    }
  }

  const seen = new Set<string>()
  const covered = new Set<string>()
  async function project(input: string) {
    const config = statSync(input).isDirectory() ? path.join(input, "tsconfig.json") : input
    if (seen.has(config)) return
    seen.add(config)
    const read = ts.readConfigFile(config, ts.sys.readFile)
    if (read.error) throw new Error(ts.flattenDiagnosticMessageText(read.error.messageText, "\n"))
    const parsed = ts.parseJsonConfigFileContent(read.config, ts.sys, path.dirname(config), undefined, config)
    for (const reference of parsed.projectReferences ?? []) await project(ts.resolveProjectReferencePath(reference))
    const sources: string[] = []
    for await (const file of new Bun.Glob("**/*.{vibe,vibex}").scan({
      cwd: path.dirname(config),
      absolute: true,
      onlyFiles: true,
    })) {
      if (!file.split(path.sep).includes("node_modules")) sources.push(file)
    }
    if (!sources.length) return
    console.log(`Generating declarations: ${path.relative(root, config)}`)
    // Select VibeLang source when a dependency's generated "types" target is absent.
    // Keep this condition local to generation; runtime entry resolution is unchanged.
    const child = Bun.spawn(
      [process.execPath, "run", "--silent", "vibelang", "-p", config, "--customConditions", "vibelang-source"],
      { cwd: root, stdout: "inherit", stderr: "inherit" },
    )
    const code = await child.exited
    if (code) throw new Error(`Declaration generation failed for ${path.relative(root, config)} (exit ${code})`)
    for (const source of sources) {
      const declaration = source.replace(/\.(vibex?)$/, ".d.$1.ts")
      if (!(await Bun.file(declaration).exists())) {
        throw new Error(`Declaration was not generated: ${path.relative(root, declaration)}`)
      }
      covered.add(source)
    }
  }
  for (const name of workspaceOrder(packages)) {
    const config = path.join(packages.get(name)!.directory, "tsconfig.json")
    if (existsSync(config)) await project(config)
  }
  console.log(`Generated declarations for ${covered.size} VibeLang modules`)
}

if (import.meta.main) await generate()
