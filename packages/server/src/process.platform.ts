// The platform code of process.vibe: the Node HTTP server and the process ID (EK4402).
export { createServer } from "node:http"

/** @throws {never} */
export function pid() {
  return process.pid
}
