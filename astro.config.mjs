import { defineConfig } from 'astro/config';
import react from "@astrojs/react";
import tailwind from "@astrojs/tailwind";
import paraglide from "@inlang/paraglide-js-adapter-astro";

// https://astro.build/config
export default defineConfig({
    i18n: {
        locales: ["en"],
        defaultLocale: "en",
    },
    integrations: [
        react(),
        tailwind(),
        paraglide({ project: "./project.inlang", outdir: "./src/paraglide" }),
    ]
});
