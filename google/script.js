const searchHistory = document.querySelector(".search-history");
const searchBox = document.querySelector(".search-box input");

searchBox.addEventListener("click", () => {
  searchHistory.style.display = "block";
});

document.body.addEventListener("click", (e) => {
  if (e.target !== searchBox) searchHistory.style.display = "none";
});
