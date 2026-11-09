#!/usr/bin/env bun
import path from "node:path"
import { pack } from "@opencode/script/pack"

await pack(path.resolve(import.meta.dir, ".."), { privateModules: ["./bom.vibe.-24-call-24-ts", "./bom.vibe.$call$ts", "./heap-snapshot.host.platform", "./heap-snapshot.platform", "./npm-config.host.platform", "./npm-config.platform", "./patch.vibe.-24-throw-24-ts", "./patch.vibe.$throw$ts", "./effect-flock.platform", "./npm.platform", "./process.platform"], })
