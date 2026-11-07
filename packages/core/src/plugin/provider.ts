import { AmazonBedrockPlugin } from "./provider/amazon-bedrock.js"
import { AzurePlugin } from "./provider/azure.js"
import { CerebrasPlugin } from "./provider/cerebras.vibe"
import { ChatGPTPlugin } from "./provider/chatgpt.js"
import { CloudflareAIGatewayPlugin } from "./provider/cloudflare-ai-gateway.js"
import { CloudflareWorkersAIPlugin } from "./provider/cloudflare-workers-ai.js"
import { CoherePlugin } from "./provider/cohere.js"
import { DatabricksPlugin } from "./provider/databricks.js"
import { DigitalOceanPlugin } from "./provider/digitalocean.js"
import { DynamicProviderPlugin } from "./provider/dynamic.js"
import { GithubCopilotPlugin } from "./provider/github-copilot.js"
import { GitLabPlugin } from "./provider/gitlab.js"
import { GoogleVertexPlugin } from "./provider/google-vertex.js"
import { KiloPlugin } from "./provider/kilo.vibe"
import { LLMGatewayPlugin } from "./provider/llmgateway.vibe"
import { LMStudioPlugin } from "./provider/lmstudio.vibe"
import { ModalPlugin } from "./provider/modal.js"
import { NeonPlugin } from "./provider/neon.vibe"
import { NvidiaPlugin } from "./provider/nvidia.vibe"
import { OllamaPlugin } from "./provider/ollama.vibe"
import { OpenAIPlugin } from "./provider/openai.js"
import { OpenAIContextCapsPlugin } from "./provider/openai-context-caps.js"
import { SnowflakeCortexPlugin } from "./provider/snowflake-cortex.js"
import { OpencodePlugin } from "./provider/opencode.js"
import { OpenRouterPlugin } from "./provider/openrouter.vibe"
import { PerplexityPlugin } from "./provider/perplexity.js"
import { PoePlugin } from "./provider/poe.js"
import { PromptCacheKeyPlugin } from "./provider/prompt-cache-key.vibe"
import { SapAICorePlugin } from "./provider/sap-ai-core.js"
import { VercelPlugin } from "./provider/vercel.vibe"
import { VLLMPlugin } from "./provider/vllm.vibe"
import { XAIPlugin } from "./provider/xai.js"
import { ZenmuxPlugin } from "./provider/zenmux.vibe"
import type { PluginInternal } from "./internal.js"

export const ProviderPlugins: PluginInternal.InternalPlugin[] = [
  AmazonBedrockPlugin,
  AzurePlugin,
  CerebrasPlugin,
  ChatGPTPlugin,
  CloudflareAIGatewayPlugin,
  CloudflareWorkersAIPlugin,
  CoherePlugin,
  DatabricksPlugin,
  DigitalOceanPlugin,
  GithubCopilotPlugin,
  GitLabPlugin,
  GoogleVertexPlugin,
  KiloPlugin,
  LLMGatewayPlugin,
  LMStudioPlugin,
  ModalPlugin,
  NeonPlugin,
  NvidiaPlugin,
  OllamaPlugin,
  OpencodePlugin,
  SnowflakeCortexPlugin,
  OpenAIPlugin,
  OpenAIContextCapsPlugin,
  OpenRouterPlugin,
  PerplexityPlugin,
  PoePlugin,
  PromptCacheKeyPlugin,
  SapAICorePlugin,
  VercelPlugin,
  VLLMPlugin,
  XAIPlugin,
  ZenmuxPlugin,
  DynamicProviderPlugin,
]
