#!/usr/bin/env bun

import path from "node:path"
import { checkLoaderRecord, nearestProject, writeLoaderRecord } from "vibelang/project"
import manifest from "../package.json"

// Prepare after declarations so runtime compilation sees dependency types.
export function prepareRuntimeProjects(sources: Iterable<string>, root: string) {
  const projects = new Set<string>()
  for (const source of sources) {
    const project = nearestProject(source)
    if (!project) throw new Error("No runtime project for " + path.relative(root, source))
    projects.add(project)
  }
  return [...projects].sort().map((project) => {
    const options = { project, root: path.dirname(project) }
    const checked = checkLoaderRecord(options)
    if ("modules" in checked)
      return { project: path.relative(root, project), modules: checked.modules, prepared: false }
    console.log("Preparing runtime: " + path.relative(root, project))
    const written = writeLoaderRecord(options)
    if ("errors" in written) {
      const codes = [...new Set(written.errors.map((error) => error.code))].join(", ")
      throw new Error(
        "Runtime preparation failed for " +
          path.relative(root, project) +
          " (" +
          written.errors.length +
          " diagnostics: " +
          codes +
          ")",
      )
    }
    const validated = checkLoaderRecord(options)
    if ("miss" in validated)
      throw new Error("Runtime record is stale after preparation: " + path.relative(root, project))
    console.log("Prepared runtime: " + path.relative(root, project) + " (" + validated.modules + " modules)")
    return { project: path.relative(root, project), modules: validated.modules, prepared: true }
  })
}

async function prepare() {
  const root = path.resolve(import.meta.dir, "..")
  const sources = new Set<string>()
  for (const pattern of manifest.workspaces.packages) {
    for await (const file of new Bun.Glob(pattern + "/package.json").scan({
      cwd: root,
      absolute: true,
      onlyFiles: true,
    })) {
      const directory = path.dirname(file)
      for await (const source of new Bun.Glob("**/*.{vibe,vibex}").scan({
        cwd: directory,
        absolute: true,
        onlyFiles: true,
        dot: true,
      })) {
        if (
          path
            .relative(directory, source)
            .split(path.sep)
            .some((part) => ["node_modules", ".vibelang", "dist", ".cache"].includes(part))
        )
          continue
        sources.add(source)
      }
    }
  }
  const records = prepareRuntimeProjects(sources, root)
  console.log("Runtime projects ready: " + records.length)
}

if (import.meta.main) await prepare()
