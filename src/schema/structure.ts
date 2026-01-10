export enum Primitive {
  String = 0,
  Int32 = 1,
  Float64 = 2,
  Boolean = 3,
  BigInt64 = 4,
}

export type Meta<T extends MetaType, D> = Readonly<{ t: T; d: D }>;
export enum MetaType {
  Optional = 0,
  Vector = 1,
  Complex = 2,
  FixedSizeString = 3,
}

export type Vector = Meta<MetaType.Vector, Schema>;
export type Complex = Meta<MetaType.Complex, Map<string, Schema>>;
export type Optional = Meta<MetaType.Optional, Schema>;

export type Schema = Primitive | Meta<MetaType, any>;
