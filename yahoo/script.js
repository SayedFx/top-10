const popupContainers = document.querySelectorAll(".popup-container");
const popups = document.querySelectorAll(".popup");

let mouseOnPopups = false;

popups.forEach((popup) => {
  popup.addEventListener("mouseenter", makeNotificationsVisible);
  popup.addEventListener("mouseleave", makeNotificationsInvisible);
});

popupContainers.forEach((popupContainer) => {
  popupContainer.addEventListener("mouseenter", makeNotificationsVisible);
  popupContainer.addEventListener("mouseleave", makeNotificationsInvisible);
});

function makeNotificationsVisible(e) {
  if (e.currentTarget.classList.contains("popup-container")) {
    e.currentTarget.querySelector(".popup").classList.add("visible");
  } else if (e.currentTarget.classList.contains("popup")) {
    e.currentTarget.classList.add("visible");
  }
  mouseOnBell = true;
}

function makeNotificationsInvisible() {
  mouseOnBell = false;
  setTimeout(() => {
    if (!mouseOnBell) {
      popups.forEach((popup) => popup.classList.remove("visible"));
    }
  }, 500);
}

let windowScrollPosition = 0;

window.addEventListener("scroll", () => {
  if (window.scrollY > windowScrollPosition) {
    document.querySelector("nav .lower").classList.add("roll-up");
    document.querySelector("nav").classList.add("roll-up");
    windowScrollPosition = window.scrollY;
  } else if (window.scrollY < windowScrollPosition) {
    document.querySelector("nav .lower").classList.remove("roll-up");
    document.querySelector("nav").classList.remove("roll-up");
    windowScrollPosition = window.scrollY;
  }
});
