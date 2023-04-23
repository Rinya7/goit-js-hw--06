const refs = {
  textTitle: document.querySelector(`#name-output`),
  textInput: document.querySelector(`#name-input`),
};

refs.textInput.addEventListener(
  "input",
  (event) => (refs.textTitle.textContent = event.currentTarget.value)
);

//function inputTextFromKeyboard(event) {
//  refs.textTitle.textContent = event.currentTarget.value;
//}
