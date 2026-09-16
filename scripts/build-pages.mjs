import { build } from "vite";
import { copyFile, cp } from "node:fs/promises";

await build();

// This repository's Pages configuration publishes the main branch directly.
// Keep the deployable bundle at that branch's root while React source stays in src/.
await copyFile("dist/app.html", "index.html");
await copyFile("dist/app.html", "dist/index.html");
await cp("dist/assets", "assets", { recursive: true, force: true });
