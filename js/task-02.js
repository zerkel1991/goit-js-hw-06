const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const ingredientsAll = document.querySelector("#ingredients")


ingredients.map((el)=>{
  const ingr = document.createElement("li");
  ingr.classList.add("item")
  ingr.textContent = el;
  ingredientsAll.append(ingr)
})