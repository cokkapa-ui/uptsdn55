/*
==========================================================
UPT SD Negeri 53 Pinrang
assets/js/app.js
==========================================================
*/

document.addEventListener("DOMContentLoaded", () => {

    initNavbar();

    initBackToTop();

    initSmoothScroll();

    initRevealAnimation();

    initCurrentYear();

});

/* ==========================================
   NAVBAR SCROLL
========================================== */

function initNavbar() {

    const navbar = document.querySelector(".navbar");

    if (!navbar) return;

    window.addEventListener("scroll", () => {

        if (window.scrollY > 80) {

            navbar.classList.add("scrolled");

        } else {

            navbar.classList.remove("scrolled");

        }

    });

}

/* ==========================================
   BACK TO TOP
========================================== */

function initBackToTop() {

    const button = document.getElementById("backToTop");

    if (!button) return;

    window.addEventListener("scroll", () => {

        if (window.scrollY > 300) {

            button.style.display = "flex";

        } else {

            button.style.display = "none";

        }

    });

    button.addEventListener("click", () => {

        window.scrollTo({

            top: 0,

            behavior: "smooth"

        });

    });

}

/* ==========================================
   SMOOTH SCROLL MENU
========================================== */

function initSmoothScroll() {

    document.querySelectorAll('a[href^="#"]').forEach(link => {

        link.addEventListener("click", function (e) {

            const target = document.querySelector(this.getAttribute("href"));

            if (!target) return;

            e.preventDefault();

            window.scrollTo({

                top: target.offsetTop - 70,

                behavior: "smooth"

            });

        });

    });

}

/* ==========================================
   FADE UP ANIMATION
========================================== */

function initRevealAnimation() {

    const items = document.querySelectorAll(
        "section, .card, .fade-up"
    );

    if (!items.length) return;

    const observer = new IntersectionObserver((entries) => {

        entries.forEach(entry => {

            if (entry.isIntersecting) {

                entry.target.classList.add("show");

            }

        });

    }, {

        threshold: 0.15

    });

    items.forEach(item => {

        item.classList.add("fade-up");

        observer.observe(item);

    });

}

/* ==========================================
   COUNTER ANIMATION
========================================== */

function animateCounter(counter) {

    const target = Number(counter.dataset.target);

    const speed = 30;

    let value = 0;

    const update = () => {

        const increment = Math.ceil(target / 80);

        value += increment;

        if (value >= target) {

            counter.textContent = target;

            return;

        }

        counter.textContent = value;

        setTimeout(update, speed);

    };

    update();

}

const counterObserver = new IntersectionObserver(entries => {

    entries.forEach(entry => {

        if (entry.isIntersecting) {

            animateCounter(entry.target);

            counterObserver.unobserve(entry.target);

        }

    });

}, {

    threshold: 0.5

});

document.querySelectorAll(".counter").forEach(counter => {

    counterObserver.observe(counter);

});

/* ==========================================
   CURRENT YEAR
========================================== */

function initCurrentYear() {

    const year = document.getElementById("year");

    if (year) {

        year.textContent = new Date().getFullYear();

    }

}

/* ==========================================
   LOADING IMAGE
========================================== */

document.querySelectorAll("img").forEach(img => {

    img.addEventListener("load", () => {

        img.classList.add("loaded");

    });

});

/* ==========================================
   CONSOLE
========================================== */

console.log("✅ app.js loaded");