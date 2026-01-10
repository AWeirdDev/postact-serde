import { t } from "./src";

const User = t.object({
  name: t.string(),
  age: t.number(),
});
type User = t.infer<typeof User>;

const user = {
  name: "Walt",
  age: 100,
} satisfies User;
