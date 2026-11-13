import { expect, test } from "bun:test"
import fc from "fast-check"
import { mkdir, mkdtemp, rm, writeFile } from "node:fs/promises"
import { tmpdir } from "node:os"
import path from "node:path"
import { spawnSync } from "node:child_process"
import { pack, npmDir } from "../src/pack"
import corpus from "./opencode-private-companion-modules.corpus.json"

type Example = { module: string; nestedTypes: boolean; conditions: string[] }

async function checkPrivateModule(example: Example, fail = false) {
  const temporary = await mkdtemp(path.join(tmpdir(), "opencode-private-native-"))
  const source = path.join(temporary, "source")
  await mkdir(source)
  const name = path.basename(temporary).toLowerCase()
  const types = example.nestedTypes ? "dist/types" : "dist"
  const privateHeader = types + "/" + example.module.slice(2) + ".d.ts"
  const privateRuntime = "dist/" + example.module.slice(2) + ".js"
  const publicHeader = "export declare const value: 7;\n"
  const privateText = "export declare const hidden: 7;\n"
  const aliases = [...new Set([example.module, example.module.replaceAll("-24-", "$")])]
  const manifest = JSON.stringify({
    name, version: "0.0.0", type: "module", files: ["dist"],
    exports: { ".": "./src/index.ts", "./*": "./src/*.ts" },
    scripts: {
      build: "bun build-fixture.mjs",
      ...(fail ? { prepack: "bun -e " + JSON.stringify("await Bun.write('prepack-ran', 'yes'); process.exit(7)") } : {}),
    },
  })
  const files = {
    [types + "/index.d.ts"]: publicHeader,
    [privateHeader]: privateText,
    "dist/index.js": "export { hidden as value } from " + JSON.stringify(example.module + ".js") + "\n",
    [privateRuntime]: "export const hidden = 7\n",
  }
  const tarball = path.join(npmDir, name + "-0.0.0.tgz")
  try {
    await writeFile(path.join(source, "package.json"), manifest)
    await writeFile(path.join(source, "build-fixture.mjs"),
      "await Promise.all(Object.entries(" + JSON.stringify(files) + ").map(([file,text]) => Bun.write(file,text)))\n")
    if (fail) {
      await expect(pack(source, { types: "./" + types + "/", privateModules: aliases })).rejects.toThrow()
      expect(await Bun.file(path.join(source, "prepack-ran")).text()).toBe("yes")
    } else {
      const packed = await pack(source, { types: "./" + types + "/", privateModules: aliases })
      const consumer = path.join(temporary, "consumer")
      const installed = path.join(consumer, "node_modules", name)
      await mkdir(installed, { recursive: true })
      const extraction = spawnSync("tar", ["-xzf", packed, "--strip-components=1", "-C", installed])
      expect(extraction.status).toBe(0)
      expect(await Bun.file(path.join(installed, privateHeader)).exists()).toBe(false)
      expect(await Bun.file(path.join(installed, types + "/index.d.ts")).text()).toBe(publicHeader)
      expect(await Bun.file(path.join(installed, privateRuntime)).text()).toBe(files[privateRuntime])
      const pkg = await Bun.file(path.join(installed, "package.json")).json()
      for (const alias of aliases) {
        expect(pkg.exports[alias]).toBeNull()
        expect(() => Bun.resolveSync(name + alias.slice(1), consumer)).toThrow()
      }
      const checker = path.join(consumer, "check.mjs")
      await writeFile(checker,
        "import assert from 'node:assert/strict';\n" +
        "assert.equal((await import(" + JSON.stringify(name) + ")).value, 7);\n" +
        "for (const specifier of " + JSON.stringify(aliases.map((alias) => name + alias.slice(1))) + ") {\n" +
        "  await assert.rejects(import(specifier), {code:'ERR_PACKAGE_PATH_NOT_EXPORTED'});\n" +
        "}\n")
      const node = spawnSync("node", [...example.conditions.map((condition) => "--conditions=" + condition), checker],
        { cwd: consumer, encoding: "utf8" })
      expect({ status: node.status, stderr: node.stderr }).toEqual({ status: 0, stderr: "" })
    }
    expect(await Bun.file(path.join(source, "package.json")).text()).toBe(manifest)
    expect(await Bun.file(path.join(source, privateHeader)).text()).toBe(privateText)
    expect(await Bun.file(path.join(source, types + "/index.d.ts")).text()).toBe(publicHeader)
  } finally {
    await rm(temporary, { recursive: true, force: true })
    await rm(tarball, { force: true })
  }
}

// Each case builds and packs a real package, extracts it, then runs Node consumers.
test("private native companion declarations and exports stay out of release archives", async () => {
  for (const example of corpus) await checkPrivateModule(example)
}, 30_000)

test("private native packing preserves public bytes across generated module layouts", async () => {
  await fc.assert(fc.asyncProperty(
    fc.constantFrom("./host.platform", "./nested/helper.native", "./tool.vibe.-24-throw-24-ts", "./nested/工具.platform"),
    fc.boolean(),
    fc.subarray(["node", "types", "browser", "vibelang-source"]),
    async (module, nestedTypes, conditions) => checkPrivateModule({ module, nestedTypes, conditions }),
  ), { numRuns: 12, seed: 480731 })
}, 60_000)

test("a failed pack restores private declarations and the source manifest", async () => {
  await checkPrivateModule(corpus[0]!, true)
}, 30_000)
