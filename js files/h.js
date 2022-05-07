import {navbar,footer}  from "/navbar.js"

var  container = document.getElementById("nav_container")

container.innerHTML=navbar()

var foot = document.getElementById("footer_div")
foot.innerHTML = footer()

var login = document.getElementById("login")
login.addEventListener("click", loginfn)

function loginfn() {
    window.location.href="login.html"
    
}
                // login end


                var addcartbtn = document.getElementsByClassName('addtocart')
                let items = JSON.parse(localStorage.getItem("cartitems")) || []
                for (var i = 0; i < addcartbtn.length; i++){
                    
                    addcartbtn[i].addEventListener("click", function (e) {
                      //  console.log(e.target.parentElement.children[8].innerText)
                        let item = {
                            image: e.target.parentElement.children[0].src,
                            name: e.target.parentElement.children[3].innerText,
                            price:e.target.parentElement.children[10].children[0].innerText
                        }
                
                        items.push(item)
                        console.log(items)
                        localStorage.setItem("cartitems", JSON.stringify(items))
                    })
                }
                
var carticon = document.getElementById("cartpage")
carticon.addEventListener("click", cartfn)

function cartfn() {
    window.location.href="cart.html"
}