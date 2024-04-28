import globals from "globals";
import eslint from "@eslint/js";
import tseslint from "typescript-eslint";
import eslintPluginSvelte from "eslint-plugin-svelte";
import { typescript as tsConfig, javascript as jsConfig, astro as astroConfig } from "@augu/eslint-config";

export default tseslint.config(
    eslint.configs.recommended,
    ...tseslint.configs.stylisticTypeChecked,
    ...tseslint.configs.recommendedTypeChecked,
    ...eslintPluginSvelte.configs["flat/recommended"],
    jsConfig(),
    await tsConfig(),
    await astroConfig(),
    {
        languageOptions: {
            parserOptions: {
                project: true,
                tsconfigRootDir: import.meta.dirname,
                ecmaVersion: "latest",
                sourceType: "module",
            },
            globals: {
                ...globals.nodeBuiltin,
            },
        },
        rules: {
            "quotes": ["error", "double"],
            "comma-dangle": ["error", {
                "arrays": "always-multiline",
                "objects": "always-multiline",
                "imports": "always-multiline",
                "exports": "always-multiline",
                "functions": "never",
            }],
            "semi": ["error", "always"],
        },
    }
);
