import React from "react";
import { Link } from "react-router-dom";
import AppUrl from "../../../Api/AppUrl";
import currency from "currency.js";
import AdminCategoryDetail from "../category/AdminCategoryDetail";

export default function AdminProductItem(props) {
  var product = props.product;
  console.log(product);
  var stt = props.stt;
  var handleShow = props.handleShow;
  var handleDelete = props.handleDelete;
  var handlePublish = props.handlePublish;
  var myView =
    product.attributes.publishedAt === null ? (
      <input
        onClick={handlePublish}
        name={product.id}
        type="range"
        min="0"
        max="1"
        value="0"
      />
    ) : (
      <input
        onClick={handlePublish}
        name={product.id}
        type="range"
        min="0"
        max="1"
        value="1"
      />
    );
  // console.log(product)
  return (
    <>
      <tr className="even">
        <td>{stt}</td>
        <td
          className="sorting_1 dtr-control"
          style={{ width: "100px", height: "100px" }}
        >
          <img
            src={
              AppUrl.ImageURL + product.attributes.image.data[0].attributes.url
            }
            alt="product.productName"
            style={{ width: "100%", height: "100%" }}
          />
        </td>
        <td>{product.attributes.productName}</td>
        <td>
          <span>
            {currency(product.attributes.price, {
              symbol: "",
              separator: ".",
              decimal: ",",
            })
              .format()
              .replace(/(\.00$|,00$)/g, "")}
            đ
          </span>
        </td>
        <td>{myView}</td>
        <td>
          {/* <Link to={ '/admin/product/'+product.id }> */}
          <i
            className="icon-eye-open btn mx-1"
            style={{ color: "#02f24a" }}
            name={product.id}
            onClick={handleShow}
            data-toggle="modal"
            data-target="#modal-lg"
          />
          {/* </Link> */}
          
          <i
            className="icon-remove btn mx-1"
            style={{ color: "#f00a21" }}
            name={product.id}
            onClick={handleDelete}
          />

          <Link to={"/admin/product/edit/" + product.id}>
            <i className="icon-edit btn mx-1" name={product.id} />
          </Link>
        </td>
        <td>{product.id}</td>
      </tr>
    </>
  );
}
