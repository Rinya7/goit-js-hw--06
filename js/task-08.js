const form = document.querySelector(".login-form");

form.addEventListener("submit", callback);

function callback(event) {
  event.preventDefault();

  const {
    elements: { email, password },
  } = event.currentTarget;

  if (email.value === "" || password.value === "") {
    alert("Необхідно заповнити всі поля");
  } else {
    const dataObject = {
      email: email.value,
      password: password.value,
    };
    console.log(dataObject);
    form.reset();
  }
}

//  const { email, password } = event.currentTarget;
//  const elements = { email, password };
//  console.log(elements);
