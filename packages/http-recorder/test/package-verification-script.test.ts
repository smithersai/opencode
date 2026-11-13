import { expect, test } from "bun:test"
import { mkdtemp, rm } from "node:fs/promises"
import { tmpdir } from "node:os"
import path from "node:path"
import { fileURLToPath, pathToFileURL } from "node:url"
import fc from "fast-check"
import corpus from "./fixtures/opencode-http-recorder-readonly-command.json" with { type: "json" }

const directory = fileURLToPath(new URL("..", import.meta.url))
const manifest: { readonly scripts: Readonly<Record<string, string>> } = await Bun.file(
  new URL("../package.json", import.meta.url),
).json()
const entrypoint = manifest.scripts["verify:package"]?.match(
  /(?:^|\s)(?:\.\/)?(script\/verify-package\.(?:ts|vibe))(?:\s|$)/,
)?.[1]
if (!entrypoint) throw new Error("The package verification entrypoint is missing")
const script = path.join(directory, entrypoint)

// This executable is outside the library's src-only project and needs its own check.
test("the package verification entrypoint passes the project compiler", async () => {
  const temporary = await mkdtemp(path.join(directory, ".verify-package-check-"))
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
        include: [`../${entrypoint}`],
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
    expect({ exit, diagnostics: stdout + stderr }).toEqual({ exit: 0, diagnostics: "" })
  } finally {
    await rm(temporary, { recursive: true, force: true })
  }
})

test("the verification runner preserves frozen command arguments and failures", async () => {
  const module: { readonly run: (command: ReadonlyArray<string>, cwd: string) => Promise<void> } = await import(
    pathToFileURL(script).href
  )
  const fixture = fileURLToPath(new URL("./fixtures/package-verification-argv.ts", import.meta.url))
  const temporary = await mkdtemp(path.join(tmpdir(), "package-verification-argv-"))
  let counter = 0
  try {
    const check = async (values: ReadonlyArray<string>) => {
      const observed = path.join(temporary, `${counter++}.json`)
      const command = Object.freeze([process.execPath, fixture, JSON.stringify(values), observed, ...values])
      const before = [...command]
      await module.run(command, directory)
      expect(command).toEqual(before)
      expect(await Bun.file(observed).json()).toEqual(values)
    }
    for (const values of corpus.arguments) await check(values)
    await fc.assert(
      fc.asyncProperty(
        fc.array(
          fc.string({ maxLength: 24 }).filter((value) => !value.includes("\0")),
          { maxLength: 7 },
        ),
        check,
      ),
      { numRuns: 100, seed: 2634001 },
    )
    await expect(
      module.run(Object.freeze([process.execPath, "-e", `process.exit(${corpus.failureExitCode})`]), directory),
    ).rejects.toThrow("exited with code 7")
  } finally {
    await rm(temporary, { recursive: true, force: true })
  }
})
