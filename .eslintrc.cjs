/** @type { import("eslint").Linter.Config } */
module.exports = {
    root: true,
    parserOptions: {
        project: true,
        tsconfigRootDir: __dirname,
        ecmaVersion: "latest",
        sourceType: "module",
    },
    extends: [
        "plugin:astro/recommended",
        "eslint:recommended",
        "plugin:@typescript-eslint/stylistic-type-checked",
        "plugin:@typescript-eslint/recommended-type-checked",
        "@augu",
        "@augu/eslint-config/ts.js",
    ],
    overrides: [
        {
            files: ["*.astro"],
            parser: "astro-eslint-parser",
            parserOptions: {
                parser: "@typescript-eslint/parser",
                extraFileExtensions: [".astro"],
            },
            rules: {
                quotes: ["error", "double"],
            },
        },
    ],
};
