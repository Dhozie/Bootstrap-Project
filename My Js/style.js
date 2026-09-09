// PRELOADER

const preloader = document.getElementById("preloader");
const introVideo = document.getElementById("intro-video");

if (preloader && introVideo) {

    // Check if the preloader has already played
    const hasPlayed = sessionStorage.getItem("introPlayed");

    if (hasPlayed) {

        // Skip the preloader
        preloader.classList.add("hide");

    } else {

        // Play the video
        introVideo.play();

        // When video finishes
        introVideo.addEventListener("ended", () => {

            preloader.classList.add("hide");

            // Remember that it has played
            sessionStorage.setItem(
                "introPlayed",
                "true"
            );

        });

        // Safety timeout
        setTimeout(() => {

            preloader.classList.add("hide");

            sessionStorage.setItem(
                "introPlayed",
                "true"
            );

        }, 8000);

    }

}

// END PRELOADER

//  THEME TOGGLE

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


// END THEME TOGGLE

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


// END COUNTER



//  PAGE LOAD

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


// END PAGE LOAD



//  SCROLL PROGRESS 

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


//  END SCROLL PROGRESS 

//  FIND BOOK BUTTON 

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


//  END FIND BOOK BUTTON 

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


// END SCROLL TO TOP 

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


//  END MOBILE CAROUSEL

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

// END MOBILE MENU

// Browse More Pagination

const browseBooks = document.querySelectorAll(
    "#browseBooks > div"
);

if (browseBooks.length > 0) {

    const browsePageNumbers =
        document.getElementById(
            "browsePageNumbers"
        );

    const browsePrevPage =
        document.getElementById(
            "browsePrevPage"
        );

    const browseNextPage =
        document.getElementById(
            "browseNextPage"
        );

    // Settings

    const browseBooksPerPage =
    window.innerWidth <= 767
        ? 2
        : window.innerWidth <= 1024
        ? 2
        : 3;

    let browseCurrentPage = 1;

    let browseTotalPages = Math.ceil(
        browseBooks.length /
        browseBooksPerPage
    );

    // Display Books

    function displayBrowsePage() {

        const startIndex =
            (browseCurrentPage - 1) *
            browseBooksPerPage;

        const endIndex =
            startIndex +
            browseBooksPerPage;

        browseBooks.forEach(book => {
            book.style.display = "none";
        });

        browseBooks.forEach((book, index) => {

            if (
                index >= startIndex &&
                index < endIndex
            ) {

                book.style.display = "";

            }

        });

    }

    // Update Pagination

    function updateBrowsePagination() {

        browseTotalPages = Math.ceil(
            browseBooks.length /
            browseBooksPerPage
        );

        browsePageNumbers.innerHTML = "";

        for (
            let page = 1;
            page <= browseTotalPages;
            page++
        ) {

            const button =
                document.createElement("button");

            button.type = "button";
            button.classList.add(
                "page-number"
            );

            button.textContent = page;

            if (
                page === browseCurrentPage
            ) {

                button.classList.add(
                    "active"
                );

            }

            button.addEventListener(
                "click",
                () => {

                    browseCurrentPage = page;

                    displayBrowsePage();

                    updateBrowsePagination();

                }
            );

            browsePageNumbers.appendChild(
                button
            );

        }

        // Disable Buttons

        browsePrevPage.disabled =
            browseCurrentPage === 1;

        browseNextPage.disabled =
            browseCurrentPage === browseTotalPages;

        displayBrowsePage();

    }

    // Previous

    browsePrevPage.addEventListener(
        "click",
        () => {

            if (
                browseCurrentPage > 1
            ) {

                browseCurrentPage--;

                updateBrowsePagination();

            }

        }
    );

    // Next

    browseNextPage.addEventListener(
        "click",
        () => {

            if (
                browseCurrentPage < browseTotalPages
            ) {

                browseCurrentPage++;

                updateBrowsePagination();

            }

        }
    );

    // Start

    updateBrowsePagination();

}