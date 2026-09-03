/* ==========================================================
   CAKE LOVERS
   JavaScript
========================================================== */


/* ==========================================================
   LOADER
========================================================== */

window.addEventListener("load", () => {

    const loader = document.getElementById("loader");

    setTimeout(() => {

        loader.classList.add("hidden");

    }, 700);

});



/* ==========================================================
   MENU MOBILE
========================================================== */

const menuButton =
    document.getElementById("menuButton");

const navigation =
    document.getElementById("navigation");


menuButton.addEventListener("click", () => {

    const isOpen =
        navigation.classList.toggle("open");

    menuButton.setAttribute(
        "aria-expanded",
        isOpen
    );

});


/* Fecha menu ao clicar em um link */

document
    .querySelectorAll(".nav-link")
    .forEach(link => {

        link.addEventListener("click", () => {

            navigation.classList.remove("open");

            menuButton.setAttribute(
                "aria-expanded",
                "false"
            );

        });

    });



/* ==========================================================
   HEADER AO ROLAR
========================================================== */

const header =
    document.getElementById("header");


window.addEventListener("scroll", () => {

    if (window.scrollY > 50) {

        header.classList.add("scrolled");

    } else {

        header.classList.remove("scrolled");

    }

});



/* ==========================================================
   ANIMAÇÕES REVEAL
========================================================== */

const revealElements =
    document.querySelectorAll(".reveal");


const revealObserver =
    new IntersectionObserver(

        entries => {

            entries.forEach(entry => {

                if (entry.isIntersecting) {

                    entry.target.classList.add(
                        "visible"
                    );

                    revealObserver.unobserve(
                        entry.target
                    );

                }

            });

        },

        {
            threshold: 0.15
        }

    );


revealElements.forEach(element => {

    revealObserver.observe(element);

});



/* ==========================================================
   ACTIVE LINK
========================================================== */

const sections =
    document.querySelectorAll("section[id]");

const navLinks =
    document.querySelectorAll(".nav-link");


const sectionObserver =
    new IntersectionObserver(

        entries => {

            entries.forEach(entry => {

                if (entry.isIntersecting) {

                    const currentId =
                        entry.target.getAttribute("id");


                    navLinks.forEach(link => {

                        link.classList.remove(
                            "active"
                        );


                        if (
                            link.getAttribute("href") ===
                            `#${currentId}`
                        ) {

                            link.classList.add(
                                "active"
                            );

                        }

                    });

                }

            });

        },

        {
            rootMargin:
                "-35% 0px -55% 0px"
        }

    );


sections.forEach(section => {

    sectionObserver.observe(section);

});



/* ==========================================================
   PARALLAX SUTIL DO PRODUTO
========================================================== */

const product =
    document.querySelector(".hero-product");


window.addEventListener("scroll", () => {

    if (!product) return;


    const scroll =
        window.scrollY;


    if (window.innerWidth > 700) {

        product.style.transform =
            `translateY(${scroll * 0.08}px)`;

    }

});



/* ==========================================================
   EFEITO NO CURSOR — DESKTOP
========================================================== */

if (window.innerWidth > 900) {

    const buttons =
        document.querySelectorAll(
            ".button, .instagram-profile"
        );


    buttons.forEach(button => {

        button.addEventListener(
            "mouseenter",
            () => {

                button.style.transition =
                    "transform .25s ease";

            }
        );

    });

}