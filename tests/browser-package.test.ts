import { readFileSync } from "node:fs";
import { join } from "node:path";

import { expect, test } from "bun:test";

const ROOT = join(import.meta.dir, "..");

test("the package exposes its browser loader before the Node loader", () => {
  const manifest = JSON.parse(readFileSync(join(ROOT, "package.json"), "utf8"));
  const rootExport = manifest.exports["."];

  expect(Object.keys(rootExport)).toEqual(["types", "browser", "import"]);
  expect(rootExport.browser).toBe("./dist/browser.js");
  expect(rootExport.import).toBe("./dist/index.js");
});

test("browser artifacts contain no Node built-ins", () => {
  for (const artifact of ["api.js", "browser.js", "proto-types.js"]) {
    const source = readFileSync(join(ROOT, "dist", artifact), "utf8");
    expect(source).not.toContain("node:");
    expect(source).not.toContain("readFileSync");
  }
});
