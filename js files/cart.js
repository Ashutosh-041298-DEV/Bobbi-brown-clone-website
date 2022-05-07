import { navbar, footer } from "/navbar.js";

var nav_container = document.getElementById("nav_container");

nav_container.innerHTML = navbar();
console.log(nav_container);

var cart = JSON.parse(localStorage.getItem("cartitems")) || [];
console.log(cart);

window.addEventListener("load", (event) => {
  displayfn(cart);
});

function displayfn(cart) {
  let cartitem = JSON.parse(localStorage.getItem("cartitems")) || [];
  let show_item = document.getElementById("show_proucts_div");
  let item_image = document.getElementById("product_img");
  let item_name = document.getElementById("product_name");
  let item_price = document.getElementById("product_price");
  let sub_total = document.getElementById("sub_total_price");
  let estimated_value = document.getElementById("add_charge");

  //let saved_item_div = document.getElementById("saved_item_div")
  let remove_item = document.getElementById("remove_div");

  cartitem.forEach((element) => {
    let name = document.createElement("h1");
    name.textContent = element.name;

    let image = document.createElement("img");
    image.src = element.image;

    let price = document.createElement("h1");
    price.textContent = element.price;

    let br = document.createElement("br");

    let remove = document.createElement("button");
    remove.setAttribute("class", "remove-button");
    remove.innerText = "-";
    remove.addEventListener("click", function () {
      removeitem(element);
    });
    item_image.append(image);

    item_name.append(name);

    item_price.append(price);

    remove_item.append(remove);

    show_item.append(item_image, item_name, item_price, remove_item, br);
    // console.log(element);
  });

  function removeitem(element) {
    console.log(element);
    let cartarr = JSON.parse(localStorage.getItem("cartitems"));
    let index;
    for (let i = 0; i < cartarr.length; i++) {
      if (element == cartarr[i]) {
        index = i;
        break;
      }
    }

    cartarr.splice("index", 1);

    localStorage.setItem("cartitems", JSON.stringify(cartarr));
    // refreshcount(cart);
    setTimeout("location.reload(true);", 0);
  }
  let totalamount = cartitem.reduce(function (acc, cv) {
    return acc + Number(cv.price);
  }, 0);
  let estimated_total = "$" + Number(50 + totalamount);
  console.log(estimated_total);
  sub_total.append(totalamount + "" + ".00");
  estimated_value.append(estimated_total + "" + ".00");
}

//let totalamount=cart.reduce(function(acc,cv) {
//     return acc+Number(cv.price);
//    },0)

var checkout = document.getElementById("checkout");
checkout.addEventListener("click", checkoutfn);

function checkoutfn() {
  window.location.href = "checkout.html";
}
