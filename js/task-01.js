

const categoryEL = document.querySelector("#categories");
console.log ("Number of categories: " + categoryEL.children.length);
console.log()

const allEl = document.querySelectorAll(".item")

allEl.forEach(function (el, index) {
    console.log(`Category : ${el.firstElementChild.textContent}`);
    console.log(`Elements : ${el.lastElementChild.children.length}`);
    console.log()
})
