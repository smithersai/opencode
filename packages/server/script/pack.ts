#!/usr/bin/env bun
import path from "node:path"
import { pack } from "@opencode/script/pack"

await pack(path.resolve(import.meta.dir, ".."), { privateModules: ["./auth.platform", "./handlers/debug.platform", "./handlers/fs.platform", "./handlers/message.platform", "./handlers/persistent-pty.platform", "./handlers/server.platform", "./handlers/session-error.platform", "./handlers/session.platform", "./location.platform", "./middleware/schema-error.platform", "./pairing.platform", "./process.platform", "./server-info.platform"], })
