
// =========================================================
// GAYANA NATARAJ — PORTFOLIO JAVASCRIPT
// =========================================================


// =========================================================
// MOBILE NAVIGATION
// =========================================================

const menuToggle = document.getElementById("menuToggle");
const navLinks = document.getElementById("navLinks");

if (menuToggle && navLinks) {

    menuToggle.addEventListener("click", () => {

        navLinks.classList.toggle("active");

        if (navLinks.classList.contains("active")) {

            menuToggle.textContent = "✕";

            menuToggle.setAttribute(
                "aria-label",
                "Close navigation"
            );

        } else {

            menuToggle.textContent = "☰";

            menuToggle.setAttribute(
                "aria-label",
                "Open navigation"
            );

        }

    });


    // Close mobile menu after clicking a navigation link

    const navigationItems =
        document.querySelectorAll(".nav-links a");

    navigationItems.forEach((item) => {

        item.addEventListener("click", () => {

            navLinks.classList.remove("active");

            menuToggle.textContent = "☰";

            menuToggle.setAttribute(
                "aria-label",
                "Open navigation"
            );

        });

    });

}


// =========================================================
// DARK / LIGHT MODE
// =========================================================

const themeToggle =
    document.getElementById("themeToggle");


// Check if the user already selected a theme

const savedTheme =
    localStorage.getItem("portfolio-theme");


// Apply saved dark mode

if (savedTheme === "dark") {

    document.body.classList.add("dark-mode");

}


// =========================================================
// UPDATE THEME BUTTON ICON
// =========================================================

function updateThemeIcon() {

    if (!themeToggle) {
        return;
    }


    if (document.body.classList.contains("dark-mode")) {

        // Dark mode is active → show sun

        themeToggle.textContent = "☀";

        themeToggle.setAttribute(
            "aria-label",
            "Switch to light mode"
        );

        themeToggle.setAttribute(
            "title",
            "Switch to light mode"
        );

    } else {

        // Light mode is active → show moon

        themeToggle.textContent = "☾";

        themeToggle.setAttribute(
            "aria-label",
            "Switch to dark mode"
        );

        themeToggle.setAttribute(
            "title",
            "Switch to dark mode"
        );

    }

}


// Set the correct icon when the page loads

updateThemeIcon();


// =========================================================
// DARK / LIGHT MODE BUTTON
// =========================================================

if (themeToggle) {

    themeToggle.addEventListener("click", () => {

        // Switch between light and dark mode

        document.body.classList.toggle("dark-mode");


        // Save the selected theme

        if (document.body.classList.contains("dark-mode")) {

            localStorage.setItem(
                "portfolio-theme",
                "dark"
            );

        } else {

            localStorage.setItem(
                "portfolio-theme",
                "light"
            );

        }


        // Change the button icon

        updateThemeIcon();

    });

}


// =========================================================
// CURRENT YEAR IN FOOTER
// =========================================================

const yearElement =
    document.getElementById("year");


if (yearElement) {

    yearElement.textContent =
        new Date().getFullYear();

}
