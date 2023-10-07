import React from "react";

const Footer = () => {
  return (
    <footer className="section-p1">
      <div className="column">
        <img className="logo" src={require("../img1/logo.png")} alt="logo" />
        <h4>Contact</h4>
        <p>
          {" "}
          <strong>Adddress:</strong> 562 Wellington Road, Street 32, San
          Fransisco
        </p>
        <p>
          {" "}
          <strong>Phone:</strong> +01 2222 365 /(+91) 01 2345 6789
        </p>
        <p>
          {" "}
          <strong>Hours:</strong> 10:00 - 18:00, Mon - Sat{" "}
        </p>
        <div className="follow">
          <h4>Follow us </h4>
          <div className="icon">
            <i className="fab fa-facebook" />
            <i className="fab fa-twitter" />
            <i className="fab fa-instagram" />
            <i className="fab fa-pinterest-p" />
            <i className="fab fa-youtube" />
          </div>
        </div>
      </div>
      <div className="col">
        <h4>About</h4>
        <a href=" ">About us</a>
        <a href=" ">Delivery Information</a>
        <a href=" ">Privacy Policy</a>
        <a href=" ">Terms and Conditions</a>
        <a href=" ">Contact us</a>
      </div>
      <div className="col">
        <h4>My Account</h4>
        <a href=" ">Sign In</a>
        <a href=" ">View Cart</a>
        <a href=" ">My Wishlist</a>
        <a href=" ">Track My Orders</a>
        <a href=" ">Help</a>
      </div>
      <div className="col install">
        <h4>Install App</h4>
        <p>From Apple Store or Google Play</p>
        <div className="row">
          <img src={require("../img1/pay/app.jpg")} alt="App Store" />
          <img src={require("../img1/pay/play.jpg")} alt="Google Play" />
        </div>
        <p>Secured Payment Gateways</p>
        <img src={require("../img1/pay/pay.png")} alt="Payment Methods" />
      </div>
      <div className="copyright">
        <p>© 2023 - Manish</p>
      </div>
    </footer>
  );
};

export default Footer;
