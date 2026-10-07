
// ================================
// DARK / LIGHT MODE
// ================================

const themeToggle = document.getElementById("themeToggle");

// Change theme
if (themeToggle) {
    themeToggle.addEventListener("click", function () {

        document.body.classList.toggle("dark-mode");

        // Save the selected theme
        if (document.body.classList.contains("dark-mode")) {
            localStorage.setItem("portfolio-theme", "dark");
            themeToggle.textContent = "☀";
            themeToggle.setAttribute("aria-label", "Switch to light mode");
            themeToggle.setAttribute("title", "Switch to light mode");
        } else {
            localStorage.setItem("portfolio-theme", "light");
            themeToggle.textContent = "☾";
            themeToggle.setAttribute("aria-label", "Switch to dark mode");
            themeToggle.setAttribute("title", "Switch to dark mode");
        }
    });
}


// ================================
// LOAD SAVED THEME
// ================================

const savedTheme = localStorage.getItem("portfolio-theme");

if (savedTheme === "dark") {
    document.body.classList.add("dark-mode");

    if (themeToggle) {
        themeToggle.textContent = "☀";
        themeToggle.setAttribute("aria-label", "Switch to light mode");
        themeToggle.setAttribute("title", "Switch to light mode");
    }
}


// ================================
// MOBILE MENU
// ================================

const menuToggle = document.getElementById("menuToggle");
const navLinks = document.getElementById("navLinks");

if (menuToggle && navLinks) {

    menuToggle.addEventListener("click", function () {

        navLinks.classList.toggle("active");

        if (navLinks.classList.contains("active")) {
            menuToggle.textContent = "✕";
        } else {
            menuToggle.textContent = "☰";
        }

    });


    // Close menu after clicking a link

    const navigationItems =
        document.querySelectorAll(".nav-links a");

    navigationItems.forEach(function (item) {

        item.addEventListener("click", function () {

            navLinks.classList.remove("active");
            menuToggle.textContent = "☰";

        });

    });
}


// ================================
// CURRENT YEAR
// ================================

const yearElement = document.getElementById("year");

if (yearElement) {
    yearElement.textContent = new Date().getFullYear();
}
