import init from "./api.js";

await init({
  module_or_path: new URL("whatsapp_rust_bridge_bg.wasm", import.meta.url),
});

export * from "./api.js";
