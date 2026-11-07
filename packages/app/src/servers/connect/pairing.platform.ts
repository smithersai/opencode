// The platform code of pairing.vibe, which a .vibe file does not import as a value (EK4402).

import { isUnauthorizedError, OpenCode } from "@opencode/client/promise"
import { checkServerHealth } from "@/runtime/server/health"
import type { Pairing, Redeemed } from "./pairing.vibe"

// Every address may reach the same server, but the code is single-use, so at most one attempt succeeds.
export function redeemPairingLink(link: { urls: ReadonlyArray<string>; code: string }) {
  const attempts = link.urls.map((url) =>
    OpenCode.make({ baseUrl: url })
      .server.connect({ code: link.code }, { signal: AbortSignal.timeout(5_000) })
      .then((session): Pairing => ({ url, password: session.token })),
  )

  // Whether the first address answered at all: a 401 there means another address spent the code first.
  const first = attempts[0]?.then(
    () => true,
    (error) => isUnauthorizedError(error),
  )

  return Promise.any(attempts)
    .then((pairing) => preferFirst(link.urls, pairing, first))
    .then(
      (pairing): Redeemed => ({ type: "paired", pairing }),
      // Only a server's answer proves the code is spent; addresses that could not be reached leave it valid.
      (error): Redeemed =>
        error instanceof AggregateError && error.errors.some(isUnauthorizedError)
          ? { type: "expired" }
          : { type: "unreachable" },
    )
}
// The token works on every address of the server, so keep the first one (the address the user chose in Pairing) when it
// answers, even if a nearer address answered sooner: a local network address stops working away from that network. An
// address that has not answered within a second, such as a local one seen from elsewhere, is not waited for.

async function preferFirst(
  urls: ReadonlyArray<string>,
  pairing: Pairing,
  answered: Promise<boolean> | undefined,
): Promise<Pairing> {
  const first = urls[0]

  if (!first || first === pairing.url || !answered) return pairing

  const reachable = await Promise.race([
    answered,
    new Promise<false>((resolve) => setTimeout(() => resolve(false), 1_000)),
  ])

  if (!reachable) return pairing
  const http = { url: first, password: pairing.password }
  const health = await checkServerHealth(http, globalThis.fetch, { signal: AbortSignal.timeout(5_000), retryCount: 0 })

  return health.healthy ? http : pairing
}
