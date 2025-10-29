// Select the navbar
const navbar = document.getElementById("navbar");

// Function to add/remove class on scroll
window.addEventListener("scroll", function () {
    if (window.scrollY > 50) { // Change after scrolling 50px
        navbar.classList.add("scrolled");
    } else {
        navbar.classList.remove("scrolled");
    }
});

// AI GENARATED CODE------------------------------------------