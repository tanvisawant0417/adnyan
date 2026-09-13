/* =========================================================
   OUR INITIATIVES PAGE
========================================================= */


/* =========================================================
   LIVE WORK ELEMENTS
========================================================= */

const liveWorkList =
    document.querySelector(".live-work-list");

const noLiveWork =
    document.querySelector(".no-live-work");

const openLiveWork =
    document.getElementById("openLiveWork");

const closeLiveWork =
    document.getElementById("closeLiveWork");

const liveWorkModal =
    document.getElementById("liveWorkModal");


/* =========================================================
   CHECK WHETHER REAL LIVE WORK EXISTS
========================================================= */

function checkLiveWork() {

    if (!liveWorkList || !noLiveWork) {
        return;
    }

    const liveWorkCards =
        liveWorkList.querySelectorAll(".live-work-card");

    let realLiveWorkExists = false;

    liveWorkCards.forEach(function (card) {

        const titleElement =
            card.querySelector(".live-work-info h3");

        const descriptionElement =
            card.querySelector(".live-work-info > p");

        const title = titleElement
            ? titleElement.textContent.trim()
            : "";

        const description = descriptionElement
            ? descriptionElement.textContent.trim()
            : "";

        const placeholderTitle =
            "Project / Initiative Name";

        const placeholderDescription =
            "Information about the current work, what Adnyan is doing, where the activity is taking place, and the community being supported.";

        if (
            title !== "" &&
            title !== placeholderTitle &&
            description !== "" &&
            description !== placeholderDescription
        ) {

            realLiveWorkExists = true;

        }

    });


    /* =====================================================
       SHOW / HIDE AUTOMATICALLY
    ===================================================== */

    if (realLiveWorkExists) {

        liveWorkList.style.display = "flex";

        noLiveWork.style.display = "none";


        liveWorkCards.forEach(function (card) {

            const titleElement =
                card.querySelector(".live-work-info h3");

            const title = titleElement
                ? titleElement.textContent.trim()
                : "";

            const placeholderTitle =
                "Project / Initiative Name";

            if (
                title === placeholderTitle ||
                title === ""
            ) {

                card.style.display = "none";

            } else {

                card.style.display = "flex";

            }

        });

    } else {

        liveWorkList.style.display = "none";

        noLiveWork.style.display = "block";

    }

}


/* Run immediately */

checkLiveWork();



/* =========================================================
   OPEN POPUP
========================================================= */

if (openLiveWork && liveWorkModal) {

    openLiveWork.addEventListener(
        "click",
        function () {

            liveWorkModal.classList.add("show");

            document.body.classList.add("modal-open");

        }
    );

}



/* =========================================================
   CLOSE POPUP
========================================================= */

if (closeLiveWork && liveWorkModal) {

    closeLiveWork.addEventListener(
        "click",
        function () {

            liveWorkModal.classList.remove("show");

            document.body.classList.remove("modal-open");

        }
    );

}



/* =========================================================
   CLICK OUTSIDE POPUP
========================================================= */

if (liveWorkModal) {

    liveWorkModal.addEventListener(
        "click",
        function (event) {

            if (
                event.target === liveWorkModal
            ) {

                liveWorkModal.classList.remove("show");

                document.body.classList.remove("modal-open");

            }

        }
    );

}



/* =========================================================
   ESC KEY
========================================================= */

document.addEventListener(
    "keydown",
    function (event) {

        if (
            event.key === "Escape" &&
            liveWorkModal &&
            liveWorkModal.classList.contains("show")
        ) {

            liveWorkModal.classList.remove("show");

            document.body.classList.remove("modal-open");

        }

    }
);



/* =========================================================
   PROFESSIONAL 3D MOUSE DEPTH
========================================================= */

const hero =
    document.querySelector(".initiatives-hero");

const heroContent =
    document.querySelector(".initiatives-hero-content");

const heroOrbOne =
    document.querySelector(".hero-orb-one");

const heroOrbTwo =
    document.querySelector(".hero-orb-two");


let mouseX = 0;
let mouseY = 0;

let currentX = 0;
let currentY = 0;


/* =========================================================
   TRACK MOUSE
========================================================= */

document.addEventListener(
    "mousemove",
    function (event) {

        mouseX =
            (event.clientX / window.innerWidth - 0.5);

        mouseY =
            (event.clientY / window.innerHeight - 0.5);

    }
);



/* =========================================================
   SMOOTH 3D MOVEMENT
========================================================= */

