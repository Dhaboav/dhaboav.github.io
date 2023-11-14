// Menu Mobile
document.addEventListener("DOMContentLoaded", function () {
    const menuButton = document.querySelector(".menu");
    const navLinks = document.querySelector(".links");
    const menuIcon = document.querySelector(".menu i");

    menuButton.addEventListener("click", function () {
        navLinks.classList.toggle("show");

        if (menuIcon.classList.contains("bx-menu")) {
            menuIcon.classList.remove("bx-menu");
            menuIcon.classList.add("bx-x");
        } else {
            menuIcon.classList.remove("bx-x");
            menuIcon.classList.add("bx-menu");
        }
    });
});