document.addEventListener("DOMContentLoaded", function () {


    /* =====================================================
       3D CARD TILT
    ====================================================== */

    const cards =
        document.querySelectorAll(".tilt-card");

    const supportsHover =
        window.matchMedia("(hover: hover)").matches;


    if (supportsHover) {

        cards.forEach(function (card) {


            card.addEventListener("mousemove", function (event) {

                const rect =
                    card.getBoundingClientRect();


                const x =
                    event.clientX - rect.left;

                const y =
                    event.clientY - rect.top;


                const centerX =
                    rect.width / 2;

                const centerY =
                    rect.height / 2;


                const rotateY =
                    ((x - centerX) / centerX) * 5;


                const rotateX =
                    ((centerY - y) / centerY) * 5;


                card.style.transform =
                    `
                    perspective(1000px)
                    rotateX(${rotateX}deg)
                    rotateY(${rotateY}deg)
                    translateY(-8px)
                    scale(1.015)
                    `;

            });


            card.addEventListener("mouseleave", function () {

                card.style.transform =
                    `
                    perspective(1000px)
                    rotateX(0deg)
                    rotateY(0deg)
                    translateY(0)
                    scale(1)
                    `;

            });

        });

    }



    /* =====================================================
       HUMBLE IMAGE 3D
    ====================================================== */

    const humbleImage =
        document.querySelector(".humble-image");


    if (humbleImage && supportsHover) {


        humbleImage.addEventListener(
            "mousemove",
            function (event) {

                const rect =
                    humbleImage.getBoundingClientRect();


                const x =
                    (event.clientX - rect.left)
                    / rect.width - 0.5;


                const y =
                    (event.clientY - rect.top)
                    / rect.height - 0.5;


                const rotateY =
                    x * 7;


                const rotateX =
                    -y * 7;


                humbleImage.style.transform =
                    `
                    perspective(1000px)
                    rotateX(${rotateX}deg)
                    rotateY(${rotateY}deg)
                    translateY(-10px)
                    `;

            }
        );


        humbleImage.addEventListener(
            "mouseleave",
            function () {

                humbleImage.style.transform =
                    `
                    perspective(1000px)
                    rotateX(0deg)
                    rotateY(0deg)
                    translateY(0)
                    `;

            }
        );

    }



    /* =====================================================
       BANNER PARALLAX
    ====================================================== */

    const banner =
        document.querySelector(".about-banner");

    const bannerImage =
        document.querySelector(".about-banner img");

    const bannerContent =
        document.querySelector(".about-banner-content");


    if (
        banner &&
        bannerImage &&
        bannerContent &&
        supportsHover
    ) {


        banner.addEventListener(
            "mousemove",
            function (event) {

                const rect =
                    banner.getBoundingClientRect();


                const x =
                    (event.clientX - rect.left)
                    / rect.width - 0.5;


                const y =
                    (event.clientY - rect.top)
                    / rect.height - 0.5;


                bannerImage.style.transform =
                    `
                    scale(1.08)
                    translate(
                        ${x * 12}px,
                        ${y * 8}px
                    )
                    `;


                bannerContent.style.transform =
                    `
                    translate3d(
                        ${x * 10}px,
                        ${y * 8}px,
                        35px
                    )
                    `;

            }
        );


        banner.addEventListener(
            "mouseleave",
            function () {

                bannerImage.style.transform =
                    "scale(1.05) translate(0,0)";


                bannerContent.style.transform =
                    "translate3d(0,0,35px)";

            }
        );

    }



    /* =====================================================
       SCROLL REVEAL
    ====================================================== */

    const revealSections =
        document.querySelectorAll(
            ".vision-mission, " +
            ".guiding-team, " +
            ".humble-beginnings, " +
            ".connect-section"
        );


    const revealObserver =
        new IntersectionObserver(
            function (entries) {

                entries.forEach(function (entry) {

                    if (entry.isIntersecting) {

                        entry.target.classList.add(
                            "section-visible"
                        );

                    }

                });

            },
            {
                threshold: 0.12
            }
        );


    revealSections.forEach(function (section) {

        section.classList.add(
            "section-hidden"
        );

        revealObserver.observe(section);

    });



    /* =====================================================
       ACTIVE NAVIGATION
    ====================================================== */

    const currentPage =
        window.location.pathname
            .split("/")
            .pop();


    const navLinks =
        document.querySelectorAll(
            ".navbar a"
        );


    navLinks.forEach(function (link) {

        const href =
            link.getAttribute("href");


        if (
            href &&
            href !== "#" &&
            href === currentPage
        ) {

            navLinks.forEach(function (item) {

                item.classList.remove("active");

            });

            link.classList.add("active");

        }

    });



    /* =====================================================
       MOBILE MENU
    ====================================================== */

    const menuToggle =
        document.getElementById("menuToggle");

    const navbar =
        document.getElementById("navbar");


    if (menuToggle && navbar) {

        menuToggle.addEventListener(
            "click",
            function () {

                navbar.classList.toggle("open");


                const icon =
                    menuToggle.querySelector("i");


                if (
                    navbar.classList.contains("open")
                ) {

                    icon.classList.remove(
                        "fa-bars"
                    );

                    icon.classList.add(
                        "fa-xmark"
                    );

                    menuToggle.setAttribute(
                        "aria-label",
                        "Close navigation"
                    );

                } else {

                    icon.classList.remove(
                        "fa-xmark"
                    );

                    icon.classList.add(
                        "fa-bars"
                    );

                    menuToggle.setAttribute(
                        "aria-label",
                        "Open navigation"
                    );

                }

            }
        );


        /* ================================================
           CLOSE MENU WHEN NAV LINK IS CLICKED
        ================================================ */

        navbar.querySelectorAll("a")
            .forEach(function (link) {

                link.addEventListener(
                    "click",
                    function () {

                        navbar.classList.remove(
                            "open"
                        );


                        const icon =
                            menuToggle.querySelector("i");


                        icon.classList.remove(
                            "fa-xmark"
                        );

                        icon.classList.add(
                            "fa-bars"
                        );


                        menuToggle.setAttribute(
                            "aria-label",
                            "Open navigation"
                        );

                    }
                );

            });

    }



    /* =====================================================
       CLOSE MOBILE MENU WHEN WINDOW BECOMES DESKTOP
    ====================================================== */

    window.addEventListener(
        "resize",
        function () {

            if (window.innerWidth > 900) {

                if (navbar) {

                    navbar.classList.remove(
                        "open"
                    );

                }


                if (menuToggle) {

                    const icon =
                        menuToggle.querySelector("i");


                    if (icon) {

                        icon.classList.remove(
                            "fa-xmark"
                        );

                        icon.classList.add(
                            "fa-bars"
                        );

                    }


                    menuToggle.setAttribute(
                        "aria-label",
                        "Open navigation"
                    );

                }

            }

        }
    );


});