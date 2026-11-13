import { ConfigPolicy } from "../../src/config/policy.vibe"
import type { RevertV1 } from "../../src/session-revert.vibe"
import { SessionV1 } from "../../src/v1/session.vibe"

declare let policy: ConfigPolicy.Info
// @ts-expect-error Native policy fields are readonly.
policy.action = "tool.use"
// @ts-expect-error Native policy fields are readonly.
policy.resource = "tool:*"
// @ts-expect-error Native policy fields are readonly.
policy.effect = "allow"

declare let revert: RevertV1
if (revert.files?.[0]) {
  // @ts-expect-error Legacy file fields retain their native readonly contract.
  revert.files[0].path = "changed.txt"
  // @ts-expect-error Legacy file fields retain their native readonly contract.
  revert.files[0].patch = ""
}

declare let session: typeof SessionV1.SessionInfo.Type
if (session.tokens) {
  // @ts-expect-error Native token totals are readonly.
  session.tokens.input = 0
  // @ts-expect-error Nested native token totals are readonly.
  session.tokens.cache.read = 0
}
if (session.share) {
  // @ts-expect-error Native share configuration is readonly.
  session.share.url = "https://example.com"
}
