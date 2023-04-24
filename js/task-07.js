const inputLine = document.querySelector("#font-size-control");
const outputText = document.querySelector("#text");

outputText.style.fontSize = `${inputLine.value}px`;

inputLine.addEventListener(
  "input",
  (event) => (outputText.style.fontSize = `${event.currentTarget.value}px`)
);
