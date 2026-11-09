import { expect, test } from "bun:test"
import fc from "fast-check"
import corpus from "./opencode-private-platform-export.corpus.json"

const specifier = corpus.specifier
const conditions = corpus.conditions

test("the credential file adapter stays private under package conditions", () => {
  fc.assert(
    fc.property(fc.subarray(conditions), (selected) => {
      const result = Bun.spawnSync([
        "node",
        "--input-type=module",
        ...selected.map((condition) => `--conditions=${condition}`),
        "--eval",
        `try {
          import.meta.resolve(${JSON.stringify(specifier)})
          process.exit(1)
        } catch (error) {
          if (error.code !== "ERR_PACKAGE_PATH_NOT_EXPORTED") throw error
        }`,
      ])
      expect({ exitCode: result.exitCode, stderr: result.stderr.toString() }).toEqual({ exitCode: 0, stderr: "" })
    }),
    { seed: 526741, numRuns: 24 },
  )
})
