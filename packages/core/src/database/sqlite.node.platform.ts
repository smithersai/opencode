import { DatabaseSync, type SQLInputValue } from "node:sqlite"
import { Context, Effect } from "effect"
import { SqlClient } from "effect/sql"
import { classifySqliteError, SqlError } from "effect/sql/SqlError"
import { Sqlite } from "./sqlite.vibe"

/** Builds lazy statement operations without executing a query. @throws {never} */
export const makeNativeConnection = (native: DatabaseSync) => {
  const run = (query: string, params: ReadonlyArray<unknown> = []) =>
    Effect.withFiber<Array<Record<string, unknown>>, SqlError>((fiber) => {
      const statement = native.prepare(query)
      statement.setReadBigInts(Context.get(fiber.context, SqlClient.SafeIntegers))
      try {
        return Effect.succeed(statement.all(...(params as SQLInputValue[])) as Array<Record<string, unknown>>)
      } catch (cause) {
        return Effect.fail(
          new SqlError({
            reason: classifySqliteError(cause, { message: "Failed to execute statement", operation: "execute" }),
          }),
        )
      }
    })

  const runValues = (query: string, params: ReadonlyArray<unknown> = []) =>
    Effect.withFiber<ReadonlyArray<ReadonlyArray<unknown>>, SqlError>((fiber) => {
      const statement = native.prepare(query)
      statement.setReadBigInts(Context.get(fiber.context, SqlClient.SafeIntegers))
      statement.setReturnArrays(true)
      try {
        return Effect.succeed(
          statement.all(...(params as SQLInputValue[])) as unknown as ReadonlyArray<ReadonlyArray<unknown>>,
        )
      } catch (cause) {
        return Effect.fail(
          new SqlError({
            reason: classifySqliteError(cause, { message: "Failed to execute statement", operation: "execute" }),
          }),
        )
      }
    })

  const connection = Sqlite.makeConnection(run, runValues, {
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
      new DatabaseSync(config.filename, {
        readOnly: config.readonly,
        timeout: config.timeout,
        allowExtension: config.allowExtension,
        enableForeignKeyConstraints: true,
        open: true,
      }),
  )
export const closeNativeDatabase = (native: DatabaseSync) => Effect.sync(() => native.close())
export const enableNativeWal = (native: DatabaseSync) =>
  Effect.sync(() => {
    native.exec("PRAGMA journal_mode = WAL;")
  })
