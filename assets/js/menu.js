/*==========================================================
    MENU JS (SAFE VERSION)
==========================================================*/

document.addEventListener("DOMContentLoaded", () => {

    const navbar = document.querySelector(".navbar");
    const navbarCollapse = document.querySelector(".navbar-collapse");
    const navLinks = document.querySelectorAll(".navbar-nav .nav-link");

    /*=====================================
        STICKY NAVBAR
    =====================================*/

    function navbarScroll() {

        if (!navbar) return;

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

            if (navbarCollapse && navbarCollapse.classList.contains("show")) {

                const bsCollapse = bootstrap.Collapse.getInstance(navbarCollapse);

                if (bsCollapse) {
                    bsCollapse.hide();
                }
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

            if (window.scrollY >= top && window.scrollY < top + height) {
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