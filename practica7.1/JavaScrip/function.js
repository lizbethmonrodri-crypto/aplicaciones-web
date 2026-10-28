const imagenes = document.querySelectorAll(".img");
imagenes.forEach((img) => {
    img.addEventListener("mouseenter", () => {
        img.classList.add("borrosa");
    });
    img.addEventListener("mouseleave", () => {
        img.classList.remove("borrosa");
    });
});