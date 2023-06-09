import React from "react";
import AppUrl from "../Api/AppUrl";
import { Link } from "react-router-dom";
import currency from "currency.js";
import { addToCart } from "../state/cartSlice";
import { useDispatch } from "react-redux";
export default function Product(props) {
  // console.log(props)
  var product = props.product;
  const dispatch = useDispatch();
  return (
    <div className="thumbnail" style={{ height: "100%" }}>
      {/* <a href="product_details.html" className="overlay">Pr</a> */}
      {/* <a className="zoomTool" href="product_details.html" title="add to cart" style={{display: 'none'}}><span className="icon-search" /> QUICK VIEW</a> */}
      <div style={{ height: "210px", objectFit: "cover" }}>
        <Link to={"/product/" + product.id}>
          <img
            src={
              AppUrl.ImageURL + product.attributes.image.data[0].attributes.url
            }
            alt="img"
            style={{ height: "100%", width: "100%" }}
          />
        </Link>
      </div>
      <div className="caption cntr">
        <Link to={"/product/" + product.id}>
          <p className="text-line-1">{product.attributes.productName}</p>
        </Link>
        <p>
          <strong>
            <span className="text-line-1">
              {currency(product.attributes.price, {
                symbol: "",
                separator: ".",
                decimal: ",",
              })
                .format()
                .replace(/(\.00$|,00$)/g, "")}
              đ
            </span>
          </strong>
        </p>
        <p>{product.attributes.category.data.attributes.categoryName}</p>
        <h4>
          <Link
            className="shopBtn"
            to="#st"
            title="add to cart"
            onClick={() =>
              dispatch(addToCart({ item: { ...product, count: 1 } }))
            }
          >
            Add to cart
          </Link>
        </h4>
        <div className="actionList">
          <a className="pull-left" href="#st">
            Add to Wish List
          </a>
          <a className="pull-left" href="#st">
            Add to Compare
          </a>
        </div>
        <br className="clr" />
      </div>
    </div>
  );
}
