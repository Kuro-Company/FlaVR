import { defineConfig } from "astro/config";
import svelte from "@astrojs/svelte";
import tailwind from "@tailwindcss/vite";
import mdx from "@astrojs/mdx";
import icon from "astro-icon";
import paraglide from "@inlang/paraglide-js-adapter-astro";

// https://astro.build/config
export default defineConfig({
  trailingSlash: "always",
  i18n: {
    locales: ["en", "es", "ja"],
    defaultLocale: "en",
    routing: {
      prefixDefaultLocale: true,
      redirectToDefaultLocale: false,
    },
  },
  redirects: {
    "/": {
      status: 302,
      destination: "/en/",
    },
  },
  vite: {
    build: {
      sourcemap: true,
    },
    plugins: [tailwind()],
  },
  integrations: [
    svelte(),
    icon(),
    mdx(),
    paraglide({
      project: "./project.inlang",
      outdir: "./src/paraglide",
    }),
  ],
});
