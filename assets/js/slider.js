/*
==========================================================
UPT SD Negeri 53 Pinrang
assets/js/slider.js
==========================================================
*/

document.addEventListener("DOMContentLoaded", () => {

    initHeroSlider();

    initHeroAnimation();

});

/* ==========================================
   HERO SLIDER
========================================== */

function initHeroSlider() {

    const hero = document.querySelector("#heroCarousel");

    if (!hero) return;

    new bootstrap.Carousel(hero, {

        interval: 5000,

        ride: "carousel",

        pause: "hover",

        touch: true,

        wrap: true

    });

}

/* ==========================================
   HERO CONTENT ANIMATION
========================================== */

function initHeroAnimation() {

    const hero = document.querySelector("#heroCarousel");

    if (!hero) return;

    hero.addEventListener("slide.bs.carousel", () => {

        resetAnimation();

    });

    hero.addEventListener("slid.bs.carousel", () => {

        playAnimation();

    });

    playAnimation();

}

function playAnimation() {

    const active = document.querySelector(
        "#heroCarousel .carousel-item.active"
    );

    if (!active) return;

    const caption = active.querySelector(".carousel-caption");

    if (!caption) return;

    caption.classList.add("hero-show");

}

function resetAnimation() {

    document
        .querySelectorAll("#heroCarousel .carousel-caption")
        .forEach(item => {

            item.classList.remove("hero-show");

        });

}

/* ==========================================
   PREV NEXT WITH KEYBOARD
========================================== */

document.addEventListener("keydown", (e) => {

    const hero = document.querySelector("#heroCarousel");

    if (!hero) return;

    const carousel = bootstrap.Carousel.getInstance(hero);

    if (!carousel) return;

    if (e.key === "ArrowLeft") {

        carousel.prev();

    }

    if (e.key === "ArrowRight") {

        carousel.next();

    }

});

/* ==========================================
   SWIPE MOBILE
========================================== */

(function () {

    const hero = document.querySelector("#heroCarousel");

    if (!hero) return;

    let startX = 0;

    let endX = 0;

    hero.addEventListener("touchstart", (e) => {

        startX = e.changedTouches[0].screenX;

    });

    hero.addEventListener("touchend", (e) => {

        endX = e.changedTouches[0].screenX;

        handleSwipe();

    });

    function handleSwipe() {

        const carousel = bootstrap.Carousel.getInstance(hero);

        if (!carousel) return;

        if (startX - endX > 50) {

            carousel.next();

        }

        if (endX - startX > 50) {

            carousel.prev();

        }

    }

})();

/* ==========================================
   AUTO PLAY AFTER TAB ACTIVE
========================================== */

document.addEventListener("visibilitychange", () => {

    const hero = document.querySelector("#heroCarousel");

    if (!hero) return;

    const carousel = bootstrap.Carousel.getInstance(hero);

    if (!carousel) return;

    if (document.hidden) {

        carousel.pause();

    } else {

        carousel.cycle();

    }

});

/* ==========================================
   CONSOLE
========================================== */

console.log("✅ slider.js loaded");