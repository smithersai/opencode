#!/usr/bin/env bun
import path from "node:path"
import { pack } from "@opencode/script/pack"

await pack(path.resolve(import.meta.dir, ".."), {
  types: "./dist/types/",
  privateModules: ["./database/sqlite.bun.platform", "./database/sqlite.node.platform", "./effect/keyed-mutex.native", "./generate.native", "./tool/runtime.vibe.-24-throw-24-ts", "./tool/runtime.vibe.$throw$ts"],
  workspaceOnly: ["./generate.native", "./effect/keyed-mutex.native"],
})
