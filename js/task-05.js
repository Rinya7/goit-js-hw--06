const refs = {
  textTitle: document.querySelector(`#name-output`),
  textInput: document.querySelector(`#name-input`),
};

refs.textInput.addEventListener("input", (event) => {
  if (event.currentTarget.value.trim() !== "") {
    refs.textTitle.textContent = event.currentTarget.value;
  }
});
