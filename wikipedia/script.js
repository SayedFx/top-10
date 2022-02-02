const langButton = document.querySelector(".lang-list-button");

langButton.addEventListener("click", () => {
  document.querySelector(".lang-list-border").classList.toggle("active");
  document.querySelector(".lang-list-container").classList.toggle("active");
  document.querySelector(".lang-list-button").classList.toggle("active");
  document.querySelector(".svg-arrow-down-blue").classList.toggle("active");
});
