import { ChunksReader } from "./chunks";
import {
  isMeta,
  Primitive,
  validatePrimitiveOrThrow,
  type Schema,
} from "./schema";

export function deserializeFrom(schema: Schema, chunks: ChunksReader): any {
  if (isMeta(schema)) {
  } else {
    switch (schema as Primitive) {
      case Primitive.BigInt64:
        return chunks.readU32();
      case Primitive.Boolean:
        return Boolean(chunks.readU8());
      case Primitive.Float64:
        return chunks.readF64();
      case Primitive.Int32:
        return chunks.readI32();
      case Primitive.String:
        return chunks.getString();
    }
  }
}

export function deserialize(schema: Schema, buf: ArrayBuffer): any {
  const chunks = new ChunksReader(buf);
  return deserializeFrom(schema, chunks);
}
