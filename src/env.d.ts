// eslint-disable-next-line @typescript-eslint/triple-slash-reference
/// <reference path="../.astro/types.d.ts" />
/// <reference types="astro/client" />

import "astro/astro-jsx";

declare global {
    namespace JSX {
        // type Element = astroHTML.JSX.Element // We want to use this, but it is defined as any.
        type Element = HTMLElement;
    }

    namespace App {
        interface Locals {
            paraglide: {
                lang: string;
                dir: string;
            }
        }
    }
}


