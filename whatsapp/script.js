const hamburgerButton = document.querySelector(".hamburger-button");
const nav = document.querySelector(".nav");
const crossBtn = document.querySelector(".cross-btn");

hamburgerButton.addEventListener("click", () => {
  nav.classList.remove("visible");
});

crossBtn.addEventListener("click", () => {
  nav.classList.add("visible");
});



