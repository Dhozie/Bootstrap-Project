const libraryFilters = document.querySelectorAll(".library-filter");
const libraryTabs = document.querySelectorAll(".library-tab");


// Library filters

libraryFilters.forEach(button => {

    button.addEventListener("click", function () {

        const filter = this.dataset.filter;

        libraryFilters.forEach(btn => {
            btn.classList.remove("active");
        });

        this.classList.add("active");

        libraryTabs.forEach(tab => {
            tab.classList.remove("active");
        });

        document.getElementById(filter).classList.add("active");

    });

});


// Get wishlist

const wishlist = JSON.parse(localStorage.getItem("wishlist")) || [];


// Saved Books

const savedBooks = document.getElementById("savedBooks");

if (savedBooks) {

    wishlist.slice(0, 3).forEach(book => {

        savedBooks.innerHTML += `
            <div class="library-book">

                <img src="${book.cover}" alt="${book.title}">

                <h4>${book.title}</h4>

            </div>
        `;

    });

}


// Saved button count

const savedCount = document.querySelector(".saved-count");

if (savedCount) {
    savedCount.textContent = wishlist.length;
}

// Dashboard Wishlist card

function updateWishlistCount() {

    const wishlist =
        JSON.parse(localStorage.getItem("wishlist")) || [];

    const wishlistCount =
        document.querySelector(".wishlist-count");

    if (wishlistCount) {

        wishlistCount.textContent =
            `${wishlist.length} ${wishlist.length === 1 ? "Book" : "Books"}`;

    }
}

updateWishlistCount();

// Dashboard Wishlist card goes to wishlist

const wishlistCard = document.querySelector(".dashboard-card");

if (wishlistCard && wishlistCount) {

    wishlistCard.addEventListener("click", function () {
        window.location.href = "wishlist.html";
    });

}