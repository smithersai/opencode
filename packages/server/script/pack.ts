#!/usr/bin/env bun
import path from "node:path"
import { pack } from "@opencode/script/pack"

await pack(path.resolve(import.meta.dir, ".."), { privateModules: ["./handlers/fs.platform", "./handlers/message.platform", "./handlers/server.platform", "./handlers/session.platform", "./middleware/schema-error.platform"], })
