import type { CredentialApi, ExperimentalApi, GenerateApi, PluginApi } from "@opencode/client/effect/api"
import type { Location } from "@opencode/schema/location"
import type { Effect, Scope } from "effect"
import type { PluginOptions } from "../options.js"
import type { App } from "../app.js"
import type { AgentDomain } from "./agent.vibe"
import type { AISDKDomain } from "./aisdk.js"
import type { CommandDomain } from "./command.vibe"
import type { EventDomain } from "./event.vibe"
import type { IntegrationDomain } from "./integration.vibe"
import type { MCPDomain } from "./mcp.vibe"
import type { ModelDomain } from "./model.vibe"
import type { PermissionDomain } from "./permission.vibe"
import type { ProviderDomain } from "./provider.vibe"
import type { ReferenceDomain } from "./reference.vibe"
import type { RpcDomain } from "./rpc.vibe"
import type { SessionDomain } from "./session.vibe"
import type { ShellDomain } from "./shell.js"
import type { SkillDomain } from "./skill.vibe"
import type { StorageDomain } from "./storage.vibe"
import type { ToolDomain } from "./tool.vibe"
import type { VcsDomain } from "./vcs.vibe"
import type { WebSearchDomain } from "./websearch.vibe"
import type { WorktreeDomain } from "./worktree.vibe"

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
