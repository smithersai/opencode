import { Context, Effect, Layer } from "effect"
import { Agent } from "./agent.ts"
import { AISDK } from "./aisdk.ts"
import { Model } from "./model.ts"
import { Provider } from "./provider.ts"
import { Command } from "./command.ts"
import { Config } from "./config.ts"
import { LayerNode } from "@opencode/util/effect/layer-node"
import { Node } from "@opencode/util/effect/app-node"
import { FileMutation } from "./file-mutation.ts"
import { Environment } from "./environment/index.js"
import { Formatter } from "./formatter.ts"
import { FileSystem } from "./filesystem.ts"
import { FileSystemSearch } from "./filesystem/search.ts"
import { Generate } from "./generate.ts"
import { Voice } from "./voice.ts"
import { UsageLimits } from "./usage-limits.ts"
import { Form } from "./form.ts"
import { Image } from "./image.ts"
import { LocationWatcher } from "./filesystem/location-watcher.ts"
import { Integration } from "./integration.ts"
import { Location } from "./location.ts"
import { LocationLifecycle } from "./location-lifecycle.ts"
import { FileAccess } from "./file-access.ts"
import { ModelResolver } from "./model-resolver.ts"
import { Mcp } from "./mcp/index.ts"
import { Permission } from "./permission.ts"
import { Plugin } from "./plugin.ts"
import { PluginHooks } from "./plugin/hooks.ts"
import { InstancePlugins } from "./plugin/instance.js"
import { PluginSupervisor } from "./plugin/supervisor.ts"
import { WorktreeStrategies } from "./worktree/strategies.ts"
import { Pty } from "./pty.ts"
import { Shell } from "./shell.ts"
import { ShellSelect } from "./shell/select.ts"
import { Reference } from "./reference.ts"
import { Rpc } from "./rpc.ts"
import { WebSearch } from "./websearch.ts"
import { ReferenceInstructions } from "./reference/instructions.ts"
import { SessionRunnerLLM } from "./session/runner/llm.ts"
import { SessionRunnerModel } from "./session/runner/model.ts"
import { SessionCompaction } from "./session/compaction.ts"
import { SessionTitle } from "./session/title.ts"
import { SessionContext } from "./session/context.ts"
import { Skill } from "./skill.ts"
import { SkillInstructions } from "./skill/instructions.ts"
import { Snapshot } from "./snapshot.ts"
import { InstructionDiscovery } from "./instruction-discovery.ts"
import { InstructionBuiltIns } from "./instructions/builtins.ts"
import { SessionInstructions } from "./session/instructions.ts"
import { McpTool } from "./tool/mcp.ts"
import { ReadToolFileSystem } from "./tool/read-filesystem.ts"
import { Tool } from "./tool.ts"
import { ToolOutput } from "./tool-output.ts"
import { Vcs } from "./vcs.ts"

export * as Instance from "./instance.js"
export { Service, node, type Interface } from "./instance/service.ts"

const nodes = [
  Location.node,
  LocationLifecycle.node,
  Environment.node,
  Config.node,
  Agent.node,
  Command.node,
  Reference.node,
  Rpc.node,
  WebSearch.node,
  Integration.node,
  Provider.node,
  Model.node,
  ModelResolver.node,
  AISDK.node,
  Plugin.node,
  PluginHooks.node,
  InstancePlugins.node,
  PluginSupervisor.node,
  WorktreeStrategies.node,
  FileSystemSearch.node,
  FileSystem.node,
  ShellSelect.node,
  Pty.node,
  Shell.node,
  Skill.node,
  InstructionBuiltIns.node,
  InstructionDiscovery.node,
  FileAccess.node,
  FileMutation.node,
  Formatter.node,
  Mcp.node,
  Permission.node,
  Tool.node,
  ToolOutput.node,
  Image.node,
  SkillInstructions.node,
  ReferenceInstructions.node,
  Form.node,
  Generate.node,
  Voice.node,
  UsageLimits.node,
  ReadToolFileSystem.node,
  McpTool.node,
  SessionInstructions.node,
  SessionRunnerModel.node,
  SessionCompaction.node,
  SessionTitle.node,
  SessionContext.node,
  Snapshot.node,
  SessionRunnerLLM.node,
  Vcs.node,
  // Start repository watches only after boot-critical filesystem and Git work.
  LocationWatcher.node,
] as const satisfies readonly Node.LocationGraph<never, unknown>[]

export const graph = LayerNode.group(nodes)

export type Services = LayerNode.Output<typeof graph>
export type Error = FileSystem.DirectoryNotFoundError

export interface Options {
  // Plugins this instance is born with; empty and absent are equivalent.
  readonly plugins?: InstancePlugins.List
  // Filesystem config discovery; true (default) is today's behavior. When
  // false the instance boots vanilla: no upward config scan, no global config
  // dir, no plugin-dir loading or ambient plugin module imports, no boot-time
  // AGENTS.md discovery. Wellknown integration config and host-injected values
  // still apply, and a config value that explicitly names something
  // file-backed (a skill path, an MCP command) is a request, not discovery.
  // Use-triggered behavior also stays: reading a file still injects nested
  // AGENTS.md instructions — that is session-time context, not boot-time
  // population.
  readonly discovery?: boolean
  readonly replacements?: LayerNode.Replacements
}

// Vanilla neutralizes the discovery inputs; the plugin list stays untouched.
// These are defaults ahead of caller replacements: a host that replaces a
// gated node itself owns that node's discovery flags. Plugin-directory
// discovery needs no swap here — implicit scanning only triggers on Directory
// config entries, which a no-scan Config never produces, and the default
// source still honors explicit plugin operations from wellknown and
// host-injected config.
const vanillaReplacements: LayerNode.Replacements = [
  Config.node.replace(Config.configured({ project: false, global: false })),
  InstructionDiscovery.node.replace(InstructionDiscovery.configured({ project: false, global: false })),
]

// One instance is one compiled, fresh copy of the graph standing on a directory.
export function layer(ref: Location.Ref, options: Options = {}): Layer.Layer<Services, Error> {
  const startedAt = performance.now()
  // Ordered: vanilla defaults, then caller replacements (which win over the
  // defaults), then instance bindings (which win over everything).
  const replacements: LayerNode.Replacements = [
    ...(options.discovery === false ? vanillaReplacements : []),
    ...(options.replacements ?? []),
    Location.node.replace(Location.boundNode(ref)),
    InstancePlugins.node.replace(InstancePlugins.bound(options.plugins ?? [])),
  ]

  return LayerNode.compile(graph, { replacements, shared: Node.tags.values.global }).pipe(
    // A missing directory is expected; other instance boot failures remain defects.
    Layer.catchCause(
      (cause): Layer.Layer<Services, Error> =>
        Layer.unwrap(
          Effect.failCause(cause).pipe(
            Effect.catch(
              (error): Effect.Effect<never, Error> =>
                error instanceof FileSystem.DirectoryNotFoundError ? Effect.fail(error) : Effect.die(error),
            ),
          ),
        ),
    ),
    Layer.tap((context) => Effect.addFinalizer(() => Context.get(context, LocationLifecycle.Service).shutdown)),
    Layer.tap(() =>
      Effect.logInfo("location services booted", {
        directory: ref.directory,
        workspaceID: ref.workspaceID,
        durationMs: Math.round(performance.now() - startedAt),
      }),
    ),
  )
}
