let cart = [];

function addToCart(itemName) {
  const item = items.find((i) => i.name === itemName);
  const cartItem = cart.find((i) => i.name === itemName);
  if (cartItem) {
    cartItem.quantity += 1;
  } else {
    cart.push({ ...item, quantity: 1 });
  }
  renderSidebar();
}

function renderSidebar() {
  const sidebarMiddle = document.querySelector(".sidebar-middle");
  sidebarMiddle.innerHTML = "";
  cart.forEach((item) => {
    const icon =
      item.quantity > 1 ? "images/icons/minus.svg" : "images/icons/trash.svg";
    sidebarMiddle.innerHTML += `
      <div class="item-order-container">
        <img src="${item.image}" class="sidebar-item-image" />
        <p class="sidebar-item-name">${item.name}</p>
        <p class="sidebar-item-price">RM ${item.price.toFixed(2)}</p>
        <div class="sidebar-item-quantity">
          <button class="quantity-btn-minus" data-name="${
            item.name
          }"><img src="${icon}" /></button>
          <p class="quantity-number">${item.quantity}</p>
          <button class="quantity-btn-plus" data-name="${
            item.name
          }"><img src="public/images/icons/add.svg" /></button>
        </div>
      </div>
    `;
  });

  // Update total
  const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);
  document.querySelector(".total-price").textContent = `RM ${total.toFixed(2)}`;

  const totalQuantity = cart.reduce((sum, item) => sum + item.quantity, 0);
  document.querySelector(".cart-count").textContent = totalQuantity;

  // Toggle cart-button active state
  const cartBtn = document.querySelector(".cart-button");
  if (totalQuantity > 0) {
    cartBtn.classList.add("active");
  } else {
    cartBtn.classList.remove("active");
  }
}

// Event delegation for add-to-cart buttons
document.addEventListener("click", function (e) {
  // Use closest() to find the button, regardless of whether the img was clicked
  const plusButton = e.target.closest(".quantity-btn-plus");
  const minusButton = e.target.closest(".quantity-btn-minus");

  if (e.target.closest(".add-to-cart-btn")) {
    const name = e.target.closest(".add-to-cart-btn").dataset.name;
    addToCart(name);
  }
  // Handle quantity changes
  if (minusButton) {
    const name = minusButton.dataset.name;
    const cartItem = cart.find((i) => i.name === name);
    // If quantity is 1, remove item from cart
    if (cartItem && cartItem.quantity > 1) {
      cartItem.quantity -= 1;
    } else {
      cart = cart.filter((i) => i.name !== name);
    }
    renderSidebar();
  }

  if (plusButton) {
    const name = plusButton.dataset.name;
    const cartItem = cart.find((i) => i.name === name);
    if (cartItem) cartItem.quantity += 1;
    renderSidebar();
  }
});
