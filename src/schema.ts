export enum Primitive {
  String = 0,
  Int64 = 1,
  Float64 = 2,
  Boolean = 3,
}

export type Container<T extends ContainerType, D> = Readonly<{ b: T; d: D }>;
export enum ContainerType {
  Optional = 0,
  Vector = 1,
  Complex = 2,
}

export type Vector = Container<ContainerType.Vector, Schema[]>;

export function vector(d: Schema[]): Vector {
  return Object.freeze({ b: ContainerType.Vector, d });
}

export type Complex = Container<ContainerType.Complex, Map<string, Schema>>;

export function complex(d: Map<string, Schema>): Complex {
  return Object.freeze({ b: ContainerType.Complex, d });
}

export type Optional = Container<ContainerType.Optional, Schema>;

export function optional(d: Schema): Optional {
  return Object.freeze({ b: ContainerType.Optional, d });
}

export type Schema = Primitive | Container<ContainerType, any>;
