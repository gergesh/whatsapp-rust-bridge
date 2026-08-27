import{readFileSync as r}from"node:fs";import{initSync as m}from"./api.js";export*from"./api.js";var t=new URL("whatsapp_rust_bridge_bg.wasm",import.meta.url),o=r(t);m({module:o});
