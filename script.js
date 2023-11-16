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
            contentSection.innerHTML = `
            <div id="content-section">
                <div class="home-img">
                    <img src="img/profile.png" alt="profile">
                </div>
                <div class="home-content">
                    <h1>Dhammiko Bodhi Avatara</h1>
                    <h2>Computer Vision Enthusiasm</h2>
                    <p>
                        Welcome to the world of cutting-edge technology!  
                        Let's embark on an exciting exploration of possibilities together!
                    </p>
                    <div id="resume-btn">
                        <i class='bx bxs-download'></i>
                        <a href="#">Resume</a>
                    </div>
                </div>
            </div>`;
            break;
        case 'about':
            contentSection.innerHTML = `
            <div id="content-section">
                <div class="about-content">
                    <h1>Who i am?</h1>
                    <div class="about-img">
                        <img src="img/profile.png" alt="profile">
                    </div>
                    <p>
                        Hello! I'm Dhammiko Bodhi Avatara, 
                        currently an undergraduate student at the University of Tanjungpura. 
                        My focus lies in the exciting realm of computer vision, 
                        where I delve into projects and explore the wonders of visual data.
                    </p>
                </div>
            </div>`;
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