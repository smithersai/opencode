import { cancel, intro, isCancel, log, note, outro, spinner } from "@clack/prompts"
import { Effect } from "effect"
import path from "node:path"

export const args = process.argv.slice(2)
export const interactive = Boolean(process.stdin.isTTY && process.stdout.isTTY)
const envIndex = args.indexOf("--env")
export const envPath = path.resolve(process.cwd(), (envIndex === -1 ? undefined : args[envIndex + 1]) ?? ".env.local")

/** @throws {never} */
export function envDirectory(file: string) {
  return path.dirname(file)
}

/** @throws {never} */
export function environmentValue(name: string) {
  return process.env[name]
}

/** @throws {never} */
export function environment(): Record<string, string> {
  return Object.fromEntries(
    Object.entries(process.env).filter((entry): entry is [string, string] => entry[1] !== undefined),
  )
}

export function handleCancellation<A>(value: A | symbol): Effect.Effect<A> {
  return Effect.sync(() => {
    // SAFETY: The prompt's cancellation symbol exits; every other value retains its generic result type.
    if (!isCancel(value)) return value as A
    cancel("Cancelled")
    process.exit(130)
  })
}

export const recordingUI = {
  intro: (message: string) => Effect.sync(() => intro(message)),
  outro: (message: string) => Effect.sync(() => outro(message)),
  note: (message: string, title: string) => Effect.sync(() => note(message, title)),
  info: (message: string) => Effect.sync(() => log.info(message)),
  success: (message: string) => Effect.sync(() => log.success(message)),
  spinner: () => Effect.sync(() => {
    const progress = spinner()
    return {
      start: (message: string) => Effect.sync(() => progress.start(message)),
      stop: (message: string) => Effect.sync(() => progress.stop(message)),
    }
  }),
}
