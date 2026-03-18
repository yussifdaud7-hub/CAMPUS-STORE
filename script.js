// ============================
// VARIABLES
// ============================
let cart = [];
let total = 0;

const cartBtn = document.getElementById("cart-btn");
const cartModal = document.getElementById("cart-modal");
const cartItems = document.getElementById("cart-items");
const cartCount = document.getElementById("cart-count");
const cartTotal = document.getElementById("cart-total");
const checkoutBtn = document.getElementById("checkout-btn");

// ============================
// ADD TO CART
// ============================
document.querySelectorAll(".add-to-cart").forEach(button => {
    button.addEventListener("click", () => {
        const product = button.dataset.product;
        const price = parseFloat(button.dataset.price);

        if (!product || isNaN(price)) return;

        cart.push({ product, price });
        total += price;

        updateCart();
    });
});

// ============================
// TOGGLE CART MODAL
// ============================
cartBtn.addEventListener("click", () => {
    cartModal.classList.toggle("show");
});

// ============================
// UPDATE CART FUNCTION
// ============================
function updateCart() {
    cartItems.innerHTML = "";

    cart.forEach((item, index) => {
        const li = document.createElement("li");

        li.innerHTML = `
            ${item.product} - $${item.price.toFixed(2)}
            <button onclick="removeItem(${index})" class="remove-btn">X</button>
        `;

        cartItems.appendChild(li);
    });

    cartCount.textContent = cart.length;
    cartTotal.textContent = total.toFixed(2);
}

// ============================
// REMOVE ITEM FUNCTION
// ============================
function removeItem(index) {
    total -= cart[index].price;
    cart.splice(index, 1);
    updateCart();
}

// ============================
// WHATSAPP CHECKOUT
// ============================
checkoutBtn.addEventListener("click", () => {
    if (cart.length === 0) {
        alert("Your cart is empty!");
        return;
    }

    let message = "Hello, I want to order:\n\nPlease deliver to: __________\n\n";

    cart.forEach(item => {
        message += `${item.product} - $${item.price.toFixed(2)}\n`;
    });

    message += `\nTotal: $${total.toFixed(2)}`;

    const phone = "233257293354"; // Replace with your WhatsApp number (Ghana format)

    const url = `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;
    window.open(url, "_blank");
});
function filterCategory(category) {
    const products = document.querySelectorAll(".product");

    products.forEach(product => {
        if (category === "all" || product.dataset.category === category) {
            product.style.display = "block";
        } else {
            product.style.display = "none";
        }
    });
}
document.getElementById("search").addEventListener("keyup", function () {
    const value = this.value.toLowerCase();
    const products = document.querySelectorAll(".product");

    products.forEach(product => {
        const name = product.querySelector("h2").textContent.toLowerCase();

        if (name.includes(value)) {
            product.style.display = "block";
        } else {
            product.style.display = "none";
        }
    });
});