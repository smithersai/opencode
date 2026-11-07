import { Effect } from "effect";
import { ACPError } from "./error.vibe";
export declare function classify(error: unknown): Effect.Effect<never, ACPError.Error>;
export declare function decodeSessionID(value: string): Effect.Effect<string & import("effect/Brand").Brand<"SessionID">, ACPError.InvalidRequestError, never>;
export * as ACPClient from "./client.vibe";
