function navbar() {
    return ` <!-- navbar starts -->
    <div id="navbar">
      <div id="heading">
        <div id="email_signup">
          <h6> <a class="join"" href="/login.html">EMAIL/SIGN UP</a>
          <div class="hover_div">
            
          </div>
          </h6>
        </div>
        <div id="name">
        <a href="index.html"> <img src="/images/1.png" alt=""></a>
         
        </div>
        <div id="login_div">
        <span> <a  class="join"" href="">JOIN" BBACCESS</a> </span>
            <span class="location_icon">
                <i class="fas fa-map-marker-alt"></i>
            </span>
            <span class="location_icon" id="login">
            <i class="far fa-user"></i>
            </span >
            <span class="location_icon" id="cartpage" >
              <i class="fas fa-shopping-bag"></i>
            </span>
        </div>
      </div>
<!-- 2nd div -->
      <div id="products">
        <span class="location_icon">
          <i class="fas fa-search"></i>
        </span>
        <input type="text"  placeholder=" SEARCH">

        <div id="product_names">
          <span class="products_heading"><a  class="join" href="/face.html">NEW</a></span>
          <span class="products_heading"> <a  class="join" href="/bestseller.html">BESTSELLER</a></span>
          <span class="products_heading"> <a  class="join" href="/face.html">FACE</a></span>
          <span class="products_heading"> <a  class="join" href="/makeup.html">MAKEUP</a></span>
          <span class="products_heading">  <a  class="join" href="/skincare.html">SKINCARE</a></span>
          <span class="products_heading"> <a  class="join" href="/virtual.html">VIRTUAL SERVICES</a></span>
          <span class="products_heading">  <a  class="join" href="/discover.html">DISCOVER</a></span>
        </div>

      </div>
    </div>`
}






function footer() {
  return `<div id="main_footer_div">


  <div id="main_info">
    <div class="one">
  <h5>NEED HELP?</h5>
  <br>
  <h6>Chat With An Artist</h6>
  <h6>Text An Artist</h6>
  <h6>Call Us (877)-310-1922</h6>
  <h6>Shipping And Return</h6>
  <h6>FAQS</h6>
  <h6>Careers</h6>
  <select id="select">
    <option value="CHOOSE LOCATION">CHOOSE LOCATION</option>
    <option value="INDIA">INDIA</option>
    <option value="AUSTRALIA">AUSTRALIA</option>
    <option value="ARGENTINA">ARGENTINA</option>
    <option value="CANADA">CANADA</option>
    <option value="MAINLAND CHAINA">MAINLAND CHAINA</option>
  </select>
  
  
    </div>
  
  
  
    <div>
      <h5>MY BOBBIE BROWN</h5>
  <br>
  <h6>BB Access</h6>
  <h6>My Account</h6>
  <h6>My Orders</h6>
  <h6>Shipping And Return</h6>
  <h6>Store Locator</h6>
  
    </div>
    <div>
      <input class="footer_input" type="text" placeholder="ENTER YOUR NAME">
      <BR></BR>
      <input class="footer_input" type="text" placeholder="ENTER YOUR MOBILE NUMBER">
      <br><br>
      <button class="sub_btn">SUBMIT</button>
      <img class="foot_img" src="/images/foot1.png" alt="">
    </div>
  </div>
  
  <hr style="color: blanchedalmond; border: 1px solid blanchedalmond ;">
  
  
  </div>
  `
}

export {navbar,footer} 