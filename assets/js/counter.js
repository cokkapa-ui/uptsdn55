/*==========================================================
    COUNTER JS
==========================================================*/

document.addEventListener("DOMContentLoaded", () => {

    const counters = document.querySelectorAll(".counter");

    if (!counters.length) return;

    let started = false;

    function startCounter() {

        if (started) return;

        const section = document.querySelector(".statistics");

        if (!section) return;

        const trigger = section.getBoundingClientRect().top;

        if (trigger < window.innerHeight - 100) {

            started = true;

            counters.forEach(counter => {

                const target = +counter.getAttribute("data-target");

                const speed = 200;

                const updateCounter = () => {

                    const count = +counter.innerText;

                    const increment = Math.ceil(target / speed);

                    if (count < target) {

                        counter.innerText = count + increment;

                        requestAnimationFrame(updateCounter);

                    } else {

                        counter.innerText = target;

                    }

                };

                updateCounter();

            });

        }

    }

    window.addEventListener("scroll", startCounter);

    startCounter();

});