function animateDepth() {

    currentX +=
        (mouseX - currentX) * 0.045;

    currentY +=
        (mouseY - currentY) * 0.045;


    if (heroContent) {

        heroContent.style.transform =
            `
            translateZ(70px)
            rotateY(${currentX * 1.8}deg)
            rotateX(${currentY * -1.4}deg)
            `;
    }


    if (heroOrbOne) {

        heroOrbOne.style.transform =
            `
            translate3d(
                ${currentX * -22}px,
                ${currentY * -18}px,
                80px
            )
            `;
    }


    if (heroOrbTwo) {

        heroOrbTwo.style.transform =
            `
            translate3d(
                ${currentX * 32}px,
                ${currentY * 25}px,
                45px
            )
            `;
    }


    requestAnimationFrame(animateDepth);

}


animateDepth();



/* =========================================================
   CARD DEPTH EFFECT
========================================================= */

const cards =
    document.querySelectorAll(".initiative-card");


cards.forEach(function (card) {

    card.addEventListener(
        "mousemove",
        function (event) {

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
                ((x - centerX) / centerX) * 2.5;

            const rotateX =
                ((centerY - y) / centerY) * 2.5;


            card.style.transform =
                `
                translateY(-10px)
                rotateX(${rotateX}deg)
                rotateY(${rotateY}deg)
                translateZ(35px)
                `;

        }
    );


    card.addEventListener(
        "mouseleave",
        function () {

            card.style.transform = "";

        }
    );

});



/* =========================================================
   HELP IMAGE DEPTH
========================================================= */

const helpImage =
    document.querySelector(".help-image");


if (helpImage) {

    helpImage.addEventListener(
        "mousemove",
        function (event) {

            const rect =
                helpImage.getBoundingClientRect();

            const x =
                event.clientX - rect.left;

            const y =
                event.clientY - rect.top;


            const rotateY =
                ((x - rect.width / 2) /
                    (rect.width / 2)) * 3;

            const rotateX =
                ((rect.height / 2 - y) /
                    (rect.height / 2)) * 2;


            helpImage.style.transform =
                `
                perspective(1000px)
                rotateY(${rotateY}deg)
                rotateX(${rotateX}deg)
                translateZ(45px)
                `;

        }
    );


    helpImage.addEventListener(
        "mouseleave",
        function () {

            helpImage.style.transform =
                `
                perspective(1000px)
                rotateY(-4deg)
                rotateX(2deg)
                translateZ(35px)
                `;

        }
    );

}



/* =========================================================
   MOBILE HAMBURGER MENU
========================================================= */

const menuToggle =
    document.getElementById("menuToggle");

const navbar =
    document.getElementById("navbar");


if (menuToggle && navbar) {

    const menuIcon =
        menuToggle.querySelector("i");


    /* -----------------------------------------------------
       OPEN / CLOSE MENU
    ----------------------------------------------------- */

    menuToggle.addEventListener(
        "click",
        function (event) {

            event.stopPropagation();

            const isOpen =
                navbar.classList.toggle("open");


            if (isOpen) {

                if (menuIcon) {

                    menuIcon.classList.remove(
                        "fa-bars"
                    );

                    menuIcon.classList.add(
                        "fa-xmark"
                    );

                }

                menuToggle.setAttribute(
                    "aria-expanded",
                    "true"
                );

                menuToggle.setAttribute(
                    "aria-label",
                    "Close navigation"
                );

            } else {

                closeMobileMenu();

            }

        }
    );


    /* -----------------------------------------------------
       CLOSE MENU FUNCTION
    ----------------------------------------------------- */

    function closeMobileMenu() {

        navbar.classList.remove("open");


        if (menuIcon) {

            menuIcon.classList.remove(
                "fa-xmark"
            );

            menuIcon.classList.add(
                "fa-bars"
            );

        }


        menuToggle.setAttribute(
            "aria-expanded",
            "false"
        );

        menuToggle.setAttribute(
            "aria-label",
            "Open navigation"
        );

    }


    /* -----------------------------------------------------
       CLOSE AFTER CLICKING NAVIGATION LINK
    ----------------------------------------------------- */

    navbar
        .querySelectorAll("a")
        .forEach(function (link) {

            link.addEventListener(
                "click",
                function () {

                    closeMobileMenu();

                }
            );

        });


    /* -----------------------------------------------------
       CLOSE WHEN CLICKING OUTSIDE
    ----------------------------------------------------- */

    document.addEventListener(
        "click",
        function (event) {

            if (
                !navbar.contains(event.target) &&
                !menuToggle.contains(event.target)
            ) {

                closeMobileMenu();

            }

        }
    );


    /* -----------------------------------------------------
       RESET WHEN RETURNING TO DESKTOP
    ----------------------------------------------------- */

    window.addEventListener(
        "resize",
        function () {

            if (window.innerWidth > 900) {

                closeMobileMenu();

            }

        }
    );

}



/* =========================================================
   PREVENT EMPTY DEMO LINKS
========================================================= */

document
    .querySelectorAll('a[href="#"]:not(.navbar a)')
    .forEach(function (link) {

        link.addEventListener(
            "click",
            function (event) {

                event.preventDefault();

            }
        );

    });