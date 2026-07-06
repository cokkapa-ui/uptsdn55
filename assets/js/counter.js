/*==========================================================
    COUNTER JS (SAFE VERSION)
==========================================================*/

document.addEventListener("DOMContentLoaded", () => {

    const counters = document.querySelectorAll(".counter");
    const section = document.querySelector(".statistics");

    if (!counters.length || !section) return;

    let started = false;

    function startCounter() {

        if (started) return;

        const rect = section.getBoundingClientRect();

        if (rect.top < window.innerHeight - 100) {

            started = true;

            counters.forEach(counter => {

                const target = parseInt(counter.getAttribute("data-target")) || 0;
                const speed = 200;
                let count = 0;

                function updateCounter() {

                    const increment = Math.ceil(target / speed);
                    count += increment;

                    if (count < target) {
                        counter.innerText = count;
                        requestAnimationFrame(updateCounter);
                    } else {
                        counter.innerText = target;
                    }
                }

                updateCounter();
            });
        }
    }

    window.addEventListener("scroll", startCounter, { passive: true });

    startCounter();
});