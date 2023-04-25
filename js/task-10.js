function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const inputNumberOfElements = document.querySelector("input");
const insrtsBoxesDivCreated = document.querySelector("#boxes");
const onButtonCreated = document.querySelector("button[data-create]");
const onButtonDestroy = document.querySelector("button[data-destroy]");
const maxRange = inputNumberOfElements.max;
const minRange = inputNumberOfElements.min;
let number = 0;

inputNumberOfElements.addEventListener("input", outInputNumber);
//======считываем введеное число====== и передаем значение в функцию создания дивов

function outInputNumber(event) {
  number = event.target.value;
}

//По клику запускаем создание дивов с значением получеого в импуте числа
onButtonCreated.addEventListener("click", readNumber);
function readNumber() {
  createBoxes(number);
}

let massDiv = 0;

function createBoxes(a) {
  console.log(a);
  let size = 0;
  for (let i = 0; i < a; i++) {
    size = 30 + i * 10;
    massDiv = document.createElement("div");
    massDiv.style.height = `${size}px`;
    massDiv.style.width = `${size}px`;
    massDiv.style.backgroundColor = getRandomHexColor();
    insrtsBoxesDivCreated.append(massDiv);
  }
}

onButtonDestroy.addEventListener("click", destroyBoxes);
function destroyBoxes(a) {
  insrtsBoxesDivCreated.innerHTML = "";
  inputNumberOfElements.value = "";
}

//=====================END================
//Активируем считывание числа и создание дивов после нажатия кнопки================
