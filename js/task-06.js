const refsInput = document.querySelector(`#validation-input`);
const placeholderInput = refsInput.getAttribute("placeholder");
const lengthInput = refsInput.getAttribute("data-length");

refsInput.addEventListener("blur", readerInputChangeBlur);

function readerInputChangeBlur(event) {
  if (event.currentTarget.value.length < lengthInput) {
    console.log(placeholderInput);
    refsInput.classList.remove("valid");
    refsInput.classList.add("invalid");
  } else {
    refsInput.classList.remove("invalid");
    refsInput.classList.add("valid");
  }
}

document.createElement;
