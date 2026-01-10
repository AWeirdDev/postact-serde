import { MetaType, Primitive, type Schema, type Vector } from "./structure";

interface OfType<T> {
  readonly _type: T;
}

type SchemaOfType<T> = Schema & OfType<T>;

type Infer<T extends SchemaOfType<any>> = T["_type"];

function int_(): SchemaOfType<number> {
  return Primitive.Int32 satisfies Schema as any;
}

function float_(): SchemaOfType<number> {
  return Primitive.Float64 satisfies Schema as any;
}

function bigint_(): SchemaOfType<bigint> {
  return Primitive.BigInt64 satisfies Schema as any;
}

function string_(): SchemaOfType<string> {
  return Primitive.String satisfies Schema as any;
}

function boolean_(): SchemaOfType<boolean> {
  return Primitive.Boolean satisfies Schema as any;
}

function array<T>(inner: SchemaOfType<T>): SchemaOfType<T[]> {
  return Object.freeze({
    t: MetaType.Vector,
    d: inner as Schema,
  }) satisfies Schema as any;
}

function object<T extends Record<string, SchemaOfType<any>>>(
  inner: T,
): SchemaOfType<{ [K in keyof T]: Infer<T[K]> }> {
  return Object.freeze({
    t: MetaType.Complex,
    d: new Map(Object.entries(inner).map(([k, v]) => [k, v as Schema])),
  }) satisfies Schema as any;
}

function enum_<const T extends readonly string[]>(
  inner: T,
): SchemaOfType<T[number]> {
  return Object.freeze({
    t: MetaType.Enum,
    d: inner,
  }) satisfies Schema as any;
}

export {
  object,
  array,
  int_ as "int",
  float_ as "float",
  bigint_ as "bigint",
  string_ as "string",
  boolean_ as "boolean",
  enum_ as "enum",
};
export type { Infer as "infer" };
