// Generated platform helpers for this VibeLang module.
import { Effect } from "effect";
/** @throws {never} */
export function $platform() { return Effect.tryPromise(() => import("node:v8")); }
/** @throws {never} */
export function $platform$1() { return Effect.sync(() => process.memoryUsage()); }
