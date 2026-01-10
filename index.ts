import { serialize, t } from "./src";
import { deserialize } from "./src/deserialize";

const Name = t.string();
type Name = t.infer<typeof Name>;

const name = "hello" satisfies Name;
const buf = new ArrayBuffer(8);
const arr = new DataView(buf);
arr.setUint8(0, 0);
console.log(deserialize(Name, buf));
