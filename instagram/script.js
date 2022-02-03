const images = document.querySelectorAll(".image");

let = lastImageIndex = 0;

function fadeInImage() {
  images[lastImageIndex].classList.remove("visible");
  if (lastImageIndex === images.length - 1) {
    lastImageIndex = 0;
  } else {
    lastImageIndex++;
  }

  images[lastImageIndex].classList.add("visible");
}

setInterval(fadeInImage, 2500);
