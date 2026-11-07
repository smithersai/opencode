import { Effect } from "effect";
import { HttpClient } from "effect/http";
import type { Plan } from "./types.vibe";
export declare const invoke: (plan: Plan, input: unknown) => Effect.Effect<unknown, unknown, HttpClient.HttpClient>;
