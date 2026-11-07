#!/usr/bin/env bun

import { $ } from "bun"
import { rm } from "node:fs/promises"
import path from "node:path"
import { fileURLToPath } from "node:url"
import vibelang from "vibelang-unplugin/bun"
// vibelang: Bun build source entries; declaration sidecars are not entries.
class __vibelangBuildGlob extends Bun.Glob {
  /** @override @param {Parameters<Bun.Glob["scanSync"]>} args @returns {ReturnType<Bun.Glob["scanSync"]>} */
  override scanSync(...args: Parameters<Bun.Glob["scanSync"]>): ReturnType<Bun.Glob["scanSync"]> {
    const files = super.scanSync(...args)
    return (function* () {
      for (const file of files) if (!/\.d\.vibex?\.ts$/.test(file)) yield file
    })()
  }
  /** @override @param {Parameters<Bun.Glob["scan"]>} args @returns {ReturnType<Bun.Glob["scan"]>} */
  override scan(...args: Parameters<Bun.Glob["scan"]>): ReturnType<Bun.Glob["scan"]> {
    const files = super.scan(...args)
    return (async function* () {
      for await (const file of files) if (!/\.d\.vibex?\.ts$/.test(file)) yield file
    })()
  }
}

process.chdir(fileURLToPath(new URL("..", import.meta.url)))

await rm("dist", { recursive: true, force: true })
await $`bun vibelang -p tsconfig.build.json`
const root = path.resolve("src")
const result = await Bun.build({
  plugins: [vibelang()],
  entrypoints: await Array.fromAsync(
    new __vibelangBuildGlob("**/*.{ts,vibe}").scan({ cwd: root, absolute: true }),
  ).then((files) => files.filter((file) => !file.endsWith(".d.ts"))),
  root,
  outdir: "dist",
  target: "node",
  format: "esm",
  packages: "external",
  splitting: true,
  naming: {
    entry: "[dir]/[name].[ext]",
    chunk: "chunks/[name]-[hash].[ext]",
  },
})
if (!result.success) throw new AggregateError(result.logs, "Failed to build Server")
