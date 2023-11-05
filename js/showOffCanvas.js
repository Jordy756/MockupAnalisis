const offcanvas = document.querySelector(".offcanvas");
const overlay = document.querySelector(".overlay");

const closeOverlay = () => {
    offcanvas.classList.remove("active");
    overlay.classList.remove("active");
};

document.querySelector(".button-open-offcanvas").addEventListener("click", () => {
    offcanvas.classList.add("active");
    overlay.classList.add("active");
});

overlay.addEventListener("click", () => closeOverlay());
document.querySelector(".button-logout").addEventListener("click", () => closeOverlay());

// function closeOffCanvas() {
//     document.querySelector(".offcanvas").classList.remove("active");
//     document.querySelector(".overlay").classList.remove("active");
// }

// function openOffCanvas() {
//     document.querySelector(".offcanvas").classList.add("active");
//     document.querySelector(".overlay").classList.add("active");
// }
