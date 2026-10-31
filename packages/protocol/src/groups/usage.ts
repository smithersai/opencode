import { Location } from "@opencode/schema/location"
import { UsageLimits } from "@opencode/schema/usage-limits"
import { Schema } from "effect"
import { HttpApiEndpoint, HttpApiGroup, OpenApi } from "effect/http-api"
import { ServiceUnavailableError } from "../errors.ts"
import { LocationQuery, locationQueryOpenApi } from "./location.ts"

export const UsageGroup = HttpApiGroup.make("server.usage")
  .add(
    HttpApiEndpoint.get("usage.limits", "/api/experimental/usage/limits", {
      query: LocationQuery,
      success: Location.response(Schema.NullOr(UsageLimits.Info)),
      error: ServiceUnavailableError,
    })
      .annotateMerge(locationQueryOpenApi)
      .annotateMerge(
        OpenApi.annotations({
          identifier: "experimental.usage.limits",
          summary: "Get usage limits",
          description:
            "Return the OpenCode Go allowance and Console budgets of the OpenCode Console workspace the location is signed in to, or null when it isn't signed in.",
        }),
      ),
  )
  .annotateMerge(
    OpenApi.annotations({
      title: "usage",
      description: "Experimental usage limit routes.",
    }),
  )
