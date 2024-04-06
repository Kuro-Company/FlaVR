export function changeTheme(v: "light" | "dark" | "device") {
    const css = document.createElement("style");
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

    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const _ = window.getComputedStyle(css).opacity;
    document.head.removeChild(css);
}
