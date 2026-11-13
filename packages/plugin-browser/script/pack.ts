#!/usr/bin/env bun
import path from "node:path"
import { pack } from "@opencode/script/pack"

await pack(path.resolve(import.meta.dir, ".."), { privateModules: ["./connection.vibe.platform", "./files.vibe.platform", "./proxy.vibe.platform", "./tunnel.vibe.platform"], })
