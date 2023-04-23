const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];

const listWithId = document.querySelector("#ingredients");

for (const ingredient of ingredients) {
  const item = document.createElement("li");
  item.textContent = `${ingredient}`;
  item.classList.add("item");
  listWithId.append(item);
}

console.log(listWithId);
