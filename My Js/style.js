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

// DYNAMIC NAVBAR CART & WISHLIST

function readStoredArray(key) {

    try {

        const rawValue = localStorage.getItem(key);

        if (!rawValue) {
            return [];
        }

        const parsed = JSON.parse(rawValue);

        return Array.isArray(parsed) ? parsed : [];

    } catch (error) {
        return [];
    }

}

function getCartQuantity(cartItems) {

    return cartItems.reduce((total, item) => {

        const quantity = Number(item?.quantity) || 0;

        return total + quantity;

    }, 0);

}

function buildDynamicNavAction({ href, iconClass, badgeText, ariaLabel, className }) {

    const link = document.createElement("a");

    link.href = href;
    link.className = `dynamic-nav-action ${className}`;
    link.setAttribute("aria-label", ariaLabel);

    const icon = document.createElement("i");
    icon.className = iconClass;

    const badge = document.createElement("span");
    badge.className = "dynamic-nav-badge";
    badge.textContent = badgeText;

    link.appendChild(icon);
    link.appendChild(badge);

    return link;

}

function renderDynamicNavbarActions() {

    const navActions = document.querySelector(".navbar-actions");

    if (!navActions) return;

    const existingGroup = navActions.querySelector(".dynamic-nav-actions");

    if (existingGroup) {
        existingGroup.remove();
    }

    const cart = readStoredArray("cart");
    const wishlist = readStoredArray("wishlist");

    const cartQuantity = getCartQuantity(cart);
    const wishlistCount = wishlist.length;

    const actionsGroup = document.createElement("div");
    actionsGroup.className = "dynamic-nav-actions";

    if (cartQuantity > 0) {

        actionsGroup.appendChild(
            buildDynamicNavAction({
                href: "cart.html",
                iconClass: "fa-solid fa-cart-shopping",
                badgeText: cartQuantity,
                ariaLabel: "Cart",
                className: "cart-dynamic-nav-action"
            })
        );

    }

    if (wishlistCount > 0) {

        actionsGroup.appendChild(
            buildDynamicNavAction({
                href: "wishlist.html",
                iconClass: "fa-regular fa-heart",
                badgeText: wishlistCount,
                ariaLabel: "Wishlist",
                className: "wishlist-dynamic-nav-action"
            })
        );

    }

    if (actionsGroup.children.length > 0) {
        navActions.insertBefore(actionsGroup, navActions.firstChild);
    }

}

function initDynamicNavbarActions() {
    renderDynamicNavbarActions();
}

if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", initDynamicNavbarActions);
} else {
    initDynamicNavbarActions();
}

window.addEventListener("storage", () => {
    renderDynamicNavbarActions();
});

// BESTSELLER ACTIONS

function initBestsellerActions() {

    const prices = {
        "Curse Breaker": 35000,
        "Tell Me Your Dream": 35000,
        "Bared to You": 38000,
        "Burn": 35000,
        "Children of Blood and Bone": 45000,
        "Dracula": 40000,
        "The Exorcist": 42000,
        "Verity": 40000
    };

    document.querySelectorAll(".best-sellers .book-card").forEach(bookCard => {

        const titleElement = bookCard.querySelector("h3");
        const authorElement = bookCard.querySelector("p");
        const coverElement = bookCard.querySelector("img");

        if (!titleElement || !authorElement || !coverElement) return;

        const title = titleElement.textContent.trim();
        const author = authorElement.textContent.trim();
        const cover = coverElement.getAttribute("src");
        const price = prices[title];

        if (!price) return;

        const wishlistButton = bookCard.querySelector(".wishlist-action");
        const cartButton = bookCard.querySelector(".cart-action");

        if (wishlistButton) {

            let wishlist = readStoredArray("wishlist");

            if (wishlist.some(item => item.bookName === title)) {
                wishlistButton.classList.add("active");
                wishlistButton.setAttribute("aria-pressed", "true");
            }

            wishlistButton.addEventListener("click", event => {

    event.preventDefault();
    event.stopPropagation();

    if (!requireLogin()) return;

                wishlist = readStoredArray("wishlist");
                
                if (wishlist.some(item => item.bookName === title)) {
                    wishlistButton.classList.add("active");
                    wishlistButton.setAttribute("aria-pressed", "true");
                    return;
                }

                wishlist.push({
                    bookName: title,
                    title: title,
                    author: author,
                    cover: cover,
                    price: `₦${price.toLocaleString()}`
                });

                localStorage.setItem("wishlist", JSON.stringify(wishlist));
                wishlistButton.classList.add("active");
                wishlistButton.setAttribute("aria-pressed", "true");
                renderDynamicNavbarActions();

            });

        }

        if (cartButton) {

            cartButton.addEventListener("click", event => {

    event.preventDefault();
    event.stopPropagation();

    if (!requireLogin()) return;

    const cart = readStoredArray("cart");
                const existingBook = cart.find(item => item.bookName === title);

                if (existingBook) {
                    existingBook.quantity = (Number(existingBook.quantity) || 0) + 1;
                } else {
                    cart.push({
                        bookName: title,
                        title: title,
                        author: author,
                        cover: cover,
                        price: price,
                        quantity: 1
                    });
                }

                localStorage.setItem("cart", JSON.stringify(cart));
                renderDynamicNavbarActions();

            });

        }

    });

}

initBestsellerActions();

// END DYNAMIC NAVBAR CART & WISHLIST

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

// Current User

const currentUser = JSON.parse(
    localStorage.getItem("currentUser")
);

console.log("Current User:", currentUser);

const loginButton = document.querySelector(".login-btn");

if (loginButton && currentUser) {
    loginButton.textContent = `👤 ${currentUser.name}`;
    loginButton.href = "profile.html";
    
}

const profileName = document.getElementById("profileName");
const profileEmail = document.getElementById("profileEmail");

if (profileName && currentUser) {
    profileName.textContent = currentUser.name;
}

if (profileEmail && currentUser) {
    profileEmail.textContent = currentUser.email;
}

// Logout

function logoutUser() {
    localStorage.removeItem("currentUser");

    localStorage.removeItem("cart");
    localStorage.removeItem("wishlist");

    window.location.href = "reg.html";
}

const logoutBtn = document.getElementById("logoutBtn");

if (logoutBtn) {

    logoutBtn.addEventListener("click", logoutUser);

    window.addEventListener("scroll", () => {

        if (window.scrollY > 100) {

            logoutBtn.classList.add("show");

        } else {

            logoutBtn.classList.remove("show");

        }

    });

}
