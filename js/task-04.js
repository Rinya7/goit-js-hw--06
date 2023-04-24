let value = 0;
let counterValue = document.querySelector("#value");
const decButton = document.querySelector('[data-action="decrement"]');
const incButton = document.querySelector('[data-action="increment"]');

counterValue.textContent = `0`;

decButton.addEventListener("click", () => {
  value -= 1;
  counterValue.textContent = value;
});

incButton.addEventListener("click", () => {
  value += 1;
  counterValue.textContent = value;
});
