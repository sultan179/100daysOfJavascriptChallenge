const username=document.getElementById("username");

const Email = document.getElementById("Email");
const password = document.getElementById("password");
const confirm_password = document.getElementById("confirm-password");

const btn=document.querySelector(".send");

btn.addEventListener("click",(e)=>{
    e.preventDefault;
    console.log(username.value)
    InputCheck();
})

function InputCheck(){
    if (username.value==""){
        alert("Username is required")
        return

    }

    if(Email.value==""){
        alert("Email is required")
        return
    }

    else if (!EmailCheck()){
        alert("Email is invalid");
        return;
    }

    if (password.value=="" || confirm_password.value==""){
        alert("password fields cannot be empty");
        return;
    }

    else if (password.value!=confirm_password.value){
        alert("passwords dont match.....");
        return;
    }



}


function EmailCheck(){
    return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
      Email.value
    );

}