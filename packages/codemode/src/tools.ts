import type { Namespace } from "./namespace.js"
import type { Tool } from "./tool.vibe"

export type Tools<R = never> = {
  readonly [name: string]: Tool<R> | Namespace<R> | Tools<R>
}
