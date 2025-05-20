import db from "@astrojs/db";
import mdx from "@astrojs/mdx";
import react from "@astrojs/react";
import sitemap from "@astrojs/sitemap";
import tailwind from "@astrojs/tailwind";
import vercel from "@astrojs/vercel/serverless";
import icon from "astro-icon";
import { defineConfig } from "astro/config";
import simpleStackForm from "simple-stack-form";
import electron from "astro-electron";

// https://astro.build/config
export default defineConfig({
  site: "https://astro-nomy.vercel.app",
  integrations: [
    electron({
      main: {
        entry: "src/electron/main.ts", // Path to your Electron main file
        vite: {}, // Vite-specific configurations (by default we use the same config as your Astro project)
      },
      preload: {
        input: "src/electron/preload.ts", // Path to your Electron preload file
        vite: {}, // Vite-specific configurations (by default we use the same config as your Astro project)
      },
      renderer: {
        // Renderer-specific configurations (if needed)
      },
    }),
    mdx({
      syntaxHighlight: "shiki",
      shikiConfig: {
        theme: "github-dark-dimmed",
      },
      gfm: true,
    }),
    icon(),
    sitemap(),
    react(),
    tailwind({
      applyBaseStyles: false,
    }),
    db(),
    simpleStackForm(),
  ],
  output: "hybrid",
  adapter: vercel({
    analytics: true,
  }),
});
