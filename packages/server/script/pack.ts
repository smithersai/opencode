#!/usr/bin/env bun
import path from "node:path"
import { pack } from "@opencode/script/pack"

await pack(path.resolve(import.meta.dir, ".."), { privateModules: ["./auth.vibe.platform", "./handlers/debug.vibe.platform", "./handlers/fs.platform", "./handlers/message.platform", "./handlers/persistent-pty.vibe.platform", "./handlers/server.platform", "./handlers/session-error.vibe.platform", "./handlers/session.platform", "./location.vibe.platform", "./middleware/schema-error.platform", "./pairing.vibe.platform", "./process.vibe.platform", "./server-info.vibe.platform"], })
