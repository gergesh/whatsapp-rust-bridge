import { readFileSync } from "node:fs";
import { initSync } from "./api.js";

const wasmUrl = new URL("whatsapp_rust_bridge_bg.wasm", import.meta.url);
const wasmBytes = readFileSync(wasmUrl);
initSync({ module: wasmBytes });

export * from "./api.js";
