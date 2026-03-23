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

    let name = prompt("Enter your name:");
    let location = prompt("Enter delivery location:");
    let phoneNumber = prompt("Enter your phone number:");

    let message = `Hello, I want to order:\n\n`;
    message += `Name: ${name}\n`;
    message += `Location: ${location}\n`;
    message += `Phone: ${phoneNumber}\n\n`;

    cart.forEach(item => {
        message += `${item.product} - $${item.price.toFixed(2)}\n`;
    });

    message += `\nTotal: $${total.toFixed(2)}`;

    // SAVE ORDER (NEW)
    saveOrder(name, location, phoneNumber);

    const phone = "233257293354";
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
function saveOrder(name, location, phoneNumber) {

    let orders = JSON.parse(localStorage.getItem("orders")) || [];

    const newOrder = {
        id: Date.now(),
        name,
        location,
        phoneNumber,
        items: cart,
        total: total,
        status: "Pending",
        date: new Date().toLocaleString()
    };

    orders.push(newOrder);

    localStorage.setItem("orders", JSON.stringify(orders));
}
window.addEventListener("scroll", () => {
    const header = document.querySelector("header");

    if (window.scrollY > 10) {
        header.style.boxShadow = "0 2px 10px rgba(0,0,0,0.1)";
    } else {
        header.style.boxShadow = "none";
    }
});
const slides = document.getElementById("slides");
const images = slides.querySelectorAll("img");
const dotsContainer = document.getElementById("dots");

let index = 0;

/* CREATE DOTS */
images.forEach((_, i) => {
    const dot = document.createElement("span");
    dot.addEventListener("click", () => showSlide(i));
    dotsContainer.appendChild(dot);
});

const dots = dotsContainer.querySelectorAll("span");

/* SHOW SLIDE */
function showSlide(i) {
    index = i;
    slides.style.transform = `translateX(-${i * 100}%)`;

    dots.forEach(dot => dot.classList.remove("active"));
    dots[i].classList.add("active");
}

/* AUTO SLIDE */
function autoSlide() {
    index++;
    if (index >= images.length) index = 0;
    showSlide(index);
}

let interval = setInterval(autoSlide, 3000);

/* PAUSE ON HOVER */
slides.addEventListener("mouseover", () => clearInterval(interval));
slides.addEventListener("mouseout", () => {
    interval = setInterval(autoSlide, 3000);
});

/* INIT */
showSlide(0);
let startX = 0;
let endX = 0;

slides.addEventListener("touchstart", e => {
    startX = e.touches[0].clientX;
});

slides.addEventListener("touchend", e => {
    endX = e.changedTouches[0].clientX;
    handleSwipe();
});

function handleSwipe() {
    if (startX - endX > 50) {
        // swipe left
        index++;
        if (index >= images.length) index = 0;
    } else if (endX - startX > 50) {
        // swipe right
        index--;
        if (index < 0) index = images.length - 1;
    }

    showSlide(index);
}
