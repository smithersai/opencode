#!/usr/bin/env bun
import path from "node:path"
import { pack } from "@opencode/script/pack"

await pack(path.resolve(import.meta.dir, ".."), {
  privateModules: [
    "./backend/openai.vibe.platform",
    "./backend/simulated-provider.vibe.platform",
    "./frontend/renderer.vibe.platform",
    "./manifest.vibe.platform",
  ],
})
