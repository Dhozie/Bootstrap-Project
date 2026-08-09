// PRELOADER

// Select Preloader Elements
const preloader = document.getElementById("preloader");
const introVideo = document.getElementById("intro-video");

// Hide Preloader When Video Ends
introVideo.addEventListener("ended", () => {
    preloader.classList.add("hide");
});

// Fallback: Hide After 8 Seconds
setTimeout(() => {
    preloader.classList.add("hide");
}, 8000);

// THEME TOGGLE & NAVBAR SCROLL

// Select Navbar & Theme Toggle
const nav = document.getElementById('mainNav');
const themeToggle = document.getElementById('themeToggle');

// Apply Theme
function applyTheme(mode) {
    const isDark = mode === 'dark';

    document.body.classList.toggle('dark-mode', isDark);

    localStorage.setItem('themeMode', mode);

    themeToggle.checked = isDark;

    themeToggle.setAttribute(
        'aria-label',
        isDark
            ? 'Switch to light mode'
            : 'Switch to dark mode'
    );
}

// Navbar Scroll Effect
function updateNavState() {
    nav.classList.toggle('scroll', window.scrollY > 90);
}

// Load Saved Theme
const savedTheme = localStorage.getItem('themeMode') || 'light';

applyTheme(savedTheme);
updateNavState();

// Listen for Scroll
window.addEventListener('scroll', updateNavState);

// Listen for Theme Changes
themeToggle.addEventListener('change', () => {

    const nextMode = themeToggle.checked ? 'dark' : 'light';

    applyTheme(nextMode);

});


// COUNTER ANIMATION

// Select Counters
const counters = document.querySelectorAll(".counter");

// Observe Counters
const observer = new IntersectionObserver((entries) => {

    entries.forEach(entry => {

        if (entry.isIntersecting) {

            const counter = entry.target;

            const target = +counter.dataset.target;

            let current = 0;

            const increment = Math.ceil(target / 80);

            function updateCounter() {

                if (current < target) {

                    current += increment;

                    counter.textContent = current > target ? target : current;

                    requestAnimationFrame(updateCounter);

                }

            }

            updateCounter();

            observer.unobserve(counter);

        }

    });

}, {
    threshold: 0.5
});

counters.forEach(counter => {

    observer.observe(counter);

});

// PAGE LOAD

window.addEventListener("load", () => {

    // Preload Reader Images
    document.querySelectorAll(".reader-img").forEach(img => {

        const preload = new Image();

        preload.src = img.src;

        preload.decoding = "async";

    });

    // Initialize AOS
    AOS.init({
        duration: 1000,
        easing: "ease-in-out",
        once: true,
        offset: 120
    });

    AOS.refreshHard();

});

// SCROLL PROGRESS BAR


// Select Progress Bar
const progressBar = document.querySelector(".progress-bar");

// Listen for Scroll
window.addEventListener("scroll", () => {

    if (!findBook) return;
    if (window.scrollY > 300) {
        findBook.classList.add("show");
    } else {
        findBook.classList.remove("show");
    }

});

// SCROLL TO TOP BUTTON

// Select Button
const scrollTopBtn = document.getElementById("scroll-top");

// Show / Hide Button
window.addEventListener("scroll", () => {

    if (window.scrollY > 300) {

        scrollTopBtn.style.display = "block";

    } else {

        scrollTopBtn.style.display = "none";

    }

});

// Scroll Back To Top
scrollTopBtn.addEventListener("click", () => {

    window.scrollTo({

        top: 0,

        behavior: "smooth"

    });

});


// MOBILE IMAGE CAROUSEL

function mobileCarouselSetup() {

    const carousels = [

        "#bestSellerCarousel",

        "#testimonialCarousel"

    ];

    if (window.innerWidth <= 767) {

        carousels.forEach(selector => {

            const carousel = document.querySelector(selector);

            if (!carousel) return;

            const inner = carousel.querySelector(".carousel-inner");

            const slides = [...inner.querySelectorAll(".carousel-item")];

            const cards = [];

            slides.forEach(slide => {

                slide
                    .querySelectorAll(".row > [class*='col-']")
                    .forEach(card => {

                        cards.push(card);

                    });

            });

            inner.innerHTML = "";

            cards.forEach((card, index) => {

                const newSlide = document.createElement("div");

                newSlide.className = "carousel-item";

                if (index === 0) {

                    newSlide.classList.add("active");

                }

                newSlide.appendChild(card);

                inner.appendChild(newSlide);

            });

        });

    }

}

// Run Mobile Carousel
mobileCarouselSetup();


// MOBILE MENU TOGGLE

// Select Menu Elements
const menuBtn = document.querySelector(".menu-btn");
const navLinks = document.querySelector(".nav-links");
const menuIcon = menuBtn.querySelector("i");

// Toggle Mobile Navigation
if (menuBtn && navLinks) {

    menuBtn.addEventListener("click", () => {

        const isOpen = navLinks.classList.toggle("active");

        menuBtn.classList.toggle("active", isOpen);

        menuBtn.setAttribute("aria-expanded", String(isOpen));

        // Toggle Menu Icon
        menuIcon.classList.toggle("fa-bars", !isOpen);
        menuIcon.classList.toggle("fa-xmark", isOpen);

    });

}

const findBook = document.getElementById("find-book");

window.addEventListener("scroll", () => {

    if (!findBook) return;

    if (window.scrollY > 300) {
        findBook.classList.add("show");
    } else {
        findBook.classList.remove("show");
    }

});