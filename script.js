//JavaScript functionality for interactivity
document.addEventListener("DOMContentLoaded", function() {
    const links = document.querySelectorAll('nav ul li a');
    links.forEach(link => {
        link.addEventListener('click', function(event) {
            event.preventDefault();
            alert('This is a demo link.');
        });
    });
});


document.addEventListener("DOMContentLoaded", function() {
    const hamburgerMenu = document.querySelector(".hamburger-menu");
    const navLinks = document.getElementById("nav-links");

    hamburgerMenu.addEventListener("click", function() {
        navLinks.classList.toggle("active");
        hamburgerMenu.classList.toggle("open");
    });
});
