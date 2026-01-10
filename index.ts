import { serialize, t } from "./src";

const User = t.object({
  name: t.string(),
  age: t.int(),
});
type User = t.infer<typeof User>;

const user = {
  name: "a",
  age: 12,
} satisfies User;

console.log(serialize(User, user));
