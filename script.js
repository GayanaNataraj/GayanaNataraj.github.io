
// ==============================
// MOBILE NAVIGATION
// ==============================

const menuToggle = document.getElementById("menuToggle");
const navLinks = document.getElementById("navLinks");

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


// ==============================
// CLOSE MOBILE MENU
// AFTER CLICKING A NAVIGATION LINK
// ==============================

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


// ==============================
// CURRENT YEAR IN FOOTER
// ==============================

document.getElementById("year").textContent =
    new Date().getFullYear();
