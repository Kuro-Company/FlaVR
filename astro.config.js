import { defineConfig } from "astro/config";
import svelte from "@astrojs/svelte";
import tailwind from "@astrojs/tailwind";
import icon from "astro-icon";
import paraglide from "@inlang/paraglide-js-adapter-astro";

// https://astro.build/config
export default defineConfig({
    trailingSlash: "always",
    i18n: {
        locales: ["en", "ja"],
        defaultLocale: "en",
        routing: {
            prefixDefaultLocale: true,
        }
    },
    integrations: [
        svelte(),
        tailwind(),
        icon(),
        paraglide({ project: "./project.inlang", outdir: "./src/paraglide" }),
    ]
});
