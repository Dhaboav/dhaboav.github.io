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
                    <img src="other/profile.png" alt="profile">
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
                        <a href="other/my_resume.pdf" download="Dhammiko Bodhi Avatara's Resume">Resume</a>
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
                        <img src="other/profile.png" alt="profile">
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
            contentSection.innerHTML = `
            <div id="content-section">
                <div class="skills-content">
                    <div class="skills-logo">
                        <img src="https://www.vectorlogo.zone/logos/python/python-icon.svg" alt="python">
                        <div>
                            <h3>Python</h3>
                            <p>High level programing language</p>
                        </div>
                    </div>
                    <div class="skills-logo">
                        <img src="https://www.vectorlogo.zone/logos/opencv/opencv-icon.svg" alt="opencv">
                        <div>
                            <h3>Opencv</h3>
                            <p>Library for image manipulation</p>
                        </div>
                    </div>
                    <div class="skills-logo">
                        <img src="https://www.vectorlogo.zone/logos/w3_html5/w3_html5-icon.svg" alt="html">
                        <div>
                            <h3>HTML</h3>
                            <p>Basic structure for a website</p>
                        </div>
                    </div>
                    <div class="skills-logo-last">
                        <img src="https://www.vectorlogo.zone/logos/w3_css/w3_css-icon.svg" alt="css">
                        <div>
                            <h3>CSS</h3>
                            <p>Styling for a website</p>
                        </div>
                    </div>
                </div>
            </div>`;
            break;
        case 'contacts':
            contentSection.innerHTML = `
            <div id="content-section">
                <div class="contact-content">
                    <div class="medsos">
                        <div class="email-box">
                            <i class='bx bxs-envelope'></i>
                            <div>
                                <h3>Email</h3>
                                <p>xxx@gmail.com</p>
                            </div>
                        </div>
                        <div class="linkedin-box">
                            <a href="https://www.linkedin.com/in/dhaboav/">
                                <i class='bx bxl-linkedin-square'></i>
                            </a>
                            <h3>LinkedIn</h3>
                        </div>
                    </div>
                    <form action="mailto:xxx@gmail.com" method="post" enctype="text/plain">
                        <label for="name">Name</label>
                        <input type="text" id="name" name="name" required>
                    
                        <label for="email">Email</label>
                        <input type="email" id="email" name="email" required>
                    
                        <label for="message">Message</label>
                        <textarea id="message" name="message" rows="4" required></textarea>
                    
                        <input type="submit" value="Send Message">
                    </form>
                </div>
            </div>`;
            break;
    }

    // Hide the menu
    navLinks.classList.remove("active");

    // Reset
    menuIcon.classList.remove("bx-x");
    menuIcon.classList.add("bx-menu");
}