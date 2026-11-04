import { defineConfig } from "vite";
import react, { reactCompilerPreset } from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";
import babel from "@rolldown/plugin-babel";
import { qrcode } from "vite-plugin-qrcode";
import wasm from "vite-plugin-wasm";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss(), (wasm as any)(), qrcode(), babel({ presets: [reactCompilerPreset()] })],
});
