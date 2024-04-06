<script lang="ts">
    import DarkModeToggleButton from "./DarkModeToggleButton.svelte";
    import { theme } from "../util/themeStore.ts";
    import { changeTheme } from "../util/changeTheme.ts";

    if (typeof window !== "undefined") {
        theme.subscribe(v => {
            changeTheme(v);
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
