const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const containerEl = document.querySelector("ul#ingredients");

const makeIngredientEl = ingredients.map(ingredient => {
  const ingredientEl = document.createElement("li");
  ingredientEl.textContent = ingredient;
  ingredientEl.classList.add("item");

  return ingredientEl;
});

containerEl.append(...makeIngredientEl);

console.log(containerEl);