import { expect, test } from "bun:test"

// Keep Electron mocks in a child so they cannot affect the other desktop tests.
test("CLI installation runs once and reports either its path or its failure", async () => {
  const child = Bun.spawn(
    [
      process.execPath,
      "--preload",
      "vibelang/bun",
      "-e",
      `import { mock } from "bun:test"
import assert from "node:assert/strict"
import { Effect, Exit } from "effect"
import fc from "fast-check"
const dialogs = []
mock.module("electron", () => ({
  dialog: { showMessageBox: async (options) => { dialogs.push(options); return { response: 0 } } },
}))
const entries = [...new Bun.Glob("install-cli.{ts,vibe}").scanSync({ cwd: process.cwd() })]
assert.equal(entries.length, 1)
const { showCliInstaller } = await import("./" + entries[0])
const { nativeT } = await import("./translations.ts")
await fc.assert(fc.asyncProperty(fc.string(), fc.boolean(), async (text, fails) => {
  dialogs.length = 0
  let installations = 0
  const install = Effect.suspend(() => {
    installations++
    return fails ? Effect.fail(new Error(text)) : Effect.succeed(text)
  })
  const program = showCliInstaller({ install, resolve: Effect.die("resolve must not run") })
  assert.equal(installations, 0)
  assert.equal(dialogs.length, 0)
  const exit = await Effect.runPromiseExit(program)
  assert.ok(Exit.isSuccess(exit), "installation must handle its typed error")
  assert.equal(installations, 1)
  assert.equal(dialogs.length, 1)
  assert.deepEqual(dialogs[0], fails ? {
    type: "error",
    message: nativeT("desktop.cli.failed.message", { error: text }),
    title: nativeT("desktop.cli.failed.title"),
  } : {
    type: "info",
    message: nativeT("desktop.cli.installed.message", { path: text }),
    title: nativeT("desktop.cli.installed.title"),
  })
}), { seed: 480048, numRuns: 200, examples: [["", false], ["", true], ["CLI path", false], ["工具", true]] })
console.log("INSTALLER_PROPERTIES_PASSED")`,
    ],
    { cwd: import.meta.dir, stdout: "pipe", stderr: "pipe" },
  )

  const [exit, stdout, stderr] = await Promise.all([
    child.exited,
    new Response(child.stdout).text(),
    new Response(child.stderr).text(),
  ])

  expect({ exit, stderr }).toEqual({ exit: 0, stderr: "" })
  expect(stdout).toContain("INSTALLER_PROPERTIES_PASSED")
}, 30_000)
