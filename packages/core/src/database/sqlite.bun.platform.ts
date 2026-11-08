import { Database, type SQLQueryBindings } from "bun:sqlite"
import { Context, Effect } from "effect"
import { SqlClient } from "effect/sql"
import { classifySqliteError, SqlError } from "effect/sql/SqlError"
import { Sqlite } from "./sqlite.vibe"

/** Builds lazy statement operations without executing a query. @throws {never} */
export const makeNativeConnection = (native: Database) => {
  const run = (query: string, params: ReadonlyArray<unknown> = []) =>
    Effect.withFiber<Array<Record<string, unknown>>, SqlError>((fiber) => {
      const statement = native.query<Record<string, unknown>, SQLQueryBindings[]>(query)
      // @ts-ignore bun-types missing safeIntegers method, fixed in https://github.com/oven-sh/bun/pull/26627
      statement.safeIntegers(Context.get(fiber.context, SqlClient.SafeIntegers))
      try {
        return Effect.succeed(statement.all(...(params as SQLQueryBindings[])) ?? [])
      } catch (cause) {
        return Effect.fail(
          new SqlError({
            reason: classifySqliteError(cause, { message: "Failed to execute statement", operation: "execute" }),
          }),
        )
      }
    })

  const runValues = (query: string, params: ReadonlyArray<unknown> = []) =>
    Effect.withFiber<Array<unknown[]>, SqlError>((fiber) => {
      const statement = native.query<unknown, SQLQueryBindings[]>(query)
      // @ts-ignore bun-types missing safeIntegers method, fixed in https://github.com/oven-sh/bun/pull/26627
      statement.safeIntegers(Context.get(fiber.context, SqlClient.SafeIntegers))
      try {
        return Effect.succeed(statement.values(...(params as SQLQueryBindings[])) ?? [])
      } catch (cause) {
        return Effect.fail(
          new SqlError({
            reason: classifySqliteError(cause, { message: "Failed to execute statement", operation: "execute" }),
          }),
        )
      }
    })

  const connection = Sqlite.makeConnection(run, runValues, {
    export: Effect.try({
      try: () => native.serialize(),
      catch: (cause) =>
        new SqlError({
          reason: classifySqliteError(cause, { message: "Failed to export database", operation: "export" }),
        }),
    }),
    loadExtension: (path: string) =>
      Effect.try({
        try: () => native.loadExtension(path),
        catch: (cause) =>
          new SqlError({
            reason: classifySqliteError(cause, { message: "Failed to load extension", operation: "loadExtension" }),
          }),
      }),
  })

  return connection
}

export const openNativeDatabase = (config: {
  readonly filename: string
  readonly readonly?: boolean
  readonly readwrite?: boolean
  readonly create?: boolean
  readonly timeout?: number
  readonly allowExtension?: boolean
}) =>
  Effect.sync(
    () =>
      new Database(config.filename, {
        readonly: config.readonly,
        readwrite: config.readwrite ?? true,
        create: config.create ?? true,
      }),
  )
export const closeNativeDatabase = (native: Database) => Effect.sync(() => native.close())
export const enableNativeWal = (native: Database) =>
  Effect.sync(() => {
    native.run("PRAGMA journal_mode = WAL;")
  })
