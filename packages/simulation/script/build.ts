#!/usr/bin/env bun

import { $ } from "bun"
import { rm } from "node:fs/promises"
import { fileURLToPath } from "node:url"

process.chdir(fileURLToPath(new URL("..", import.meta.url)))

await rm("dist", { recursive: true, force: true })
await $`bun vibelang -p tsconfig.build.json`
// Declaration sidecars beside VibeLang sources are not modules.
const files = await Array.fromAsync(new Bun.Glob("**/*.ts").scan({ cwd: "src" })).then((items) =>
  items.filter((item) => !/\.d\.(?:vibex?\.)?ts$/.test(item)).map((item) => `src/${item}`),
)
const transpiler = new Bun.Transpiler({ loader: "ts", target: "bun" })
await Promise.all(
  files.map(async (file) =>
    Bun.write(
      file.replace(/^src\//, "dist/").replace(/\.ts$/, ".js"),
      await transpiler.transform(await Bun.file(file).text()),
    ),
  ),
)
// VibeLang modules ship the runtime JavaScript the package commits under .vibelang/js.
const modules = await Array.fromAsync(new Bun.Glob("**/*.vibe").scan({ cwd: "src" }))
await Promise.all(
  modules.map((module) => {
    const output = module.replace(/\.vibe$/, ".js")
    return Bun.write(`dist/${output}`, Bun.file(`.vibelang/js/src/${output}`))
  }),
)
