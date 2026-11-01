import type { ProviderPackage } from "../../provider-package.js"
import { MiniMax } from "../minimax.vibe"

export type Settings = MiniMax.Settings<MiniMax.ChatOptionsInput>

export const model: ProviderPackage.Definition<Settings, MiniMax.ChatOptionsInput>["model"] = (
  modelID,
  { apiKey, baseURL, body, headers, ...providerOptions },
) =>
  MiniMax.configure({
    apiKey,
    baseURL,
    headers,
    http: body === undefined ? undefined : { body },
    providerOptions,
  }).chat(modelID)
