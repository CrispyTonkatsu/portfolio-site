import { defineConfig } from "vite";
import react, { reactCompilerPreset } from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";
import babel from "@rolldown/plugin-babel";
import { qrcode } from "vite-plugin-qrcode";
import { resolve } from "path";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss(), qrcode(), babel({ presets: [reactCompilerPreset()] })],
  build: {
    rolldownOptions: {
      input: {
        main: resolve(import.meta.dirname, 'index.html'),
        demo_viewer: resolve(import.meta.dirname, 'src/demo-viewer.html')
      }
    }
  }
});
