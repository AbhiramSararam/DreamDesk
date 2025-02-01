import path from "path";
import { fileURLToPath } from "url"; // ✅ Import this
import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";

// ✅ Fix for __dirname in ESM
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
});
