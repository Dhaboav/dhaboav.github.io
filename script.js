// Mobile menu
document.addEventListener("DOMContentLoaded", function () {
    const menuButton = document.querySelector(".menu-button");
    const navLinks = document.querySelector(".links");
    const menuIcon = document.querySelector(".menu-button i");

    menuButton.addEventListener("click", function () {
        navLinks.classList.toggle("active");

        if (navLinks.classList.contains("active")) {
            // Menu is open
            menuIcon.classList.remove("bx-menu");
            menuIcon.classList.add("bx-x");
        } else {
            // Menu is closed
            menuIcon.classList.remove("bx-x");
            menuIcon.classList.add("bx-menu");
        }
    });
});


// Change content
function changeContent(page) {
    var contentSection = document.getElementById("content-section");
    const navLinks = document.querySelector(".links");
    const menuIcon = document.querySelector(".menu-button i");

    switch (page) {
        case 'home':
            contentSection.innerHTML = "<p>This is the Home page content.</p>";
            break;
        case 'about':
            contentSection.innerHTML = "<p>This is the About page content.</p>";
            break;
        case 'skills':
            contentSection.innerHTML = "<p>This is the Skills page content.</p>";
            break;
        case 'contacts':
            contentSection.innerHTML = "<p>This is the Contacts page content.</p>";
            break;
    }

    // Hide the menu
    navLinks.classList.remove("active");

    // Reset
    menuIcon.classList.remove("bx-x");
    menuIcon.classList.add("bx-menu");
}