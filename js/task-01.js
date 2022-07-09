

const categoryEL = document.querySelector("#categories");
console.log ("Number of categories: " + categoryEL.children.length);
console.log()


const firstCatName = document.querySelector('h2');
console.log("Category: " + firstCatName.textContent);

const firstCatList = document.querySelector(".item");
const firstCatEl = firstCatList.querySelectorAll("ul li");
console.log("Elements: " + firstCatEl.length);
console.log()

const secondCatList = document.querySelectorAll(".item")
const secondCatName = secondCatList[1].childNodes[1]
console.log(`Category: ${secondCatName.textContent}`)

const secondCatLi = secondCatList[1];
const secondCatEl = secondCatLi.querySelectorAll("ul li")
console.log(`Elements: ${secondCatEl.length}`)
console.log()

const thirdCatList = categories.lastElementChild;
const thirdCatName = thirdCatList.childNodes[1].textContent;
console.log(`Category: ${thirdCatName}`)
const thirdCatEl = thirdCatList.querySelectorAll("ul li")
console.log(`Elements: ${thirdCatEl.length}`)
 