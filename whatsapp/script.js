const hamburgerButton = document.querySelector(".hamburger-button");
const nav = document.querySelector(".nav");
const crossBtn = document.querySelector(".cross-btn");
const langBtn = document.querySelector(".lang-btn");
const langPicker = document.querySelector(".transparent-background");
const closeLangPicker = document.querySelector(".close-lang-picker");

langBtn.addEventListener("click", () => langPicker.classList.add("visible"));
closeLangPicker.addEventListener("click", () =>
  langPicker.classList.remove("visible")
);

setTimeout(() => (nav.style.display = "flex"), 1000);

hamburgerButton.addEventListener("click", () => {
  nav.classList.toggle("visible");
});

crossBtn.addEventListener("click", () => {
  nav.classList.toggle("visible");
});
