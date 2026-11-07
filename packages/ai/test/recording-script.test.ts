import { expect, test } from "bun:test"
import { mkdtemp, rm } from "node:fs/promises"
import path from "node:path"
import { fileURLToPath } from "node:url"
import fc from "fast-check"
import ts from "typescript"
import { CloudflareAIGateway } from "../src/providers/cloudflare-ai-gateway.vibe"
import corpus from "./fixtures/opencode-recording-gateway-options.json" with { type: "json" }

const directory = fileURLToPath(new URL("..", import.meta.url))
const manifest: { readonly scripts: Readonly<Record<string, string>> } = await Bun.file(
  new URL("../package.json", import.meta.url),
).json()
const recording = manifest.scripts["setup:recording-env"]?.match(
  /(?:^|\s)(?:\.\/)?(script\/setup-recording-env\.(?:ts|vibe))(?:\s|$)/,
)?.[1]
if (!recording) throw new Error("The recording setup entrypoint is missing")
const tutorial = (await Bun.file(new URL("../example/tutorial.vibe", import.meta.url)).exists())
  ? "example/tutorial.vibe"
  : "example/tutorial.ts"

// These programs are outside the src-only project, so package typechecks do not cover them.
test("recording setup and tutorial pass the project compiler", async () => {
  const temporary = await mkdtemp(path.join(directory, ".recording-script-check-"))
  try {
    const config = path.join(temporary, "tsconfig.json")
    await Bun.write(
      config,
      JSON.stringify({
        extends: "../tsconfig.json",
        compilerOptions: {
          rootDir: "..",
          noEmit: true,
          composite: false,
          incremental: false,
          allowImportingTsExtensions: true,
        },
        include: [`../${recording}`, `../${tutorial}`],
        exclude: [],
      }),
    )
    const child = Bun.spawn(["bunx", "--no-install", "vibelang", "--noEmit", "--pretty", "false", "-p", config], {
      cwd: directory,
      stdout: "pipe",
      stderr: "pipe",
    })
    const [stdout, stderr, exit] = await Promise.all([
      new Response(child.stdout).text(),
      new Response(child.stderr).text(),
      child.exited,
    ])
    expect({ exit, errors: (stdout + stderr).split("\n").filter((line) => /error (?:TS|EK)\d+:/.test(line)) }).toEqual({
      exit: 0,
      errors: [],
    })
  } finally {
    await rm(temporary, { recursive: true, force: true })
  }
})

test("recording setup keeps the account URL for every gateway option", async () => {
  const text = await Bun.file(path.join(directory, recording)).text()
  const source = ts.createSourceFile(recording, text, ts.ScriptTarget.Latest, true)
  const argumentsWritten: string[] = []
  function visit(node: ts.Node) {
    if (ts.isCallExpression(node) && node.expression.getText(source) === "CloudflareAIGateway.baseURL") {
      argumentsWritten.push(node.arguments[0].getText(source))
    }
    ts.forEachChild(node, visit)
  }
  visit(source)
  expect(argumentsWritten).toHaveLength(1)
  const input = new Function("env", `return (${argumentsWritten[0]})`) as (
    env: Readonly<Record<string, string | undefined>>,
  ) => Parameters<typeof CloudflareAIGateway.baseURL>[0]
  const check = (account: string, gateway: string | undefined) => {
    const actual = CloudflareAIGateway.baseURL(
      input({
        CLOUDFLARE_ACCOUNT_ID: account,
        CLOUDFLARE_GATEWAY_ID: gateway,
      }),
    )
    expect(actual).toBe(`https://api.cloudflare.com/client/v4/accounts/${encodeURIComponent(account)}/ai/v1`)
  }
  for (const row of corpus) check(row.account, row.gateway)
  fc.assert(
    fc.property(
      fc.string({ minLength: 1, maxLength: 30 }).filter((value) => !/[\uD800-\uDFFF]/u.test(value)),
      fc.option(fc.string({ maxLength: 30 }), { nil: undefined }),
      check,
    ),
    { numRuns: 200, seed: 2634002 },
  )
})
