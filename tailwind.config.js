/** @type {import("tailwindcss").Config} */
export default {
    content: {
        files: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
    },
    darkMode: "selector",
    theme: {
        extend: {
            typography: {
                DEFAULT: {
                    css: {
                        [
                            [
                                "[class~=\"lead\"]",
                                "strong",
                                "ol > li::before",
                                "blockquote",
                                "h1",
                                "h2",
                                "h3",
                                "h4",
                                "figure figcaption",
                                "code",
                                "a code",
                                "thead",
                            ].join(", ")
                        ]: {
                            color: "inherit",
                        },
                        "ul > li::before": {
                            backgroundColor: "currentColor",
                        },
                        [
                            [
                                "hr",
                                "blockquote",
                                "thead",
                                "tbody tr",
                            ].join(", ")
                        ]: {
                            borderColor: "currentColor",
                        },
                    },
                },
            },
        },
    },
};
