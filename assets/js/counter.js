/**
 * Counter Animation
 * assets/js/counter.js
 */

document.addEventListener("DOMContentLoaded", () => {

    const counters = document.querySelectorAll(".counter");

    if (!counters.length) return;

    const speed = 200;

    const startCounter = (counter) => {

        const target = parseInt(counter.dataset.target);
        let count = 0;

        const update = () => {

            const increment = Math.ceil(target / speed);

            count += increment;

            if (count >= target) {
                counter.innerText = target.toLocaleString("id-ID");
            } else {
                counter.innerText = count.toLocaleString("id-ID");
                requestAnimationFrame(update);
            }

        };

        update();

    };

    const observer = new IntersectionObserver((entries, observer) => {

        entries.forEach(entry => {

            if (entry.isIntersecting) {

                startCounter(entry.target);

                observer.unobserve(entry.target);

            }

        });

    }, {
        threshold: 0.5
    });

    counters.forEach(counter => observer.observe(counter));

});