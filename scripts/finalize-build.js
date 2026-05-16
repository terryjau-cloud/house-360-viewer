import { existsSync, mkdirSync, renameSync, rmSync } from "node:fs";
import { dirname, join } from "node:path";

const nestedIndex = join("dist", "src", "index.html");
const rootIndex = join("dist", "index.html");

if (existsSync(nestedIndex)) {
  mkdirSync(dirname(rootIndex), { recursive: true });
  renameSync(nestedIndex, rootIndex);
  rmSync(join("dist", "src"), { recursive: true, force: true });
}
