import React from "react";
import currency from "currency.js";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";







export default function AppBar() {
  var cartItems = useSelector((state) => state.cart.items);
  // console.log(cartItems)
  const totalItems = cartItems.reduce((total, item) => {
    return total + item.count;
  }, 0);

  const total = cartItems.reduce((totalPrice, item) => {
    return totalPrice + item.attributes.price * item.count;
  }, 0)
  return (
    <div className="navbar navbar-inverse navbar-fixed-top">
      <div className="topNav">
        <div className="container">
          <div className="alignR">
            <div className="pull-left socialNw">
              <a href="#st">
                <span className="icon-twitter" />
              </a>
              <a href="#st">
                <span className="icon-facebook" />
              </a>
              <a href="#st">
                <span className="icon-youtube" />
              </a>
              <a href="#st">
                <span className="icon-tumblr" />
              </a>
            </div>

            <Link to="/">
              <span className="icon-home" /> Home
            </Link>
            <a href="#st">
              <span className="icon-user" /> My Account
            </a>
            <a href="register.html">
              <span className="icon-edit" /> Free Register{" "}
            </a>
            <a href="contact.html">
              <span className="icon-envelope" /> Contact us
            </a>
            <Link to="/cart">
              <span className="icon-shopping-cart" /> {totalItems} Item(s) -{" "}
              <span className="badge badge-warning">
                {" "}
                {currency(total, {
                  symbol: "",
                  separator: ".",
                  decimal: ",",
                })
                  .format()
                  .replace(/(\.00$|,00$)/g, "")}
                đ
              </span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
