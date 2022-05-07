
import { navbar, footer } from "/navbar.js"

var nav = document.getElementById("navbar_cont")
nav.innerHTML = navbar()


var footer_div = document.getElementById("foot")

footer_div.innerHTML= footer()






var sign = document.getElementById("submit")
sign.addEventListener("click", signup)

async function signup(e) {
    e.preventDefault()
    
    let signup_data={
    
         name: document.getElementById("user_name").value,
         username: document.getElementById("username").value,
         password: document.getElementById("password").value,
         mobile: document.getElementById("mobile").value,
         email: document.getElementById("email").value,
         description: document.getElementById("description").value
    }
    
    signup_data = JSON.stringify(signup_data)
    
    console.log(signup_data)
    
    let signup_api =`https://masai-api-mocker.herokuapp.com/auth/register`
    
    let response = await fetch (signup_api,{
    
        method: "POST",
        body: signup_data,
        headers:{
           "Content-Type": "application/json"
    },
    })
    
    let data = await response.json()
    console.log(data)
   
    if (data.error === false) {
        alert("Signup Successful")
    }
    
}
    
var login_btn = document.getElementById("login_page_loginbtn")

login_btn.addEventListener("click", loginfn)

async function loginfn(e) {
    e.preventDefault()
    let login_data ={
        username: document.getElementById("login_username").value,
        password: document.getElementById("login_password").value
    }


    login_data = JSON.stringify(login_data)
    console.log(login_data)


    let login_api = `https://masai-api-mocker.herokuapp.com/auth/login`
    try {
    

        let response = await fetch(login_api, {
       
            method: "POST",
            body: login_data,
            headers: {
                "Content-Type": "application/json"
            }

        })

        let data = await response.json()

        if (data.error === false) {
            alert("Login Successful")
            window.location.href = "index.html"
        }
    } catch (err) {
        alert(err)
    }

//    console.log(data)
}








