// PRELOADER

const preloader = document.getElementById("preloader");
const introVideo = document.getElementById("intro-video");

if (preloader && introVideo) {

    introVideo.addEventListener("ended", () => {
        preloader.classList.add("hide");
    });

    setTimeout(() => {
        preloader.classList.add("hide");
    }, 8000);

}


// THEME TOGGLE

const nav = document.getElementById("mainNav");
const themeToggle = document.getElementById("themeToggle");

function applyTheme(mode) {

    const isDark = mode === "dark";

    document.body.classList.toggle("dark-mode", isDark);

    localStorage.setItem("themeMode", mode);

    if (themeToggle) {

        themeToggle.checked = isDark;

        themeToggle.setAttribute(
            "aria-label",
            isDark
                ? "Switch to light mode"
                : "Switch to dark mode"
        );

    }

}

function updateNavState() {

    if (!nav) return;

    nav.classList.toggle(
        "scroll",
        window.scrollY > 90
    );

}

const savedTheme =
    localStorage.getItem("themeMode") || "light";

applyTheme(savedTheme);
updateNavState();

window.addEventListener(
    "scroll",
    updateNavState
);

if (themeToggle) {

    themeToggle.addEventListener(
        "change",
        () => {

            const nextMode =
                themeToggle.checked
                    ? "dark"
                    : "light";

            applyTheme(nextMode);

        }
    );

}


// COUNTER

const counters =
    document.querySelectorAll(".counter");

if (counters.length) {

    const observer =
        new IntersectionObserver(
            (entries) => {

                entries.forEach(entry => {

                    if (entry.isIntersecting) {

                        const counter =
                            entry.target;

                        const target =
                            +counter.dataset.target;

                        let current = 0;

                        const increment =
                            Math.ceil(target / 80);

                        function updateCounter() {

                            if (current < target) {

                                current += increment;

                                counter.textContent =
                                    current > target
                                        ? target
                                        : current;

                                requestAnimationFrame(
                                    updateCounter
                                );

                            }

                        }

                        updateCounter();

                        observer.unobserve(counter);

                    }

                });

            },
            {
                threshold: 0.5
            }
        );

    counters.forEach(counter => {
        observer.observe(counter);
    });

}


// PAGE LOAD

window.addEventListener("load", () => {

    document
        .querySelectorAll(".reader-img")
        .forEach(img => {

            const preload =
                new Image();

            preload.src = img.src;

            preload.decoding = "async";

        });

    if (typeof AOS !== "undefined") {

        AOS.init({
            duration: 1000,
            easing: "ease-in-out",
            once: true,
            offset: 120
        });

        AOS.refreshHard();

    }

});


// SCROLL PROGRESS

const progressBar =
    document.querySelector(".progress-bar");

window.addEventListener("scroll", () => {

    if (!progressBar) return;

    const scrollTop =
        window.scrollY;

    const documentHeight =
        document.documentElement.scrollHeight -
        document.documentElement.clientHeight;

    if (documentHeight <= 0) return;

    const scrollPercentage =
        (scrollTop / documentHeight) * 100;

    progressBar.style.width =
        `${scrollPercentage}%`;

});


// FIND BOOK

const findBook =
    document.getElementById("find-book");

window.addEventListener("scroll", () => {

    if (!findBook) return;

    if (window.scrollY > 300) {

        findBook.classList.add("show");

    } else {

        findBook.classList.remove("show");

    }

});


// SCROLL TO TOP

const scrollTopBtn =
    document.getElementById("scroll-top");

if (scrollTopBtn) {

    window.addEventListener("scroll", () => {

        if (window.scrollY > 300) {

            scrollTopBtn.style.display =
                "flex";

        } else {

            scrollTopBtn.style.display =
                "none";

        }

    });

    scrollTopBtn.addEventListener(
        "click",
        () => {

            window.scrollTo({
                top: 0,
                behavior: "smooth"
            });

        }
    );

}


// MOBILE CAROUSEL

function mobileCarouselSetup() {

    const carousels = [
        "#bestSellerCarousel",
        "#testimonialCarousel"
    ];

    if (window.innerWidth > 767) return;

    carousels.forEach(selector => {

        const carousel =
            document.querySelector(selector);

        if (!carousel) return;

        const inner =
            carousel.querySelector(
                ".carousel-inner"
            );

        if (!inner) return;

        const slides = [
            ...inner.querySelectorAll(
                ".carousel-item"
            )
        ];

        const cards = [];

        slides.forEach(slide => {

            slide
                .querySelectorAll(
                    ".row > [class*='col-']"
                )
                .forEach(card => {

                    cards.push(card);

                });

        });

        if (!cards.length) return;

        inner.innerHTML = "";

        cards.forEach((card, index) => {

            const newSlide =
                document.createElement("div");

            newSlide.className =
                "carousel-item";

            if (index === 0) {

                newSlide.classList.add(
                    "active"
                );

            }

            newSlide.appendChild(card);

            inner.appendChild(newSlide);

        });

    });

}

mobileCarouselSetup();


// MOBILE MENU

const menuBtn =
    document.querySelector(".menu-btn");

const navLinks =
    document.querySelector(".nav-links");

if (menuBtn && navLinks) {

    const menuIcon =
        menuBtn.querySelector("i");

    menuBtn.addEventListener(
        "click",
        () => {

            const isOpen =
                navLinks.classList.toggle(
                    "active"
                );

            menuBtn.classList.toggle(
                "active",
                isOpen
            );

            menuBtn.setAttribute(
                "aria-expanded",
                String(isOpen)
            );

            if (menuIcon) {

                menuIcon.classList.toggle(
                    "fa-bars",
                    !isOpen
                );

                menuIcon.classList.toggle(
                    "fa-xmark",
                    isOpen
                );

            }

        }
    );

}


// Login / Sign Up

const loginTab = document.getElementById("loginTab");
const signupTab = document.getElementById("signupTab");

const loginForm = document.getElementById("loginForm");
const signupForm = document.getElementById("signupForm");

const goToSignup = document.getElementById("goToSignup");
const goToLogin = document.getElementById("goToLogin");

const authImage = document.getElementById("authImage");

function switchForm(type) {

    const isLogin = type === "login";

    loginTab.classList.toggle("active", isLogin);
    signupTab.classList.toggle("active", !isLogin);

    loginForm.classList.toggle("hidden", !isLogin);
    signupForm.classList.toggle("hidden", isLogin);

    authImage.src = isLogin
        ? "../My Images/Login.jfif"
        : "../My Images/Signup.jfif";
}

loginTab.addEventListener("click", () => switchForm("login"));

signupTab.addEventListener("click", () => switchForm("signup"));

goToSignup.addEventListener("click", () => switchForm("signup"));

goToLogin.addEventListener("click", () => switchForm("login"));