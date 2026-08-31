document.addEventListener("DOMContentLoaded", () => {

    const loader = document.getElementById("page-loader");

    if (!loader) return;

    // Keep the loader visible for a short, controlled time
    setTimeout(() => {
        loader.classList.add("hide");

        // Remove it completely after the fade-out
        setTimeout(() => {
            loader.remove();
        }, 600);

    }, 1800);

});