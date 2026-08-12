import vinext from "vinext";
import { nitro } from "nitro/vite";
import tailwindcss from "@tailwindcss/vite";
import { defineConfig } from "vite";

export default defineConfig(({ command }) => ({
  plugins: [
    tailwindcss(),
    vinext(),

    // Nitro is only needed for the Netlify production build.
    ...(command === "build" ? [nitro()] : []),
  ],
}));