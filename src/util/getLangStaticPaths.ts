import type { GetStaticPaths } from "astro";
import { availableLanguageTags } from "~/paraglide/runtime";

export const getLangStaticPaths: GetStaticPaths = () => {
    return availableLanguageTags.map((tag) => {
        return {
            params: {
                lang: tag
            },
        };
    });
}