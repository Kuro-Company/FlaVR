<script lang="ts">
    import DarkModeToggleButton from "./DarkModeToggleButton.svelte";
    import { theme } from "../store/themeStore.ts";

    if (typeof window !== "undefined") {
        theme.subscribe(v => {
            const css = document.createElement("style")
            css.appendChild(
                document.createTextNode(
                    `* {
                    -webkit-transition: none !important;
                    -moz-transition: none !important;
                    -o-transition: none !important;
                    -ms-transition: none !important;
                    transition: none !important;
                    }`
                )
            );

            document.head.appendChild(css);

            if (v === "dark" || (v === "device") && window.matchMedia("(prefers-color-scheme: dark)").matches) {
                document.documentElement.classList.add("dark");
            } else {
                document.documentElement.classList.remove("dark");
            }

            const _ = window.getComputedStyle(css).opacity
            document.head.removeChild(css)
        });
    }
</script>

<div class="flex flex-row justify-end h-full">
    <div class="inline-flex flex-row" role="group">
        <DarkModeToggleButton id="sun" name="dmselect" left active={$theme === "light"} on:click={() => theme.set("light")}>
            <slot name="sun" />
        </DarkModeToggleButton>
        <DarkModeToggleButton id="device" name="dmselect" active={$theme === "device"} on:click={() => theme.set("device")}>
            <slot name="device" />
        </DarkModeToggleButton>
        <DarkModeToggleButton id="moon" name="dmselect" right active={$theme === "dark"} on:click={() => theme.set("dark")}>
            <slot name="moon" />
        </DarkModeToggleButton>
    </div>
</div>
