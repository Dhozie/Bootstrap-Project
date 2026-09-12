
const wishlistBooks =
    document.getElementById("wishlistBooks");

const wishlistEmpty =
    document.getElementById("wishlistEmpty");


if (wishlistBooks) {

    // Get wishlist from localStorage
    const wishlist =
        JSON.parse(localStorage.getItem("wishlist")) || [];


//    Is The Wishlist Empty ??

    if (wishlist.length === 0) {

        // Hide the book grid
        wishlistBooks.innerHTML = "";

        // Show your designed empty state
        if (wishlistEmpty) {
            wishlistEmpty.style.display = "block";
        }

    }

        // Show WishList Books
    
    else {

        // Hide empty state
        if (wishlistEmpty) {
            wishlistEmpty.style.display = "none";
        }

        // Clear book grid
        wishlistBooks.innerHTML = "";


        wishlist.forEach(book => {

            const bookCard =
                document.createElement("div");

            bookCard.className =
                "col-12 col-sm-6 col-lg-4";


            bookCard.innerHTML = `

                <div class="wishlist-card">

                    <div class="wishlist-cover">

                        <img
                            src="${book.cover}"
                            alt="${book.title}"
                        >

                    </div>


                    <div class="wishlist-card-content">

                        <h3>
                            ${book.title}
                        </h3>

                        <p class="wishlist-author">
                            ${book.author}
                        </p>

                        <strong class="wishlist-price">
                            ${book.price}
                        </strong>


                        <div class="wishlist-actions">

                            <a
                                href="book.html?book=${book.bookName}"
                                class="view-book-btn"
                            >
                                View Book
                            </a>

                            <button
                                type="button"
                                class="remove-wishlist"
                                data-book="${book.bookName}"
                            >
                                <i class="fa-solid fa-heart"></i>
                            </button>

                        </div>

                    </div>

                </div>

            `;


            wishlistBooks.appendChild(bookCard);

        });

        // Remove From WishList
        
        const removeButtons =
            document.querySelectorAll(".remove-wishlist");


        removeButtons.forEach(button => {

            button.addEventListener("click", function () {

                const bookName =
                    this.dataset.book;


                // Get current wishlist
                let currentWishlist =
                    JSON.parse(
                        localStorage.getItem("wishlist")
                    ) || [];


                // Remove selected book
                currentWishlist =
                    currentWishlist.filter(
                        book => book.bookName !== bookName
                    );


                // Save updated wishlist
                localStorage.setItem(
                    "wishlist",
                    JSON.stringify(currentWishlist)
                );


                // Reload page
                location.reload();

            });

        });

    }

}

