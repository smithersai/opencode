import { expect, test } from "bun:test"
import fs from "node:fs/promises"
import os from "node:os"
import path from "node:path"
import { fileURLToPath } from "node:url"
import FastCheck from "fast-check"
import corpus from "./opencode-recording-env-status.corpus.json"

const cwd = fileURLToPath(new URL("../..", import.meta.url))

async function check(file: string | null, shell: string | null) {
  const directory = await fs.mkdtemp(path.join(os.tmpdir(), "opencode-recording-env-"))
  const envFile = path.join(directory, ".env.local")
  const original = file === null ? "# No provider value\n" : 'OPENAI_API_KEY="' + file + '"\n'
  await fs.writeFile(envFile, original)
  try {
    const child = Bun.spawn(
      [process.execPath, "run", "setup:recording-env", "--check", "--providers", "openai", "--env", envFile],
      {
        cwd,
        env: {
          PATH: process.env.PATH ?? "",
          CI: "true",
          NO_COLOR: "1",
          TERM: "dumb",
          ...(shell === null ? {} : { OPENAI_API_KEY: shell }),
        },
        stdin: "ignore",
        stdout: "pipe",
        stderr: "pipe",
      },
    )
    const [code, stdout, stderr] = await Promise.all([
      child.exited,
      new Response(child.stdout).text(),
      new Response(child.stderr).text(),
    ])
    expect({ code, stderr }).toMatchObject({ code: 0 })
    const output = stdout + stderr
    const status = file !== null ? "file" : shell !== null ? "shell" : "missing"
    const line = (status === "missing" ? "missing" : "set") + " OPENAI_API_KEY"
    expect(output).toContain(line + (status === "shell" ? " (shell only)" : ""))
    expect(output).toContain("Check complete")
    if (file !== null) expect(output).not.toContain(file)
    if (shell !== null) expect(output).not.toContain(shell)
    expect(await fs.readFile(envFile, "utf8")).toBe(original)
    return status
  } finally {
    await fs.rm(directory, { recursive: true, force: true })
  }
}

test("recording checks preserve file and shell precedence from the minimized corpus", async () => {
  for (const item of corpus) expect(await check(item.file, item.shell)).toBe(item.status)
}, 60_000)

test("recording checks report status without changing files or printing generated values", async () => {
  const value = FastCheck.array(FastCheck.constantFrom(..."abcdefghijklmnopqrstuvwxyz0123456789"), {
    minLength: 8,
    maxLength: 24,
  }).map((letters) => "fixture_" + letters.join(""))
  await FastCheck.assert(
    FastCheck.asyncProperty(
      FastCheck.option(value, { nil: null }),
      FastCheck.option(value, { nil: null }),
      async (file, shell) => {
        await check(file, shell)
      },
    ),
    { seed: 741905, numRuns: 16 },
  )
}, 60_000)
