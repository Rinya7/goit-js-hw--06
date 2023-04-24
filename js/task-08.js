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
    console.log(`emeil: ${email.value}, password: ${password.value}`);
    form.reset();
  }
}

//  const { email, password } = event.currentTarget;
//  const elements = { email, password };
//  console.log(elements);
