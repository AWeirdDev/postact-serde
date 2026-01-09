import { vector, optional, Primitive } from "./src/schema";

const sch = optional(vector([Primitive.String, Primitive.Boolean]));
