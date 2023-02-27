export default function burger() {
    const burgerMenu = document.querySelector(".burger-menu");
    const dropMenu = document.querySelector(".drop-menu");

    burgerMenu.addEventListener("click", () => {
        burgerMenu.classList.toggle("open");
        dropMenu.classList.toggle("open");
    });
}
