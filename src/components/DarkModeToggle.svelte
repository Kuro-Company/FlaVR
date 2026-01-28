<script lang="ts">
    // stupid workaround for astro slots with no children ts error
    let { children, sun, device, moon } = $props();

    import DarkModeToggleButton from "./DarkModeToggleButton.svelte";
    import { theme } from "~/util/themeStore.ts";
    import { changeTheme } from "~/util/changeTheme.ts";

    if (typeof window !== "undefined") {
        theme.subscribe(v => {
            changeTheme(v);
        });

        window.addEventListener("focus", () => {
            changeTheme(localStorage.theme)
        });
    }
</script>

<div class="flex flex-row justify-end h-full">
    <div class="inline-flex flex-row" role="group">
        <DarkModeToggleButton id="sun" name="dmselect" left active={$theme === "light"} onclick={() => theme.set("light")}>
            {@render sun()}
        </DarkModeToggleButton>
        <DarkModeToggleButton id="device" name="dmselect" active={$theme === "device"} onclick={() => theme.set("device")}>
            {@render device()}
        </DarkModeToggleButton>
        <DarkModeToggleButton id="moon" name="dmselect" right active={$theme === "dark"} onclick={() => theme.set("dark")}>
            {@render moon()}
        </DarkModeToggleButton>
    </div>
</div>
