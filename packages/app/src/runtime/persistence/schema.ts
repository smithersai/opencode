export * as Persistence from "./schema"

import { Effect, Option, Predicate, Result, Schema, SchemaAST, SchemaGetter, SchemaParser, Struct } from "effect"

export type Migrated<S extends Schema.ConstraintCodec<object, unknown>> = {
  current: S
  read: Schema.ConstraintDecoder<unknown>
}

export function migrate<S extends Schema.ConstraintCodec<object, unknown>>(
  current: S,
  read: Schema.ConstraintDecoder<unknown>,
): Migrated<S> {
  return { current, read }
}

function isMigrated<S extends Schema.ConstraintCodec<object, unknown>>(schema: S | Migrated<S>): schema is Migrated<S> {
  return "current" in schema
}

export function withInitial<S extends Schema.ConstraintCodec<object, unknown>>(
  definition: S | Migrated<S>,
  initial: NoInfer<S["Type"]>,
) {
  const schema = isMigrated(definition) ? definition.current : definition
  const read = isMigrated(definition) ? SchemaParser.decodeUnknownResult(definition.read) : Result.succeed<unknown>
  const encode = Schema.encodeUnknownSync(schema)

  return Schema.Unknown.pipe(
    Schema.decode<Schema.Unknown>({
      decode: SchemaGetter.transformEffect((value) =>
        Effect.fromResult(Result.map(read(value), (stored) => merge(initial, recover(schema.ast, stored, initial)))),
      ),
      encode: SchemaGetter.transform((value) => encode(value)),
    }),
    Schema.decodeTo(Schema.toType(schema)),
  )
}

// A legacy read shape declares only the fields it migrates. Decoding strips unknown keys, so every
// struct level in a `migrate` read schema must stay open for the current fields it does not name.
export function legacy<const Fields extends Schema.Struct.Fields>(fields: Fields) {
  return Schema.StructWithRest(Schema.Struct(fields), [Schema.Record(Schema.String, Schema.Unknown)])
}

// Object-level codecs own their recovery. Plain structs can recover fields independently.
// SAFETY: stored values and their defaults are untyped trees walked against `ast`; `withInitial` decodes the
// recovered and merged result with the current schema before anyone reads it.
// oxlint-disable-next-line anti-slop/no-unknown-parameters, anti-slop/no-unknown-returns -- see SAFETY above
function recover(ast: SchemaAST.AST, value: unknown, initial: unknown): unknown {
  if (value === undefined) return initial

  if (SchemaAST.isObjects(ast) && !ast.encoding && ast.indexSignatures.length === 0 && Predicate.isObject(value)) {
    return Object.fromEntries(
      ast.propertySignatures.flatMap((field) => {
        const defaults = Predicate.isObject(initial) ? initial[field.name] : undefined
        const next = recover(field.type, value[field.name], defaults)

        if (next === undefined && !Object.hasOwn(value, field.name) && defaults === undefined) return []

        return [[field.name, next]]
      }),
    )
  }

  const decoded = Schema.decodeUnknownOption(Schema.make<Schema.Codec<unknown, unknown>>(ast))(value)

  return Option.isSome(decoded) ? decoded.value : initial
}

// SAFETY: like `recover`, merges untyped trees that `withInitial` decodes with the current schema afterwards.
// oxlint-disable-next-line anti-slop/no-unknown-parameters, anti-slop/no-unknown-returns -- see SAFETY above
function merge(initial: unknown, value: unknown): unknown {
  if (value === undefined) return initial

  if (!Predicate.isObject(initial) || !Predicate.isObject(value)) return value

  return Object.fromEntries(
    [...new Set([...Object.keys(initial), ...Object.keys(value)])].map((key) => [key, merge(initial[key], value[key])]),
  )
}

// Unlike a decoding default, a fallback also replaces invalid persisted values.
export function fallback<S extends Schema.ConstraintCodec<unknown, unknown>>(schema: S, value: () => S["Type"]) {
  const defaulted = Schema.withDecodingDefaultType<S>(Effect.sync(value))(schema)
  const result = Schema.catchDecoding<typeof defaulted>(() => Effect.sync(() => Option.some(value())))(defaulted)
  entries.set(result, Schema.catchDecoding<S>(() => Effect.sync(() => Option.some(value())))(schema))

  return result
}

export function optional<S extends Schema.ConstraintCodec<unknown, unknown>>(schema: S) {
  const field = Schema.optional(schema)
  const result = Schema.catchDecoding<typeof field>(() => Effect.succeed(Option.none()))(field)
  entries.set(result, Schema.catchDecoding<S>(() => Effect.succeed(Option.none()))(schema))

  return result
}

export function struct<const Fields extends Schema.Struct.Fields>(fields: Fields) {
  return Schema.Struct(fields).mapFields(Struct.map(Schema.mutableKey))
}

// Effect 4.1 rejects an index signature whose value is optional, as a fallback or optional is (its encoded side stands
// for an absent struct key). A record entry is never absent, so each such schema registers an entry variant without
// the optional key that recovers an invalid entry the same way: the fallback's value, or leaving the entry out.
const entries = new WeakMap<object, Schema.ConstraintCodec<unknown, unknown>>()

export function entry<S extends Schema.ConstraintCodec<unknown, unknown>>(schema: S): S {
  // SAFETY: fallback and optional register, for their own result, a variant over the same schema with the same recovery,
  // so it decodes and encodes the values schema does.
  // oxlint-disable-next-line typescript-eslint/no-unsafe-type-assertion -- see SAFETY above
  return (entries.get(schema) as S | undefined) ?? schema
}

export function record<S extends Schema.ConstraintCodec<unknown, unknown>>(schema: S) {
  const values = Schema.Record(Schema.String, Schema.mutableKey(entry(schema)))

  return fallback(values, () => Schema.decodeUnknownSync(values)({}))
}

// Recover individual entries rather than discarding a whole history or collection.
export function array<S extends Schema.ConstraintCodec<unknown, unknown>>(schema: S) {
  const decode = Schema.decodeUnknownOption(schema)
  const encode = Schema.encodeSync(schema)

  return fallback(
    Schema.Array(Schema.Unknown).pipe(
      Schema.decodeTo(Schema.mutable(Schema.Array(Schema.toType(schema))), {
        decode: SchemaGetter.transform((items) => items.flatMap((item) => Option.toArray(decode(item)))),
        encode: SchemaGetter.transform((items) => items.map((item) => encode(item))),
      }),
    ),
    () => [],
  )
}
