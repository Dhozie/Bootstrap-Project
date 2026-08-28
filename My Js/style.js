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


// LOGIN / SIGN UP

const loginTab =
    document.getElementById("loginTab");

const signupTab =
    document.getElementById("signupTab");

const loginForm =
    document.getElementById("loginForm");

const signupForm =
    document.getElementById("signupForm");

const goToSignup =
    document.getElementById("goToSignup");

const goToLogin =
    document.getElementById("goToLogin");

const authImage =
    document.getElementById("authImage");


function switchForm(type) {

    if (
        !loginTab ||
        !signupTab ||
        !loginForm ||
        !signupForm ||
        !authImage
    ) return;

    const isLogin =
        type === "login";

    loginTab.classList.toggle(
        "active",
        isLogin
    );

    signupTab.classList.toggle(
        "active",
        !isLogin
    );

    loginForm.classList.toggle(
        "hidden",
        !isLogin
    );

    signupForm.classList.toggle(
        "hidden",
        isLogin
    );

    authImage.src =
        isLogin
            ? "../My Images/Login.jfif"
            : "../My Images/Signup.jfif";

}


if (loginTab) {

    loginTab.addEventListener(
        "click",
        () => switchForm("login")
    );

}

if (signupTab) {

    signupTab.addEventListener(
        "click",
        () => switchForm("signup")
    );

}

if (goToSignup) {

    goToSignup.addEventListener(
        "click",
        () => switchForm("signup")
    );

}

if (goToLogin) {

    goToLogin.addEventListener(
        "click",
        () => switchForm("login")
    );

}


// LIBRARY

