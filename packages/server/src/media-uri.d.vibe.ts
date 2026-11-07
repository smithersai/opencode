import type { HttpServerRequest } from "effect/http";
/**
 * Whether the client opted into `media:` refs. The session's own location decides whether its stored media is
 * actually left as refs (`experimental.media_blob`), so this only picks which read to call.
 */
export declare const wantsMediaRefs: (request: HttpServerRequest.HttpServerRequest) => boolean;
