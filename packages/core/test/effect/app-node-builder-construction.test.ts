import { expect, test } from "bun:test"
import fc from "fast-check"
import { Context, Effect, Layer } from "effect"
import { Node } from "@opencode/util/effect/app-node"
import { LayerNode } from "@opencode/util/effect/layer-node"
import { AppNodeBuilder } from "../../src/effect/app-node-builder.ts"
import { LocationServiceMap } from "../../src/location-service-map.ts"
import { buildLocationServiceMap } from "../../src/location-services.vibe"
import corpus from "../fixture/opencode-eager-layer-cycle.corpus.json" with { type: "json" }

function cyclic(name: string, grouped: boolean) {
  class Cycle extends Context.Service<Cycle, {}>()("test/EagerLayerCycle/" + name) {}
  const root = Node.makeGlobalNode({
    service: Cycle,
    layer: Layer.effect(Cycle, Effect.as(LocationServiceMap.Service, {})),
    deps: [LocationServiceMap.node],
  })
  const map = Node.makeGlobalNode({
    service: LocationServiceMap.Service,
    layer: Layer.unwrap(Effect.as(Cycle, buildLocationServiceMap())),
    deps: [root],
  })
  return () => AppNodeBuilder.build(grouped ? LayerNode.group([root]) : root, [LocationServiceMap.node.replace(map)])
}

test("layer graph cycles fail while constructing the application graph", () => {
  for (const name of corpus.names) {
    for (const grouped of corpus.grouped) expect(cyclic(name, grouped)).toThrow("Cycle detected in layer graph")
  }
})

test("cycle diagnostics remain eager across names and root group shapes", () => {
  fc.assert(fc.property(fc.string({ minLength: 1, maxLength: 40 }), fc.boolean(), (name, grouped) => {
    expect(cyclic(name, grouped)).toThrow("Cycle detected in layer graph")
  }), { seed: 480601, numRuns: 100 })
})
