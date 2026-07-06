/*==========================================================
    MENU JS
==========================================================*/

document.addEventListener("DOMContentLoaded", () => {

    const navbar = document.querySelector(".navbar");

    const navbarCollapse = document.querySelector(".navbar-collapse");

    const navLinks = document.querySelectorAll(".navbar-nav .nav-link");

    /*=====================================
        STICKY NAVBAR
    =====================================*/

    function navbarScroll() {

        if (window.scrollY > 80) {

            navbar.classList.add("navbar-scrolled");

        } else {

            navbar.classList.remove("navbar-scrolled");

        }

    }

    navbarScroll();

    window.addEventListener("scroll", navbarScroll);

    /*=====================================
        CLOSE MOBILE MENU
    =====================================*/

    navLinks.forEach(link => {

        link.addEventListener("click", () => {

            if (navbarCollapse.classList.contains("show")) {

                bootstrap.Collapse.getInstance(navbarCollapse).hide();

            }

        });

    });

    /*=====================================
        ACTIVE MENU
    =====================================*/

    window.addEventListener("scroll", () => {

        let current = "";

        document.querySelectorAll("section").forEach(section => {

            const top = section.offsetTop - 120;

            const height = section.offsetHeight;

            if (scrollY >= top && scrollY < top + height) {

                current = section.id;

            }

        });

        navLinks.forEach(link => {

            link.classList.remove("active");

            if (link.getAttribute("href") === "#" + current) {

                link.classList.add("active");

            }

        });

    });

});