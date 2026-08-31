// START LIBRARY

document.addEventListener("DOMContentLoaded", () => {

    // Check if this is the library page

    const allBooks =
        document.getElementById("all-books");

    if (!allBooks) {
        return;
    }


    // Get books and category buttons

    const bookCards =
        document.querySelectorAll(".book-card");

    const bookSearch =
        document.getElementById("bookSearch");

    const searchSuggestions =
        document.getElementById("searchSuggestions");

    const categoryCards =
        document.querySelectorAll(
            ".genre-claim[data-category]"
        );

    const exploreButtons =
        document.querySelectorAll(
            ".btn-category[data-category]"
        );


    // Get pagination elements

    const bookItems =
        document.querySelectorAll(
            "#all-books .row > div"
        );

    const pagination =
        document.getElementById(
            "libraryPagination"
        );

    const pageNumbers =
        document.getElementById(
            "pageNumbers"
        );

    const prevPage =
        document.getElementById(
            "prevPage"
        );

    const nextPage =
        document.getElementById(
            "nextPage"
        );


    // START MAIN LIBRARY PAGINATION

    const booksPerPage = 8;

    let currentPage = 1;

    let currentFilteredBooks =
        Array.from(bookItems);

    let totalPages =
        Math.ceil(
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


    // Display books for current page

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


    // Update main pagination

    function updatePagination() {

        totalPages =
            Math.ceil(
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
                document.createElement(
                    "button"
                );

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

    // END MAIN LIBRARY PAGINATION


    // START BROWSE MORE PAGINATION

    const browseBooks =
        document.querySelectorAll(
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


        // Browse settings

        const browseBooksPerPage = 3;

        let browseCurrentPage = 1;

        let browseTotalPages =
            Math.ceil(
                browseBooks.length /
                browseBooksPerPage
            );


        // Display browse books

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


            browseBooks.forEach(
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


        // Update browse pagination

        function updateBrowsePagination() {

            browseTotalPages =
                Math.ceil(
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
                    document.createElement(
                        "button"
                    );

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


            // Disable previous and next buttons

            browsePrevPage.disabled =
                browseCurrentPage === 1;

            browseNextPage.disabled =
                browseCurrentPage ===
                browseTotalPages;


            displayBrowsePage();

        }


        // Previous browse button

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


        // Next browse button

        browseNextPage.addEventListener(
            "click",
            () => {

                if (
                    browseCurrentPage <
                    browseTotalPages
                ) {

                    browseCurrentPage++;

                    updateBrowsePagination();

                }

            }
        );


        // Start browse pagination

        updateBrowsePagination();

    }

    // END BROWSE MORE PAGINATION


    // START FILTER BOOKS

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

    // END FILTER BOOKS


    // START SEARCH BOOKS

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

    // END SEARCH BOOKS


    // START SEARCH SUGGESTIONS

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
                    book.querySelector(
                        "h3"
                    )
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


        // Show or hide suggestion box

        if (
            suggestions.length > 0
        ) {

            searchSuggestions.style.display =
                "block";

        } else {

            searchSuggestions.style.display =
                "none";

        }

    }

    // END SEARCH SUGGESTIONS


    // START SEARCH INPUT

    if (bookSearch) {

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

    }

    // END SEARCH INPUT


    // START CATEGORY BUTTONS

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

    // END CATEGORY BUTTONS


    // START HOME CATEGORY BUTTONS

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

    // END HOME CATEGORY BUTTONS


    // START PREVIOUS PAGE BUTTON

    if (prevPage) {

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

    }

    // END PREVIOUS PAGE BUTTON


    // START NEXT PAGE BUTTON

    if (nextPage) {

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

    }

    // END NEXT PAGE BUTTON


    // START URL CATEGORY

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

    // END URL CATEGORY

});

// END LIBRARY