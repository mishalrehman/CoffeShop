
let total = 0;

function addToCart(name, price) {

    let cartItems = document.getElementById("cartItems");

    let item = document.createElement("li");

    item.textContent = name + " - Rs. " + price;

    cartItems.appendChild(item);

    total = total + price;

    document.getElementById("total").textContent = total;
}
