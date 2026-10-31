import type { CredentialApi, ExperimentalApi, GenerateApi, PluginApi } from "@opencode/client/effect/api"
import type { Location } from "@opencode/schema/location"
import type { Effect, Scope } from "effect"
import type { PluginOptions } from "../options.js"
import type { App } from "../app.js"
import type { AgentDomain } from "./agent.ts"
import type { AISDKDomain } from "./aisdk.js"
import type { CommandDomain } from "./command.ts"
import type { EventDomain } from "./event.js"
import type { IntegrationDomain } from "./integration.ts"
import type { MCPDomain } from "./mcp.ts"
import type { ModelDomain } from "./model.ts"
import type { PermissionDomain } from "./permission.ts"
import type { ProviderDomain } from "./provider.ts"
import type { ReferenceDomain } from "./reference.ts"
import type { RpcDomain } from "./rpc.ts"
import type { SessionDomain } from "./session.ts"
import type { ShellDomain } from "./shell.js"
import type { SkillDomain } from "./skill.ts"
import type { StorageDomain } from "./storage.ts"
import type { ToolDomain } from "./tool.ts"
import type { VcsDomain } from "./vcs.ts"
import type { WebSearchDomain } from "./websearch.ts"
import type { WorktreeDomain } from "./worktree.ts"

export interface Context {
  readonly app: App
  readonly location: Location.Info
  readonly options: PluginOptions
  readonly agent: AgentDomain
  readonly aisdk: AISDKDomain
  readonly command: CommandDomain
  readonly credential: Pick<CredentialApi<unknown>, "activate">
  readonly event: EventDomain
  readonly experimental: {
    readonly terminal: Pick<ExperimentalApi<unknown>["persistentPty"], "read">
    /** Stateless generation with a model and a prompt: no session, history or tools. */
    readonly generate: GenerateApi<unknown>
  }
  readonly integration: IntegrationDomain
  readonly mcp: MCPDomain
  readonly model: ModelDomain
  /** @deprecated Use `experimental.generate.text`. */
  readonly generate: Pick<GenerateApi<unknown>, "text">
  readonly permission: PermissionDomain
  readonly plugin: Pick<PluginApi<unknown>, "list">
  readonly provider: ProviderDomain
  readonly reference: ReferenceDomain
  readonly rpc: RpcDomain
  readonly session: SessionDomain
  readonly shell: ShellDomain
  readonly skill: SkillDomain
  readonly storage: StorageDomain
  readonly tool: ToolDomain
  readonly vcs: VcsDomain
  readonly websearch: WebSearchDomain
  readonly worktree: WorktreeDomain
}

export interface Plugin<R = Scope.Scope> {
  readonly id: string
  readonly effect: (context: Context) => Effect.Effect<void, never, R>
}

export function define<R = Scope.Scope>(plugin: Plugin<R>) {
  return plugin
}
