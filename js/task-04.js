

let counterValue = document.querySelector("#value");
let count = Number(counterValue.textContent )
const parentCounter = document.querySelector("#counter")
const decreaseCount = document.querySelector("button") 
const increaseCount = parentCounter.lastElementChild;
decreaseCount.addEventListener('click', () =>{
    count -=1
   return  counterValue.textContent = count;
})
increaseCount.addEventListener('click', ()=>{
    count +=1
    return counterValue.textContent = count;
})

console.log(typeof(count))