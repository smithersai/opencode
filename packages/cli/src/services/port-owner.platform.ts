// The platform code of port-owner.vibe: the host platform and IP address checks (EK4402).
import { isIP } from "node:net"

/** @throws {never} */
function platformIsIP(input: string) {
  return isIP(input)
}

export const net = { isIP: platformIsIP }

/** @throws {never} */
export function platform() {
  return process.platform
}
