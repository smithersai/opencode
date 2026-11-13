#!/usr/bin/env bun
import path from "node:path"
import { pack } from "@opencode/script/pack"

await pack(path.resolve(import.meta.dir, ".."), { privateModules: ["./tui/resolve.vibe.-24-throw-24-ts", "./tui/resolve.vibe.$throw$ts"], })
