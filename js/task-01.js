console.log(
  `Number of categories: ${document.querySelectorAll(".item").length}`
);
const maimMass = document.querySelectorAll(".item").forEach((el) => {
  console.log(`Category: ${el.firstElementChild.textContent}`);
  console.log(`Elements: ${el.lastElementChild.querySelectorAll("li").length}`);
});
