// The platform code of list.vibe: the working directory, paths, file URLs, standard output and the line ending (EK4402).
import hostPath from "node:path"

export { EOL } from "node:os"
export { fileURLToPath } from "node:url"

/** @throws {never} */
function dirname(value: string) {
  return hostPath.dirname(value)
}

export const path = { dirname }

export function currentDirectory() {
  return process.cwd()
}

export function writeOutput(text: string) {
  return process.stdout.write(text)
}
