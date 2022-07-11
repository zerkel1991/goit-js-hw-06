function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
const bodyEl =  document.querySelector("body");
const changeColorButton = document.querySelector(".change-color");
const span  = document.querySelector(".color");

changeColorButton.addEventListener('click',()=>{
  const currentColor = getRandomHexColor();
    bodyEl.style.backgroundColor = currentColor;
    span.textContent = currentColor;
})



