const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const firstEl = document.createElement('li');
firstEl.classList.add("item")
firstEl.textContent = (ingredients[0]);
console.log(firstEl)

const secondEl = document.createElement('li');
secondEl.classList.add("item")
secondEl.textContent = (ingredients[1]);
console.log(secondEl)

const thirdEl = document.createElement('li');
thirdEl.classList.add("item")
thirdEl.textContent = (ingredients[2]);
console.log(thirdEl)

const fourthEl = document.createElement('li');
fourthEl.classList.add("item")
fourthEl.textContent = (ingredients[3]);
console.log(fourthEl)

const fifthEl = document.createElement('li');
fifthEl.classList.add("item")
fifthEl.textContent = (ingredients[4]);
console.log(fifthEl)

const sixEl = document.createElement('li');
sixEl.classList.add("item")
sixEl.textContent = (ingredients[5]);
console.log(sixEl)

const sevenEl = document.createElement('li');
sevenEl.classList.add("item")
sevenEl.textContent = (ingredients[6]);
console.log(sevenEl)

const ingredientsUl = document.querySelector("#ingredients");
ingredientsUl.append(firstEl,secondEl,thirdEl,fourthEl,fifthEl,sixEl,sevenEl);cons