const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const ingredientsAll = document.querySelector("#ingredients")




const ingredientsArr = ingredients.map((el)=>{
  const ingr = document.createElement("li");
  ingr.classList.add("item")
  ingr.textContent = el;
  return ingr
})
console.log(ingredientsArr)
ingredientsAll.append(...ingredientsArr)