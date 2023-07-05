import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

const port = 3000;

// https://vitejs.dev/config/
export default defineConfig({
  server: {
    host: "0.0.0.0",
    port,
    hmr: {
      clientPort: port,
    },
    watch: {
      usePolling: true,
    },
  },
  plugins: [react()],
});
