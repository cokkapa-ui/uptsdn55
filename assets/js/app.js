/*==========================================================
    APP JS (FIXED)
==========================================================*/

document.addEventListener("DOMContentLoaded", () => {

    /*=====================================
        LOADER / PRELOADER FIX
    =====================================*/

    const preloader = document.getElementById("loader");

    if (preloader) {

        window.addEventListener("load", () => {

            preloader.classList.add("hide");

            setTimeout(() => {
                preloader.remove();
            }, 500);

        });

    }

    /*=====================================
        STICKY HEADER
    =====================================*/

    const header = document.querySelector(".navbar");

    if (header) {
        window.addEventListener("scroll", () => {

            if (window.scrollY > 80) {
                header.classList.add("navbar-scrolled");
            } else {
                header.classList.remove("navbar-scrolled");
            }

        });
    }

    /*=====================================
        SMOOTH SCROLL
    =====================================*/

    document.querySelectorAll('a[href^="#"]').forEach(anchor => {

        anchor.addEventListener("click", function (e) {

            const target = document.querySelector(this.getAttribute("href"));

            if (target) {

                e.preventDefault();

                target.scrollIntoView({
                    behavior: "smooth",
                    block: "start"
                });

            }

        });

    });

    /*=====================================
        ACTIVE MENU
    =====================================*/

    const sections = document.querySelectorAll("section");
    const navLinks = document.querySelectorAll(".navbar-nav .nav-link");

    window.addEventListener("scroll", () => {

        let current = "";

        sections.forEach(section => {

            const sectionTop = section.offsetTop - 120;

            if (window.scrollY >= sectionTop) {
                current = section.getAttribute("id");
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