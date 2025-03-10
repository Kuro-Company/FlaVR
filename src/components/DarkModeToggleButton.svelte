<script lang="ts">
    let { 
        id,
        name,
        right,
        left,
        active,
        onclick,
    }: {
        id: string,
        name: string,
        right?: boolean,
        left?: boolean,
        active?: boolean,
        onclick: () => void,
    } = $props();
</script>

<!-- svelte-ignore a11y_no_noninteractive_element_to_interactive_role -->
<!-- svelte-ignore a11y_role_has_required_aria_props -->
<!-- svelte-ignore a11y_no_noninteractive_element_to_interactive_role -->
<!-- svelte-ignore slot_element_deprecated -->
<label role="radio" for={id} class={`flex items-center h-full cursor-pointer p-3 bg-rose-pine-dawn-highlight-med dark:bg-rose-pine-moon-highlight-med hover:bg-opacity-80" ${(right ? "rounded-r-md" : "")} ${(left ? "rounded-l-md" : "")} ${active ? " bg-rose-pine-dawn-highlight-high! dark:bg-rose-pine-moon-highlight-high!" : ""}`}>
    <input id={id} name={name} type="radio" class="hidden border-hidden" checked={active} {onclick}>
    <slot />
</label>
