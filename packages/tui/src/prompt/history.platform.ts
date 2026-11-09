import path from "path"

export function promptHistoryPath(state: string) {
  return path.join(state, "prompt-history.jsonl")
}
