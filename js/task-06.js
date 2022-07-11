const input = document.querySelector("#validation-input");
const dataLength = Number(input.getAttribute("data-length"));
input.addEventListener('blur',()=>{
    if(input.value.length === dataLength){
        input.classList.add("valid")
        if(input.classList.contains("invalid")){
            input.classList.remove("invalid")
        }
    }else{
        if(input.classList.contains("valid")){
            input.classList.remove("valid")
        }
        input.classList.add("invalid")
    }
})

console.log(input.value.length)
console.log(dataLength)
