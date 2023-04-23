let counterValue = document.querySelector("#value");

counterValue.textContent = `0`;
console.log(counterValue);

let value = 0;

const decButton = document.querySelector('[data-action="decrement"]');
decButton.addEventListener("click", () => {
  value -= 1;
  counterValue.textContent = value;
});

const incButton = document.querySelector('[data-action="increment"]');
incButton.addEventListener("click", () => {
  value += 1;
  counterValue.textContent = value;
});
