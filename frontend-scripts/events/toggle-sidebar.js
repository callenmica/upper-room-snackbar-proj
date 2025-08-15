const sidebar = document.getElementById("sidebar");
const openBtn = document.getElementById("cart-button");
const closeBtn = document.querySelector(".sidebar-close-btn");

openBtn.addEventListener("click", () => {
  sidebar.classList.add("show");
});

closeBtn.addEventListener("click", () => {
  sidebar.classList.remove("show");
});
