/*!
* Start Bootstrap - Business Casual v7.0.9 (https://startbootstrap.com/theme/business-casual)
* Copyright 2013-2023 Start Bootstrap
* Licensed under MIT (https://github.com/StartBootstrap/startbootstrap-business-casual/blob/master/LICENSE)
*/
// Highlights current date on contact page
window.addEventListener('DOMContentLoaded', event => {
    const listHoursArray = document.body.querySelectorAll('.list-hours li');
    listHoursArray[new Date().getDay()].classList.add(('today'));
})


var cartItems = [];

function addToCart(productName, price) {
    cartItems.push({ name: productName, price: price });
    updateCart();
}

function updateCart() {
    var cartItemsList = document.getElementById("cart-items");
    cartItemsList.innerHTML = "";

    cartItems.forEach(function (item) {
        var listItem = document.createElement("li");
        listItem.textContent = item.name + "-" + item.price + " ₺";
        cartItemsList.appendChild(listItem);
    });

    document.getElementById("cart-container").style.right = "0px";
}

function toggleCart() {
    var cartContainer = document.getElementById("cart-container");
    var currentRightValue = parseInt(cartContainer.style.right, 10);

    if (currentRightValue === 0) {
        // Sepeti gizle
        cartContainer.style.right = "-300px";
    } else {
        // Sepeti göster
        cartContainer.style.right = "0px";
    }
}