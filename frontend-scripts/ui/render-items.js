function renderItems() {
  const categories = [
    "InstantNoodles",
    "Beverages",
    "Chips",
    "Candy",
    "Biscuits",
  ];
  categories.forEach((category) => {
    const container = document.querySelector(`#${category} .item-container`);
    container.innerHTML = ""; // Clear existing items
    items
      .filter((item) => item.category === category)
      .forEach((item) => {
        container.innerHTML += `
        <div class="item-card">
          <div class="item-card-top">
            <img src="${item.image}" />
            <button class="add-to-cart-btn" data-name="${item.name}">
              <img src="images/icons/add.svg" alt="" />
            </button>
          </div>
          <div class="item-card-bottom">
            <p class="item-price">RM ${item.price.toFixed(2)}</p>
            <p class="item-name">${item.name}</p>
            <p class="item-info">${item.info}</p>
          </div>
        </div>
      `;
      });
  });
}
document.addEventListener("DOMContentLoaded", renderItems);
