import { MetaType, Primitive, type Schema, type Vector } from "./structure";

interface OfType<T> {
  readonly _type: T;
}

type SchemaOfType<T> = Schema & OfType<T>;

type Infer<T extends SchemaOfType<any>> = T["_type"];
export type infer<T extends SchemaOfType<any>> = T["_type"];

export function number(): SchemaOfType<number> {
  return Primitive.Int32 satisfies Schema as any;
}

export function string(): SchemaOfType<string> {
  return Primitive.String satisfies Schema as any;
}

export function boolean(): SchemaOfType<boolean> {
  return Primitive.Boolean satisfies Schema as any;
}

export function array<T>(inner: SchemaOfType<T>): SchemaOfType<T[]> {
  return Object.freeze({
    t: MetaType.Vector,
    d: inner as Schema,
  }) satisfies Schema as any;
}

export function object<T extends Record<string, SchemaOfType<any>>>(
  inner: T,
): SchemaOfType<{ [K in keyof T]: Infer<T[K]> }> {
  return Object.freeze({
    t: MetaType.Complex,
    d: new Map(Object.entries(inner).map(([k, v]) => [k, v as Schema])),
  }) satisfies Schema as any;
}
