/* =========================================================
   ADNYAN PROFESSIONAL INTERACTIONS
========================================================= */

document.addEventListener("DOMContentLoaded", () => {


    /* =====================================================
       LOADER
    ====================================================== */

    const loader =
        document.getElementById("page-loader");

    const loaderText =
        document.getElementById("loader-text");


    const messages = [
        "Preparing something meaningful...",
        "Connecting communities...",
        "Building brighter futures...",
        "Creating positive change..."
    ];


    let messageIndex = 0;


    const messageInterval =
        setInterval(() => {

            messageIndex++;

            if (messageIndex < messages.length) {

                loaderText.textContent =
                    messages[messageIndex];

            }

        }, 650);


    window.addEventListener("load", () => {

        clearInterval(messageInterval);


        setTimeout(() => {

            loader.classList.add("hide");

            document.body.classList.add("loaded");

            setTimeout(() => {

                loader.style.display = "none";

            }, 1000);

        }, 2900);

    });



    /* =====================================================
       MOBILE NAVIGATION
    ====================================================== */

    const menuToggle =
        document.getElementById("menuToggle");

    const navbar =
        document.getElementById("navbar");


    if (menuToggle && navbar) {

        menuToggle.addEventListener("click", () => {

            navbar.classList.toggle("open");

            const icon =
                menuToggle.querySelector("i");


            if (navbar.classList.contains("open")) {

                icon.classList.remove("fa-bars");

                icon.classList.add("fa-xmark");

            } else {

                icon.classList.remove("fa-xmark");

                icon.classList.add("fa-bars");

            }

        });


        navbar.querySelectorAll("a")
            .forEach(link => {

                link.addEventListener("click", () => {

                    navbar.classList.remove("open");

                    const icon =
                        menuToggle.querySelector("i");

                    icon.classList.remove("fa-xmark");

                    icon.classList.add("fa-bars");

                });

            });

    }



    /* =====================================================
       SCROLL REVEAL
    ====================================================== */

    const revealElements =
        document.querySelectorAll(".reveal");


    const revealObserver =
        new IntersectionObserver(
            (entries, observer) => {

                entries.forEach(entry => {

                    if (entry.isIntersecting) {

                        entry.target.classList.add("show");

                        observer.unobserve(
                            entry.target
                        );

                    }

                });

            },
            {
                threshold: 0.12
            }
        );


    revealElements.forEach(element => {

        revealObserver.observe(element);

    });



    /* =====================================================
       COUNTER ANIMATION
    ====================================================== */

    const counters =
        document.querySelectorAll(".counter");


    const counterObserver =
        new IntersectionObserver(
            (entries, observer) => {

                entries.forEach(entry => {

                    if (!entry.isIntersecting) {
                        return;
                    }


                    const counter =
                        entry.target;

                    const target =
                        Number(
                            counter.dataset.target
                        );


                    let current = 0;

                    const duration = 1600;

                    const start =
                        performance.now();


                    function updateCounter(time) {

                        const progress =
                            Math.min(
                                (time - start) /
                                duration,
                                1
                            );


                        const eased =
                            1 -
                            Math.pow(
                                1 - progress,
                                3
                            );


                        current =
                            Math.floor(
                                eased * target
                            );


                        counter.textContent =
                            current.toLocaleString();


                        if (progress < 1) {

                            requestAnimationFrame(
                                updateCounter
                            );

                        } else {

                            counter.textContent =
                                target.toLocaleString();

                        }

                    }


                    requestAnimationFrame(
                        updateCounter
                    );


                    observer.unobserve(counter);

                });

            },
            {
                threshold: 0.5
            }
        );


    counters.forEach(counter => {

        counterObserver.observe(counter);

    });



    /* =====================================================
       3D CARD TILT
    ====================================================== */

    const tiltCards =
        document.querySelectorAll(".tilt-card");


    const supportsHover =
        window.matchMedia(
            "(hover: hover)"
        ).matches;


    if (supportsHover) {

        tiltCards.forEach(card => {

            card.addEventListener(
                "mousemove",
                event => {

                    const rect =
                        card.getBoundingClientRect();


                    const x =
                        event.clientX -
                        rect.left;


                    const y =
                        event.clientY -
                        rect.top;


                    const centerX =
                        rect.width / 2;


                    const centerY =
                        rect.height / 2;


                    const rotateX =
                        ((y - centerY) /
                        centerY) *
                        -4;


                    const rotateY =
                        ((x - centerX) /
                        centerX) *
                        5;


                    card.style.transform =
                        `
                        perspective(900px)
                        rotateX(${rotateX}deg)
                        rotateY(${rotateY}deg)
                        translateZ(8px)
                        scale(1.015)
                        `;

                }
            );


            card.addEventListener(
                "mouseleave",
                () => {

                    card.style.transform =
                        "";

                }
            );

        });

    }



    /* =====================================================
       HERO PARALLAX
    ====================================================== */

    const hero =
        document.querySelector(".hero");


    const heroContent =
        document.querySelector(".hero-content");


    const heroImage =
        document.querySelector(".hero-image");


    if (
        hero &&
        heroContent &&
        heroImage &&
        supportsHover
    ) {

        hero.addEventListener(
            "mousemove",
            event => {

                const rect =
                    hero.getBoundingClientRect();


                const x =
                    (event.clientX -
                    rect.left) /
                    rect.width -
                    0.5;


                const y =
                    (event.clientY -
                    rect.top) /
                    rect.height -
                    0.5;


                heroContent.style.transform =
                    `
                    translate3d(
                        ${x * 8}px,
                        ${y * 6}px,
                        25px
                    )
                    `;


                heroImage.style.transform =
                    `
                    scale(1.055)
                    translate(
                        ${x * -10}px,
                        ${y * -8}px
                    )
                    `;

            }
        );


        hero.addEventListener(
            "mouseleave",
            () => {

                heroContent.style.transform =
                    "";

                heroImage.style.transform =
                    "";

            }
        );

    }



    /* =====================================================
       ACTIVE NAVIGATION
    ====================================================== */

    const navLinks =
        document.querySelectorAll(
            ".navbar a:not(.donate)"
        );


    navLinks.forEach(link => {

        link.addEventListener(
            "click",
            () => {

                navLinks.forEach(item => {

                    item.classList.remove(
                        "active"
                    );

                });


                link.classList.add(
                    "active"
                );

            }
        );

    });



    /* =====================================================
       SMOOTH INTERNAL LINKS
    ====================================================== */

    document.querySelectorAll(
        'a[href^="#"]'
    ).forEach(link => {

        link.addEventListener(
            "click",
            event => {

                const targetId =
                    link.getAttribute("href");


                if (
                    !targetId ||
                    targetId === "#"
                ) {

                    event.preventDefault();

                    return;

                }


                const target =
                    document.querySelector(
                        targetId
                    );


                if (target) {

                    event.preventDefault();


                    target.scrollIntoView({
                        behavior: "smooth",
                        block: "start"
                    });

                }

            }
        );

    });



    /* =====================================================
       IMAGE FALLBACK
    ====================================================== */

    document.querySelectorAll("img")
        .forEach(image => {

            image.addEventListener(
                "error",
                () => {

                    image.style.background =
                        "#e9eee6";

                }
            );

        });



    /* =====================================================
       PREVENT LOADER FROM STAYING FOREVER
    ====================================================== */

    setTimeout(() => {

        if (
            !document.body.classList.contains(
                "loaded"
            )
        ) {

            loader.classList.add("hide");

            document.body.classList.add("loaded");

            setTimeout(() => {

                loader.style.display =
                    "none";

            }, 1000);

        }

    }, 5500);

});