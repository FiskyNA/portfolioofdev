import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: "/portfolioofdev/",
  build: {
    rollupOptions: {
      output: {
        manualChunks: {
          three: ["three"],
          "react-three": [
            "@react-three/fiber",
            "@react-three/drei",
            "@react-three/rapier",
            "@react-three/postprocessing",
          ],
          gsap: ["gsap"],
        },
      },
    },
    chunkSizeWarningLimit: 1000,
  },
});
