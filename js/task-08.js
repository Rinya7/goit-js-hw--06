const form = document.querySelector(".login-form");

form.addEventListener("submit", callback);

function callback(event) {
  event.preventDefault();

  const { email, password } = event.currentTarget;
  const elements = { email, password };

  //  const {elements: { email, password }} = event.currentTarget;

  if (email.value === "" || password.value === "") {
    alert("Необхідно заповнити всі поля");
  }

  console.log(`email: ${email.value}, Paswords: ${password.value}`);
  form.reset();
}
