import { existsSync, mkdirSync, readFileSync, renameSync, rmSync, writeFileSync } from "node:fs";
import { dirname, join } from "node:path";

const nestedIndex = join("dist", "src", "index.html");
const rootIndex = join("dist", "index.html");
const publicBase = "/house-360-viewer/";

if (existsSync(nestedIndex)) {
  mkdirSync(dirname(rootIndex), { recursive: true });
  renameSync(nestedIndex, rootIndex);
  rmSync(join("dist", "src"), { recursive: true, force: true });
}

if (existsSync(rootIndex)) {
  const html = readFileSync(rootIndex, "utf8")
    .replaceAll("../assets/", publicBase + "assets/")
    .replaceAll("assets/floorplan/", publicBase + "assets/floorplan/")
    .replaceAll("assets/panoramas/", publicBase + "assets/panoramas/");

  writeFileSync(rootIndex, html);
}
