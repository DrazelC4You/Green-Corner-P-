/* =====================================================
   GREEN CORNER
   MAIN JAVASCRIPT
===================================================== */


/* =====================================================
   1. MOBILE NAVIGATION
===================================================== */

const menuToggle = document.querySelector(".menu-toggle");
const nav = document.querySelector(".navbar nav");


if (menuToggle && nav) {

    menuToggle.addEventListener("click", () => {

        const isOpen = nav.classList.toggle("open");

        menuToggle.setAttribute(
            "aria-expanded",
            isOpen
        );


        /* Ganti icon */

        const icon = menuToggle.querySelector("i");

        if (icon) {

            if (isOpen) {

                icon.classList.remove("fa-bars");

                icon.classList.add("fa-xmark");

            } else {

                icon.classList.remove("fa-xmark");

                icon.classList.add("fa-bars");

            }

        }

    });


    /* Tutup menu ketika link diklik */

    const navLinks = nav.querySelectorAll("a");

    navLinks.forEach(link => {

        link.addEventListener("click", () => {

            nav.classList.remove("open");

            menuToggle.setAttribute(
                "aria-expanded",
                "false"
            );


            const icon = menuToggle.querySelector("i");

            if (icon) {

                icon.classList.remove("fa-xmark");

                icon.classList.add("fa-bars");

            }

        });

    });

}
