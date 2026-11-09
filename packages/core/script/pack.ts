#!/usr/bin/env bun
import path from "node:path"
import { pack } from "@opencode/script/pack"

await pack(path.resolve(import.meta.dir, ".."), {
  types: "./dist/types/",
  privateModules: ["./database/sqlite.bun.platform", "./database/sqlite.node.platform", "./effect/keyed-mutex.native", "./generate.native", "./tool/runtime.vibe.-24-throw-24-ts", "./tool/runtime.vibe.$throw$ts", "./config/plugin/agent.platform", "./config/plugin/compatibility.platform", "./config/plugin/instruction.platform", "./config/plugin/reference.platform", "./config/plugin/skill-file.platform", "./config/plugin/skill-scan.platform", "./config/plugin/skill.platform", "./config/plugin/worktree.platform", "./image/photon.platform", "./plugin/plan.platform", "./plugin/skill.platform", "./plugin/vcs/git.platform", "./plugin/vcs/hg.platform", "./pty/ticket.platform", "./skill/discovery.platform", "./tool/http-body.platform", "./tool/plugin/glob.platform", "./tool/plugin/grep.platform", "./tool/plugin/read.platform", "./worktree.platform"],
  workspaceOnly: ["./generate.native", "./effect/keyed-mutex.native"],
})
