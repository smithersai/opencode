import { fileURLToPath } from "node:url"

const target = fileURLToPath(new URL("../openapi.json", import.meta.url))

export function checkRequested() {
  return process.argv.includes("--check")
}

export function readOpenApi() {
  return Bun.file(target).text()
}

export function writeOpenApi(document: string) {
  return Bun.write(target, document)
}

export function finishCheck(stale: boolean): never {
  if (stale) {
    console.error("Generated OpenAPI document is stale. Run `bun run generate` from packages/protocol.")
    process.exit(1)
  }

  process.exit(0)
}
