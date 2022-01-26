const searchHistory = document.querySelector(".search-history");
const searchBox = document.querySelector(".search-box input");
const luckyButton = document.querySelectorAll(".lucky")[1];
const luckyItemsContainer = document.querySelector(".lucky-items");
const luckyItems = document.querySelectorAll(".lucky-item");

let randomIndex = 0;
let isSearchBoxExpanded = false;
let isCursorOnLuckyButton = false;

function getRandomLuckyIndex() {
  return Math.ceil(Math.random() * (luckyItems.length - 1));
}

function shuffleLuckyItems() {
  luckyItemsContainer.style.top = `${getRandomLuckyIndex() * -37}px`;
}

searchBox.addEventListener("click", () => {
  searchHistory.style.display = "block";
  isSearchBoxExpanded = true;
});

document.body.addEventListener("click", (e) => {
  if (isSearchBoxExpanded && e.target !== searchBox) {
    isSearchBoxExpanded = false;
    searchHistory.style.display = "none";
  }
});

luckyButton.addEventListener("mouseleave", () => {
  isCursorOnLuckyButton = false;
  luckyItemsContainer.style.top = `${0 * -37}px`;
});

luckyButton.addEventListener("mouseenter", () => {
  isCursorOnLuckyButton = true;
  setTimeout(() => {
    if (isCursorOnLuckyButton) {
      shuffleLuckyItems();
      isCursorOnLuckyButton = false;
    }
  }, 500);
});
