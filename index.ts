import { serialize, t } from "./src";
import { deserialize } from "./src/deserialize";

const User = t.object({
  name: t.field(0, t.string()),
  age: t.field(1, t.int()),
  tags: t.field(
    2,
    t.object({
      emotion: t.field(0, t.string()),
    }),
  ),
});
type User = t.infer<typeof User>;

const buf = serialize(User, { name: "walt", age: 100, tags: { emotion: "a" } });
console.log(deserialize(User, buf));
