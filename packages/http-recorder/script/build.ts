#!/usr/bin/env bun
import { $ } from "bun"
import { readdir, rm } from "node:fs/promises"
import vibelang from "vibelang-unplugin/bun"

await rm("dist", { recursive: true, force: true })
await $`bunx vibelang --emitDeclarationOnly`

const build = await Bun.build({
  plugins: [vibelang()],
  entrypoints: ["src/index.vibe"],
  outdir: "dist",
  target: "node",
  format: "esm",
  packages: "external",
})
if (!build.success) throw new AggregateError(build.logs, "Failed to build @opencode/http-recorder")

await Promise.all(
  (await readdir("dist", { recursive: true }))
    .filter((file) => file.endsWith(".d.ts") && file !== "index.d.ts" && file !== "api.d.ts")
    .map((file) => rm(`dist/${file}`)),
)

for (const file of ["dist/index.d.ts", "dist/api.d.ts"]) {
  if ((await Bun.file(file).text()).includes(["import", "("].join("")))
    throw new Error(`${file} contains dynamic import syntax`)
}
