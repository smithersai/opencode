import type { WebsearchApi } from "./api/api.js"

export type { RpcApi, RpcClient } from "./rpc.vibe"
export type { SelectedEvent } from "../shared-events.js"

export type * from "./api/api.js"

export type WebSearchApi<E = never> = WebsearchApi<E>
