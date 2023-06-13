import React from "react";
import currency from "currency.js";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import AppUrl from "./../../Api/AppUrl";
import {
  removeFromCart,
  increaseCount,
  decreaseCount,
} from "../../state/cartSlice";
import { useDispatch } from "react-redux";
export default function CartMenu() {
  const dispatch = useDispatch();
  var cartItems = useSelector((state) => state.cart.items);
  const totalItems = cartItems.reduce((total, item) => {
    return total + item.count;
  }, 0);
  const total = cartItems.reduce((totalPrice, item) => {
    return totalPrice + item.attributes.price * item.count;
  }, 0);
  var myView = cartItems.map((item) => (
    <tr>
      <td>
        <img
          width={100}
          src={AppUrl.ImageURL + item.attributes.image.data[0].attributes.url}
          alt="img1"
        />
      </td>
      <td>
        {item.attributes.productName}
        <br />
        Category : {item.attributes.category.data.attributes.categoryName}
        <br />
        Brand : {item.attributes.brand.data.attributes.brandName}
      </td>
      <td> - </td>
      <td>
        <span className="shopBtn">
          <span className="icon-ok" />
        </span>
      </td>
      <td>
        {currency(item.attributes.price, {
          symbol: "",
          separator: ".",
          decimal: ",",
        })
          .format()
          .replace(/(\.00$|,00$)/g, "")}
        đ
      </td>
      <td>
        <input
          className="span1"
          style={{ maxWidth: 34 }}
          placeholder={1}
          id="appendedInputButtons"
          size={16}
          type="text"
          value={item.count}
        />
        <div className="input-append">
          <button
            className="btn btn-mini"
            type="button"
            onClick={() => {
              if (item.count > 1) {
                dispatch(decreaseCount({ id: item.id }));
              }
            }}
            disabled={item.count === 1}
          >
            -
          </button>
          <button
            className="btn btn-mini"
            type="button"
            onClick={() => dispatch(increaseCount({ id: item.id }))}
          >
            +
          </button>
          <button
            className="btn btn-mini btn-danger"
            type="button"
            onClick={() => dispatch(removeFromCart({ id: item.id }))}
          >
            <span className="icon-remove" />
          </button>
        </div>
      </td>
      <td>
        {currency(item.attributes.price * item.count, {
          symbol: "",
          separator: ".",
          decimal: ",",
        })
          .format()
          .replace(/(\.00$|,00$)/g, "")}
        đ
      </td>
    </tr>
  ));

  return (
    <div className="well well-small">
      <h1>
        Check Out
        <small className="pull-right">
          
          {totalItems} Items are in the cart
        </small>
      </h1>
      <hr className="soften" />
      <table className="table table-bordered table-condensed">
        <thead>
          <tr>
            <th>Image</th>
            <th>Description</th>
            <th> Ref. </th>
            <th>Avail.</th>
            <th>Unit price</th>
            <th>Qty </th>
            <th>Total</th>
          </tr>
        </thead>
        <tbody>
          {myView}
          <tr>
            <td colSpan={6} className="alignR">
              Total products:
            </td>
            <td>
              {currency(total, {
                symbol: "",
                separator: ".",
                decimal: ",",
              })
                .format()
                .replace(/(\.00$|,00$)/g, "")}
              đ
            </td>
          </tr>
        </tbody>
      </table>
      <br />
      

      <a href="products.html" className="shopBtn btn-large">
        <span className="icon-arrow-left" /> Continue Shopping
      </a>
      <a href="login.html" className="shopBtn btn-large pull-right">
        Next <span className="icon-arrow-right" />
      </a>
    </div>
  );
}
