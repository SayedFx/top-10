const hamburger = document.querySelector(".hamburger");
const aside = document.querySelector("aside.expanded");
const main = document.querySelector("main");
const tags = document.querySelector(".tags");
const tagBar = document.querySelector(".tag-bar");
const leftArrow = document.querySelector(".left-arrow");
const rightArrow = document.querySelector(".right-arrow");
const translateDistance = 100;
const translateDelay = 500;
const asideItemUncollapsables = document.querySelectorAll(
  ".aside-item.uncollapsable"
);
const hr = document.querySelector("hr");

let isLeftGapExpanded = true;
let leftGap = isLeftGapExpanded ? 240 : 72;
let translate = 0;
let clickX;

leftArrow.style.display = "none";

hamburger.addEventListener("click", () => {
  animateBurger();
  toggleSide();
});

function toggleSide() {
  if (isLeftGapExpanded) {
    document.body.style.setProperty("--left-gap", "72px");
    leftGap = 72;
    isLeftGapExpanded = false;
  } else {
    document.body.style.setProperty("--left-gap", "240px");
    leftGap = 240;
    isLeftGapExpanded = true;
  }

  aside.classList.toggle("not");

  asideItemUncollapsables.forEach((asideItemUncollapsable) => {
    asideItemUncollapsable.classList.toggle("hidden");
  });
}

function animateBurger() {
  hamburger.classList.add("clicked");
  setTimeout(() => hamburger.classList.remove("clicked"), 500);
}

rightArrow.addEventListener("click", moveTagsLeft);

leftArrow.addEventListener("click", moveTagsRight);

tags.addEventListener("mousedown", (e) => {
  clickX = e.clientX;
});

tags.addEventListener("mouseup", (e) => {
  if (clickX - e.clientX > 10) {
    moveTagsLeft();
  } else if (clickX - e.clientX < -10) {
    moveTagsRight();
  }
});

function setArrowVisibility() {
  setLeftArrowVisibility();
  setRightArrowVisibility();
}

function setLeftArrowVisibility() {
  if (hasTagsMovedLeft()) {
    leftArrow.style.display = "flex";
  } else {
    leftArrow.style.display = "none";
  }
}

function hasTagsMovedLeft() {
  return translate < 0;
}

function setRightArrowVisibility() {
  if (hasTagsMovedRight()) {
    rightArrow.style.display = "none";
  } else {
    rightArrow.style.display = "flex";
  }
}

function hasTagsMovedRight() {
  return tags.getBoundingClientRect().left < -1 * leftGap;
}

function canMoveLeft() {
  return tags.getBoundingClientRect().left > -1 * leftGap;
}

function canMoveRight() {
  return translate < 0;
}

function moveTagsRight() {
  if (canMoveRight()) {
    translate = translate + translateDistance;
    tags.style.transform = `translateX(${translate}px)`;
    setTimeout(() => setArrowVisibility(), translateDelay);
  }
}
function moveTagsLeft() {
  if (canMoveLeft()) {
    translate = translate - translateDistance;
    tags.style.transform = `translateX(${translate}px)`;
    setTimeout(() => setArrowVisibility(), translateDelay);
  }
}
