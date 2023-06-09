import React from "react";
import Product from "./Product";

export default function ProductBox(props) {
  const products = props.products;
  // console.log("1", products)
  var myView = products.map((product) => (
    <li
      key={product.id}
      className="span3"
      style={{
        height: "380px",
        margin: "10px 5px",

        justifyContent: "space-between",
      }}
    >
      <Product product={product} />
    </li>
  ));
  return (
    <div className="well well-small">
      <h3>Our Products </h3>
      <div className="row-fluid">
        <ul className="thumbnails">{myView}</ul>
      </div>
    </div>
  );
}
