import http from "node:http"
import { getCACertificates, setDefaultCACertificates } from "node:tls"

export function currentPlatform() {
  return process.platform
}

export function environmentValue(name: string) {
  return process.env[name]
}
export function preferEnvironment(shellEnv: Record<string, string> | null) {
  if (!shellEnv?.XDG_STATE_HOME) delete process.env.XDG_STATE_HOME
  Object.assign(process.env, {
    ...shellEnv,
    OPENCODE_EXPERIMENTAL_ICON_DISCOVERY: "true",
    OPENCODE_EXPERIMENTAL_FILEWATCHER: "true",
    OPENCODE_CLIENT: "desktop",
  })
}
export function configureProxy() {
  ensureLoopbackNoProxy()
  const proxyAwareHttp = http as typeof http & { setGlobalProxyFromEnv(): void }
  proxyAwareHttp.setGlobalProxyFromEnv()
}
export function configureCertificates() {
  setDefaultCACertificates([...new Set([...getCACertificates("default"), ...getCACertificates("system")])])
}

function ensureLoopbackNoProxy() {
  const loopback = ["127.0.0.1", "localhost", "::1"]

  ;["NO_PROXY", "no_proxy"].forEach((key) => {
    const items = (process.env[key] ?? "")
      .split(",")
      .map((value) => value.trim())
      .filter(Boolean)

    loopback.forEach((host) => {
      if (!items.some((value) => value.toLowerCase() === host)) items.push(host)
    })
    process.env[key] = items.join(",")
  })
}
