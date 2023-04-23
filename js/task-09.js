function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
const refs = {
  btnChangeColot: document.querySelector(".change-color"),
  bodyColor: document.body,
  nameOfBodyColor: document.querySelector(".color"),
};

refs.btnChangeColot.addEventListener("click", changecolor);

function changecolor(event) {
  refs.bodyColor.style.backgroundColor = getRandomHexColor();
  refs.nameOfBodyColor.textContent = getRandomHexColor();
}
