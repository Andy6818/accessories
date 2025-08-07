const cartContainer = document.getElementById("cart-container")

const cartBtn = document.getElementById("cart-btn");
let isCartShowing = false
const showHideCartSpan = document.getElementById("show-hide-cart");


cartBtn.addEventListener("click",() => {
    isCartShowing = !isCartShowing;
    showHideCartSpan.textContent = isCartShowing ? "Hide" : "Show";
    cartContainer.style.display = isCartShowing ? "block" : "none";
}















)