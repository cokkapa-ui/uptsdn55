/*==========================================================
    SLIDER JS
==========================================================*/

document.addEventListener("DOMContentLoaded", () => {

    const heroSlider = document.querySelector("#heroSlider");

    if (!heroSlider) return;

    const carousel = new bootstrap.Carousel(heroSlider, {

        interval: 5000,

        ride: "carousel",

        pause: false,

        touch: true,

        wrap: true

    });

    /*=====================================
        PAUSE ON HOVER
    =====================================*/

    heroSlider.addEventListener("mouseenter", () => {

        carousel.pause();

    });

    heroSlider.addEventListener("mouseleave", () => {

        carousel.cycle();

    });

    /*=====================================
        ANIMATE CAPTION
    =====================================*/

    heroSlider.addEventListener("slide.bs.carousel", () => {

        const captions = heroSlider.querySelectorAll(".carousel-caption");

        captions.forEach(caption => {

            caption.style.opacity = "0";

            caption.style.transform = "translateY(40px)";

        });

    });

    heroSlider.addEventListener("slid.bs.carousel", () => {

        const activeCaption = heroSlider.querySelector(".carousel-item.active .carousel-caption");

        if (activeCaption) {

            activeCaption.style.transition = "all .7s ease";

            activeCaption.style.opacity = "1";

            activeCaption.style.transform = "translateY(0)";

        }

    });

});