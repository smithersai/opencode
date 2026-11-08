import { expect, test } from "bun:test"
import fs from "node:fs"
import os from "node:os"
import path from "node:path"
import { spawnSync } from "node:child_process"
import { Schema } from "effect"
import fc from "fast-check"
import * as SimulationProtocol from "@opencode/protocol/simulation"
import corpus from "./opencode-interface-codecs.corpus.json" with { type: "json" }

const packageRoot = path.resolve(import.meta.dir, "..")

test("inferred network and frontend declarations preserve native interface names", () => {
  const temporary = fs.mkdtempSync(path.join(os.tmpdir(), "simulation-declarations-"))
  try {
    const out = path.join(temporary, "headers")
    const result = spawnSync(
      path.join(packageRoot, "node_modules/.bin/vibelang"),
      ["-p", path.join(packageRoot, "tsconfig.build.json"), "--outDir", out, "--singleThreaded", "--pretty", "false"],
      { cwd: packageRoot, encoding: "utf8", timeout: 25000 },
    )
    expect(result.status, result.stdout + result.stderr).toBe(0)
    for (const [name, file] of [
      ["network", "backend/network.d.ts"],
      ["actions", "frontend/actions.d.ts"],
    ]) {
      expect(fs.readFileSync(path.join(out, file!), "utf8")).toBe(
        fs.readFileSync(path.join(import.meta.dir, "fixture", "opencode-" + name + "-interface.dts.txt"), "utf8"),
      )
    }
  } finally {
    fs.rmSync(temporary, { recursive: true, force: true })
  }
}, 30000)

test("network log codec retains its serialized shape across generated values", () => {
  const decode = Schema.decodeUnknownSync(SimulationProtocol.Backend.NetworkLogEntry)
  const encode = Schema.encodeSync(SimulationProtocol.Backend.NetworkLogEntry)
  expect(decode(corpus.network)).toEqual(corpus.network)
  fc.assert(
    fc.property(
      fc.record({
        time: fc.integer(),
        method: fc.constantFrom("GET", "POST", "PUT", "DELETE"),
        url: fc.webUrl(),
        matched: fc.boolean(),
      }),
      (value) => {
        expect(decode({ ...value, extra: "ignored" })).toEqual(value)
        expect(encode(decode(value))).toEqual(value)
        expect(() => decode({ ...value, matched: "invalid" })).toThrow()
      },
    ),
    { seed: 480505, numRuns: 100 },
  )
})

test("frontend element codec retains coordinates, flags and encoding", () => {
  const decode = Schema.decodeUnknownSync(SimulationProtocol.Frontend.Element)
  const encode = Schema.encodeSync(SimulationProtocol.Frontend.Element)
  expect(decode(corpus.element)).toEqual(corpus.element)
  fc.assert(
    fc.property(
      fc.record({
        id: fc.string(),
        num: fc.integer(),
        x: fc.integer(),
        y: fc.integer(),
        width: fc.integer(),
        height: fc.integer(),
        focusable: fc.boolean(),
        focused: fc.boolean(),
        clickable: fc.boolean(),
        editor: fc.boolean(),
      }),
      (value) => {
        expect(decode(value)).toEqual(value)
        expect(encode(decode(value))).toEqual(value)
        expect(() => decode({ ...value, width: "invalid" })).toThrow()
      },
    ),
    { seed: 480506, numRuns: 100 },
  )
})
