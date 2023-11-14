// Menu
document.addEventListener("DOMContentLoaded", function () {
    const menuButton = document.querySelector(".menu");
    const menuIcon = document.querySelector(".menu i");
    
    menuButton.addEventListener("click", function () {
        if (menuIcon.classList.contains("bx-menu")) {
            menuIcon.classList.remove("bx-menu");
            menuIcon.classList.add("bx-x");
        } else {
            menuIcon.classList.remove("bx-x");
            menuIcon.classList.add("bx-menu");
        }
    });
});