import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import { componentTagger } from "lovable-tagger";

export default defineConfig(({ mode }) => ({
  server: {
    port: 8080,
    host: true,
    allowedHosts: [
      'slow-otters-shake.loca.lt', // your LocalTunnel domain
      '.loca.lt',                  // allow any LocalTunnel subdomain
      '.ngrok-free.app',           // allow ngrok tunnels
      '.trycloudflare.com',        // allow Cloudflare tunnels
    ],
  },
  plugins: [react(), mode === "development" && componentTagger()].filter(Boolean),
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
}));
