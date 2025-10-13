const cartContainer = document.getElementById("cart-container");
const productsContainer = document.getElementById("products-container");
const dessertCards = document.getElementById("dessert-card-container");
const cartBtn = document.getElementById("cart-btn");
const clearCartBtn = document.getElementById("clear-cart-btn");
const totalNumberOfItems = document.getElementById("total-items");
const cartSubTotal = document.getElementById("subtotal");
const cartTaxes = document.getElementById("taxes");
const cartTotal = document.getElementById("total");
const showHideCartSpan = document.getElementById("show-hide-cart");



let isCartShowing = false;



cartBtn.addEventListener("click", () => {
  isCartShowing = !isCartShowing;
  showHideCartSpan.textContent = isCartShowing ? "Hide" : "Show";
  cartContainer.style.display = isCartShowing ? "block" : "none";
});


function calculate(){

let item090 = parseFloat(document.querySelector("#item_090").value) || 0;


let item01 = parseFloat(document.querySelector("#item_001").value) || 0;

let item02 = parseFloat(document.querySelector("#item_002").value) || 0;

let item03 = parseFloat(document.querySelector("#item_003").value) || 0;

let item04 = parseFloat(document.querySelector("#item_004").value) || 0;

let item05 = parseFloat(document.querySelector("#item_005").value) || 0;

let item06 = parseFloat(document.querySelector("#item_006").value) || 0;

let item07 = parseFloat(document.querySelector("#item_007").value) || 0;

let item08 = parseFloat(document.querySelector("#item_008").value) || 0;

let item09 = parseFloat(document.querySelector("#item_009").value) || 0;

let item10 = parseFloat(document.querySelector("#item_010").value) || 0;

let item11 = parseFloat(document.querySelector("#item_011").value) || 0;

let item12 = parseFloat(document.querySelector("#item_012").value) || 0;

let item13 = parseFloat(document.querySelector("#item_013").value) || 0;



let item15 = parseFloat(document.querySelector("#item_015").value) || 0;

let item16 = parseFloat(document.querySelector("#item_016").value) || 0;

let item17 = parseFloat(document.querySelector("#item_017").value) || 0;

let item18= parseFloat(document.querySelector("#item_018").value) || 0;

let item19 = parseFloat(document.querySelector("#item_019").value) || 0;

let item20 = parseFloat(document.querySelector("#item_020").value) || 0;

let item21 = parseFloat(document.querySelector("#item_021").value) || 0;

let item22 = parseFloat(document.querySelector("#item_022").value) || 0;

let item23 = parseFloat(document.querySelector("#item_023").value) || 0;



let item25 = parseFloat(document.querySelector("#item_025").value) || 0;

let item26 = parseFloat(document.querySelector("#item_026").value) || 0;

let item27 = parseFloat(document.querySelector("#item_027").value) || 0;

let item28 = parseFloat(document.querySelector("#item_028").value) || 0;














const total = item090 + item01 + item02 + item03 + item04 + item05 + item06 + item07 + item08 + item09 + item10 + item11 + item12+ item13 + item15 + item16 + item17 + item18 + item19 + item20 + item21 + item22 + item23  + item25 + item26 + item27 + item28


document.getElementById("total-amount").innerText = total;

}

calculate();