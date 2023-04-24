const refsInput = document.querySelector(`#validation-input`);
const lengthInput = refsInput.getAttribute("data-length");

refsInput.addEventListener("blur", readerInputChangeBlur);

function readerInputChangeBlur(event) {
  event.currentTarget.value.length == lengthInput
    ? refsInput.classList.remove("invalid") & refsInput.classList.add("valid")
    : refsInput.classList.remove("valid") & refsInput.classList.add("invalid");
}

//const placeholderInput = refsInput.getAttribute("placeholder");

//  if (event.currentTarget.value.length < lengthInput) {
//    console.log(placeholderInput);
//    refsInput.classList.remove("valid");
//    refsInput.classList.add("invalid");
//  } else {
//    refsInput.classList.remove("invalid");
//    refsInput.classList.add("valid");
//  }
