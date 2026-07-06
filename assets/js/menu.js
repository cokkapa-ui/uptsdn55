/*
==========================================================
UPT SD Negeri 53 Pinrang
assets/js/menu.js
==========================================================
*/

document.addEventListener("DOMContentLoaded", () => {

    initActiveMenu();

    initNavbarCollapse();

    initDropdownHover();

});

/* ==========================================
   ACTIVE MENU ON SCROLL
========================================== */

function initActiveMenu() {

    const sections = document.querySelectorAll("section[id]");

    const navLinks = document.querySelectorAll(".navbar .nav-link");

    if (!sections.length || !navLinks.length) return;

    window.addEventListener("scroll", () => {

        const scrollY = window.pageYOffset + 120;

        sections.forEach(section => {

            const top = section.offsetTop;
            const height = section.offsetHeight;
            const id = section.getAttribute("id");

            if (scrollY >= top && scrollY < top + height) {

                navLinks.forEach(link => {

                    link.classList.remove("active");

                    if (link.getAttribute("href") === "#" + id) {

                        link.classList.add("active");

                    }

                });

            }

        });

    });

}

/* ==========================================
   CLOSE MOBILE MENU
========================================== */

function initNavbarCollapse() {

    const navbar = document.querySelector(".navbar-collapse");

    if (!navbar) return;

    const links = navbar.querySelectorAll(".nav-link");

    links.forEach(link => {

        link.addEventListener("click", () => {

            if (window.innerWidth < 992) {

                const collapse =
                    bootstrap.Collapse.getInstance(navbar);

                if (collapse) {

                    collapse.hide();

                }

            }

        });

    });

}

/* ==========================================
   DROPDOWN HOVER DESKTOP
========================================== */

function initDropdownHover() {

    if (window.innerWidth < 992) return;

    const dropdowns = document.querySelectorAll(".dropdown");

    dropdowns.forEach(dropdown => {

        dropdown.addEventListener("mouseenter", () => {

            const menu = dropdown.querySelector(".dropdown-menu");

            if (!menu) return;

            menu.classList.add("show");

            dropdown.querySelector(".dropdown-toggle")
                ?.setAttribute("aria-expanded", "true");

        });

        dropdown.addEventListener("mouseleave", () => {

            const menu = dropdown.querySelector(".dropdown-menu");

            if (!menu) return;

            menu.classList.remove("show");

            dropdown.querySelector(".dropdown-toggle")
                ?.setAttribute("aria-expanded", "false");

        });

    });

}

/* ==========================================
   STICKY SHADOW
========================================== */

window.addEventListener("scroll", () => {

    const navbar = document.querySelector(".navbar");

    if (!navbar) return;

    if (window.scrollY > 30) {

        navbar.classList.add("shadow");

    } else {

        navbar.classList.remove("shadow");

    }

});

/* ==========================================
   HIGHLIGHT CURRENT PAGE
========================================== */

(function () {

    const current = window.location.pathname.split("/").pop();

    const links = document.querySelectorAll(".navbar .nav-link");

    links.forEach(link => {

        const href = link.getAttribute("href");

        if (href === current) {

            link.classList.add("active");

        }

    });

})();

/* ==========================================
   CONSOLE
========================================== */

console.log("✅ menu.js loaded");