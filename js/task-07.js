const switcher = document.querySelector("#font-size-control");
const span = document.querySelector("#text");
console.log(span)
switcher.addEventListener('input',()=>{
    span.style.fontSize = `${switcher.value}px`;
})

