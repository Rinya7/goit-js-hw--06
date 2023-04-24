const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];

const listWithId = document.querySelector("#ingredients");

const mass = [];
ingredients.map((ingredient) => {
  const item = document.createElement("li");
  item.textContent = `${ingredient}`;
  item.classList.add("item");
  mass.push(item);
});

listWithId.append(...mass);
