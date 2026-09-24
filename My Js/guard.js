const protectedPages = [
    "profile.html",
    "cart.html",
    "wishlist.html",
    "checkout.html"
];

const currentPage = window.location.pathname
    .split("/")
    .pop()
    .toLowerCase();

const loggedInUser = localStorage.getItem("currentUser");

if (protectedPages.includes(currentPage) && !loggedInUser) {
    window.location.href = "reg.html";
}

function requireLogin() {

    const user = localStorage.getItem("currentUser");

    if (!user) {

        const modal = document.getElementById("loginRequiredModal");

        if (modal) {
            modal.classList.add("show");
        }

        return false;
    }

    return true;
}