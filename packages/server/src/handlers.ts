import { Layer } from "effect"
import { GenerateHandler } from "#vibelang/emitted/src/handlers/generate"
import { VoiceHandler } from "#vibelang/emitted/src/handlers/voice"
import { MessageHandler } from "#vibelang/emitted/src/handlers/message"
import { ModelHandler } from "#vibelang/emitted/src/handlers/model"
import { ProviderHandler } from "#vibelang/emitted/src/handlers/provider"
import { SessionHandler } from "#vibelang/emitted/src/handlers/session"
import { PermissionHandler } from "#vibelang/emitted/src/handlers/permission"
import { FileSystemHandler } from "#vibelang/emitted/src/handlers/fs"
import { FormHandler } from "#vibelang/emitted/src/handlers/form"
import { CommandHandler } from "#vibelang/emitted/src/handlers/command"
import { SkillHandler } from "#vibelang/emitted/src/handlers/skill"
import { RpcHandler } from "#vibelang/emitted/src/handlers/rpc"
import { EventHandler } from "#vibelang/emitted/src/handlers/event"
import { AgentHandler } from "#vibelang/emitted/src/handlers/agent"
import { PluginHandler } from "#vibelang/emitted/src/handlers/plugin"
import { ServerHandler } from "#vibelang/emitted/src/handlers/server"
import { DebugHandler } from "./handlers/debug"
import { PtyHandler } from "./handlers/pty"
import { PersistentPtyHandler } from "./handlers/persistent-pty"
import { ShellHandler } from "#vibelang/emitted/src/handlers/shell"
import { ReferenceHandler } from "#vibelang/emitted/src/handlers/reference"
import { LocationHandler } from "#vibelang/emitted/src/handlers/location"
import { IntegrationHandler } from "#vibelang/emitted/src/handlers/integration"
import { WebSearchHandler } from "#vibelang/emitted/src/handlers/websearch"
import { UsageHandler } from "#vibelang/emitted/src/handlers/usage"
import { McpHandler } from "./handlers/mcp"
import { CredentialHandler } from "#vibelang/emitted/src/handlers/credential"
import { ProjectHandler } from "#vibelang/emitted/src/handlers/project"
import { WorktreeHandler } from "#vibelang/emitted/src/handlers/worktree"
import { VcsHandler } from "#vibelang/emitted/src/handlers/vcs"
import { EventFeed } from "#vibelang/emitted/src/event-feed"
import { MigrationHandler } from "#vibelang/emitted/src/handlers/migration"
import { ConfigHandler } from "#vibelang/emitted/src/handlers/config"

export const handlers = Layer.mergeAll(
  ServerHandler,
  DebugHandler,
  MigrationHandler,
  LocationHandler,
  AgentHandler,
  PluginHandler,
  SessionHandler,
  MessageHandler,
  ModelHandler,
  GenerateHandler,
  VoiceHandler,
  ProviderHandler,
  IntegrationHandler,
  WebSearchHandler,
  UsageHandler,
  McpHandler,
  CredentialHandler,
  ProjectHandler,
  FormHandler,
  PermissionHandler,
  FileSystemHandler,
  CommandHandler,
  SkillHandler,
  RpcHandler,
  EventHandler.pipe(Layer.provide(EventFeed.layer)),
  PtyHandler,
  PersistentPtyHandler,
  ShellHandler,
  ReferenceHandler,
  WorktreeHandler,
  VcsHandler,
  ConfigHandler,
)
