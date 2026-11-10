import path from "path"

/** @throws {never} */
export function joinPath(directory: string, name: string) {
  return path.join(directory, name)
}

/** Resolves relative paths against the process working directory, which may be unavailable. */
export function relative(from: string, to: string) {
  return path.relative(from, to)
}

/** Decodes combined process output, or stdout then stderr, as UTF-8. @throws {never} */
export function outputText(result: { readonly output?: Buffer; readonly stdout: Buffer; readonly stderr: Buffer }) {
  return (result.output ?? Buffer.concat([result.stdout, result.stderr])).toString("utf8")
}
