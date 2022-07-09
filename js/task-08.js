const form = document.querySelector(".login-form");
const email = form.elements.email;
const password = form.elements.password;
form.addEventListener("submit",(event)=>{
    event.preventDefault();
    if(email.value === "" || password.value === ""){
        alert("Все поля должны быть заполнены")
    }

    const formData = new FormData(form);

    formData.forEach((value,name) => {
        console.log (name);
        console.log(value);
    })
    // const userEmail = email.value;
    // const userPassword = password.value
    // const formData = {userEmail,userPassword};
    // console.log(formData)

    form.reset()
});

