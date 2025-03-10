import typography from "@tailwindcss/typography";
// import fluid, { extract, screens, fontSize } from "fluid-tailwind";

/** @type {import("tailwindcss").Config} */
export default {
    content: {
        files: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
        // extract,
    },
    darkMode: "selector",
    theme: {
        // screens,
        // fontSize,
        extend: {
            animation: {
                    marquee: "marquee 180s linear infinite",
                    marquee2: "marquee2 180s linear infinite",
                },
            keyframes: {
                marquee: {
                    "0%": { transform: "translateX(0%)" },
                    "100%": { transform: "translateX(-50%)" },
                },
                marquee2: {
                    "0%": { transform: "translateX(-50%)" },
                    "100%": { transform: "translateX(0%)" },
                },
            },
            colors: {
                rosePine: {
                    base: "#191724",
                    surface: "#1f1d2e",
                    overlay: "#26233a",
                    muted: "#6e6a86",
                    subtle: "#908caa",
                    text: "#e0def4",
                    love: "#eb6f92",
                    gold: "#f6c177",
                    rose: "#ebbcba",
                    pine: "#31748f",
                    foam: "#9ccfd8",
                    iris: "#c4a7e7",
                    highlightLow: "#21202e",
                    highlightMed: "#403d52",
                    highlightHigh: "#524f67",
                },
                rosePineMoon: {
                    base: "#232136",
                    surface: "#2a273f",
                    overlay: "#393552",
                    muted: "#6e6a86",
                    subtle: "#908caa",
                    text: "#e0def4",
                    love: "#eb6f92",
                    gold: "#f6c177",
                    rose: "#ea9a97",
                    pine: "#3e8fb0",
                    foam: "#9ccfd8",
                    iris: "#c4a7e7",
                    highlightLow: "#2a283e",
                    highlightMed: "#44415a",
                    highlightHigh: "#56526e",
                },
                rosePineDawn: {
                    base: "#faf4ed",
                    surface: "#fffaf3",
                    overlay: "#f2e9e1",
                    muted: "#9893a5",
                    subtle: "#797593",
                    text: "#575279",
                    love: "#b4637a",
                    gold: "#ea9d34",
                    rose: "#d7827e",
                    pine: "#286983",
                    foam: "#56949f",
                    iris: "#907aa9",
                    highlightLow: "#f4ede8",
                    highlightMed: "#dfdad9",
                    highlightHigh: "#cecacd",
                },
            },
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
    plugins: [
        // fluid,
        typography,
    ],
};
