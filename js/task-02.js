const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const ingredientsAll = document.querySelector("#ingredients")
ingredients.forEach(element => {
  const ingr = document.createElement("li");
  ingr.classList.add("item")
  ingr.textContent = element;
  ingredientsAll.append(ingr)
});
