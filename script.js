/* ======================
   COLOR SYSTEM
====================== */
:root {
    --primary: #dae8f0;
    --secondary: #dbe4e6;
    --dark: #0d1b2a;
    --light: #f4f6f9;
    --text: #111;
}

/* ======================
   GLOBAL
====================== */
body {
    font-family: 'Segoe UI', sans-serif;
    margin: 0;
    background: var(--light);
    color: var(--text);
}

/* ======================
   HEADER
====================== */
header {
    background: var(--dark);
    color: white;
    padding: 15px 20px;
    display: flex;
    justify-content: space-between;
    align-items: center;
}

.logo {
    font-size: 1.5em;
    font-weight: bold;
}

/* SEARCH */
#search {
    padding: 10px;
    border-radius: 8px;
    border: none;
    width: 220px;
}

/* ======================
   HERO
====================== */
.hero {
    background: linear-gradient(135deg, var(--primary), var(--secondary));
    color: rgb(20, 20, 194);
    text-align: center;
    padding: 0px 0px;
    font-size:x-large;
}

/* ======================
   CATEGORIES
====================== */
.categories {
    display: flex;
    justify-content: center;
    gap: 10px;
    padding: 15px;
}

.categories button {
    background: #67c1e2;
    border-radius: 20px;
    padding: 8px 15px;
}

.categories button:hover {
    background: var(--primary);
    color: rgba(9, 1, 24, 0.948);
}

/* ======================
   PRODUCTS
====================== */
.products {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(230px, 1fr));
    gap: 20px;
    padding: 50px;
}

.product {
    background: rgba(255, 255, 255, 0.889);
    border-radius: 10px;
    padding: 15px;
    box-shadow: 0 4px 15px rgba(0,0,0,0.08);
    transition: 0.3s;
}

.product:hover {
    transform: translateY(-5px);
}

/* IMAGE */
.product img {
    width: 70%;
    height: 160px;
    object-fit: cover;
    border-radius: 10px;
}

/* TEXT */
.product h2 {
    margin: 10px 0 5px;
    font-size: 1.1em;
    color: #111;
}

.product p {
    font-weight: bold;
    color:brown
}

/* BUTTON */
button {
    padding: 10px;
    border: none;
    border-radius: 8px;
    cursor: pointer;
}

.add-to-cart {
    background: var(--primary);
    color: rgb(37, 22, 198);
    width: 100%;
}

/* ======================
   MODAL
====================== */
.modal {
    display: none;
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    background: white;
    width: 320px;
    padding: 20px;
    border-radius: 15px;
}

.modal.show {
    display: block;
}

/* ======================
   MOBILE
====================== */
@media (max-width: 100px) {
    header {
        flex-direction: column;
        gap: 10px;
    }

    #search {
        width: 100%;
    }

    .products {
        grid-template-columns: 1fr;
    }
}
header {
    position: sticky;
    top: 0;
    z-index: 1000;
}
.bottom-nav {
    position: fixed;
    bottom: 0;
    width: 100%;
    background: white;
    display: flex;
    justify-content: space-around;
    border-top: 1px solid #ddd;
    padding: 5px 0;
}

.bottom-nav button {
    background: none;
    border: none;
    font-size: 14px;
}
body {
    padding-bottom: 60px;
}
/* SLIDER CONTAINER */
.slider {
    position: relative;
    overflow: hidden;
    width: 100%;
    margin: 15px 0;
    border-radius: 12px;
}

/* SLIDES */
.slides {
    display: flex;
    transition: transform 0.6s ease-in-out;
}

.slides img {
    width: 100%;
    height: 220px; /* control banner height */
    object-fit: contain; /* fills everything */
    flex-shrink: 0;
}

/* DOTS */
.dots {
    position: absolute;
    bottom: 10px;
    width: 100%;
    text-align: center;
}

.dots span {
    height: 8px;
    width: 8px;
    margin: 0 4px;
    display: inline-block;
    background: white;
    opacity: 0.5;
    border-radius: 50%;
    cursor: pointer;
}

.dots .active {
    opacity: 1;
}
.slide {
    position: relative;
    width: 100%;
    flex-shrink: 0;
}

.overlay {
    position: absolute;
    bottom: 20px;
    left: 20px;
    color: white;
}

.overlay h2 {
    margin: 0;
    font-size: 1.5em;
}

.overlay p {
    margin: 5px 0;
    font-size: 0.9em;
}
.overlay {
    background: rgba(0, 0, 0, 0.919);
    padding: 10px;
    border-radius: 8px;
}
