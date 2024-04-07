import { defineConfig } from "astro/config";
import svelte from "@astrojs/svelte";
import tailwind from "@astrojs/tailwind";
import icon from "astro-icon";
import paraglide from "@inlang/paraglide-js-adapter-astro";

// https://astro.build/config
export default defineConfig({
    i18n: {
        locales: ["en"],
        defaultLocale: "en",
        routing: {
            prefixDefaultLocale: true,
            redirectToDefaultLocale: true,
        }
    },
    integrations: [
        svelte(),
        tailwind(),
        icon(),
        paraglide({ project: "./project.inlang", outdir: "./src/paraglide" }),
    ]
});