document.addEventListener("DOMContentLoaded", () => {

    // Get books and category buttons
    const bookCards = document.querySelectorAll(".book-card");

    const bookSearch =
        document.getElementById("bookSearch");
    
    const searchSuggestions =
    document.getElementById("searchSuggestions");

    const categoryCards = document.querySelectorAll(
        ".genre-claim[data-category]"
    );

    const exploreButtons = document.querySelectorAll(
        ".btn-category[data-category]"
    );


    // Get pagination elements
    const bookItems = document.querySelectorAll(
        "#all-books .row > div"
    );

    const pagination = document.getElementById(
        "libraryPagination"
    );

    const pageNumbers = document.getElementById(
        "pageNumbers"
    );

    const prevPage = document.getElementById(
        "prevPage"
    );

    const nextPage = document.getElementById(
        "nextPage"
    );


    // Pagination settings
    const booksPerPage = 8;

    let currentPage = 1;

    let currentFilteredBooks =
        Array.from(bookItems);

    let totalPages = Math.ceil(
        currentFilteredBooks.length /
        booksPerPage
    );


    console.log(
        "Total books:",
        bookItems.length
    );

    console.log(
        "Total pages:",
        totalPages
    );


    // Show books for current page
    function displayFilteredPage(filteredBooks) {

        const startIndex =
            (currentPage - 1) *
            booksPerPage;

        const endIndex =
            startIndex +
            booksPerPage;


        // Hide all books
        bookItems.forEach(book => {

            book.style.display = "none";

        });


        // Show books for current page
        filteredBooks.forEach(
            (book, index) => {

                if (
                    index >= startIndex &&
                    index < endIndex
                ) {

                    book.style.display = "";

                }

            }
        );

    }


    // Create pagination
    function updatePagination() {

        totalPages = Math.ceil(
            currentFilteredBooks.length /
            booksPerPage
        );


        // Keep current page valid
        if (
            currentPage > totalPages
        ) {

            currentPage = totalPages;

        }


        if (
            currentPage < 1
        ) {

            currentPage = 1;

        }


        // Clear page numbers
        pageNumbers.innerHTML = "";


        // Create page numbers
        for (
            let page = 1;
            page <= totalPages;
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
                page === currentPage
            ) {

                button.classList.add(
                    "active"
                );

            }


            button.addEventListener(
                "click",
                () => {

                    currentPage = page;

                    displayFilteredPage(
                        currentFilteredBooks
                    );

                    updatePagination();

                }
            );


            pageNumbers.appendChild(
                button
            );

        }


        // Show current page
        displayFilteredPage(
            currentFilteredBooks
        );

    }

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

    const browseBooksPerPage = 3;

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


    // Filter books
    function filterBooks(category) {

        currentPage = 1;

        const filteredBooks = [];


        bookItems.forEach(
            bookColumn => {

                const book =
                    bookColumn.querySelector(
                        ".book-card"
                    );


                if (!book) return;


                const bookTags =
                    book.querySelectorAll(
                        ".book-tags span"
                    );


                let matches = false;


                bookTags.forEach(
                    tag => {

                        const tagCategory =
                            tag.textContent
                                .trim()
                                .toLowerCase()
                                .replace(
                                    /\s+/g,
                                    "-"
                                );


                        if (
                            tagCategory ===
                            category
                        ) {

                            matches = true;

                        }

                    }
                );


                if (
                    category === "all" ||
                    matches
                ) {

                    filteredBooks.push(
                        bookColumn
                    );

                }

            }
        );


        currentFilteredBooks =
            filteredBooks;


        updatePagination();

    }

    // Search books
function searchBooks(searchTerm) {

    currentPage = 1;

    const searchResults = [];

    const searchText =
        searchTerm
            .trim()
            .toLowerCase();


    // Show all books if search is empty
    if (!searchText) {

        currentFilteredBooks =
            Array.from(bookItems);

        updatePagination();

        return;

    }


    // Search through books
    bookItems.forEach(
        bookColumn => {

            const book =
                bookColumn.querySelector(
                    ".book-card"
                );

            if (!book) return;


            const title =
                book.querySelector(
                    "h3"
                )?.textContent
                    .toLowerCase() || "";


            const description =
                book.querySelector(
                    ".book-info p"
                )?.textContent
                    .toLowerCase() || "";


            const tags =
                Array.from(
                    book.querySelectorAll(
                        ".book-tags span"
                    )
                )
                .map(
                    tag =>
                        tag.textContent
                            .toLowerCase()
                )
                .join(" ");


            const searchableText =
                `${title} ${description} ${tags}`;


            if (
                searchableText.includes(
                    searchText
                )
            ) {

                searchResults.push(
                    bookColumn
                );

            }

        }
    );


    // Store search results
    currentFilteredBooks =
        searchResults;


    // Update pagination
    updatePagination();

    }

    // Show search suggestions
function showSearchSuggestions(searchTerm) {

    const searchText =
        searchTerm
            .trim()
            .toLowerCase();


    // Clear suggestions
    searchSuggestions.innerHTML = "";


    // Hide suggestions when search is empty
    if (!searchText) {

        searchSuggestions.style.display =
            "none";

        return;

    }


    const suggestions = [];


    // Find matching books
    bookItems.forEach(
        bookColumn => {

            const book =
                bookColumn.querySelector(
                    ".book-card"
                );

            if (!book) return;


            const title =
                book.querySelector("h3")
                    ?.textContent
                    .trim() || "";


            const description =
                book.querySelector(
                    ".book-info p"
                )
                    ?.textContent
                    .trim() || "";


            const tags =
                Array.from(
                    book.querySelectorAll(
                        ".book-tags span"
                    )
                )
                .map(
                    tag =>
                        tag.textContent.trim()
                )
                .join(" ");


            const searchableText =
                `${title} ${description} ${tags}`
                    .toLowerCase();


            if (
                searchableText.includes(
                    searchText
                )
            ) {

                suggestions.push({
                    book: bookColumn,
                    title: title
                });

            }

        }
    );


    // Show matching suggestions
   suggestions
    .slice(0, 5)
    .forEach(
        suggestion => {

            const item =
                document.createElement(
                    "div"
                );

            item.classList.add(
                "search-suggestion"
            );

            item.textContent =
                suggestion.title;


            // Click a suggestion
          item.addEventListener(
    "click",
    () => {

        bookSearch.value =
            suggestion.title;

        searchBooks(
            suggestion.title
        );

        searchSuggestions.style.display =
            "none";

        document
            .querySelector(
                "#all-books"
            )
            .scrollIntoView({
                behavior: "smooth",
                block: "start"
            });

    }
);


            searchSuggestions.appendChild(
                item
            );

        }
    );

    // Show or hide the suggestion box
    if (suggestions.length > 0) {

        searchSuggestions.style.display =
            "block";

    } else {

        searchSuggestions.style.display =
            "none";

    }

}
    
    // Search input
bookSearch.addEventListener(
    "input",
    () => {

        searchBooks(
            bookSearch.value
        );

        showSearchSuggestions(
            bookSearch.value
        );

    }
);

    // Category buttons
    categoryCards.forEach(
        category => {

            category.addEventListener(
                "click",
                event => {

                    event.preventDefault();


                    const selectedCategory =
                        category.dataset.category
                            .toLowerCase()
                            .trim();


                    filterBooks(
                        selectedCategory
                    );


                    document
                        .querySelector(
                            "#all-books"
                        )
                        .scrollIntoView({
                            behavior: "smooth",
                            block: "start"
                        });


                    history.replaceState(
                        null,
                        "",
                        `?category=${selectedCategory}`
                    );

                }
            );

        }
    );


    // Home category buttons
    exploreButtons.forEach(
        button => {

            button.addEventListener(
                "click",
                event => {

                    const category =
                        button.dataset.category;


                    if (!category) return;


                    event.preventDefault();


                    window.location.href =
                        `library.html?category=${encodeURIComponent(category)}`;

                }
            );

        }
    );


    // Previous button
    prevPage.addEventListener(
        "click",
        () => {

            if (
                currentPage > 1
            ) {

                currentPage--;

                displayFilteredPage(
                    currentFilteredBooks
                );

                updatePagination();

            }

        }
    );


    // Next button
    nextPage.addEventListener(
        "click",
        () => {

            if (
                currentPage < totalPages
            ) {

                currentPage++;

                displayFilteredPage(
                    currentFilteredBooks
                );

                updatePagination();

            }

        }
    );


    // Check URL category
    const urlParams =
        new URLSearchParams(
            window.location.search
        );


    const categoryFromURL =
        urlParams.get("category");


    if (
        categoryFromURL &&
        bookCards.length
    ) {

        filterBooks(
            categoryFromURL
                .toLowerCase()
                .trim()
        );

    } else {

        currentFilteredBooks =
            Array.from(bookItems);

        currentPage = 1;

        updatePagination();

    }

});