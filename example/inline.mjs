import { execSync } from "child_process";
import * as fs from "node:fs/promises";

execSync("npx inline-script-tags index.html bundled.html");
execSync("npx inline-stylesheets bundled.html .");
execSync("npx inline-images bundled.html .");

var html = await fs.readFile("bundled.html", "utf8");
const logo = await fs.readFile("image_128.png");
const logo_b64 = logo.toString("base64");
html = html.replace("logo_128.png", `data:image/png;base64,${logo_b64}`);
await fs.writeFile("bundled.html", html);
