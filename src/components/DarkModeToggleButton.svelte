<script lang="ts">
    export let id: string;
    export let name: string;
    export let right: boolean | undefined = undefined;
    export let left: boolean | undefined = undefined;
    export let active: boolean | undefined = undefined;

    import { createEventDispatcher } from "svelte";

    const dispatch = createEventDispatcher();
</script>

<!-- svelte-ignore a11y-no-noninteractive-element-to-interactive-role a11y-role-has-required-aria-props -->
<label role="radio" for={id} class={`flex items-center h-full cursor-pointer p-3 bg-rosePineDawn-highlightMed dark:bg-rosePineMoon-highlightMed hover:bg-opacity-80" ${(right ? "rounded-r-md" : "")} ${(left ? "rounded-l-md" : "")} ${active ? " !bg-rosePineDawn-highlightHigh dark:!bg-rosePineMoon-highlightHigh" : ""}`}>
    <input id={id} name={name} type="radio" class="hidden border-hidden" checked={active} on:click={() => dispatch("click")}>
    <slot />
</label>
