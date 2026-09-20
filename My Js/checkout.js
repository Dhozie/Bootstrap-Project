
const cart = JSON.parse(
    localStorage.getItem("cart")
) || [];

console.log("Checkout Cart:", cart);

// Display Items

const checkoutItems = document.getElementById("checkoutItems");

if (checkoutItems) {

    cart.forEach(function (item) {

        const price = Number(
            String(item.price).replace(/[₦,]/g, "")
        );

        const total = price * item.quantity;

checkoutItems.innerHTML += `
    <div class="checkout-item">

        <img src="${item.cover}" alt="${item.title}">

        <div class="checkout-item-info">
            <h4>${item.title}</h4>

            <p class="checkout-item-quantity">
                Quantity: ${item.quantity}
            </p>

          <strong class="checkout-item-price">
    ₦${total.toLocaleString()}
</strong>
        </div>

    </div>
`;
    });

}

// Calculate Total

let checkoutSubtotal = 0;

cart.forEach(function (item) {

    const price = Number(
        String(item.price).replace(/[₦,]/g, "")
    );

    const quantity = Number(item.quantity) || 1;

    checkoutSubtotal += price * quantity;

});

const subtotalElement =
    document.getElementById("checkoutSubtotal");

if (subtotalElement) {

    subtotalElement.textContent =
        `₦${checkoutSubtotal.toLocaleString()}`;
}

const deliveryElement =
    document.getElementById("checkoutDelivery");

const totalElement =
    document.getElementById("checkoutTotal");

const deliveryFee = Number(
    deliveryElement.textContent.replace(/[₦,]/g, "")
);

const checkoutTotal = checkoutSubtotal + deliveryFee;

if (totalElement) {

    totalElement.textContent =
        `₦${checkoutTotal.toLocaleString()}`;
}

// Form 

const checkoutForm =
    document.getElementById("checkoutForm");

if (checkoutForm) {

    checkoutForm.addEventListener("submit", function (event) {

        event.preventDefault();

        const name =
            document.getElementById("customerName").value.trim();

        const email =
            document.getElementById("customerEmail").value.trim();

        const phone =
            document.getElementById("customerPhone").value.trim();

        const address =
            document.getElementById("deliveryAddress").value.trim();

        if (!name || !email || !phone || !address) {

            alert("Please fill in all your details.");

            return;
        }

      // Get selected payment method
const payment =
    document.querySelector('input[name="payment"]:checked').value;

// Create order
const order = {
    name: name,
    email: email,
    phone: phone,
    address: address,
    payment: payment,
    items: cart,
    total: checkoutTotal,
    orderNumber: "#NN" + Date.now()
};

// Save order
localStorage.setItem(
    "lastOrder",
    JSON.stringify(order)
        );
        
        localStorage.removeItem("cart");

document.getElementById("orderNumber").textContent =
    order.orderNumber;

document.getElementById("orderSuccess").style.display =
    "flex";
    });

}