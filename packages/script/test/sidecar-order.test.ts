import { expect, test } from "bun:test"
import fc from "fast-check"
import { workspaceOrder } from "../../../script/vibelang-sidecars"

test("declaration generation orders every workspace after its dependencies", () => {
  fc.assert(
    fc.property(fc.array(fc.nat(), { minLength: 1, maxLength: 64 }), (edges) => {
      const names = edges.map((_, index) => `package-${index}`)
      const packages = new Map(
        names
          .map((name, index) => {
            const dependencies = index ? [names[edges[index]! % index]!, "external-package"] : ["external-package"]
            return [name, { directory: name, dependencies }] as const
          })
          .reverse(),
      )
      const ordered = workspaceOrder(packages)
      expect(new Set(ordered).size).toBe(names.length)
      expect([...ordered].sort()).toEqual([...names].sort())
      for (const [name, workspace] of packages) {
        for (const dependency of workspace.dependencies) {
          if (packages.has(dependency)) expect(ordered.indexOf(dependency)).toBeLessThan(ordered.indexOf(name))
        }
      }
    }),
    { numRuns: 128 },
  )
})

test("declaration generation rejects workspace dependency cycles", () => {
  expect(() =>
    workspaceOrder(
      new Map([
        ["a", { directory: "a", dependencies: ["b"] }],
        ["b", { directory: "b", dependencies: ["a"] }],
      ]),
    ),
  ).toThrow("Workspace dependency cycle")
})
