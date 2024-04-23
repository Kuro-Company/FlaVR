import { defineConfig } from "astro/config";
import svelte from "@astrojs/svelte";
import tailwind from "@astrojs/tailwind";
import icon from "astro-icon";
import paraglide from "@inlang/paraglide-js-adapter-astro";
import { purgeCss } from "vite-plugin-tailwind-purgecss";

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
        plugins: [purgeCss()],
    },
    integrations: [
        svelte(),
        tailwind(),
        icon(),
        paraglide({ project: "./project.inlang", outdir: "./src/paraglide" }),
    ],
});
