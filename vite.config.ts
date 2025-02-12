import path from "path";
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import tailwindcss from "@tailwindcss/vite";
import { keycloakify } from "keycloakify/vite-plugin";

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),
    keycloakify({
      accountThemeImplementation: "none",
      themeName: "food-express-theme",
      keycloakVersionTargets: {
        "22-to-25": false,
        "all-other-versions": "food-express-keycloakify-theme.jar",
      },
    }),
  ],
  server: {
    open: true,
    port: 5179,
  },
  preview: {
    open: true,
    port: 3002,
  },
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
});
