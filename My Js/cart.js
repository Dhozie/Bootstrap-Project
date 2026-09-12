// Get Cart Elements

const cartItems =
    document.getElementById("cartItems");

const cartEmpty =
    document.getElementById("cartEmpty");


// Get Cart from Local Storage

if (cartItems) {

    const cart =
        JSON.parse(localStorage.getItem("cart")) || [];


    // Check if Cart is Empty

    if (cart.length === 0) {

        cartItems.innerHTML = "";

        if (cartEmpty) {
            cartEmpty.style.display = "block";
        }

    } else {

        // Hide Empty Cart

        if (cartEmpty) {
            cartEmpty.style.display = "none";
        }


        // Clear Cart

        cartItems.innerHTML = "";


        // Display Cart Items

        cart.forEach(book => {

            const cartItem =
                document.createElement("div");

            cartItem.className =
                "cart-item";


            cartItem.innerHTML = `

                <div class="cart-item-cover">

                    <img
                        src="${book.cover}"
                        alt="${book.title}"
                    >

                </div>


                <div class="cart-item-info">

                    <h3>${book.title}</h3>

                    <p class="cart-item-author">
                        ${book.author}
                    </p>

                    <strong class="cart-item-price">
                        ${book.price}
                    </strong>


                    <div class="cart-quantity">

                        <button
                            type="button"
                            class="quantity-btn decrease-quantity"
                            data-book="${book.bookName}"
                        >
                            −
                        </button>


                        <span>
                            ${book.quantity}
                        </span>


                        <button
                            type="button"
                            class="quantity-btn increase-quantity"
                            data-book="${book.bookName}"
                        >
                            +
                        </button>

                    </div>


                   <button
    type="button"
    class="remove-cart-item"
    data-book="${book.bookName}"
>
    <i class="fa-regular fa-trash-can"></i>
</button>

                </div>

            `;


            cartItems.appendChild(cartItem);

        });


        // Calculate Cart Total

        let cartSubtotal = 0;


        cart.forEach(book => {

            const price =
                Number(
                    String(book.price)
                        .replace(/[₦,]/g, "")
                );


            cartSubtotal +=
                price * book.quantity;

        });


        // Display Subtotal

        const subtotalElement =
            document.getElementById("cartSubtotal");


        if (subtotalElement) {

            subtotalElement.textContent =
                `₦${cartSubtotal.toLocaleString()}`;

        }


        // Display Total

        const totalElement =
            document.getElementById("cartTotal");


        if (totalElement) {

            totalElement.textContent =
                `₦${cartSubtotal.toLocaleString()}`;

        }

    }

}


// Change Cart Quantity

const increaseButtons =
    document.querySelectorAll(".increase-quantity");

const decreaseButtons =
    document.querySelectorAll(".decrease-quantity");


// Increase Quantity

increaseButtons.forEach(button => {

    button.addEventListener("click", function () {

        const bookName =
            this.dataset.book;


        let currentCart =
            JSON.parse(localStorage.getItem("cart")) || [];


        const book =
            currentCart.find(
                item => item.bookName === bookName
            );


        if (book) {

            book.quantity += 1;

        }


        localStorage.setItem(
            "cart",
            JSON.stringify(currentCart)
        );


        location.reload();

    });

});


// Decrease Quantity

decreaseButtons.forEach(button => {

    button.addEventListener("click", function () {

        const bookName =
            this.dataset.book;


        let currentCart =
            JSON.parse(localStorage.getItem("cart")) || [];


        const book =
            currentCart.find(
                item => item.bookName === bookName
            );


        if (book) {

            book.quantity -= 1;


            // Remove Book if Quantity Reaches 0

            if (book.quantity <= 0) {

                currentCart =
                    currentCart.filter(
                        item => item.bookName !== bookName
                    );

            }

        }


        localStorage.setItem(
            "cart",
            JSON.stringify(currentCart)
        );


        location.reload();

    });

});


// Remove Cart Item

const removeButtons =
    document.querySelectorAll(".remove-cart-item");


removeButtons.forEach(button => {

    button.addEventListener("click", function () {

        const bookName =
            this.dataset.book;


        let currentCart =
            JSON.parse(localStorage.getItem("cart")) || [];


        currentCart =
            currentCart.filter(
                book => book.bookName !== bookName
            );


        localStorage.setItem(
            "cart",
            JSON.stringify(currentCart)
        );


        location.reload();

    });

});