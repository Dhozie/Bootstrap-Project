const nav = document.getElementById('mainNav');
const themeToggle = document.getElementById('themeToggle');

function applyTheme(mode) {
    const isDark = mode === 'dark';
    document.body.classList.toggle('dark-mode', isDark);
    localStorage.setItem('themeMode', mode);
    themeToggle.checked = isDark;
    themeToggle.setAttribute('aria-label', isDark ? 'Switch to light mode' : 'Switch to dark mode');
}

function updateNavState() {
    nav.classList.toggle('scroll', window.scrollY > 90);
}

const savedTheme = localStorage.getItem('themeMode') || 'light';
applyTheme(savedTheme);
updateNavState();

window.addEventListener('scroll', updateNavState);

themeToggle.addEventListener('change', () => {
    const nextMode = themeToggle.checked ? 'dark' : 'light';
    applyTheme(nextMode);
});


const counters = document.querySelectorAll(".counter");

const observer = new IntersectionObserver((entries)=>{

    entries.forEach(entry=>{

        if(entry.isIntersecting){

            const counter = entry.target;

            const target = +counter.dataset.target;

            let current = 0;

            const increment = Math.ceil(target / 80);

            function updateCounter(){

                if(current < target){

                    current += increment;

                    counter.textContent = current > target ? target : current;

                    requestAnimationFrame(updateCounter);

                }

            }

            updateCounter();

            observer.unobserve(counter);

        }

    });

},{
    threshold:0.5
});

counters.forEach(counter=>{

    observer.observe(counter);

});

const preloader = document.getElementById("preloader");
const introVideo = document.getElementById("intro-video");

introVideo.addEventListener("ended", () => {
    preloader.classList.add("hide");
});

setTimeout(() => {
    preloader.classList.add("hide");
}, 8000);

window.addEventListener("load", () => {

    document.querySelectorAll(".reader-img").forEach(img => {
        const preload = new Image();
        preload.src = img.src;
        preload.decoding = "async";
    });

    // Carousel Javascript on Mobile View

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
                slide.querySelectorAll(".row > [class*='col-']").forEach(card => {
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

mobileCarouselSetup();

    // AOS Animations 

    AOS.init({
        duration: 1000,
        easing: "ease-in-out",
        once: true,
        offset: 120
    });

    AOS.refreshHard();

});

// Progress Bar/Scroll Progress

const progressBar = document.querySelector(".progress-bar");

// Listen for Scroll
window.addEventListener("scroll", ( ) => {

    // Current Scroll Position
    const scrollTop = window.scrollY;

    // Total Scrollable Height 
    const documentHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;

    // Calculate Scroll Percentage
    const scrollPercentage = (scrollTop / documentHeight) * 100;

    // Update Progress Bar Width
    progressBar.style.width = scrollPercentage + "%";

});

// Scroll to top button
// Select the Button
const scrollTopBtn = document.getElementById("scroll-top");

// Listen for Scrolling
window.addEventListener("scroll", () => {

  // Check if the user has scrolled down
  if (window.scrollY > 300) {

    // Show the Button
    scrollTopBtn.style.display = "block";

  } else {
    scrollTopBtn.style.display = "none";
  }
});

// Listen for Button Clicks
scrollTopBtn.addEventListener("click", () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth"
  });
});

// =====================
// MOBILE MENU
// =====================

// Select Menu Button
const menuBtn = document.querySelector(".menu-btn");

// Select Navigation
const navLinks = document.querySelector(".nav-links");

// Select Icon
const menuIcon = menuBtn.querySelector("i");

// Listen for Click
if (menuBtn && navLinks) {

    menuBtn.addEventListener("click", () => {

        const isOpen = navLinks.classList.toggle("active");
        menuBtn.classList.toggle("active", isOpen);
        menuBtn.setAttribute("aria-expanded", String(isOpen));

        // Toggle Icon
        menuIcon.classList.toggle("fa-bars", !isOpen);
        menuIcon.classList.toggle("fa-xmark", isOpen);

    });

}