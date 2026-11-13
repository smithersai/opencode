#!/usr/bin/env bun
import path from "node:path"
import { pack } from "@opencode/script/pack"

await pack(path.resolve(import.meta.dir, ".."), { privateModules: ["./event.vibe.-24-throw-24-ts", "./event.vibe.$throw$ts", "./rpc.vibe.-24-throw-24-ts", "./rpc.vibe.$throw$ts"], })
