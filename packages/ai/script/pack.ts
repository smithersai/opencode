#!/usr/bin/env bun
import path from "node:path"
import { pack } from "@opencode/script/pack"

await pack(path.resolve(import.meta.dir, ".."), { privateModules: ["./protocols/utils/media-input.platform", "./protocols/utils/partial-json.vibe.-24-throw-24-ts", "./protocols/utils/partial-json.vibe.$throw$ts", "./providers/alibaba.vibe.-24-throw-24-ts", "./providers/alibaba.vibe.$throw$ts", "./providers/cloudflare-ai-gateway.vibe.-24-throw-24-ts", "./providers/cloudflare-ai-gateway.vibe.$throw$ts", "./providers/google-vertex-messages.vibe.-24-throw-24-ts", "./providers/google-vertex-messages.vibe.$throw$ts", "./providers/google-vertex-mistral.vibe.-24-throw-24-ts", "./providers/google-vertex-mistral.vibe.$throw$ts", "./providers/google-vertex.vibe.-24-throw-24-ts", "./providers/google-vertex.vibe.$throw$ts"], })
