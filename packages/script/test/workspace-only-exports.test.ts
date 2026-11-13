import { expect, test } from "bun:test"
import fc from "fast-check"
import { mkdir, mkdtemp, rm, writeFile } from "node:fs/promises"
import { tmpdir } from "node:os"
import path from "node:path"
import { spawnSync } from "node:child_process"
import corpus from "./opencode-workspace-only-wildcard.corpus.json"
import { pack } from "../src/pack"

type Example = { segments: string[]; wildcard: boolean; conditional: boolean; explicit: boolean }

async function checkPrivateExport(example: Example) {
  const temporary = await mkdtemp(path.join(tmpdir(), "opencode-private-exports-"))
  const directory = path.join(temporary, "source")
  await mkdir(directory)
  const name = path.basename(temporary).toLowerCase()
  const helper = example.segments.join("/") + (example.wildcard ? "/implementation" : "")
  const excluded = "./" + example.segments.join("/") + (example.wildcard ? "/*" : "")
  const ordinary = "./src/ordinary.ts"
  const target = example.conditional
    ? { types: "./src/*.ts", "vibelang-source": "./src/*.ts", default: "./.vibelang/js/src/*.js" }
    : "./src/*.ts"
  const exports = {
    ".": ordinary,
    "./*": target,
    ...(example.explicit ? { [excluded]: "./src/" + helper + ".ts" } : {}),
  }
  const declarations = {
    "dist/ordinary.d.ts": "export declare const value: 1;\n",
    ["dist/" + helper + ".d.ts"]: "export declare const implementation: 2;\n",
  }
  const files = {
    ...declarations,
    "dist/ordinary.js": "export const value = 1\n",
    ["dist/" + helper + ".js"]: "export const implementation = 2\n",
  }
  let tarball: string | undefined
  try {
    await writeFile(
      path.join(directory, "package.json"),
      JSON.stringify({
        name,
        version: "0.0.0",
        type: "module",
        files: ["dist"],
        exports,
        scripts: { build: "bun build-fixture.mjs" },
      }),
    )
    await writeFile(
      path.join(directory, "build-fixture.mjs"),
      "await Promise.all(Object.entries(" + JSON.stringify(files) + ").map(([file, text]) => Bun.write(file, text)))\n",
    )
    tarball = await pack(directory, { workspaceOnly: [excluded] })
    const consumer = path.join(temporary, "consumer")
    const installed = path.join(consumer, "node_modules", name)
    await mkdir(installed, { recursive: true })
    const extraction = spawnSync("tar", ["-xzf", tarball, "--strip-components=1", "-C", installed])
    expect(extraction.status).toBe(0)
    const manifest = await Bun.file(path.join(installed, "package.json")).json()
    expect(manifest.exports[excluded]).toBeNull()
    for (const [file, text] of Object.entries(declarations))
      expect(await Bun.file(path.join(installed, file)).text()).toBe(text)
    expect(Bun.resolveSync(name + "/ordinary", consumer)).toBe(path.join(installed, "dist/ordinary.js"))
    expect(() => Bun.resolveSync(name + "/" + helper, consumer)).toThrow()
    const checker = path.join(consumer, "check.mjs")
    await writeFile(
      checker,
      "import assert from 'node:assert/strict';\n" +
        "const publicModule = await import(" +
        JSON.stringify(name + "/ordinary") +
        "); assert.equal(publicModule.value, 1);\n" +
        "await assert.rejects(import(" +
        JSON.stringify(name + "/" + helper) +
        "), { code: 'ERR_PACKAGE_PATH_NOT_EXPORTED' });\n",
    )
    const node = spawnSync("node", [checker], { cwd: consumer, encoding: "utf8" })
    expect({ status: node.status, stderr: node.stderr }).toEqual({ status: 0, stderr: "" })
  } finally {
    await rm(temporary, { recursive: true, force: true })
    if (tarball) await rm(tarball, { force: true })
  }
}

test("packed private helper corpus is inaccessible through wildcard exports", async () => {
  for (const example of corpus) await checkPrivateExport(example)
})

test("workspace-only exclusions preserve public imports and declaration bytes", async () => {
  // The pack contract excludes workspace-only entries even through wildcard exports.
  await fc.assert(
    fc.asyncProperty(
      fc.array(fc.constantFrom("native", "internal", "helpers", "module", "工具"), { minLength: 1, maxLength: 3 }),
      fc.boolean(),
      fc.boolean(),
      fc.boolean(),
      async (segments, wildcard, conditional, explicit) =>
        checkPrivateExport({ segments, wildcard, conditional, explicit }),
    ),
    { numRuns: 40, seed: 881901 },
  )
})
