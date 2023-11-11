document.addEventListener('DOMContentLoaded', function () {
    const menu = document.querySelector('.menu');
    const navbarLinks = document.querySelector('.navbar-links');
    const menuBar = document.querySelectorAll('.bar');

    menu.addEventListener('click', () => {
        menu.classList.toggle('active')
        navbarLinks.classList.toggle('active');
        // Toggle 'active' class on each bar element
        menuBar.forEach(bar => {
            bar.classList.toggle('active');
        });
    });
});
