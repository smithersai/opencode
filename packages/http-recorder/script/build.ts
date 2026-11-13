#!/usr/bin/env bun
import { $ } from "bun"
import { readdir, rm } from "node:fs/promises"
import vibelang from "vibelang-unplugin/bun"

await rm("dist", { recursive: true, force: true })
await $`bunx vibelang --emitDeclarationOnly`

const build = await Bun.build({
  plugins: [vibelang()],
  entrypoints: ["src/index.ts"],
  outdir: "dist",
  target: "node",
  format: "esm",
  packages: "external",
})
if (!build.success) throw new AggregateError(build.logs, "Failed to build @opencode/http-recorder")

// The root declarations re-export the VibeLang implementation and its module body.
const published = ["index.d.ts", "index.impl.d.ts", "index.impl.vibe.recorder.d.ts", "api.d.ts"]
await Promise.all(
  (await readdir("dist", { recursive: true }))
    .filter((file) => file.endsWith(".d.ts") && !published.includes(file))
    .map((file) => rm(`dist/${file}`)),
)

for (const file of published.map((name) => `dist/${name}`)) {
  if ((await Bun.file(file).text()).includes(["import", "("].join("")))
    throw new Error(`${file} contains dynamic import syntax`)
}
