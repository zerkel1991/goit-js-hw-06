const form = document.querySelector(".login-form");
const email = form.elements.email;
const password = form.elements.password;
form.addEventListener("submit",(event)=>{
    event.preventDefault();
    if(email.value === "" || password.value === ""){
        
        return alert("Все поля должны быть заполнены")
        
    }
    
    const UserData = {
        email : email.value,
        password : password.value,
}
    console.log(UserData)


    form.reset()
    

})