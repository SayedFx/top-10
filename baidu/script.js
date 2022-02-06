const searchInput = document.querySelector(".search-form .search-input");
const times = document.querySelector(".search-form .times");

searchInput.addEventListener("input", (e) => {
  if (e.target.value.length > 0) {
    if (!times.classList.contains("visible")) {
      times.classList.add("visible");
    }
  } else {
    times.classList.remove("visible");
  }
});

const popupContainers = document.querySelectorAll(".popup-container");

popupContainers.forEach((popupContainer) => {
  popupContainer.addEventListener("mouseenter", (e) => {
    e.target.querySelector(".popup").classList.add("visible");
  });

  popupContainer.addEventListener("mouseleave", (e) => {
    e.target.querySelector(".popup").classList.remove("visible");
  });
});
