const bubble = document.querySelector(
  "section.three .circle .item .replacement"
);
const os = bubble.innerHTML.split("");

os.forEach((o, index) => {
  const delay = 200 * (index + 1);
  setTimeout(() => {
    os[index] = "X";
    bubble.innerText = os.join("");
  }, delay);
});

const strings = ["øx3©ππ", "3x3©ππ", "ß©‡πø%", "HøøπIß"];
